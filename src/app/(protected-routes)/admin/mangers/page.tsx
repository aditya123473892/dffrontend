"use client";
import { useEffect, useRef, useState } from "react";
import { useAccount } from "@/common/hooks";
import { useRouter } from "next/navigation";
import { postApi } from "@/common/apis/main.api";
import AuthApi from "@/common/apis/auth.api";
import toast from "react-hot-toast";
import SignupForm from "./Signup";
import { ERole } from "@/common/enums/role.enum";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import { IoCloseSharp } from "react-icons/io5";
import { MdBlockFlipped } from "react-icons/md";
import { FaCheck, FaSearch } from "react-icons/fa";

const Signup = () => {
   const router = useRouter();

   const [isSuccess, setIsSuccess] = useState(false);
   const [isVisible, setIsVisible] = useState(false); // Track visibility state

   const handleClick = () => {
      setIsVisible(!isVisible); // Toggle visibility
   };


   const handleClose = () => {
      setIsVisible(false); // Close modal
   }
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

   const handleSignup = async (values: any) => {
      // Hit signup API here
      console.log(values);
      console.log({ ...values, roles: [ERole.MANAGER] });

      const res = await postApi({
         url: AuthApi.signup,
         values: { ...values, roles: [ERole.MANAGER] },
      });

      if (res.error) throw new Error(res.message);

      toast.success(res.message);
      setIsSuccess(true);
   };

   if (isSuccess)
      return (
         <div className="bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col gap-3">
               <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Verify your email
               </h2>
               <p className="mt-2 text-center text-sm text-muted">
                  To complete the registration process and access your account,
                  please check your email inbox for a verification message.
                  Click on the "Verify Email" button in the email to verify your
                  account.
               </p>
               <p className="mt-2 text-center text-sm text-muted">
                  If you haven't received the verification email, please check
                  your spam folder. If you encounter any issues, feel free to
                  contact our support team.
               </p>
            </div>
         </div>
      );

   return (
      <div>
           <h1 className="text-blue-500 text-3xl font-semibold mt-2">All Managers</h1>
         <button
            onClick={handleClick}
            className="bg-blue-500 text-white p-3 rounded ml-6"
         >
            Create Manager
         </button>

         <section>
            <div className="bg-white shadow-lg rounded-lg  p-5 space-y-4 ">

                  <div className="mb-4 relative">
                              <input
                                 type="text"
                                 className="px-4 py-2 border rounded-md w-full pl-10" 
                                 placeholder="Search by Display Name or Username"
                                 value={searchQuery}
                                 onChange={(e) => setSearchQuery(e.target.value)} 
                              />
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
                        friend.roles.includes('manager') && (
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
                                    className={`inline-block px-2 py-1 rounded-full text-sm ${friend.isEmailVerified ? "bg-[#bbf7d0] text-[#559c6e]" : "bg-[#fecaca] text-[#aa4545]"
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
                              <td className="py-3 px-4 text-sm">
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
                                             <MdBlockFlipped className="text-[#C63C3B]" />
                                             Block
                                          </li>
                                       ) : (
                                          <li className="cursor-pointer hover:bg-gray-200 p-2 text-[#17823F] font-semibold flex items-center gap-2 "
                                             onClick={() => handleApproval(friend._id, true)}>
                                             <FaCheck className="text-[#17823F]" />
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
         {isVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
               <div className="bg-white  rounded-lg shadow-lg relative w-[700px]">
                  <div className="grid gap-[32px] md:px-16 xl:px-24 mt-8">
                     {/* <button className="justify-end flex" onClick={handleClose}>
                     <IoCloseSharp />

                     </button> */}
                     <div>
                        <h2 className="text-[32px] md:text-[42px] font-semibold text-blue-500">
                           Get Started Now
                        </h2>
                        <p className="text-[16px] text-black">
                           Create your account and start chatting...
                        </p>
                     </div>

                     <SignupForm onSubmit={handleSignup} handleClose={handleClose} />
                  </div>
                  <div className="p-6">

                  </div>
               </div>
            </div>
         )}

      </div>
   );
};

export default Signup;
