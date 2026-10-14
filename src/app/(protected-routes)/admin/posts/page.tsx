"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegThumbsDown, FaRegThumbsUp, FaSearch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const EventsPage = () => {
   const [posts, setPosts] = useState<any>([]);
   const [filteredPosts, setFilteredPosts] = useState<any>([]);
   const [visibility, setVisibility] = useState<"all" | "public" | "private" | "friends" | "custom">("all");
   const [status, setStatus] = useState<"all" | "approved" | "pending" | "rejected" | "draft" | "archived">("all");
   const [loading, setLoading] = useState(false);
   const [search, setSearch] = useState('');
   const [currentPage, setCurrentPage] = useState(1);
   const postsPerPage = 10; 

   const getToken = () => localStorage.getItem('accessToken');

   const fetchPosts = async () => {
      try {
         const token = localStorage.getItem('accessToken');
         if (token) {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/posts`, {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });
            setPosts(response.data.data.posts);
            setFilteredPosts(response.data.data.posts);
         }
      } catch (err) {
         console.error(err);
      }
   };

   const applyFilters = () => {
      const filtered = posts.filter((post: { visibility: string; status: string; caption: string; user: any; }) => {
         return (
            (visibility === 'all' || post.visibility === visibility) &&
            (status === 'all' || post.status === status) &&
            (post.caption.toLowerCase().includes(search.toLowerCase()) || post.user.displayname.toLowerCase().includes(search.toLowerCase()))
         );
      });
      setFilteredPosts(filtered);
   };

   const handleApproval = async (status: string, postId: any) => {
      setLoading(true);
      const token = getToken(); 

      try {
         const response = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/posts/${postId}`, { status: status }, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         console.log(response.data);
         fetchPosts();
         setLoading(false);
      } catch (error) {
         console.error('Error approving/rejecting post', error);
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchPosts();
   }, []);  

   useEffect(() => {
      applyFilters();
   }, [visibility, status, search]);  

   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
   };

   const [showPopupIndex, setShowPopupIndex]: any = useState(null);


   const handleIconClick = (index: React.SetStateAction<number | null>) => {
      setShowPopupIndex(showPopupIndex === index ? null : index);
   };

   return (
      <>
  <h1 className="text-blue-500 text-3xl font-semibold mt-2">All Users Posts</h1>
         <div className="flex flex-col items-center">
            <div className="flex gap-4 w-[50%] mb-4">
               <div className="mb-4 w-[50%]">
                  <label htmlFor="visibility" className="block text-lg font-medium mb-2">Visibility</label>
                  <select
                     id="visibility"
                     value={visibility}
                     onChange={(e) => setVisibility(e.target.value as "all" | "public" | "private" | "friends" | "custom")}
                     className="w-full  p-2 border border-blue-500 rounded-md shadow-sm"
                  >
                     <option value="all">All</option>
                     <option value="public">Public</option>
                     <option value="private">Private</option>
                     <option value="friends">Friends</option>
                     <option value="custom">Custom</option>
                  </select>
               </div>

               <div className="mb-6  w-[50%]">
                  <label htmlFor="status" className="block text-lg font-medium mb-2">Status</label>
                  <select
                     id="status"
                     value={status}
                     onChange={(e) => setStatus(e.target.value as "all" | "approved" | "pending" | "rejected" | "draft" | "archived")}
                     className="w-full p-2 border border-blue-500 rounded-md shadow-sm"
                  >
                     <option value="all">All</option>
                     <option value="approved">Approved</option>
                     <option value="pending">Pending</option>
                     <option value="rejected">Rejected</option>
                     <option value="draft">Draft</option>
                     <option value="archived">Archived</option>
                  </select>
               </div>
            </div>

          
            <ToastContainer />
         </div>
         <section>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden overflow-x-auto p-5 space-y-4">

               <div className="mb-4 relative">
                  <input
                     type="text"
                     className="px-4 py-2 border rounded-md w-full pl-10" // Add padding to the left for the icon
                     placeholder="Search by Display Name or Username"
                     value={search}
                     onChange={handleSearchChange} // Update search query on input change
                  />
                  {/* Search Icon */}
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
               </div>
               <table className="min-w-full table-auto border-collapse">
                  <thead>
                     <tr className="bg-gray-100">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">No</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Avater</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">User</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Caption</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Location</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Visibility</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>


                     </tr>
                  </thead>
                  <tbody>
                     {currentPosts.map((post: any, index: any) => (

                        <tr key={post.id} className="border-b hover:bg-gray-100">
                           <td className="py-3 px-4 text-sm text-gray-800">{index + 1}</td>

                           <td className="py-3 px-4">
                              <img
                                 src={post.media?.url || "/images/profile.png"}
                                 alt={post.media.displayname}
                                 className="w-10 h-10 rounded-full object-cover"
                              />
                           </td>
                           <td className="py-3 px-4 text-sm text-gray-800">{post.user.displayname}</td>
                           <td className="py-3 px-4 text-sm text-gray-500">{post.caption} </td>
                           <td className="py-3 px-4 text-sm text-gray-500">{post.location} </td>
                           <td className="py-3 px-4 text-sm text-gray-500">{post.visibility} </td>
                           <td className="py-3 px-4 text-sm text-gray-500">{post.status} </td>




                           <td className=" text-sm">
                              <button className=" px-3 py-2 rounded-md">
                                 <BsThreeDotsVertical
                                    onClick={() => handleIconClick(index)} />

                              </button>
                           </td>
                           {showPopupIndex === index && (
                              <div className="popup right-0 mt-2 shadow-lg rounded  w-[95px]">
                                 <div className="flex gap-4">
                                    <button
                                       className="bg-[#C63C3B] text-white p-2 rounded-md flex items-center gap-3"
                                       onClick={() => handleApproval('rejected', post._id)}
                                    >
                                       <FaRegThumbsDown /> Reject
                                    </button>
                                    <button
                                       className="bg-[#5ae089] text-white p-2 rounded-md flex items-center gap-3"
                                       onClick={() => handleApproval('approved', post._id)}
                                    >
                                       <FaRegThumbsUp /> Approve
                                    </button>

                                 </div>
                              </div>
                           )}
                        </tr>
                     ))}

                  </tbody>
               </table>
               <div className="flex justify-center mt-4">
                  <button
                     onClick={() => paginate(currentPage - 1)}
                     disabled={currentPage === 1}
                     className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                     Prev
                  </button>
                  <span className="mx-4">{currentPage}</span>
                  <button
                     onClick={() => paginate(currentPage + 1)}
                     disabled={currentPage * postsPerPage >= filteredPosts.length}
                     className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                     Next
                  </button>
               </div>
            </div>
         </section>
      </>
   );
};

export default EventsPage;
