"use client";
import React, { useEffect, useState } from "react";
import {
   Table,
   TableHeader,
   TableColumn,
   TableBody,
   TableRow,
   TableCell,
   Pagination,
   getKeyValue,
} from "@nextui-org/react";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { getApi } from "@/common/apis/main.api";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

export const tempUsers = [
   {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
   },
   {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
   },
   {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
   },
   {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
   },
   {
      key: "5",
      name: "Emily Collins",
      role: "Marketing Manager",
      status: "Active",
   },
   {
      key: "6",
      name: "Brian Kim",
      role: "Product Manager",
      status: "Active",
   },
   {
      key: "7",
      name: "Laura Thompson",
      role: "UX Designer",
      status: "Active",
   },
   {
      key: "8",
      name: "Michael Stevens",
      role: "Data Analyst",
      status: "Paused",
   },
   {
      key: "9",
      name: "Sophia Nguyen",
      role: "Quality Assurance",
      status: "Active",
   },
   {
      key: "10",
      name: "James Wilson",
      role: "Front-end Developer",
      status: "Vacation",
   },
   {
      key: "11",
      name: "Ava Johnson",
      role: "Back-end Developer",
      status: "Active",
   },
   {
      key: "12",
      name: "Isabella Smith",
      role: "Graphic Designer",
      status: "Active",
   },
   {
      key: "13",
      name: "Oliver Brown",
      role: "Content Writer",
      status: "Paused",
   },
   {
      key: "14",
      name: "Lucas Jones",
      role: "Project Manager",
      status: "Active",
   },
   {
      key: "15",
      name: "Grace Davis",
      role: "HR Manager",
      status: "Active",
   },
   {
      key: "16",
      name: "Elijah Garcia",
      role: "Network Administrator",
      status: "Active",
   },
   {
      key: "17",
      name: "Emma Martinez",
      role: "Accountant",
      status: "Vacation",
   },
   {
      key: "18",
      name: "Benjamin Lee",
      role: "Operations Manager",
      status: "Active",
   },
   {
      key: "19",
      name: "Mia Hernandez",
      role: "Sales Manager",
      status: "Paused",
   },
   {
      key: "20",
      name: "Daniel Lewis",
      role: "DevOps Engineer",
      status: "Active",
   },
   {
      key: "21",
      name: "Amelia Clark",
      role: "Social Media Specialist",
      status: "Active",
   },
   {
      key: "22",
      name: "Jackson Walker",
      role: "Customer Support",
      status: "Active",
   },
   {
      key: "23",
      name: "Henry Hall",
      role: "Security Analyst",
      status: "Active",
   },
   {
      key: "24",
      name: "Charlotte Young",
      role: "PR Specialist",
      status: "Paused",
   },
   {
      key: "25",
      name: "Liam King",
      role: "Mobile App Developer",
      status: "Active",
   },
];

export default function UsersList() {
   const [page, setPage] = React.useState(1);
   const rowsPerPage = 10;
   const [users, setUsers] = useState(tempUsers);

   const pages = Math.ceil(users.length / rowsPerPage);

   const items = React.useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;

      return users.slice(start, end);
   }, [page, users]);

   const [userData, setUserData]: any = useState(null);
   const [error, setError] = useState('');
   useEffect(() => {
      const fetchUserData = async () => {
         try {
            const token = localStorage.getItem("accessToken");

            if (token) {
               const response = await getApi({
                  url: '/users/history',
               });

               setUserData(response.data);
            } else {
               setError('Token not found');
            }
         } catch (err) {
            setError('Error fetching user data');
            console.error(err);
         }
      };

      fetchUserData();
   }, []);


   const handleApproval = async (status: boolean, userId: { (arg0: string, _id: any): void; (arg0: string, _id: any): void; }) => {
      try {
         const token = localStorage.getItem('accessToken');  // Replace with actual token

         const response = await axios.put(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/approve-request/${userId}`,
            { status: status },  // Send the approval status (true/false)
            {
               headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
               },
            }
         );

         // Show success toast if the request is successful
         toast.success(status ? 'Request Approved!' : 'Request Rejected!', {
            autoClose: 5000,
         });
      } catch (error) {
         // Show error toast if the request fails
         toast.error('An error occurred while processing the request.', {
            autoClose: 5000,
         });
         console.error('Error:', error);
      }
   };
   

   return (
      <>

         <div className="grid grid-cols-2 gap-4">
         {userData?.map((data: {
            user: {
               _id(arg0: string, _id: any): void; avatar: string | undefined; originalname: string | undefined; displayname: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
            }; remark: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
         }) => (
            <div className="mb-2 ">
               <div className=" p-4 bg-white border border-[#D9D9D9] rounded-md ">
                  <div className="flex gap-2 items-center">
                     <img
                        src={data?.user?.avatar || "/images/profile.png"}
                        alt={data?.user?.originalname}
                        className="rounded-full w-11 h-11" />
                     {data?.user?.displayname}
                  </div>
                  <p className="mb-2"> {data.remark}</p>
                  <div className="gap-6 flex">
                     <div className="w-full justify-center">
                        <div
                           className="flex items-center justify-center gap-2 px-2 h-10 p-2 rounded-md bg-[#bbf7d0] text-[#309355]"
                           onClick={() => handleApproval(true, data?.user?._id)}
                        >
                           <FaRegThumbsUp className="text-[#309355]" />
                           <button className="text-[#309355]">Approve</button>
                        </div>
                     </div>
                     <div className="flex w-full justify-center items-center bg-[#fecaca] gap-2 px-2 h-10 rounded-md text-[#bd2928]"
                        onClick={() => handleApproval(false, data.user?._id)}
                     >
                        <FaRegThumbsDown />
                        <button className="text-[#bd2928]">Reject</button>
                     </div>
                  </div>
               </div>
            </div>
         ))}
         </div>
         <ToastContainer />
         {/* <Table
            aria-label="Example table with client side pagination"
            bottomContent={
               <div className="flex w-full justify-center">
                  <Pagination
                     isCompact
                     showControls
                     showShadow
                     color="secondary"
                     page={page}
                     total={pages}
                     onChange={(page) => setPage(page)}
                  />
               </div>
            }
            classNames={{
               wrapper: "min-h-[222px]",
            }}
         >


            <TableHeader>
               <TableColumn key="name">NAME</TableColumn>
               <TableColumn key="role">ROLE</TableColumn>
               <TableColumn key="status">STATUS</TableColumn>
            </TableHeader>
            <TableBody items={items}>
               {(item) => (
                  <TableRow key={item.name}>
                     {(columnKey) => (
                        <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                     )}
                  </TableRow>
               )}
            </TableBody>
         </Table> */}
      </>
   );
}
