import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { getApi } from "@/common/apis/main.api";
import { usePathname } from "next/navigation";

const UploadPost = ({ onClose, toggleModal, fetchGroupRequests, groupId }: { post?: any; fetchGroupRequests: any, toggleModal: any, onClose: () => void, groupId?: any }) => {
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
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setFollowingsRequests(response.data.data.users);
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchFollowingsRequests();
    }, [token]);

    // Filter friends based on search query
    const filteredFriends = followingsRequests?.filter(friend =>
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
    const handleAddMember = async (memberId: string) => {
        if (!selectedMembers.includes(memberId)) {
            setSelectedMembers((prevMembers) => [...prevMembers, memberId]);

        }
    };




    const pathname = usePathname();
    const handleRemoveMember = async (memberId: string, groupId: string) => {
        console.log(groupId, "groupIdgroupId");
        setSelectedMembers(selectedMembers.filter(id => id !== memberId)); // Remove member from selected list

    };



    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();



        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/groups/create-group`,
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
                fetchGroupRequests();
                onClose(); // Close the modal
            }
        } catch (err) {
            console.error(err);
            toast.error("Failed to create group. Please try again.");
        }
    };

    

    return (
        <form className="flex flex-col gap-4 overflow-scroll h-[450px]" onSubmit={handleSubmit}>
           
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

            {filteredFriends?.map((friend) => (
                <div key={friend._id} onClick={() => handleChatClick(friend._id)}>
                    <div className="block w-full p-2 border border-[#bfc2c6] rounded-md">
                        <div className="relative flex gap-3 justify-between items-center">
                            <div className="justify-between flex gap-16 w-full">
                                <div className="flex gap-3 items-center justify-between">
                                    {friend._id !== userData?._id && (
                                        <div>
                                            <img
                                                src={friend.avatar || "/images/profile.png"}
                                                alt={friend.displayname}
                                                className="rounded-full w-10 h-10  border border-[#b8bdc7]"
                                            />
                                            <span className="top-0 left-7 absolute w-3.5 h-3.5 bg-[#31c48d] border-2 border-white dark:border-gray-800 rounded-full"></span>
                                        </div>
                                    )}
                                    <div className="flex flex-col">
                                        {userData && friend._id !== userData._id && <span className="text-black">{friend.displayname}</span>}
                                    </div>
                                </div>
                                <div className="gap-4 flex">
                                    {!selectedMembers.includes(friend._id) ? (
                                        <button
                                            type="button"
                                            onClick={() => handleAddMember(friend._id)}
                                            className="bg-blue-500 text-white p-2 rounded-md"
                                        >
                                            Add
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={async () => {
                                                await handleRemoveMember(friend._id, groupId);
                                                setSelectedMembers((prevMembers) =>
                                                    prevMembers.filter((id) => id !== friend._id)
                                                );
                                            }}
                                            className="border border-blue-500 text-blue-500 p-2 rounded-md"
                                        >
                                            Remove
                                        </button>
                                    )}


                                </div>
                            </div>
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