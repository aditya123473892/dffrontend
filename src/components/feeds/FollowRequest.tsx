'use client'
import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

const FollowRequest = () => {
    const token = localStorage.getItem("accessToken");
    const [followRequests, setFollowRequests] = useState<any[]>([]);
    const [postRequests, setPostRequests] = useState<any[]>([]);
    const [selectedButton, setSelectedButton] = useState("follow")

    console.log("postRequestspostRequests", postRequests)

    const fetchFollowRequestsProfile = async () => {
        try {
            if (token) {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/pending-request`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setPostRequests(response.data.data.PendingRequest); // Set the follow requests data
            }
        } catch (err) {
            console.error(err); // Handle error
        }
    };
    const fetchFollowRequests = async () => {
        try {
            if (token) {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/follow/follow-requests`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setFollowRequests(response.data.data.followRequests); // Set the follow requests data
            }
        } catch (err) {
            console.error(err); // Handle error
        }
    };

    const handleApprovalPost = async (requestId: string, status: any) => {
        try {
            if (token) {
                const response = await axios.put(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/approve-request/${requestId}`,
                    { status },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                fetchFollowRequestsProfile();
            }
        } catch (err) {
            console.error("Error handling approval:", err);
        }
    };


    const handleApproval = async (requestId: string, status: any) => {
        try {
            if (token) {
                const response = await axios.put(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/follow/approve-follow/${requestId}`,
                    { requestId, status },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                fetchFollowRequests();
            }
        } catch (err) {
            console.error("Error handling approval:", err);
        }
    };

    // Fetch follow requests when component is mounted
    useEffect(() => {
        fetchFollowRequests();
        fetchFollowRequestsProfile()
    }, []);

    return (
        <div className="">

            <div className="flex items-center gap-3 mt-3">
                <button className={`${selectedButton === "follow" ? "bg-blue-500 text-white" : "bg-white border border-blue-500 text-blue-500"} p-2 py-2 rounded-md text-sm`} onClick={() => setSelectedButton("follow")}>Follow Request</button>
                <button className={`${selectedButton === "post" ? "bg-blue-500 text-white" : "bg-white border border-blue-500 text-blue-500"} p-2 py-2 rounded-md text-sm`} onClick={() => setSelectedButton("post")}>Post Request</button>
            </div>

            {selectedButton === "follow" && (
                <>
                    <h1 className="text-left text-2xl font-bold text-black mb-3">Follow Requests</h1>

                    {followRequests?.length > 0 ? (
                        followRequests?.map((request: { _id: string; follower: { avatar: string; username: string; displayname: string }; remark: string }) => (
                            <div key={request._id} className="p-4 bg-white border border-[#D9D9D9] rounded-md flex items-center justify-between mb-4">
                                <div className="flex gap-2 items-center">
                                    <img
                                        src={request?.follower?.avatar || "/images/profile.png"} // Assuming you have the correct image URL here
                                        alt={request?.follower?.username} // Assuming you have the correct alt text here
                                        className="rounded-full w-16 h-16"
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-lg mb-0">{request?.follower?.displayname}</span>
                                        <span className="text-sm">{request?.follower?.username}</span>
                                    </div>
                                </div>
                                <div className="gap-6 flex">
                                    <div className="w-full justify-center">
                                        <div
                                            className="flex items-center justify-center gap-2 px-2 h-10 p-2 rounded-md bg-[#bbf7d0] text-[#309355]"
                                            onClick={() => handleApproval(request._id, "accepted")} // On click, approve the user
                                        >
                                            <FaRegThumbsUp className="text-[#309355]" />
                                            <button className="text-[#309355]">Accept</button>
                                        </div>
                                    </div>
                                    <div
                                        className="flex w-full justify-center items-center bg-[#fecaca] gap-2 px-2 h-10 rounded-md text-[#bd2928]"
                                        onClick={() => handleApproval(request._id, false)} // On click, remove the user
                                    >
                                        <FaRegThumbsDown />
                                        <button className="text-[#bd2928]">Remove</button>
                                    </div>
                                </div>

                                {/* <p className="mb-2">{request?.remark}</p> */}

                            </div>
                        ))
                    ) : (
                        <div className="p-4 bg-white border border-[#D9D9D9] rounded-md">
                            <p>No follow requests available.</p>
                        </div>
                    )}
                </>
            )}

            {selectedButton === "post" && (
                <>
                    <h1 className="text-left text-2xl font-bold text-black mb-3">Post Requests</h1>

                    {postRequests?.length > 0 ? (
                        postRequests?.map((request: {
                            requestedUserId: any; _id: string; follower: { avatar: string; username: string; displayname: string }; remark: string
                        }) => (
                            <div key={request._id} className="p-4 bg-white border border-[#D9D9D9] rounded-md flex items-center justify-between mb-4">
                                <div className="flex gap-2 items-center">
                                    <img
                                        src={request?.follower?.avatar || "/images/profile.png"} // Assuming you have the correct image URL here
                                        alt={request?.follower?.username} // Assuming you have the correct alt text here
                                        className="rounded-full w-16 h-16"
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-lg mb-0">{request?.follower?.displayname}</span>
                                        <span className="text-sm">{request?.requestedUserId}</span>
                                    </div>
                                </div>
                                <div className="gap-6 flex">
                                    <div className="w-full justify-center">
                                        <div
                                            className="flex items-center justify-center gap-2 px-2 h-10 p-2 rounded-md bg-[#bbf7d0] text-[#309355]"
                                            onClick={() => handleApprovalPost(request.requestedUserId, "accepted")} // On click, approve the user
                                        >
                                            <FaRegThumbsUp className="text-[#309355]" />
                                            <button className="text-[#309355]">Accept</button>
                                        </div>
                                    </div>
                                    <div
                                        className="flex w-full justify-center items-center bg-[#fecaca] gap-2 px-2 h-10 rounded-md text-[#bd2928]"
                                        onClick={() => handleApprovalPost(request.requestedUserId, false)} // On click, remove the user
                                    >
                                        <FaRegThumbsDown />
                                        <button className="text-[#bd2928]">Remove</button>
                                    </div>
                                </div>

                                {/* <p className="mb-2">{request?.remark}</p> */}

                            </div>
                        ))
                    ) : (
                        <div className="p-4 bg-white border border-[#D9D9D9] rounded-md">
                            <p>No post requests available.</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default FollowRequest;
