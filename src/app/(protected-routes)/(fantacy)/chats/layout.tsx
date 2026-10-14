'use client'
import Link from "next/link";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { connectSocket, disconnectSocket, getUnreadCount, socket } from "./[group]/[id]/websocketService";
import { getApi } from "@/common/apis/main.api";
import { MdCreateNewFolder } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { GiThreeFriends } from "react-icons/gi";
import { BiLogoDropbox } from "react-icons/bi";


const ChatLayout = ({ children }: { children: ReactNode }) => {
   const [query, setQuery] = useState("");
   const [unreadData, setUnreadData]: any = useState([]);
   const [activeChat, setActiveChat] = useState<string | null>(null); // State to track the active chat

   const userId = useMemo(() => {
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user) : null;
   }, []);

   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
   };

   const handleChatClick = (chatId: string) => {
      setActiveChat(chatId); // Set the clicked chat as active
      localStorage.setItem("highlightedChat", chatId); // Store the highlighted chat in localStorage
   };

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
   const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
   };

   const [randomAdmin, setRandomAdmin]: any = useState<any[]>([]);

   const fetchRandomAdmin = async () => {
      try {
         if (token) {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/random-online-admin`, {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });
            setRandomAdmin(response.data.admin); // Set the follow requests data
         }
      } catch (err) {
         console.error(err); // Handle error
      }
   };

   useEffect(() => {
      fetchRandomAdmin()
   }, [token]);



   return (
      <div className="flex">
         <div className="border border-[#caced6]">
            <div className="border-r border-neutral px-2">
               <div className="flex gap-5 items-baseline">
                  <div className="relative w-[300px] mt-5">
                     <input
                        type="text"
                        value={query}
                        onChange={handleSearchChange}
                        placeholder=" Search......"
                        className="w-[284px] pl-10 pr-4 py-2 ml-2 p-3 border border-[#caced6] rounded-md focus:outline-none focus:border-blue-500"
                     />
                     <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 bg-blue-500 p-1 rounded-full">
                        <FiSearch size={20} className="text-white" />
                     </div>
                  </div>
                  {/* <button onClick={togglePopup} style={{ fontSize: "24px" }}>
                     &#8942; 
                  </button> */}
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
                     <button className="text-xs flex gap-1 " onClick={toggleModal}> <MdCreateNewFolder />
                        Create Group</button>
                  </div>
               )}

               {!randomAdmin ? (
                  <h2 className="text-lg font-semibold text-center text-[#9f4beb] mb-3 mt-3 bg-[#e5e7eb] rounded-md p-2 w-[284px] ml-2 cursor-pointer flex items-center justify-between">Admin Not Available <BiLogoDropbox />
                  </h2>
               ) : (
                  <div>
                     <div className="mb-4">
                        <Link href={`/chats/admin/${randomAdmin._id}`}>
                           <h2  onClick={() => handleChatClick(randomAdmin._id)} className={`text-xl font-semibold text-center text-[#9f4beb] mb-3 mt-3 bg-[#e5e7eb] rounded-md p-2 w-[284px] ml-2 cursor-pointer flex items-center justify-between ${activeChat === randomAdmin._id ? "bg-blue-500 text-white" : ""}`}>Chat with God <BiLogoDropbox />
                           </h2>
                        </Link>
                     </div>
                  </div>
               )}



               <div className="w-full h-[1px] bg-[#c3c7ce] mb-3 mt-1"></div>
               <h2 className="text-[22px] font-semibold text-blue-500  mt-1 bg-[#e5e7eb] rounded-md p-2 w-[284px] ml-2 flex items-center justify-between">Friends <GiThreeFriends />
               </h2>

               <div className="flex flex-col font-semibold">
                  {uniqueFriends.map((friend) => (
                     <div
                        key={friend._id}
                        className={`flex items-center gap-3 m-2 cursor-pointer rounded-lg ${activeChat === friend._id ? "bg-blue-500 text-white" : ""} ${friend._id !== userData?._id ? "" : "hidden"}`}
                        onClick={() => handleChatClick(friend._id)}
                     >
                        <Link href={`/chats/friend/${friend._id}`} className="block w-full p-2 border border-[#caced6] rounded-md">
                           <div className="relative flex gap-3 justify-between items-center">
                              <div className="flex gap-3 items-center">
                                 {/* Hide avatar if it's the current user */}
                                 {friend._id !== userData?._id && (
                                    <div>
                                       <img
                                          src={friend.avatar || "/images/profile.png"}
                                          alt={friend.displayname}
                                          className="rounded-full w-10 h-10 border border-[#b8bdc7]"
                                       />
                                       <span className="top-0 left-7 absolute w-3.5 h-3.5 bg-[#31c48d] border-2 border-white dark:border-gray-800 rounded-full"></span>
                                    </div>
                                 )}
                                 <div className="flex flex-col">
                                    {userData && friend._id !== userData._id && <span>{friend.displayname}</span>}
                                 </div>
                              </div>
                              {unreadData.length > 0 && unreadData.filter((msg: any) => msg.sender === friend._id).length > 0 && (
                                 <div className="bg-[#31c48d] text-white rounded-full w-6 h-6 flex items-center justify-center">
                                    <span className="bg-red-500 text-dark text-xs rounded-full">
                                       {unreadData.filter((msg: any) => msg.sender === friend._id).length}
                                    </span>
                                 </div>
                              )}
                           </div>
                        </Link>
                     </div>
                  ))}

               </div>
            </div>


            {/* {isModalOpen && (
               <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white  rounded-lg shadow-lg relative w-[700px]">
                     <div className="">
                        <button className="absolute top-2 right-6 text-xl font-semibold mt-3 " onClick={toggleModal}><IoCloseOutline className="text-white" /></button>
                        <h2 className="text-2xl  mb-4 text-white h-[59px] p-3  bg-blue-500">Create Group</h2>
                     </div>
                     <div className="p-6">
                        <UploadPost
                           // Pass the post data when editing
                           onClose={toggleModal} toggleModal={undefined} fetchPosts={undefined} />
                     </div>
                  </div>
               </div>
            )} */}
            <div className="w-full h-[1px] bg-[#c3c7ce] mb-3 mt-1"></div>
            <div className="border-r border-neutral px-2">
               <h2 className="text-[22px] font-semibold text-blue-500 w-[284px] bg-[#e5e7eb] rounded-md p-2 ml-2 flex items-center justify-between">Groups <HiUserGroup />
               </h2>
               <div className="flex flex-col font-semibold">
                  {GroupRequests.map((group) => (
                     <div
                        key={group.id}
                        className={`flex items-center gap-3 m-2 cursor-pointer rounded-lg ${activeChat === group._id ? "bg-blue-500 text-white" : ""}`}
                        onClick={() => handleChatClick(group._id)}
                     >
                        <Link href={`/chats/group/${group._id}`} className="block w-full p-2 border border-[#caced6] rounded-md">
                           <div className="flex gap-3 items-center">
                              <img
                                 src={group.groupIcon || "/images/profile.png"}
                                 alt={group.displayname}
                                 style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
                              />
                              <div className="flex flex-col">
                                 <span>{group.name}</span>
                                 <div className="flex items-center gap-2">
                                    {/* <div className="bg-[#949494] w-4 h-4 rounded-full items-center justify-center flex">
                                       <TbPlayerPlayFilled className="text-white" size={12} />
                                    </div>
                                    <span> Video</span> */}
                                 </div>
                              </div>
                           </div>
                        </Link>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="w-[85.5%]">{children}</div>
      </div>
   );
};

export default ChatLayout;
