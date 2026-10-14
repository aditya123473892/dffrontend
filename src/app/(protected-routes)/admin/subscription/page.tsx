'use client';

import { useRouter } from 'next/navigation';
import { IoMdCheckmark } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { IoCloseOutline } from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiSolidEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import SubscriptionModal from './subscriptionModal';

const Subscription = () => {
  const router = useRouter();
  const [isYearly, setIsYearly] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const [showPopupIndex, setShowPopupIndex]: any = useState(null);
  const [formData, setFormData]: any = useState({
    planName: "",
    description: "",
    price: "",
    duration: "",
    isActive: true,
  });
  const [editSubscriptionId, setEditSubscriptionId] = useState<string | null>(null); // Track the subscription being edited

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
  const handleDelete = (postId: string) => {
    setPostToDelete(postId); // Store the post ID for deletion
    setIsDeleteModalOpen(true); // Open the confirmation modal
  };
  const handleSignUpClick = () => {
    router.push("/signup");
  };

  const handleCheckboxChange = () => {
    setIsYearly(!isYearly);
  };

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const token = localStorage.getItem("accessToken");

  const [subscriptions, setSubscriptions]: any = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSubscriptions = async () => {
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
        setSubscriptions(response.data.data);
      } else {
        console.warn("Received data is not an array:", response.data);
        setSubscriptions([]);
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

    setIsDeleteModalOpen(false); // Close the modal after deleting
    setPostToDelete(null); // Reset the post ID
  };
  const cancelDelete = () => {
    setIsDeleteModalOpen(false); // Close the modal without deleting
    setPostToDelete(null); // Reset the post ID
  };
  const handleCreateSubscription = async () => {
    try {
      const dataToSend = {
        ...formData,
        price: parseFloat(formData.price),
        duration: parseInt(formData.duration, 10),
        isActive: true,
      };

      if (editSubscriptionId) {
        // If editing, call PUT API
        await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subscriptions/${editSubscriptionId}`, dataToSend, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        // If creating, call POST API
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subscriptions`, dataToSend, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      fetchSubscriptions(); // Refresh the list
      setShowModal(false); // Close the modal
      setFormData({ planName: "", description: "", price: "", duration: "", isActive: true }); // Reset form
      setEditSubscriptionId(null); // Reset edit ID
    } catch (error) {
      console.error("Error creating/updating subscription:", error);
    }
  };

  const handleEdit = (subscription: any) => {
    setFormData({
      planName: subscription.planName,
      description: subscription.description,
      price: subscription.price,
      duration: subscription.duration,
      isActive: subscription.isActive,
    });
    setEditSubscriptionId(subscription._id); // Set the ID of the subscription being edited
    setShowModal(true); // Open the modal
  };


  const handleIconClick = (index: React.SetStateAction<number | null>) => {
    setShowPopupIndex(showPopupIndex === index ? null : index);
  };

  return (
    <div className="items-start justify-center overflow-auto gap-5 scrollbar-hide xl:p-8  xs:p-3">
      <button
        onClick={() => {
          setFormData({ planName: "", description: "", price: "", duration: "", isActive: true }); // Reset form
          setEditSubscriptionId(null); // Reset edit ID
          setShowModal(true);
        }}
        className="border-2 border-blue-500 text-blue-500 p-1 h-16 gap-3 mb-4 items-center font-semibold text-xl rounded-lg cursor-pointer mt-4 w-[250px] justify-center flex "
      >
        Create Subscription
      </button>
      <div className="md:flex xl:gap-8 sm:gap-2 justify-center ">
        {subscriptions?.map((subscription: any, index: any) => (
          <div key={subscription._id} className="xl:max-w-[900px] xl:w-[350px] mb-4 rounded-xl p-3 bg-white shadow-custom border border-[#D9D9D9] justify-center flex">
            <div>
              <div className="flex items-baseline justify-between">
                <p className="font-bold text-[24px] mt-5">{subscription.planName}</p>
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
                <span className="font-bold text-[38px] ">${subscription.price}</span>
                <div>
                  <div className="text-xs">per user</div>
                  <div className="text-xs">per month</div>
                </div>
              </div>
              <div className="gap-6 ">
                <p className="mb-3 text-sm font-semibold">Everything you need to get started:</p>
                <div className="flex gap-3 ">
                  <IoMdCheckmark />
                  <p className="mb-3 text-sm">
                    <span className="font-semibold">{subscription.description}</span>
                  </p>
                </div>
              </div>
              <button
                className="bg-blue-500 text-white rounded-2xl py-2 px-20 mb-3 ml-7"
                onClick={handleSignUpClick}
              >
                Sign up
              </button>
              <p className="mb-3 text-sm ml-12">Comes with a {subscription.duration} day trial</p>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg relative w-[700px]">
            <button className="absolute top-2 right-6 text-xl font-semibold mt-2.5" onClick={() => setShowModal(false)}>
              <IoCloseOutline className="text-white" />
            </button>
            <h2 className="text-2xl mb-4 text-white h-[59px] p-3 bg-blue-500">
              <span className='ml-2'>{editSubscriptionId ? "Edit Subscription" : "Create Subscription"}</span>
            </h2>
            <div className="p-6 overflow-scroll">
              <SubscriptionModal
                handleInputChange={handleInputChange}
                setShowModal={setShowModal}
                handleCreateSubscription={handleCreateSubscription}
                formData={formData} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscription;