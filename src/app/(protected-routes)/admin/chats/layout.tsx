"use client"; 

import Link from "next/link";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { connectSocket, disconnectSocket, getUnreadCount, socket } from "../../(fantacy)/chats/[group]/[id]/websocketService";
import { getApi } from "@/common/apis/main.api";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { MdCreateNewFolder } from "react-icons/md";
import UploadPost from "./createGroup";
import { IoCloseOutline } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";


type Props = {
   params: {
      id: string;
   };
};

const ChatLayout = ({ children }: { children: ReactNode }) => {
   const [query, setQuery] = useState("");
   const [unreadData, setUnreadData]: any = useState([]);
   const [activeChat, setActiveChat] = useState<string | null>(null); // State to track the active chat
      const userId = useMemo(() => {
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user) : null;
   }, []);

   // Handle search input change
   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
   };

   // Handle chat click (set as active)
   const handleChatClick = (chatId: string) => {
      setActiveChat(chatId); // Set the clicked chat as active
      localStorage.setItem("highlightedChat", chatId); // Store the highlighted chat in localStorage
   };

   const hide = localStorage.getItem("highlightedChat");
 
   const groups = [
      { id: "vikasGroup", name: "Vikas Group" },
      { id: "shashankdGroup", name: "Shashank Group" },
      { id: "alanwalkerGroup", name: "Alan Walker Group" },
      { id: "johnchenGroup", name: "Jhon Chen Group" }
   ];

   const token = localStorage.getItem("accessToken");

   useEffect(() => {
      if (!userId) return;
      connectSocket(`${userId._id}`);
      return () => {
         disconnectSocket();
      };
   }, [userId]);

   useEffect(() => {
      getUnreadCount(userId._id, setUnreadData);
   }, [userId]);

   useEffect(() => {
      socket.on('unreadData', (data) => {
         setUnreadData(data)
      });
      return () => {
         socket.off('unreadData');
      };
   }, []);

   const [followRequests, setFollowRequests] = useState<any[]>([]);
   const [followingsRequests, setFollowingsRequests] = useState<any[]>([]);

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
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/follow/following`, {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });
            setFollowingsRequests(response.data.data.following); // Set the follow requests data
         }
      } catch (err) {
         console.error(err); // Handle error
      }
   };

   useEffect(() => {
      fetchFollowingsRequests()
      fetchFollowRequests();
   }, [token]);

   const [GroupRequests, setGroupRequests] = useState<any[]>([]);
   const fetchGroupRequests = async () => {
      try {
         if (token) {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/groups/my-groups`, {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });
            setGroupRequests(response.data.data); // Set the follow requests data
         }
      } catch (err) {
         console.error(err); // Handle error
      }
   };

   useEffect(() => {
      fetchGroupRequests()
   }, [token]);

   const filteredFriends = followingsRequests.filter(friend =>
      friend?.displayname?.toLowerCase().includes(query.toLowerCase())
   );
   const filteredFriendsfollower = followRequests.filter(friend =>
      friend?.displayname?.toLowerCase().includes(query.toLowerCase())
   );
   const uniqueFriends = [
      ...filteredFriends,
      ...filteredFriendsfollower
   ].filter((value, index, self) =>
      index === self.findIndex((friend) => friend._id === value._id)
   );

   const filteredGroups = groups.filter(group =>
      group.name.toLowerCase().includes(query.toLowerCase())
   );

   // Ensure that the highlighted chat remains active after page reload
   useEffect(() => {
      const highlightedChatId = localStorage.getItem("highlightedChat");
      if (highlightedChatId) {
         setActiveChat(highlightedChatId);
      }
   }, []);

   const [userData, setUserData] = useState<any | null>(null);
   const [error, setError] = useState('');
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


   const [isPopupOpen, setIsPopupOpen]: any = useState(false);

   const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
   };

   const handleCreateGroup = () => {
      alert("Create Group clicked!"); // Replace with your logic
      setIsPopupOpen(false); // Close the popup after action
   };
   const popupRef = useRef<HTMLDivElement | null>(null);
   const buttonRef = useRef<HTMLButtonElement | null>(null);
   useEffect(() => {
      const handleClickOutside = (event: { target: any; }) => {
         if (
            popupRef.current &&
            !popupRef.current.contains(event.target) && // Check if click is outside the popup
            buttonRef.current &&
            !buttonRef.current.contains(event.target) // Check if click is outside the three-dot button
         ) {
            setIsPopupOpen(false);
         }
      };

      if (isPopupOpen) {
         document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [isPopupOpen]);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [froupId, setfroupId] = useState("")
   const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
   };

   const [userlist, setuserlist] = useState<any[]>([]);

   const fetchUserlist = async () => {
      try {
         if (token) {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/chatlist`, {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });
            setuserlist(response.data.data?.userChatlist); // Set the follow requests data
         }
      } catch (err) {
         console.error(err); // Handle error
      }
   };

   useEffect(() => {
      fetchUserlist()
   }, [token]);




   return (
      <div className="flex">
         <div className={`border border-[#caced6] md:w-[350px] w-full`}>
            <div className="border-r border-neutral ">
               <div className="flex gap-1 items-center m-2">
                  <div className="relative w-full">
                     <input
                        type="text"
                        value={query}
                        onChange={handleSearchChange}
                        placeholder=" Search......"
                        className="pl-10 w-full pr-4 py-2 p-3 border border-[#caced6] rounded-md focus:outline-none focus:border-blue-500"
                     />
                     <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 bg-blue-500 p-1 rounded-full">
                        <FiSearch size={20} className="text-white" />
                     </div>
                  </div>
                  <div>
                     <button onClick={togglePopup} style={{ fontSize: "24px" }} className="px-2">
                        &#8942; 
                     </button>
                  </div>
               </div>
               {isPopupOpen && (
                  <div
                     ref={popupRef}
                     style={{
                        // position: "absolute",
                        top: "30px",
                        right: "0",
                        backgroundColor: "white",
                        border: "1px solid #ccc",
                        padding: "6px",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                        zIndex: 1000,
                        width: "120px",
                        borderRadius: "8px",
                        marginLeft: "13rem",
                        marginTop: "10px"
                     }}
                  >
                     <button className="text-xs flex gap-1 item-center " onClick={toggleModal}> <MdCreateNewFolder />
                        Create Group</button>
                  </div>
               )}

            </div>
            <div className="m-2">
               <h2 className="text-[22px] font-semibold text-blue-500 bg-[#e5e7eb] rounded-md p-2 mt-3 flex items-center justify-between"> Users <FaUsers /></h2>
               <div className="user-list">
                  {userlist?.length === 0 ? (
                     <p></p>
                  ) : (
                     <ul>
                        {userlist?.map((admin) => (
                           <div
                              key={admin.id}
                              className={`flex items-center gap-3 mt-3  cursor-pointer rounded-lg ${activeChat === admin._id ? "bg-blue-500 text-white" : ""}`}
                              onClick={() => handleChatClick(admin._id)}
                           >
                              <Link href={`/admin/chats/admin/${admin._id}`} className="block w-full border border-[#caced6] rounded-md p-2">
                                 <div className="flex gap-3 items-center">
                                    <img
                                       src={admin.avatar || "/images/profile.png"}
                                       alt={admin.displayname}
                                       style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
                                    />
                                    <div className="flex flex-col">
                                       <span>{admin.displayname}</span>
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        ))}
                     </ul>
                  )}
               </div>
            </div>

            <div className="border-r border-neutral px-2">
               <h2 className="text-[22px] font-semibold text-blue-500 bg-[#e5e7eb] rounded-md p-2 mt-3 flex items-center justify-between">Groups <HiUserGroup /></h2>               <div className="flex flex-col font-semibold">
                  {GroupRequests.map((group) => (
                     <div
                        key={group.id}
                        className={`flex items-center gap-3 mt-3  cursor-pointer rounded-lg ${activeChat === group._id ? "bg-blue-500 text-white" : ""}`}
                        onClick={() => handleChatClick(group._id)}
                     >
                        <Link href={`/admin/chats/group/${group._id}`} className="block w-full border border-[#caced6] rounded-md p-2">
                           <div className="flex gap-3 items-center">
                              <img
                                 src={group.groupIcon || "/images/profile.png"}
                                 alt={group.displayname}
                                 style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
                              />
                              <div className="flex flex-col">
                                 <span>{group.name}</span>
                              </div>
                           </div>
                        </Link>
                     </div>
                  ))}
                  {isModalOpen && (
                     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white  rounded-lg shadow-lg relative w-[700px]">
                           <div className="">
                              <button className="absolute top-2 right-6 text-xl font-semibold mt-3 " onClick={toggleModal}><IoCloseOutline className="text-white" /></button>
                              <h2 className="text-2xl  mb-4 text-white h-[59px] p-3  bg-blue-500">Create Group</h2>
                           </div>
                           <div className="p-6">
                              <UploadPost
                                 onClose={toggleModal} groupId={"group._id"} toggleModal={isModalOpen} fetchGroupRequests={fetchGroupRequests} />
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
        
         <div className="w-full md:flex hidden justify-center">{children}</div>
      </div>
   );
};

export default ChatLayout;

