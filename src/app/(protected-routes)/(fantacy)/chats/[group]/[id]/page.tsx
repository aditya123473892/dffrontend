"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { FaEdit, FaTimes, FaTrashAlt } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai"; // Optional: You can use any icon library you prefer
import { format, isToday, isYesterday, isValid } from "date-fns";
import {
  connectSocket,
  sendMessage,
  getChatHistory,
  updateMessage,
  deleteMessage,
  markAsRead,
  socket,
  sendGroupMessage,
  connectGroupSocket,
  getGroupChatHistory,
} from "./websocketService"; // Importing services
import { getApi } from "@/common/apis/main.api";
import axios from "axios";
import { TbPlayerPauseFilled, TbPlayerPlayFilled } from "react-icons/tb";
import ReactPlayer from "react-player";
import { usePathname } from "next/navigation";

type Props = {
  params: {
    group: string;
    id: string;
  };
};
type PlayerRef = React.RefObject<any>; // Replace 'any' with the actual type of the player (e.g., VideoPlayer type if available)

const ChatsMessagePage = ({ params: { group, id } }: Props) => {
  const [messages, setMessages]: any = useState<any[]>([]);
  console.log("🚀 ~ ChatsMessagePage ~ messages:", messages);
  const [newMessage, setNewMessage]: any = useState("");
  const [file, setFile]: any = useState<File | null>(null);
  const [showEmojiPicker, setShowEmojiPicker]: any = useState(false);
  const [isUserScrolling, setIsUserScrolling]: any = useState(false);
  const [editingMessageId, setEditingMessageId]: any = useState<string | null>(
    null
  );
  const [editedMessage, setEditedMessage]: any = useState<string>("");
  const [contextMenuMessageId, setContextMenuMessageId]: any = useState<
    string | null
  >(null);
  const [contextMenuPosition, setContextMenuPosition]: any = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [isAtBottom, setIsAtBottom]: any = useState(true);
  const [userData, setUserData]: any = useState<any | null>(null);
  const [error, setError]: any = useState("");
  const [followingsRequests, setFollowingsRequests]: any = useState<any[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const contextMenuRef = useRef<HTMLDivElement>(null);
  const token = localStorage.getItem("accessToken");
  const pathname = usePathname();
  const chatType = group || pathname.split("/")[2];
  const isGroupChat = chatType === "group";
  const isAdminChat = chatType === "admin";
  console.log(chatType, "chatType");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (token) {
          const response = await getApi({ url: "/auth/me" });
          setUserData(response.data);
        } else {
          setError("Token not found");
        }
      } catch (err) {
        setError("Error fetching user data");
        console.error(err);
      }
    };

    fetchUserData();
  }, []);

  const userId = useMemo(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }, []);

  useEffect(() => {
    if (!userId || !id) return;
    setMessages([]);

    const handleNewMessage = (newMessage: any) => {
      setMessages((prevMessages: any[]) => {
        const messageExists = prevMessages.some(
          (msg) => msg._id === newMessage._id
        );
        if (!messageExists) {
          return [...prevMessages, newMessage];
        }
        return prevMessages;
      });

      if (isAtBottom) {
        setTimeout(() => {
          messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    };

    if (isGroupChat) {
      connectGroupSocket(userId._id, id);
      getGroupChatHistory(id, (chatHistory: any[]) => {
        setMessages(chatHistory);
      });
      socket.on("receiveGroupMessage", handleNewMessage);
    } else {
      connectSocket(userId._id, id);
      getChatHistory(userId._id, id, (chatHistory: any[]) => {
        setMessages(chatHistory);
      });
      socket.on("receiveMessage", handleNewMessage);
    }

    return () => {
      socket.off("receiveGroupMessage", handleNewMessage);
      socket.off("receiveMessage", handleNewMessage);
    };
  }, [userId, id, isAtBottom, isGroupChat]);

  const handleSendMessage = () => {
    if (newMessage.trim() || file) {
      const messageData = {
        sender: userId._id,
        receiver: id,
        message: newMessage.trim(),
        media: file ? [file] : [],
      };
      let type = "";
      if (file) {
        const fileType = file.type.split("/")[0];
        if (fileType === "image") {
          type = "image";
        } else if (fileType === "video") {
          type = "video";
        } else {
          type = "text";
        }
      }
      if (isGroupChat) {
        sendGroupMessage(
          userId._id,
          id,
          newMessage.trim(),
          messageData.media,
          type
        );
      } else if (isAdminChat) {
        sendMessage(
          userId._id,
          id,
          newMessage.trim(),
          messageData.media,
          type,
          "chatWithGod"
        );
      } else {
        sendMessage(userId._id, id, newMessage.trim(), messageData.media, type);
      }
      setNewMessage("");
      setFile(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };


  const [followRequests, setFollowRequests] = useState<any[]>([]);
  const fetchFollowRequests = async () => {
    try {
       if (token) {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/follow/followers`, {
             headers: {
                Authorization: `Bearer ${token}`,
             },
          });
          setFollowRequests(response.data.data.followers); // Set the follow requests data 
       }
    } catch (err) {
       console.error(err); // Handle error
    }
 };

  const fetchFollowingsRequests = async () => {
    try {
      if (token) {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/follow/following`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setFollowingsRequests(response.data.data.following);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFollowingsRequests();
    fetchFollowRequests()
  }, [userId, id]);

  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;

    if (selectedFile) {
      // const fileType = selectedFile.type;

      // Check for video and image types
      // const allowedTypes = ["image/jpeg", "image/png", "image/gif", "video/mp4", "video/avi", "video/mkv"];

      // if (allowedTypes.includes(fileType)) {
      setFile(selectedFile);
      setErrorMessage(""); // Clear any previous error message
      // } else {
      // setErrorMessage("Unsupported file type. Please upload an image or video.");
      // }
    }
  };

  const [isPlaying, setIsPlaying] = useState<boolean[]>([]); // Track playing state of each video
  const playerRefs = useRef<ReactPlayer[]>([]); // Array of refs for video players

  const handlePlayPause = useCallback(
    (index: number) => {
      const newState = [...isPlaying];
      newState[index] = !newState[index]; // Toggle play/pause state for the specific video

      // Ensure that the ref is set before accessing it
      const player = playerRefs.current[index];

      if (player) {
        if (newState[index]) {
          player.seekTo(0); // Start from the beginning when playing
          player.getInternalPlayer().play(); // Play the video
        } else {
          player.getInternalPlayer().pause(); // Pause the video
        }
      }

      setIsPlaying(newState); // Update the playing state
    },
    [isPlaying]
  );
  const handleEmojiSelect = (emoji: any) => {
    setNewMessage(newMessage + emoji.native);
    setShowEmojiPicker(false);
  };

  // Scroll logic to auto-scroll to the bottom
  useEffect(() => {
    if (messagesEndRef.current && isAtBottom && !isUserScrolling) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isAtBottom, isUserScrolling]);

  const handleScroll = () => {
    const container = messagesContainerRef.current;
    if (container) {
      const isBottom =
        container.scrollHeight === container.scrollTop + container.clientHeight;
      setIsUserScrolling(!isBottom);

      if (isBottom) {
        markAsRead(userId._id, id); // Mark as read when scrolled to bottom
      }
      setIsAtBottom(isBottom);
    }
  };

  // Formatting date
  const formatMessageDate = (sentAt: string) => {
    const messageDate = new Date(sentAt);
    if (!isValid(messageDate)) {
      return "";
    }

    if (isToday(messageDate)) {
      return "Today";
    } else if (isYesterday(messageDate)) {
      return "Yesterday";
    } else {
      return format(messageDate, "MMMM dd, yyyy");
    }
  };

  const groupMessagesByDate = () => {
    const groupedMessages: any = [];
    let currentDate: string | null = null;

    messages.forEach((message: { sentAt: string }) => {
      const messageDate = formatMessageDate(message.sentAt);
      if (messageDate !== currentDate) {
        groupedMessages.push({
          date: messageDate,
          messages: [message],
        });
        currentDate = messageDate;
      } else {
        groupedMessages[groupedMessages.length - 1].messages.push(message);
      }
    });

    return groupedMessages;
  };

  const handleEditMessage = (messageId: string, currentMessage: string) => {
    setEditingMessageId(messageId);
    setEditedMessage(currentMessage);
  };

  const handleSaveEdit = () => {
    if (editedMessage.trim()) {
      const updatedMessage = {
        messageId: editingMessageId,
        userId: userId._id,
        newMessage: editedMessage.trim(),
      };

      updateMessage(
        updatedMessage.messageId,
        updatedMessage.userId,
        updatedMessage.newMessage
      );
      setMessages((prevMessages: any[]) =>
        prevMessages.map((msg) =>
          msg._id === editingMessageId
            ? { ...msg, message: updatedMessage.newMessage }
            : msg
        )
      );
      setEditingMessageId(null);
      setEditedMessage("");
    }
  };

  const handleDeleteMessage = (messageId: string) => {
    deleteMessage(messageId, userId._id);
    setMessages((prevMessages: any[]) =>
      prevMessages.filter((msg) => msg._id !== messageId)
    );
  };

  // Handle context menu
  const handleContextMenu = (e: React.MouseEvent, messageId: string) => {
    e.preventDefault();
    setContextMenuMessageId(messageId);

    const messageElement = e.currentTarget as HTMLDivElement;
    const rect = messageElement.getBoundingClientRect();

    setContextMenuPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
  };

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [mediaType, setMediaType] = useState(""); // Track media type (image or video)
  const [mediaUrl, setMediaUrl] = useState("");

  // Hide context menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(e.target as Node)
      ) {
        setContextMenuMessageId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const groupedMessages = groupMessagesByDate();

  console.log(groupedMessages, "groupedMessages");

  const [GroupRequests, setGroupRequests] = useState<any[]>([]);
  const fetchGroupRequests = async () => {
    try {
      if (token) {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/groups/my-groups`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setGroupRequests(response.data.data); // Set the follow requests data
      }
    } catch (err) {
      console.error(err); // Handle error
    }
  };

  useEffect(() => {
    fetchGroupRequests();
  }, [token]);

  console.log(newMessage, "newMessagenewMessage");
  console.log(messages, "messagesmessagesaaaaaaaaaaaaaaaa");

  const [randomAdmin, setRandomAdmin]: any = useState<any[]>([]);

  const fetchRandomAdmin = async () => {
    try {
      if (token) {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/random-online-admin`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRandomAdmin(response.data.admin); // Set the follow requests data
      }
    } catch (err) {
      console.error(err); // Handle error
    }
  };

  useEffect(() => {
    fetchRandomAdmin();
  }, [token]);

 

  const [selectedUserOrGroup, setSelectedUserOrGroup] = useState<any>(null);

  useEffect(() => {
    const foundUser = followingsRequests.find(
      (user: { _id: string }) => user._id === id
    );

    const foundUser2 = followRequests.find(
      (user: { _id: string }) => user._id === id
    );
    const foundGroup = GroupRequests.find((group) => group._id === id);

    const foundAdmin =
      randomAdmin && randomAdmin._id === id ? randomAdmin : null;

    setSelectedUserOrGroup(foundUser || foundGroup || foundAdmin || foundUser2);
  }, [followingsRequests,followRequests, GroupRequests, fetchRandomAdmin, id]);

  const renderUserOrGroupDetails = () => {
    if (!selectedUserOrGroup) {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="relative">
            <img
              src={selectedUserOrGroup?.avatar || "/images/profile.png"}
              alt={selectedUserOrGroup?.displayname}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
              className="border border-[#b8bdc7]"
            />
            <span className="top-0 left-9 absolute w-3.5 h-3.5 bg-[#31c48d] border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>
          <div>
            <h3>{selectedUserOrGroup?.displayname}</h3>
            <div className="text-[12px] text-[#414a59]">Online</div>
          </div>
        </div>
      );
    }

    // Check if it's a group
    if (selectedUserOrGroup.name) {
      // This is a group
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="relative">
            <img
              src={selectedUserOrGroup.groupIcon || "/images/profile.png"}
              alt={selectedUserOrGroup.name}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            <span className="top-0 left-9 absolute w-3.5 h-3.5 bg-[#31c48d] border-2 border-blue-500 dark:border-gray-800 rounded-full"></span>
          </div>
          <div>
            <h3>{selectedUserOrGroup.name}</h3>
            <div className="text-[12px] text-[#414a59]">Group</div>
          </div>
        </div>
      );
    } else if (selectedUserOrGroup._id) {
      // This is a user or admin
      const isOnline = selectedUserOrGroup; // Check if the user/admin is online

      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="relative">
            <img
              src={selectedUserOrGroup.avatar || "/images/profile.png"}
              alt={
                selectedUserOrGroup.displayname || selectedUserOrGroup.username
              }
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
              className="border border-[#b8bdc7]"
            />
            <span
              className={`top-0 left-9 absolute w-3.5 h-3.5 ${
                isOnline ? "bg-[#31c48d]" : "bg-[#f44336]"
              } border-2 border-white dark:border-gray-800 rounded-full`}
            ></span>
          </div>
          <div>
            <h3>
              {selectedUserOrGroup.displayname || selectedUserOrGroup.username}
            </h3>
            <div className="text-[12px] text-[#414a59]">
              {isOnline ? "Online" : "Offline"}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="relative">
          <img
            src={selectedUserOrGroup.avatar || "/images/profile.png"}
            alt={selectedUserOrGroup.displayname}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
            className="border border-[#b8bdc7]"
          />
          <span className="top-0 left-9 absolute w-3.5 h-3.5 bg-[#31c48d] border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        <div>
          <h3>{selectedUserOrGroup.displayname}</h3>
          <div className="text-[12px] text-[#414a59]">Online</div>
        </div>
      </div>
    ); // In case no valid data is found
  };

  return (
    <div
      className="bg-[#F6F6F6] flex flex-col"
      style={{ height: "calc(100vh - 73px)" }}
    >
      <div className="flex items-center gap-3 p-2 border border-[#caced6]">
        {/* {groupedMessages.length === 0 ? ( */}
        {/* // followingsRequests.filter((user: { _id: string; }) => user._id === id).map((user: any) => ( */}
        {renderUserOrGroupDetails()}
        {/* <div key={selectedUser?._id} style={{ display: "flex", alignItems: "center" }}>
              <div className="relative">
                <img
                  src={selectedUser?.avatar || "/images/profile.png"}
                  alt={selectedUser?.displayname}
                  style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" }}
                />
                <span className="top-0 left-9 absolute w-3.5 h-3.5 bg-[#31c48d] border-2 border-white dark:border-gray-800 rounded-full"></span>
              </div>
              <div>
                <h3>{selectedUser?.displayname || "UnKnown"}</h3>
                <div className="text-[12px] text-[#414a59]">Online</div>
              </div>
            </div> */}
        {/* ))
        ) : ( */}
        {/* GroupRequests.filter((user: { _id: string; }) => user._id === id).map((user: any) => ( */}
        {/* <div key={user._id} style={{ display: "flex", alignItems: "center" }}>
              <div className="relative">
                <img
                  src={user.avatar || "/images/profile.png"}
                  alt={user.displayname}
                  style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" }}
                />
                <span className="top-0 left-9 absolute w-3.5 h-3.5 bg-[#31c48d] border-2 border-white dark:border-gray-800 rounded-full"></span>
              </div>
              <div>
                <h3>{user.name}</h3>
                <div className="text-[12px] text-[#414a59]">Online</div>
              </div>
            </div> */}
        {/* ))
        )} */}
      </div>
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-scroll  bg-white"
        onScroll={handleScroll}
        style={{ maxHeight: "calc(100vh - 150px)", overflowY: "auto" }}
      >
        {groupedMessages.map((group: any, index: any) => (
          <div key={index}>
            <div className="relative">
              <div className="sticky top-0 bg-white shadow-custom w-fit p-2 rounded-lg m-auto text-[10px] text-gray-500 flex justify-center my-2 z-10">
                {group.date}
              </div>
              {group.messages
                .filter(
                  (message: any, index: any, self: any) =>
                    index ===
                    self.findIndex((msg: any) => msg._id === message._id)
                )
                .map((message: any, msgIndex: any) => {
                  const isSender = message.sender === userId?._id;
                  const hasMedia = message.media && message.media.length > 0;
                  const messageBubbleColor = hasMedia
                    ? ""
                    : isSender
                    ? "bg-[#8773ff] rounded-bl-full  rounded-tr-full rounded-br-full"
                    : "bg-[#615ef0] rounded-br-full rounded-bl-full rounded-tl-full";
                  const formattedTime = message.sentAt
                    ? format(new Date(message.sentAt), "hh:mm a")
                    : "";
                  const receiver = followingsRequests.find(
                    (user: { _id: any }) => user._id === message.sender
                  );

                  return (
                    <div
                      key={msgIndex}
                      className={`message p-3 my-2 rounded-lg text-black flex ${
                        isSender
                          ? "justify-end ml-auto"
                          : "justify-start mr-auto"
                      }`}
                      onContextMenu={(e) =>
                        isSender && handleContextMenu(e, message._id)
                      }
                    >
                      {!isSender && (
                        <div className="flex items-end mr-2">
                          <img
                            src={receiver?.avatar || "/images/profile.png"}
                            alt="Receiver Avatar"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                      )}

                      <div
                        className={`px-4 py-2 text-white w-fit  flex gap-4 items-end relative ${messageBubbleColor}`}
                      >
                        {message.message && !hasMedia && (
                          <p>{message.message}</p>
                        )}

                        {/* Conditionally render image or video with blue border and smaller size */}
                        {hasMedia &&
                          message.type === "image" &&
                          message.media.map((media: any, idx: any) => (
                            <div
                              key={idx}
                              className="media-item border-2 border-blue-500 p-1 rounded-lg mb-2"
                            >
                              <img
                                src={media.url}
                                alt="media"
                                className="w-32 h-32 object-cover rounded-md cursor-pointer"
                                onClick={() => {
                                  setIsFullScreen(true);
                                  setMediaType("image");
                                  setMediaUrl(media.url);
                                }}
                              />
                              <span className="text-black text-xs justify-end flex">
                                {formattedTime}
                              </span>
                            </div>
                          ))}

                        {hasMedia &&
                          message.type === "video" &&
                          message.media.map((media: any, idx: any) => (
                            <div
                              key={idx}
                              className="media-item border-2 border-blue-500 p-1 rounded-lg mb-2"
                            >
                              <div
                                className="relative w-32 h-32 mb-4 mt-3 cursor-pointer"
                                onClick={() => {
                                  setIsFullScreen(true);
                                  setMediaType("video");
                                  setMediaUrl(media.url);
                                }}
                              >
                                <ReactPlayer
                                  url={media.url}
                                  width="128px"
                                  height="128px"
                                  playing={isPlaying[index]}
                                  controls={false}
                                  config={{
                                    file: {
                                      attributes: {
                                        controlsList:
                                          "nodownload nofullscreen noremoteplayback",
                                      },
                                    },
                                  }}
                                />
                                <div className="absolute inset-0 flex justify-center items-center">
                                  <button
                                    className="bg-blue-600 text-white p-4 rounded-full opacity-75 hover:opacity-100"
                                    onClick={() => handlePlayPause(index)}
                                  >
                                    {isPlaying[index] ? (
                                      <TbPlayerPauseFilled size={40} />
                                    ) : (
                                      <TbPlayerPlayFilled
                                        size={40}
                                        className="text-blue-500 bg-white w-12 h-12 p-1 rounded-full"
                                      />
                                    )}
                                  </button>
                                </div>
                              </div>
                              <span className="text-black text-xs justify-end flex">
                                {formattedTime}
                              </span>
                            </div>
                          ))}

                        {/* If both image and video are present */}
                        {hasMedia &&
                          message.type === "both" &&
                          message.media.map((media: any, idx: any) => (
                            <div
                              key={idx}
                              className="media-item border-4 border-blue-500 p-1 rounded-lg mb-2"
                            >
                              {media.type === "image" && (
                                <img
                                  src={media.url}
                                  alt="media"
                                  className="w-32 h-32 object-cover rounded-md"
                                />
                              )}
                              {media.type === "video" && (
                                <div className="relative w-32 h-32 mb-4 mt-3">
                                  <ReactPlayer
                                    ref={(el) => {
                                      if (el) {
                                        playerRefs.current[index] = el;
                                      }
                                    }}
                                    url={media.url}
                                    width="128px"
                                    height="128px"
                                    playing={isPlaying[index]}
                                    controls={false}
                                    config={{
                                      file: {
                                        attributes: {
                                          controlsList:
                                            "nodownload nofullscreen noremoteplayback",
                                        },
                                      },
                                    }}
                                  />
                                </div>
                              )}
                            </div>
                          ))}

                        <div className="text-gray-500 flex gap-3 text-[10px] mt-2">
                          <span>{formattedTime}</span>
                          {isSender && (
                            <>
                              {message.isRead ? (
                                <IoCheckmarkDone size={14} />
                              ) : (
                                <IoMdCheckmark size={14} />
                              )}
                            </>
                          )}
                        </div>

                        {isSender && contextMenuMessageId === message._id && (
                          <div
                            ref={contextMenuRef}
                            className="absolute"
                            style={{
                              top: "50px",
                              right: 0,
                              backgroundColor: "white",
                              border: "1px solid #ccc",
                              borderRadius: "8px",
                              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                              zIndex: 10,
                            }}
                          >
                            <button
                              onClick={() =>
                                handleEditMessage(message._id, message.message)
                              }
                              className="p-2 text-blue-500 flex items-center gap-2 hover:bg-gray-100"
                            >
                              <FaEdit /> Edit
                            </button>
                            <button
                              onClick={() => handleDeleteMessage(message._id)}
                              className="p-2 text-blue-500 flex items-center gap-2 hover:bg-gray-100"
                            >
                              <FaTrashAlt /> Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}

        {isFullScreen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={() => setIsFullScreen(false)} // Close fullscreen on click
          >
            <div className="absolute top-4 right-4">
              {/* Close Icon */}
              <button
                onClick={() => setIsFullScreen(false)}
                className="text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
              >
                <FaTimes />
              </button>
            </div>

            {mediaType === "image" ? (
              <img
                src={mediaUrl}
                alt="Full-screen media"
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div className="relative">
                <ReactPlayer
                  url={mediaUrl}
                  width="80vw" // Use larger size for fullscreen
                  height="80vh"
                  playing={true}
                  controls={true}
                />
              </div>
            )}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 bg-white">
        {editingMessageId ? (
          <div className="flex gap-3">
            <textarea
              className="flex-1 p-2 rounded-md border border-gray-300"
              placeholder="Edit message"
              value={editedMessage}
              onChange={(e) => setEditedMessage(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white p-2 rounded-md"
              onClick={handleSaveEdit}
            >
              Save
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <textarea
              className="flex-1 p-2 rounded-md border border-gray-300"
              placeholder="Type a message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              className="bg-blue-500 text-white p-2 rounded-md"
              onClick={handleSendMessage}
            >
              Send
            </button>
            <div>
              <div className="relative items-center flex">
                {/* Hidden file input */}
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="fileInput"
                />

                <label
                  htmlFor="fileInput"
                  className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <AiOutlinePlus className="text-xl" />
                </label>

                <button
                  className="bg-gray-300 text-black p-2 rounded-md"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  😊
                </button>
              </div>

              {errorMessage && <p className="text-red-500">{errorMessage}</p>}

              {file && (
                <div>
                  <p>Selected File: {file.name}</p>
                  {file.type.startsWith("video/") && (
                    <video width="320" height="240" controls>
                      <source
                        src={URL.createObjectURL(file)}
                        type={file.type}
                      />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {file.type.startsWith("image/") && (
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Selected"
                      width="320"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {showEmojiPicker && (
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10">
            <Picker onSelect={handleEmojiSelect} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatsMessagePage;
