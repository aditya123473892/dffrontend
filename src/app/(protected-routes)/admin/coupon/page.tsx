'use client';

import { IoMdCheckmark } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiSolidEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import CouponModal from './couponModal';

const Subscription = () => {
    const [showModal, setShowModal] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [postToDelete, setPostToDelete] = useState<string | null>(null);
    const [showPopupIndex, setShowPopupIndex]: any = useState(null);
    const [formData, setFormData]: any = useState({
        code: "",
        discountType: "",
        subscription: "",
        discountValue: "",
        expiryDate: "",
        isActive: true,
    });
    const [editSubscriptionId, setEditSubscriptionId] = useState<string | null>(null); // Track the subscription being edited
    const popupRef = useRef<HTMLDivElement>(null);
    const token = localStorage.getItem("accessToken");

    const [subscriptions, setSubscriptions]: any = useState([]);
    const [loading, setLoading] = useState(true);

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

    const handleDelete = (postId: string) => {
        setPostToDelete(postId); // Store the post ID for deletion
        setIsDeleteModalOpen(true); // Open the confirmation modal
    };

    const [AllSubscriptions, setAllSubscriptions]: any = useState([]);

    const fetchAllSubscriptions = async () => {
        try {
            if (!token) {
                setLoading(false);
                return;
            }

            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subscriptions`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (Array.isArray(response.data.data)) {
                setAllSubscriptions(response.data.data);
            } else {
                console.warn("Received data is not an array:", response.data);
                setAllSubscriptions([]);
            }

            setLoading(false);
        } catch (error) {
            console.error("Error fetching subscriptions:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllSubscriptions();
    }, []);


    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const fetchSubscriptions = async () => {
        try {
            if (!token) {
                setLoading(false);
                return;
            }
    
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/coupons`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            const responseData = response.data;
    
            if (responseData && typeof responseData === 'object') {
                const subscriptionsArray = Object.values(responseData).filter((item:any) => item._id); // If you want to filter out invalid entries
                setSubscriptions(subscriptionsArray);
            }
    
            setLoading(false);
        } catch (error) {
            console.error("Error fetching subscriptions:", error);
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchSubscriptions();
    }, []);
    

    const deletePost = async () => {
        try {
            if (token && postToDelete) {
                const response = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subscriptions/${postToDelete}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200) {
                    setSubscriptions((prevPosts: any[]) => prevPosts.filter((post) => post._id !== postToDelete));
                    toast.success("Post deleted successfully!");
                    fetchSubscriptions();
                }
            }
        } catch (error) {
            console.error("Error deleting the post:", error);
            toast.error("Failed to delete the post!");
        }

        setIsDeleteModalOpen(false); 
        setPostToDelete(null); 
    };

    const cancelDelete = () => {
        setIsDeleteModalOpen(false); 
        setPostToDelete(null); 
    };


    const handleCloseModal = () => {
        setShowModal(false); 
        setFormData({ code: "", discountType: "", subscription: "", discountValue: "", expiryDate: "", isActive: true });
        setEditSubscriptionId(null); 
    };
    const handleCreateSubscription = async () => {
        if (!formData.subscription) {
            toast.error('Subscription is required.');
            return;
        }

        if (!formData.discountValue || isNaN(Number(formData.discountValue))) {
            toast.error('Please enter a valid discount value.');
            return;
        }

        if (!formData.expiryDate) {
            toast.error('Expiry Date is required.');
            return;
        }

        const requestData = {
            code: formData.code,
            discountType: formData.discountType,
            subscription: formData.subscription, // Ensure this is not empty
            discountValue: Number(formData.discountValue), // Convert to number
            expiryDate: formData.expiryDate, // Ensure this is a valid date string
            isActive: formData.isActive
        };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/coupons`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            const result = await response.json();

            if (response.status === 201) {
                handleCloseModal()
                fetchSubscriptions()
                toast.success('Coupon created successfully!');
                console.log('Coupon created successfully!', result);
            } else {
                toast.error(`Error: ${result.message}`);
                console.error('Error:', result.message);
            }
        } catch (error) {
            toast.error('An error occurred while creating the coupon.');
            console.error('An error occurred:', error);
        }
    };


    const handleEdit = (subscription: any) => {
        setFormData({
            code: subscription.code,
            discountType: subscription.discountType,
            subscription: subscription.subscription,
            discountValue: subscription.discountValue,
            expiryDate: subscription.expiryDate,
            isActive: subscription.isActive,
        });
        setEditSubscriptionId(subscription._id); // Set the ID of the subscription being edited
        setShowModal(true); // Open the modal
    };

    const handleIconClick = (index: React.SetStateAction<number | null>) => {
        setShowPopupIndex(showPopupIndex === index ? null : index);
    };

    return (
        <div className="items-start justify-center overflow-auto gap-5 scrollbar-hide p-8">
            <button
                onClick={() => {
                    setFormData({ code: "", discountType: "", subscription: "", discountValue: "", expiryDate: "", isActive: true }); // Reset form
                    setEditSubscriptionId(null); // Reset edit ID
                    setShowModal(true);
                }}
                className="border-2 border-blue-500 text-blue-500 p-1 h-16 gap-3 mb-4 items-center font-semibold text-xl rounded-lg cursor-pointer mt-4 w-[250px] justify-center flex "
            >
                Create Coupon
            </button>


            <div className="flex gap-8 justify-center">
                {subscriptions?.map((subscription: any, index: any) => (
                    <div key={subscription._id} className="max-w-[900px] w-[350px] rounded-xl p-3 bg-white shadow-custom border border-[#D9D9D9] justify-center flex">
                        <div>
                            <div className="flex items-baseline justify-between">
                                <p className="font-bold text-[24px] mt-5">{subscription.subscription?.planName}</p>
                                <div>
                                    <BsThreeDotsVertical
                                        className="cursor-pointer three-dots-icon"
                                        onClick={() => handleIconClick(index)}
                                    />
                                    {showPopupIndex === index && (
                                        <div ref={popupRef} className="popup right-0 mt-2 shadow-lg rounded border border-gray-600 w-[35px]">
                                            <ul>
                                                <li className="cursor-pointer hover:bg-gray-200 p-2"
                                                    onClick={() => handleEdit(subscription)}
                                                >
                                                    <BiSolidEdit />
                                                </li>
                                                <li className="cursor-pointer hover:bg-gray-200 p-2"
                                                    onClick={() => handleDelete(subscription._id)}
                                                >
                                                    <MdDelete />
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <ToastContainer />
                            {isDeleteModalOpen && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
                                    <div className="bg-white p-6 rounded-lg shadow-lg relative w-[400px]">
                                        <button className="absolute top-2 right-2 text-xl text-black font-semibold" onClick={cancelDelete}>
                                            &times;
                                        </button>
                                        <h2 className="text-xl text-black font-semibold mb-4">Confirm Deletion</h2>
                                        <p className="text-black">Are you sure you want to delete this Events?</p>
                                        <div className="flex mt-4 gap-3">
                                            <button
                                                onClick={deletePost}
                                                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                                            >
                                                Yes, Delete
                                            </button>
                                            <button
                                                onClick={cancelDelete}
                                                className="bg-[#c0c4c4] py-2 px-4 rounded-lg"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-[38px] ">${subscription.subscription?.price}% Off</span>
                                <div>
                                    <div className="text-xs">per user</div>
                                    <div className="text-xs">per month</div>
                                </div>
                            </div>
                            <div className="gap-6 ">
                                <p className="mb-3 text-sm text-black font-semibold">{subscription?.subscription?.description}</p>
                                <div className="flex gap-3 ">
                                    <IoMdCheckmark />
                                    <p className="mb-3 text-sm">
                                        <span className="font-semibold">{subscription.subscription?.duration} Duration</span>
                                    </p>
                                </div>
                            </div>

                            <p className="mb-3 text-sm ml-12">Apply this coupon to discount {subscription.subscription?.duration} day</p>
                        </div>
                    </div>
                ))}
            </div>
            {showModal && (
                <CouponModal
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleCreateSubscription={handleCreateSubscription}
                    setShowModal={setShowModal}
                    setEditSubscriptionId={setEditSubscriptionId} setFormData={undefined}
                    AllSubscriptions={AllSubscriptions}
                    handleCloseModal={handleCloseModal} />
            )}
        </div>
    );
};

export default Subscription;
