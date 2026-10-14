"use client";

import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

const AdminDashboardPage = () => {
   const token = localStorage.getItem("accessToken");
   const [followRequests, setFollowRequests] = useState<any[]>([]);
   const [error, setError] = useState<string | null>(null); // For displaying errors
   const [loading, setLoading] = useState<boolean>(false); // For loading state

   const fetchFollowRequests = async () => {
      setLoading(true);
      setError(null); 
      try {
         if (token) {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/unverified`, {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });
            console.log(response, "response")
            setFollowRequests(response.data.data.users); 
         }
      } catch (err) {
         console.error("Error fetching follow requests:", err);
         setError("Failed to load follow requests. Please try again later.");
      } finally {
         setLoading(false);
      }
   };

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
         }
      } catch (err) {
         console.error("Error handling approval:", err);
      }
   };

   useEffect(() => {
      fetchFollowRequests();
   }, []);

   return (
      <div>
         {/* {followRequests?.length > 0 ? (
            followRequests?.map((request: {
               _id: string;
               displayname: string;
               username: string;
               phoneNumber: string;
               avatar?: string; 
               remark: string;
            }) => (
               <div key={request._id} className="p-4 bg-white border border-[#D9D9D9] rounded-md mb-4">
                  <div className="flex gap-2 items-center">
                     <img
                        src={request?.avatar || "/images/profile.png"} 
                        alt={request?.displayname || "User Avatar"}
                        className="rounded-full w-11 h-11"
                     />
                     <span>{request?.displayname}</span>
                  </div>

                  <p className="mb-2">{request?.username}</p>
                  <p className="text-sm text-gray-500">{request?.phoneNumber}</p> 

                  <div className="gap-6 flex">
                     <div className="w-full justify-center">
                        <div
                           className="flex items-center justify-center gap-2 px-2 h-10 p-2 rounded-md bg-[#bbf7d0] text-[#309355]"
                           onClick={() => handleApproval(request._id, true)}
                        >
                           <FaRegThumbsUp className="text-[#309355]" />
                           <button className="text-[#309355]">Accept</button>
                        </div>
                     </div>
                     <div
                        className="flex w-full justify-center items-center bg-[#fecaca] gap-2 px-2 h-10 rounded-md text-[#bd2928]"
                        onClick={() => handleApproval(request._id, false)}
                     >
                        <FaRegThumbsDown />
                        <button className="text-[#bd2928]">Remove</button>
                     </div>
                  </div>
               </div>
            ))
         ) : (
            <div className="p-4 bg-white border border-[#D9D9D9] rounded-md">
               <p>No follow requests available.</p>
            </div>
         )} */}
      </div>
   );
};

export default AdminDashboardPage;