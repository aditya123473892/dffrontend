import io, { Socket } from "socket.io-client";

// Define types for the data we expect to handle in various event
type MessageData = {
  sender: string;
  receiver: string;
  message?: string;
  media?: any[];
  isRead: boolean;
};

type ChatHistory = {
  messageId: string;
  sender: string;
  receiver: string;
  message: string;
  timestamp: string;
  media?: any[];
  isRead: boolean;
};

type UnreadMessageCount = {
  count: number;
};

type TypingData = {
  sender: string;
  receiver: string;
};

type GroupMessageData = {
  sender: string;
  groupId: string;
  message?: string;
  media?: any[];
  isRead: boolean;
};

type GroupChatHistory = {
  messageId: string;
  sender: string;
  groupId: string;
  message: string;
  timestamp: string;
  media?: any[];
  isRead: boolean;
};

const apiBaseUrl = process.env.NEXT_PUBLIC_BACKEND_URL?.replace(/\/api\/?$/, "");
const socketUrl =
  process.env.NEXT_PUBLIC_SOCKET_URL || apiBaseUrl || "http://localhost:9000";

const socket: Socket = io(socketUrl, {
  autoConnect: false,
  transports: ["websocket", "polling"],
});

const connectSocket = (userId: string, id?: string): void => {
  // FIX: setUserRoom(userId) first with the plain user id so the backend
  // userSockets map is keyed by a real Mongo ObjectId (used by
  // handleDisconnect -> new ObjectId()). Composite "<userId>-<id>" rooms
  // are joined after, room-only, and are not valid ObjectIds.
  socket.io.opts.query = { userId };

  if (!socket.connected) {
    socket.connect();
  }

  socket.emit("setUserRoom", userId);
  if (id) {
    socket.emit("setUserRoom", `${userId}-${id}`);
  }
};

const disconnectSocket = (): void => {
  socket.disconnect();
};

const sendMessage = (
  sender: string,
  receiver: string,
  message?: string,
  media?: any[],
  type?: string,
  chatType?: String
): void => {
  socket.emit("sendMessage", {
    sender,
    receiver,
    message,
    media,
    type,
    chatType,
    isRead: false,
  });
};

const connectGroupSocket = (userId: string, groupId: string): void => {
  socket.io.opts.query = { userId };

  if (!socket.connected) {
    socket.connect();
  }

  socket.emit("joinGroup", groupId);
};

const sendGroupMessage = (
  sender: string,
  groupId: string,
  message?: string,
  media?: any[],
  type?: string
): void => {
  socket.emit("sendGroupMessage", {
    sender,
    groupId,
    message,
    media,
    type,
    isRead: false,
  });
};

const getGroupChatHistory = (
  groupId: string,
  callback: (chatHistory: GroupChatHistory[]) => void
): void => {
  socket.emit("getGroupChatHistory", { groupId });
  socket.off("groupChatHistory"); // Clean up previous listener
  socket.on("groupChatHistory", (chatHistory: GroupChatHistory[]) => {
    callback(chatHistory);
  });
};

const onReceiveGroupMessage = (callback: {
  (newMessage: any): void;
  (arg0: any): void;
}) => {
  socket.off("receiveGroupMessage");
  socket.on("receiveGroupMessage", (message) => {
    callback(message);
  });
};

const cleanupGroupOnDisconnect = (): void => {
  socket.off("receiveGroupMessage");
  socket.off("groupChatHistory");
};

const getChatHistory = (
  user1: string,
  user2: string,
  callback: (chatHistory: ChatHistory[]) => void
): void => {
  socket.emit("getChatHistory", { user1, user2 });
  socket.off("chatHistory"); // Clean up previous listener
  socket.on("chatHistory", (chatHistory: ChatHistory[]) => {
    callback(chatHistory);
  });
};

const updateMessage = (
  messageId: string,
  userId: string,
  newMessage: string
): void => {
  socket.emit("updateMessage", { messageId, userId, newMessage });
};

const deleteMessage = (messageId: string, userId: string): void => {
  socket.emit("deleteMessage", { messageId, userId });
};

const markAsRead = (user1: string, user2: string): void => {
  socket.emit("markAsRead", { user1, user2 });
};

const getUnreadCount = (
  userId: string,
  callback: (data: UnreadMessageCount) => void
): void => {
  socket.emit("getUnreadCount", { userId });
  socket.off("unreadMessageCount");
  socket.on("unreadMessageCount", (data: UnreadMessageCount) => {
    callback(data);
  });
};

const typing = (sender: string, receiver: string): void => {
  socket.emit("typing", { sender, receiver });
};

const stopTyping = (sender: string, receiver: string): void => {
  socket.emit("stopTyping", { sender, receiver });
};

const onReceiveMessage = (callback: {
  (newMessage: any): void;
  (arg0: any): void;
}) => {
  socket.off("receiveMessage");
  socket.on("receiveMessage", (message) => {
    callback(message);
  });
};

const onTyping = (callback: (data: TypingData) => void): void => {
  socket.on("typing", (data: TypingData) => {
    callback(data);
  });
};

const onStopTyping = (callback: (data: TypingData) => void): void => {
  socket.on("stopTyping", (data: TypingData) => {
    callback(data);
  });
};

const onMessageUpdated = (
  callback: (updatedMessage: MessageData) => void
): void => {
  socket.on("messageUpdated", (updatedMessage: MessageData) => {
    callback(updatedMessage);
  });
};

const onMessageDeleted = (callback: (messageId: string) => void): void => {
  socket.on("messageDeleted", (messageId: string) => {
    callback(messageId);
  });
};

const onMessagesRead = (callback: (userId: string) => void): void => {
  socket.on("messagesRead", (data: { userId: string }) => {
    callback(data.userId); // Update UI when messages are marked as read
  });
};

// Notify when a message is read (triggered when user views message)
const markMessageAsRead = (messageId: string): void => {
  socket.emit("markMessageAsRead", { messageId });
};

// Cleanup function to remove all event listeners
const cleanupOnDisconnect = (): void => {
  socket.off("receiveMessage");
  socket.off("chatHistory");
  socket.off("typing");
  socket.off("stopTyping");
  socket.off("unreadMessageCount");
  socket.off("messageUpdated");
  socket.off("messageDeleted");
  socket.off("messagesRead");
};

export {
  socket,
  connectSocket,
  disconnectSocket,
  sendMessage,
  getChatHistory,
  updateMessage,
  deleteMessage,
  markAsRead,
  getUnreadCount,
  typing,
  stopTyping,
  onReceiveMessage,
  onTyping,
  onStopTyping,
  onMessageUpdated,
  onMessageDeleted,
  onMessagesRead,
  markMessageAsRead,
  cleanupOnDisconnect,
  connectGroupSocket,
  sendGroupMessage,
  getGroupChatHistory,
  onReceiveGroupMessage,
  cleanupGroupOnDisconnect,
};
