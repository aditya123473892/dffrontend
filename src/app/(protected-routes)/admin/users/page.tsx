'use client';

import UsersList from "@/components/admin/users/UsersList";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCheck, FaSearch } from "react-icons/fa";
import { MdBlockFlipped, MdDelete } from "react-icons/md";

const UsersPage = () => {
   const [followingsRequests, setFollowingsRequests] = useState<any[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);
   const token = localStorage.getItem("accessToken");
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 10; // Set the number of items per page
   const [followRequests, setFollowRequests] = useState<any[]>([]);
   const totalPages = Math.ceil(followingsRequests.length / itemsPerPage);
   const [searchQuery, setSearchQuery] = useState(""); 

   const filteredData = followingsRequests.filter((friend) =>
      friend.displayname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      friend.username.toLowerCase().includes(searchQuery.toLowerCase())
   );
   // Get the data for the current page
   const currentData = filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
   );

   const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages) {
         setCurrentPage(page);
      }
   }

   const fetchFollowingsRequests = async () => {
      try {
         if (token) {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });
            setFollowingsRequests(response.data.data.users);
         }
      } catch (err) {
         console.error(err);
         setError("Failed to fetch followings requests.");
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchFollowingsRequests();
   }, [token]);

   const handleApproval = async (requestId: string, isEmailVerified: any) => {
      try {
         if (token) {
            const response = await axios.put(
               `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/verify/${requestId}`,
               { requestId, isEmailVerified },
               {
                  headers: {
                     Authorization: `Bearer ${token}`,
                  },
               }
            );
            // Remove the request from the list
            setFollowRequests(prevRequests => prevRequests.filter(request => request._id !== requestId));
            fetchFollowingsRequests();
         }
      } catch (err) {
         console.error("Error handling approval:", err);
      }
   };

   useEffect(() => {
      fetchFollowingsRequests();
   }, []);
   const [showPopupIndex, setShowPopupIndex]: any = useState(null);


   const handleIconClick = (index: React.SetStateAction<number | null>) => {
      setShowPopupIndex(showPopupIndex === index ? null : index);
   };


   const popupRef = useRef<HTMLDivElement>(null);
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
            setShowPopupIndex(null); // Close the popup
         }
      };

      if (showPopupIndex !== null) {
         document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [showPopupIndex]);

   return (
      <section>
         <h1 className="text-blue-500 text-3xl font-semibold mt-2">All Users</h1>
         <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5 space-y-4 overflow-x-auto">
         <div className="mb-4 relative">
               <input
                  type="text"
                  className="px-4 py-2 border rounded-md w-full pl-10" // Add padding to the left for the icon
                  placeholder="Search by Display Name or Username"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
               />
               {/* Search Icon */}
               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
            </div>
            <table className="min-w-full table-auto border-collapse">
               <thead>
                  <tr className="bg-gray-100">
                     <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Avatar</th>
                     <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Display Name</th>
                     <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">UserName Name</th>
                     <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">FirstName</th>
                     <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">LastName</th>
                     <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Gender</th>
                     <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Verify</th>
                     <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Phone Number</th>
                     <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Age</th>
                     <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Role</th>
                     <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Login Count</th>
                     <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
                     <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Action</th>

                  </tr>
               </thead>
               <tbody>
                  {currentData.map((friend, index) => (
                     friend.roles.includes('user') && (
                        <tr key={friend.id} className="border-b hover:bg-gray-100">
                           <td className="py-3 px-4">
                              <img
                                 src={friend.avatar || "/images/profile.png"}
                                 alt={friend.displayname}
                                 className="w-10 h-10 rounded-full object-cover"
                              />
                           </td>
                           <td className="py-3 px-4 text-sm text-gray-800">{friend.displayname}</td>
                           <td className="py-3 px-4 text-sm text-gray-500">{friend.username} </td>
                           <td className="py-3 px-4 text-sm text-gray-500">{friend.firstName} </td>
                           <td className="py-3 px-4 text-sm text-gray-500">{friend.lastName} </td>
                           <td className="py-3 px-4 text-sm text-gray-500">{friend.gender} </td>
                           <td className="py-3 px-4 text-sm text-gray-500">
                              <span
                                 className={`inline-block px-2 py-1 rounded-full xs:text-xs lg:text-sm w-max ${friend.isEmailVerified ? "bg-[#bbf7d0] text-[#559c6e]" : "bg-[#fecaca] text-[#aa4545]"
                                    }`}
                              >
                                 {friend.isEmailVerified ? "Verified" : "Not Verified"}
                              </span>
                           </td>
                           <td className="py-3 px-4 text-sm text-gray-500">{friend.phoneNumber} </td>
                           <td className="py-3 px-4 text-sm text-gray-500">{friend.age} </td>
                           <td className="py-3 px-4 text-sm text-gray-500">{friend.roles} </td>
                           <td className="py-3 px-4 text-sm text-gray-500">{friend.loginCount} </td>
                           <td className="py-3 px-4 text-sm">
                              <button className="bg-[#5ae089] text-white px-3 py-2 rounded-md">
                                 {friend.status}
                              </button>
                           </td>
                           <td className=" text-sm">
                              <button className=" px-3 py-2 rounded-md">
                                 <BsThreeDotsVertical
                                    onClick={() => handleIconClick(index)} />

                              </button>
                           </td>
                           {showPopupIndex === index && (
                              <div ref={popupRef} className="popup right-0 mt-2 shadow-lg rounded border border-gray-600 w-[95px]">
                                 <ul>
                                    {friend.isEmailVerified ? (
                                       <li className="cursor-pointer hover:bg-gray-200 p-2 text-[#C63C3B] font-semibold flex items-center gap-2"
                                          onClick={() => handleApproval(friend._id, false)}>
                                        <MdBlockFlipped className= "text-[#C63C3B]"/>
                                        Block
                                       </li>
                                    ) : (
                                       <li className="cursor-pointer hover:bg-gray-200 p-2 text-[#17823F] font-semibold flex items-center gap-2 "
                                          onClick={() => handleApproval(friend._id, true)}>
                                        <FaCheck  className="text-[#17823F]"/>
                                        Accept
                                       </li>
                                    )}
                                 </ul>
                              </div>
                           )}
                        </tr>
                     )
                  ))}
               </tbody>
            </table>
            <div className="flex justify-center space-x-4 mt-4">
               <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
               >
                  Prev
               </button>
               <span className="flex items-center text-sm text-gray-600">
                  Page {currentPage} of {totalPages}
               </span>
               <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
               >
                  Next
               </button>
            </div>
         </div>
      </section>
   );
};

export default UsersPage;
