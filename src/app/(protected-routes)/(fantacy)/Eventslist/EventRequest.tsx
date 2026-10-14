import axios from "axios";
import { useState, useEffect, ReactNode } from "react";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';


interface ParticipantEvent {
    _id: any;
    name: string;

}

interface EventRequestProps {
    participantsevents: any; // Array of events
    onClose: () => void;
}



const EventRequest: React.FC<EventRequestProps> = ({ participantsevents, onClose }) => {
    const token = localStorage.getItem('accessToken');
    const [activeTab, setActiveTab]: any = useState('participants'); // State to manage the active tab

    const [EventApprove, setEventApprove]: any = useState<any>([]);
    const [EventpendingApprove, setEventpendingApprove]: any = useState<any>([]);

    // Fetch Participants Data
    const fetchApprove = async () => {
        try {
            if (token && participantsevents?._id) {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/event-members/${participantsevents._id}/participants`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setEventApprove(response.data.data.events);
            }
        } catch (err) {
            console.error('Error fetching participants:', err);
        }
    };

    const fetchEventpendingApproveApprove = async () => {
        try {
            if (token && participantsevents?._id) {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/event-members/${participantsevents._id}/requests/pending`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setEventpendingApprove(response.data.data.pendingRequests);
            }
        } catch (err) {
            console.error('Error fetching pending requests:', err);
        }
    };

    useEffect(() => {
        fetchApprove();
        fetchEventpendingApproveApprove();
    }, [participantsevents]);

    // Handle the deletion of an event post
    const deleteEventsPost = async (requestId: string) => {
        try {
            if (token && requestId) {
                const response = await axios.delete(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/event-members/${requestId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                if (response.status === 200) {
                    setEventpendingApprove((prev: any[]) => prev.filter((request: { _id: string; }) => request._id !== requestId));
                    toast.success("Post deleted successfully!");
                }
            }
        } catch (error) {
            console.error("Error deleting the post:", error);
            toast.error("Failed to delete the post!");
        }
    };

    // Handle approval or rejection of event requests
    const handleApproval = async (requestId: string, requestStatus: boolean) => {
        try {
            if (token) {
                const response = await axios.put(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/event-members/${requestId}/status`,
                    { requestStatus },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                if (response.status === 200) {
                    setEventpendingApprove((prev: any[]) => prev.filter((request: { _id: string }) => request._id !== requestId));
                    toast.success(requestStatus ? "Request accepted!" : "Request rejected!");
                }
            }
        } catch (err) {
            console.error("Error handling approval:", err);
        }
    };

    // Tab click handler
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative w-[75%] h-[75%]">
                <button className="absolute top-2 right-2 text-xl text-black font-semibold" onClick={onClose}>
                    &times;
                </button>

                {/* Tab Navigation */}
                <div className="flex border-b border-gray-200">
                    <button
                        className={`py-2 px-6 text-lg ${activeTab === 'participants' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-black'}`}
                        onClick={() => handleTabClick('participants')}
                    >
                        Participants
                    </button>
                    <button
                        className={`py-2 px-6 text-lg ${activeTab === 'eventRequests' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-black'}`}
                        onClick={() => handleTabClick('eventRequests')}
                    >
                        Event Requests
                    </button>
                </div>

                {/* Render based on active tab */}
                {activeTab === 'participants' ? (
                    <div className="mt-4">
                        {/* Render Participants Data */}
                        {EventApprove?.length > 0 ? (
                            EventApprove.map((event: { _id: string; user: { avatar: string; displayname: string } }) => (
                                <div key={event._id} className="p-4 bg-white border border-[#D9D9D9] rounded-md mb-4">
                                    <div className="flex gap-2 items-center text-black">
                                        <img
                                            src={event?.user?.avatar || "/images/profile.png"}
                                            alt={event?.user?.displayname}
                                            className="rounded-full w-11 h-11"
                                        />
                                        <span className="text-black">{event?.user?.displayname}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-black">No participants available.</p>
                        )}
                    </div>
                ) : (
                    <div className="mt-4">
                        {/* Render Event Requests Data */}
                        {EventpendingApprove?.length > 0 ? (
                            EventpendingApprove.map((request: {
                                         phoneNumber: ReactNode; _id: string; user: {
                                    phoneNumber: ReactNode;
                                    lastName: ReactNode;
                                    firstName: ReactNode; avatar: string; displayname: string
                                }; remark: string
                            }) => (
                                <div key={request._id} className="p-4 bg-white border border-[#D9D9D9] rounded-md mb-4">
                                    <div className="flex gap-2 items-center text-black">
                                        <img
                                            src={request?.user?.avatar || "/images/profile.png"}
                                            alt={request?.user?.displayname}
                                            className="rounded-full w-11 h-11"
                                        />
                                        <span className="text-black">{request?.user?.displayname}</span>
                                    </div>
                                    <p className="mb-2 text-black"> {request?.user?.firstName}  {request?.user?.lastName}</p>

                                    <p className="mb-2 text-black">Bio :- {request?.remark}</p>
                                    <p className="mb-2 text-black">Phone Number :- {request?.user?.phoneNumber}</p>
                                    <div className="gap-6 flex">
                                        <div className="flex w-full justify-center items-center bg-[#bbf7d0] gap-2 px-2 h-10 rounded-md text-[#309355]" onClick={() => handleApproval(request._id, true)}>
                                            <FaRegThumbsUp />
                                            <button>Accept</button>
                                        </div>
                                        <div className="flex w-full justify-center items-center bg-[#fecaca] gap-2 px-2 h-10 rounded-md text-[#bd2928]" onClick={() => deleteEventsPost(request._id)}>
                                            <FaRegThumbsDown />
                                            <button>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-black">No event requests available.</p>
                        )}
                    </div>
                )}
                <ToastContainer />
            </div>
        </div>
    );
};

export default EventRequest;
