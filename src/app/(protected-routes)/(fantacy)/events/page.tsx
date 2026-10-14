"use client";

import { Metadata } from "next";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import BookEvent from "./BookEvent";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { getApi } from "@/common/apis/main.api";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import EventsList from "../Eventslist/EventRequest";
import { useLocation } from "react-router-dom";
import Link from "next/link";

const EventsPage = () => {
  const token = localStorage.getItem("accessToken");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [posts, setPosts] = useState<any>([]);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [participantsevents, setparticipantsevents] = useState(false);
  const [participantmodal, setparticipantmodal]: any = useState(null);
  const toggleparticipantseventsModal = () => {
    setparticipantmodal((prev: any) => !prev);
  };

  const handleParticipantseventsEdit = (eventId: any) => {
    setparticipantsevents(eventId); // Set the post to be edited
    toggleparticipantseventsModal(); // Open the modal
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const fetchEvents = async () => {
    try {
      if (token) {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/events`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPosts(response.data.data.events); // Set the posts data
      }
    } catch (err) {
      console.error(err); // Handle error
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const [selectedEventId, setSelectedEventId] = useState<any>(null);

  const [showPopupIndex, setShowPopupIndex]: any = useState(null);

  const handleIconClick = (index: React.SetStateAction<number | null>) => {
    setShowPopupIndex(showPopupIndex === index ? null : index);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) return;
    if (!e.target.closest(".popup") && !e.target.closest(".three-dots-icon")) {
      setShowPopupIndex(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const [editPost, setEditPost] = useState<any>(null); // To store the post to be edited
  const handleDelete = (postId: string) => {
    setPostToDelete(postId); // Store the post ID for deletion
    setIsDeleteModalOpen(true); // Open the confirmation modal
  };
  const deletePost = async () => {
    try {
      if (token && postToDelete) {
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/events/${postToDelete}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setPosts((prevPosts: any[]) =>
            prevPosts.filter((post) => post._id !== postToDelete)
          );
          toast.success("Post deleted successfully!");
          fetchEvents();
        }
      }
    } catch (error) {
      console.error("Error deleting the post:", error);
      toast.error("Failed to delete the post!");
    }

    setIsDeleteModalOpen(false); // Close the modal after deleting
    setPostToDelete(null); // Reset the post ID
  };
  const [userData, setUserData]: any = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (token) {
          const response = await getApi({
            url: "/auth/me",
          });

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

  const cancelDelete = () => {
    setIsDeleteModalOpen(false); // Close the modal without deleting
    setPostToDelete(null); // Reset the post ID
  };
  const handleEdit = (events: any) => {
    setEditPost(events); // Set the post to be edited
    toggleModal(); // Open the modal
  };

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const [activeTab, setActiveTab] = useState("allEvent"); // State to manage active tab

  // Event Handlers for Tab Switching
  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Set the current path on initial render
    setCurrentPath(window.location.pathname);
  }, []);
  const handleApplyNow = async (eventId: any) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/event-members/join`,
        {
          event: eventId,
          user: userData?._id, // Assuming userData has the logged-in user's _id
          requestStatus: "pending",
          remark: "Please Accept", // You can add a custom remark if needed
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token to the Authorization header
          },
        }
      );

      if (response.status === 201) {
        toast.success("Successfully applied for the event!");
        fetchEvents();
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(error.message);
        toast.error(error.response.data.message);
      } else if (error instanceof Error) {
        console.error(error.message);
        toast.error(error.message);
      } else {
        console.error("An unknown error occurred");
        toast.error("An unknown error occurred");
      }
    }
  };

  const [eventId, setEventId] = useState<string | null>(null);
  const [requestgetposts, setrequestgetposts] = useState<any>([]);

  const handleApplyNowreuest = (eventId: string) => {
    localStorage.setItem("selectedEventId", eventId);

    setEventId(eventId);

    fetchRequestEvents(eventId);

    handleTabClick("Request Event User");
  };

  // Fetch event requests based on the eventId
  const fetchRequestEvents = async (eventId: string) => {
    try {
      if (token) {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/event-members/${eventId}/requests/pending`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setrequestgetposts(response.data.data.pendingRequests); // Set the posts data
      }
    } catch (err) {
      console.error("Error fetching requests:", err); // Handle error
    }
  };

  // Automatically fetch requests when the component mounts or when the eventId changes
  useEffect(() => {
    const storedEventId = localStorage.getItem("selectedEventId"); // Retrieve the eventId from localStorage

    if (storedEventId) {
      setEventId(storedEventId); // Set the state if an eventId is found in localStorage
      fetchRequestEvents(storedEventId); // Fetch requests for the selected event
    }
  }, [token]); // Make sure to re-fetch when the token changes

  const handleApproval = async (
    requestId: any,
    requestStatus: any,
    eventId: any
  ) => {
    try {
      if (token) {
        // PUT request to update the request status
        const response = await axios.put(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/event-members/${requestId}/status`,
          { requestId, requestStatus },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          localStorage.setItem("selectedEventId", eventId);
          fetchRequestEvents(eventId);
        }
      }
    } catch (err) {
      console.error("Error handling approval:", err);
    }
  };

  const handleRemove = async (requestId: any, eventId: any) => {
    try {
      if (token) {
        // DELETE request to remove the event-member
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/event-members/${requestId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          localStorage.setItem("selectedEventId", eventId);
          fetchRequestEvents(eventId);
        }
      }
    } catch (err) {
      console.error("Error handling removal:", err);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Request Event User":
        return (
          <>
            <div>
              {requestgetposts?.map(
                (request: {
                  _id: string;
                  user: {
                    lastName: ReactNode;
                    phoneNumber: ReactNode;
                    firstName: ReactNode;
                    _id: any;
                    avatar: string;
                    originalname: string;
                    displayname: string;
                  };
                  remark: string;
                }) => (
                  <div className="p-4 bg-white border border-[#D9D9D9] rounded-md">
                    <Link href={`/users/${request?.user?._id}`}>
                      <div className="flex gap-2 items-center">
                        <img
                          src={request?.user?.avatar || "/images/profile.png"} // Assuming you have the correct image URL here
                          alt={request?.user?.originalname} // Assuming you have the correct alt text here
                          className="rounded-full w-11 h-11"
                        />
                        <span>{request?.user?.displayname}</span>
                      </div>
                      <p className="mb-2 text-black">
                        {" "}
                        {request?.user?.firstName} {request?.user?.lastName}
                      </p>

                      <p className="mb-2 text-black">
                        Bio :- {request?.remark}
                      </p>
                      <p className="mb-2 text-black">
                        Phone Number :- {request?.user?.phoneNumber}
                      </p>
                    </Link>
                    <p className="mb-2">{request?.remark}</p>
                    <div className="gap-6 flex">
                      <div className="w-full justify-center">
                        <div
                          className="flex items-center justify-center gap-2 px-2 h-10 p-2 rounded-md bg-[#bbf7d0] text-[#309355]"
                          onClick={() =>
                            handleApproval(request._id, "accepted", eventId)
                          } // On click, approve the user and pass eventId
                        >
                          <FaRegThumbsUp className="text-[#309355]" />
                          <button className="text-[#309355]">Accept</button>
                        </div>
                      </div>
                      <div
                        className="flex w-full justify-center items-center bg-[#fecaca] gap-2 px-2 h-10 rounded-md text-[#bd2928]"
                        onClick={() => handleRemove(request._id, eventId)} // On click, remove the user
                      >
                        <FaRegThumbsDown />
                        <button className="text-[#bd2928]">Remove</button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </>
        );
      case "allEvent":
        return (
          <div className="">
            {" "}
            <div className="2xl:grid 2xl:grid-cols-2 gap-12">
              {posts?.map(
                (
                  events: {
                    users: any;
                    capacity: ReactNode;
                    location: ReactNode;
                    _id: any;
                    name:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<AwaitedReactNode>
                      | null
                      | undefined;
                    description:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<AwaitedReactNode>
                      | null
                      | undefined;
                    theme:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<AwaitedReactNode>
                      | null
                      | undefined;
                    type:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<AwaitedReactNode>
                      | null
                      | undefined;
                    startAt: string | number | Date;
                    endAt: string | number | Date;
                    cover: { url: string };
                  },
                  index: any
                ) => (
                  <>
                    <div
                      className={`relative text-white rounded-md shadow-lg w-fit mt-3 ${
                        !events.cover?.url ? "bg-blue-500" : ""
                      }`}
                      style={{
                        backgroundImage: events.cover?.url
                          ? `url(${events.cover?.url})`
                          : "none", // Fallback to 'none' if the URL is null/undefined
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "100%", // Height for the image
                        width: "100%", // Width for the image
                      }}
                    >
                      <div className="absolute top-0 left-0 w-full h-full text-blue-500 -z-10 clip-ribbon" />

                      <div className="pl-6 p-4">
                        <div className="flex items-center justify-between">
                          <p className="md:text-[24px] xs:text-[16px]">{events?.name}</p>
                          <div>
                            {currentPath !== "/events" && (
                              <BsThreeDotsVertical
                                className="cursor-pointer three-dots-icon"
                                onClick={() => handleIconClick(index)}
                              />
                            )}
                            {showPopupIndex === index && (
                              <div className="popup right-0 mt-2 shadow-lg rounded border border-gray-600 w-[35px]">
                                <ul>
                                  <li
                                    className="cursor-pointer hover:bg-gray-200 p-2"
                                    onClick={() => handleEdit(events)}
                                  >
                                    <BiSolidEdit />
                                  </li>
                                  <li
                                    className="cursor-pointer hover:bg-gray-200 p-2"
                                    onClick={() => handleDelete(events._id)}
                                  >
                                    <MdDelete />
                                  </li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>

                        <p>{events?.description}</p>

                        <div className="flex justify-between">
                          <div className="mt-2">
                            <span className="text-xs">Theme</span>{" "}
                            <span className="bg-white text-blue-500 px-3 py-1 rounded-full text-xs font-medium">
                              {events?.theme}
                            </span>
                          </div>
                          {participantmodal && participantsevents && (
                            <div className="modal-overlay">
                              <div className="modal-content">
                                <EventsList
                                  participantsevents={participantsevents}
                                  onClose={toggleparticipantseventsModal}
                                />
                                <button
                                  onClick={toggleparticipantseventsModal}
                                  className="close-modal-btn"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          )}
                          <div className="flex items-center mt-2 cursor-pointer">
                            {/* Loop through the users array and display avatars */}
                            <div className="flex -space-x-2">
                              {events?.users?.map(
                                (
                                  user: { avatar: any },
                                  idx: React.Key | null | undefined
                                ) => (
                                  <img
                                    key={idx}
                                    className="w-8 h-8 rounded-full border-2 border-white"
                                    src={user.avatar || "/images/profile.png"} // Use user avatar or fallback image
                                    alt="Participant"
                                  />
                                )
                              )}
                            </div>

                            {/* Display the number of participants */}
                            <span className="text-[#00FF0A] font-semibold ml-2 text-xs">
                              +{events?.users?.length} participating
                            </span>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="flex flex-wrap gap-2 mt-2">
                                <span className="border border-white px-3 py-1 rounded-full xs:text-[8px] md:text-xs">
                                  NO RESTRICTIONS
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-2 mt-2">
                                <span className="border border-white px-3 py-1 rounded-full xs:text-[8px] md:text-xs">
                                  {events?.type}
                                </span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              {currentPath === "/events" &&
                                (events?.users?.includes(userData?._id) ? (
                                  <button className="bg-[#5a5a5a] text-purple-500 text-xs px-8 py-2 rounded-full shadow-lg hover:bg-green-500 cursor-not-allowed">
                                    Applied
                                  </button>
                                ) : (
                                  <button
                                    className="bg-[#00FF0A] text-purple-500 xs:text-[8px] md:text-xs px-8 py-2 rounded-full shadow-lg hover:bg-green-500"
                                    onClick={() => handleApplyNow(events._id)}
                                  >
                                    Apply Now
                                  </button>
                                ))

                                //       < button className="bg-[#00FF0A] text-purple-500 text-xs px-8 py-2 rounded-full shadow-lg hover:bg-green-500" onClick={() => handleApplyNow(events._id)}>
                                //    Apply Now
                                // </button>
                              }
                              {currentPath !== "/events" && (
                                <button
                                  onClick={() =>
                                    handleApplyNowreuest(events._id)
                                  }
                                  className="bg-[#00FF0A] text-purple-500 xs:text-[8px] md:text-xs px-8 py-2 rounded-full shadow-lg hover:bg-green-500"
                                >
                                  Request List
                                </button>
                              )}
                            </div>
                          </div>

                          <ToastContainer />
                          <div>
                            <div className="flex gap-3 justify-end">
                              <div className="text-white xs:text-[8px] md:text-xs mt-2 font-medium border border-white px-3 py-1 rounded-full">
                                Starts{" "}
                                {events?.startAt
                                  ? formatDate(events.startAt)
                                  : "N/A"}
                              </div>

                              <div className="text-white xs:text-[8px] md:text-xs mt-2 font-medium border border-white px-3 py-1 rounded-full">
                                End{" "}
                                {events?.endAt
                                  ? formatDate(events.endAt)
                                  : "N/A"}
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="flex gap-3 justify-end">
                              <div className="text-white xs:text-[8px] md:text-xs mt-2 font-medium border border-white px-3 py-1 rounded-full">
                                Location {events?.location}
                              </div>

                              <div className="text-white xs:text-[8px] md:text-xs mt-2 font-medium border border-white px-3 py-1 rounded-full">
                                Capacity : {events?.capacity}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              )}
            </div>
          </div>
        );
    }
  };

  const filteredPosts =
    activeTab === "Request Event User"
      ? posts.filter(
          (event: { creator: any }) => event.creator === userData?._id
        )
      : posts;
  return (
    <>
      <div className="bg-white my-8  xl:mx-[135px] shadow-lg sm:px-2 md:px-20 md:p-4 xs:p-2 rounded-2xl">
        <p className="md:text-[42px] xs:text[24px]  text-blue-500 font-semibold">
          Discover Dark Fantasy Events
        </p>
        {currentPath !== "/events" && (
          <button
            className="bg-[#00FF0A] text-purple-500 text-sm px-8 py-2 rounded-full shadow-lg hover:bg-green-500"
            onClick={toggleModal}
          >
            Create Event
          </button>
        )}
        <div className=" mt-10">
          {/* Tab Headers */}
          <div className="flex space-x-4 mb-6 bg-[#e5e7eb]">
            <button
              className={`py-2 px-4 rounded-lg font-semibold text-blue-500 transition-colors  ${
                activeTab === "allEvent"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
              onClick={() => handleTabClick("allEvent")}
            >
              All Event
            </button>
            {currentPath !== "/events" && (
              <button
                className={`py-2 px-4 rounded-lg font-semibold text-blue-500 transition-colors  ${
                  activeTab === "Request Event User"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-blue-100"
                }`}
              >
                Request Event User
              </button>
            )}
          </div>
          {/* Tab Content */}
          <div className="">{renderTabContent()}</div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white  rounded-lg shadow-lg relative w-[700px]">
              <button
                className="absolute top-2 right-6 text-xl font-semibold mt-2.5 "
                onClick={toggleModal}
              >
                <IoCloseOutline className="text-white" />
              </button>
              <h2 className="text-2xl  mb-4 text-white h-[59px] p-3  bg-blue-500">
                <span className="ml-2">
                  {editPost ? "Edit Event" : "Create Event"}
                </span>{" "}
              </h2>
              <div className="ml-6"></div>
              <div className="p-6 h-[650px] overflow-scroll">
                <BookEvent
                  fetchEvents={fetchEvents}
                  onClose={toggleModal}
                  events={editPost}
                  editPost={editPost}
                />
              </div>
            </div>
          </div>
        )}

        {isDeleteModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative w-[400px]">
              <button
                className="absolute top-2 right-2 text-xl text-black font-semibold"
                onClick={cancelDelete}
              >
                &times;
              </button>
              <h2 className="text-xl text-black font-semibold mb-4">
                Confirm Deletion
              </h2>
              <p className="text-black">
                Are you sure you want to delete this Events?
              </p>
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
      </div>
      ;
    </>
  );
};

export default EventsPage;
