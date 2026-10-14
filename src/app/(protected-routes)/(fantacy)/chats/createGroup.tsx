import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { getApi } from "@/common/apis/main.api";

const UploadPost = ({ onClose, toggleModal }: { post?: any; fetchPosts: any, toggleModal: any, onClose: () => void }) => {
    const token = localStorage.getItem("accessToken");
    const [followingsRequests, setFollowingsRequests] = useState<any[]>([]);
    const [query, setQuery] = useState("");
    const [unreadData, setUnreadData]: any = useState([]);
    const [activeChat, setActiveChat] = useState<string | null>(null);
    const [groupName, setGroupName] = useState(""); // State for group name
    const [selectedMembers, setSelectedMembers] = useState<string[]>([]); // State for selected members

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
        setActiveChat(chatId);
        localStorage.setItem("highlightedChat", chatId);
    };

    // Fetch followings requests
    const fetchFollowingsRequests = async () => {
        try {
            if (token) {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/follow/following`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setFollowingsRequests(response.data.data.following);
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchFollowingsRequests();
    }, [token]);

    // Filter friends based on search query
    const filteredFriends = followingsRequests.filter(friend =>
        friend?.displayname?.toLowerCase().includes(query.toLowerCase())
    );

    const [userData, setUserData] = useState<any | null>(null);
    const [error, setError] = useState('');

    // Fetch user data
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

    // Handle "Add" button click
    const handleAddMember = (memberId: string) => {
        if (!selectedMembers.includes(memberId)) {
            setSelectedMembers([...selectedMembers, memberId]);
        }
    };

    // Handle "Remove" button click
    const handleRemoveMember = (memberId: string) => {
        setSelectedMembers(selectedMembers.filter(id => id !== memberId));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!groupName || selectedMembers.length === 0) {
            toast.error("Please provide a group name and select at least one member.");
            return;
        }

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/groups/create`,
                {
                    name: groupName,
                    admin: userId?._id, // Assuming userId is the admin
                    members: selectedMembers,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 201) {
                toast.success("Group created successfully!");
                onClose(); // Close the modal
            }
        } catch (err) {
            console.error(err);
            toast.error("Failed to create group. Please try again.");
        }
    };

    const handleRemoveMemberFromGroup = async (groupId: string, memberId: string) => {
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/groups/remove-members`,
                {
                    groupId: groupId,
                    memberId: memberId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                toast.success("Member removed successfully!");
                // Optionally, you can refresh the group data or update the state
            }
        } catch (err) {
            console.error(err);
            toast.error("Failed to remove member. Please try again.");
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-gray-700">
                Group Name :
                <input
                    type="text"
                    name="caption"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    className="w-full p-3 text-sm rounded-lg border mt-1 border-[#d1d5db] bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Group Name"
                    required
                />
            </label>

            <div className="relative w-[300px] mt-5">
                <input
                    type="text"
                    value={query}
                    onChange={handleSearchChange}
                    placeholder=" Search......"
                    className="w-full pl-10 pr-4 py-2 ml-2 p-3 border  rounded-2xl focus:outline-none focus:border-blue-500"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 bg-blue-500 p-1 rounded-full">
                    <FiSearch size={20} className="text-white" />
                </div>
            </div>

            {filteredFriends.map((friend) => (
                <div
                    key={friend._id}
                    // className={`flex items-center gap-3 m-2 cursor-pointer rounded-lg ${activeChat === friend._id ? "bg-blue-500 text-white" : ""} ${friend._id !== userData?._id ? "" : "hidden"}`}
                    onClick={() => handleChatClick(friend._id)}
                >
                    <div className="block w-full p-2">
                        <div className="relative flex gap-3 justify-between items-center">
                            <div className="justify-between flex gap-16">
                                <div className="flex gap-3 items-center justify-between">
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
                                <div className="gap-4 flex">
                                    <button
                                        type="button"
                                        onClick={() => handleAddMember(friend._id)}
                                        className="bg-blue-500 text-white p-2 rounded-md"
                                    >
                                        Add
                                    </button>
                                    <button
                                        type="button"
                                        // onClick={() => handleRemoveMemberFromGroup(friend._id)} // Pass the group ID and member ID
                                        className="border border-blue-500 text-blue-500 p-2 rounded-md"
                                    >
                                        Remove
                                    </button>
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
                    </div>
                </div>
            ))}

            <ToastContainer />

            <div className="flex gap-5 justify-end">
                <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
                    Create Group
                </button>
                <button type="button" onClick={onClose} className="border text-blue-500 border-blue-500 p-2 rounded mt-4">
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default UploadPost;