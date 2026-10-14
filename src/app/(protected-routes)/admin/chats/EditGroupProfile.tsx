import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { getApi } from "@/common/apis/main.api";
import { usePathname } from "next/navigation";

const UploadPost = ({ onClose, toggleModal, fetchGroupRequests, groupId, username }: { post?: any; username: any, fetchGroupRequests: any, toggleModal: any, onClose: () => void, groupId?: any }) => {
    const token = localStorage.getItem("accessToken");
    const [followingsRequests, setFollowingsRequests] = useState<any[]>([]);
    const [query, setQuery] = useState("");
    const [unreadData, setUnreadData]: any = useState([]);
    const [activeChat, setActiveChat] = useState<string | null>(null);
    const [groupName, setGroupName] = useState(username); // State for group name
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
            try {
                // Send the member addition request to the backend
                const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/groups/add-members`,
                    {
                        groupId: groupId, // Pass the groupId
                        members: [memberId], // Add only the selected member
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                // If the API call is successful
                if (response.status === 201) {
                    toast.success("Member added successfully!");
                    // Add the member to the selectedMembers state
                    setSelectedMembers((prevMembers) => [...prevMembers, memberId]);
                }
            } catch (err) {
                console.error(err);
                toast.error("Failed to add member. Please try again.");
            }
        }
    };




    const pathname = usePathname();
    const handleRemoveMember = async (memberId: string, groupId: string) => {
        console.log(groupId, "groupIdgroupId");
        try {
            // Update to send both groupId and members (array)
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/groups/remove-members`,
                {
                    groupId: groupId, // Pass groupId
                    members: selectedMembers, // Send the array of selected members
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 201) {
                toast.success("Member removed successfully!");
                setSelectedMembers(selectedMembers.filter(id => id !== memberId)); // Remove member from selected list
            }
        } catch (err) {
            console.error(err);
            toast.error("Failed to remove member. Please try again.");
        }
    };



    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();



        try {
            const response = await axios.put(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/groups/${groupId}`,
                {
                    name: groupName,
                    description: "description"
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                toast.success("Group Updated successfully!");
                fetchGroupRequests();
                handleUpload()
                onClose(); // Close the modal
            }
        } catch (err) {
            console.error(err);
            toast.error("Failed to create group. Please try again.");
        }
    };

    const [image, setImage]: any = useState(null);



    const [file, setFile]: any = useState(null);

    const handleFileChange = (event: any) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            setFile(selectedFile);
            setImage(URL.createObjectURL(selectedFile)); // Create preview for the selected image
        }
    };

    // Handle upload action
    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file.');
            return;
        }

        const formData: any = new FormData();
        formData.append('groupIcon', file); // Ensure 'image' is the correct field name expected by the backend

        // Log FormData for debugging
        for (let [key, value] of formData.entries()) {
        }

        try {
            const response = await axios.put(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/groups/${groupId}/upload-icon`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
                    },
                }
            );
            console.log('Upload successful:', response.data);
            fetchGroupRequests()
        } catch (error) {
            console.error('Error uploading icon:', error);
            alert('Error uploading icon. Please try again.');
        }
    };


    return (
        <form className="flex flex-col gap-4 overflow-scroll h-[450px]" onSubmit={handleSubmit}>
            <div className="flex justify-center">
                <div className="relative">
                    {/* Image preview */}
                    <img
                        src={image || '/images/profile.png'} // Fallback to default image if none is selected
                        alt="Uploaded Preview"
                        className="rounded-full w-40 h-40 mb-8"
                    />

                    {/* Upload button */}
                    {/* <label
                        // htmlFor="upload-image"
                        onClick={handleUpload}
                        className="absolute bottom-0 right-0 mt-3 p-2 mr-5 bg-blue-500 text-white rounded-full cursor-pointer"
                    >
                        Upload Image
                    </label> */}

                    {/* Hidden file input */}
                    <input
                        type="file"
                        id="upload-image"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-500 file:text-white
                    hover:file:bg-blue-" // Hide the file input
                    />
                </div>
            </div>
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
                                                className="rounded-full w-10 h-10"
                                            />
                                            <span className="top-0 left-7 absolute w-3.5 h-3.5 bg-[#31c48d] border-2 border-white dark:border-gray-800 rounded-full"></span>
                                        </div>
                                    )}
                                    <div className="flex flex-col">
                                        {userData && friend._id !== userData._id && <span>{friend.displayname}</span>}
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