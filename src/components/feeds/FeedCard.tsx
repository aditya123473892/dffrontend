"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  ReactNode,
} from "react";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { IoClose, IoLocation } from "react-icons/io5";
import Image from "next/image";
import UploadPost from "./UploadPost";
import axios from "axios";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoEarthSharp } from "react-icons/io5";
import { getApi } from "@/common/apis/main.api";
import { TbPlayerPauseFilled, TbPlayerPlayFilled } from "react-icons/tb";
import ReactPlayer from "react-player";
import { IoCloseOutline } from "react-icons/io5";
import {
  FaBookmark,
  FaRegBookmark,
  FaRegCommentAlt,
  FaRegThumbsUp,
  FaThumbsUp,
} from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";
import { GrShareOption } from "react-icons/gr";
          import Link from "next/link";
import { CiBookmark } from "react-icons/ci";

type PlayerRef = any; 

const FeedCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editPost, setEditPost] = useState<any>(null); // To store the post to be edited
  const [posts, setPosts] = useState<any>([]);
  const [showPopupIndex, setShowPopupIndex]: any = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const [activeCommentIndex, setActiveCommentIndex] = useState(null); // Tracks which modal is open
  const [commentContent, setCommentContent]: any = useState(""); // Stores the comment content
  const [showPopup, setShowPopup]: any = useState(false);
  const [editingCommentId, setEditingCommentId]: any = useState(null);
  const [userData, setUserData]: any = useState(null);
  const [error, setError] = useState("");
  const [selectedIcon, setSelectedIcons]: any = useState([]);
  const [isPlaying, setIsPlaying] = useState<boolean[]>([]); // Track playing state of each video
  const token = localStorage.getItem("accessToken");
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleEdit = (post: any) => {
    setEditPost(post); 
    toggleModal(); 
  };
  const handleDelete = (postId: string) => {
    setPostToDelete(postId); // Store the post ID for deletion
    setIsDeleteModalOpen(true); // Open the confirmation modal
  };
  const deletePost = async () => {
    try {
      if (token && postToDelete) {
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/${postToDelete}`,
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
          fetchPosts();
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

  const fetchPosts = async () => {
    try {
      if (token) {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/public/feeds`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPosts(response.data.data.posts); // Set the posts data
      }
    } catch (err) {
      console.error(err); // Handle error
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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

  const playerRefs: any = useRef<PlayerRef[]>([]); // Array of refs for video players
  const handlePlayPause = useCallback(
    (index: number) => {
      const newState = [...isPlaying];
      newState[index] = !newState[index]; // Toggle play/pause state for the specific video

      if (newState[index]) {
        playerRefs.current[index]?.current?.getInternalPlayer().play(); // Play the video
      } else {
        playerRefs.current[index]?.current?.getInternalPlayer().pause(); // Pause the video
      }

      setIsPlaying(newState); // Update the playing state
    },
    [isPlaying]
  );

  const handleIconreactionClick = (iconName: string) => {
    // If the icon is not already selected, add it to the state
    if (!selectedIcon.includes(iconName)) {
      setSelectedIcons([...selectedIcon, iconName]);
    }
  };

  const toggleCommentCard = (index: null) => {
    setActiveCommentIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle modal visibility
    setCommentContent(""); // Reset the comment content when modal is toggled
  };

  // Handle comment content change
  const handleCommentChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCommentContent(event.target.value);
  };

  const handleSubmitComment = async (postId: any) => {
    try {
      if (editingCommentId) {
        // If editing, send PUT request
        await axios.put(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/${postId}/comment/${editingCommentId}`,
          { content: commentContent },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Comment updated successfully");
        fetchPosts();
      } else {
        // If adding, send POST request (for adding new comment)
        await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/comment`,
          { content: commentContent, post: postId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Comment added successfully");
        fetchPosts();
      }
      setCommentContent(""); 
      setEditingCommentId(null); // Reset editing state
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const handleCancel = () => {
    setActiveCommentIndex(null); // Close the modal
    setCommentContent(""); // Clear comment content
  };

  const handleThreeDotsClick = (commentId: boolean) => {
    setShowPopup((prev: boolean) => (prev === commentId ? null : commentId));
  };

  const handleEditClick = (commentId: string, content: string | undefined) => {
    setCommentContent(content || ""); // Set the content, defaulting to an empty string if content is undefined
    setEditingCommentId(commentId); // Mark the comment as being edited
  };

  const handleDeleteClick = async (commentId: any, postId: any) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/${postId}/comment/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Comment deleted successfully");
      fetchPosts();
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const likePost = async (postId: string, token: string | null) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/${postId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchPosts();
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const unlikePost = async (postId: string, token: string | null) => {
    if (!token) {
      console.error("No access token found.");
      return;
    }

    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/${postId}/unlike`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchPosts();
    } catch (error) {
      console.error("Error unliking post:", error);
    }
  };

  const toggleLike = async (postId: string) => {
    if (likedPosts.has(postId)) {
      await unlikePost(postId, token);
      likedPosts.delete(postId); // Remove from liked posts set
    } else {
      await likePost(postId, token);
      likedPosts.add(postId); // Add to liked posts set
    }
    setLikedPosts(new Set(likedPosts)); // Trigger re-render
  };

  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = async (userId: string) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/follow/follow-request`,
        { following: userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchPosts();
      if (response.status === 200) {
        fetchPosts();
        setIsFollowing(true); // Update state to indicate the user is now following
        console.log("Follow request sent successfully");
      }
    } catch (error) {
      console.error("Error sending follow request:", error);
    }
  };

  const handleBookmark = async (postId: any) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/book-mark/${postId}`,
        {
          postId: postId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in the Authorization header
          },
        }
      );
      fetchPosts();
      console.log("Response:", response.data);
      toast.success(response.data.message);
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred while bookmarking the post.");
      toast.error("Failed to bookmark the post");
    } finally {
    }
  };

  const handleUpdateBookmark = async (postId: any) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/book-mark/status/${postId}`,
        {
          postId: postId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in the Authorization header
          },
        }
      );
      fetchPosts();
      console.log("Response:", response.data);
      toast.success(response.data.message);

    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred while bookmarking the post.");
      toast.error("Failed to bookmark the post");
    } finally {
    }
  };


  const handleShare = async (post: { caption: string; location: string; media: any[] }) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this post!",
          text: post.caption,
          url: window.location.href, // Replace with actual post URL
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };
  
  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <div className=" xs:w-full md:max-w-[900px] ">
          {userData && userData.roles.includes("user") && (
            <div
              className="border-2 createpost border-blue-500 text-blue-500 p-2 h-16 gap-3 mb-4 items-center font-semibold text-lg sm:text-xl md:text-2xl rounded-lg cursor-pointer mt-4 w-full max-w-full xs:w-[300px] sm:w-[500px] md:w-[500px] lg:w-[700px] xl:w-[900px] 2xl:w-[1000px]  justify-center flex"
              onClick={toggleModal}
            >
              <FaRegSquarePlus className="text-blue-500" /> Create New Post
            </div>
          )}
        </div>
        <div className="flex ">
          {posts.length > 0 ? (
            <div className="space-y-5">
              {posts.map(
                (
                  post: {
                    isBookmarked: any;
                    followStatus: ReactNode;
                    likeCount: any;
                    comments: any;
                    user: any;
                    media: any;
                    _id: any;
                    location: string;
                    caption: string;
                  },
                  index: any
                ) => (
                  <>
                    <>
                      <div
                        key={post._id}
                        className="w-full max-w-full xs:w-[300px] sm:w-[500px] md:w-[500px] lg:w-[700px] xl:w-[900px]  p-3 sm:p-4 md:p-5 lg:p-6 bg-white shadow-custom border border-[#D9D9D9] rounded-xl"
                      >
                        <div className="w-full flex justify-end">
                          {post?.isBookmarked ? (
                            <span onClick={() => handleUpdateBookmark(post?._id)}>
                              <FaBookmark size={20} className="text-blue-500" />
                            </span>
                          ) : (
                            <span onClick={() => handleUpdateBookmark(post?._id)}>
                              <FaRegBookmark size={20} className="text-blue-500" />
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div>
                              <img
                                src={
                                  post?.user?.avatar || "/images/profile.png"
                                }
                                alt={post?.user?.originalname}
                                className="rounded-full w-11 h-11"
                              />
                            </div>
                            <div>
                              <div className="flex items-center gap-3 w-full">
                                <Link href={`/users/${post?.user?._id}`}>
                                  <p className="text-black font-semibold text-xl">
                                    {post?.user?.displayname}
                                  </p>
                                </Link>

                                {userData?._id !== post?.user?._id && (
                                  <div
                                    onClick={() =>
                                      handleFollowClick(post?.user?._id)
                                    }
                                    className="text-[#1a73e8] border-2 border-[#1a73e8] p-1 rounded-md flex items-center font-semibold cursor-pointer"
                                  >
                                    {post?.followStatus === "None" ||
                                      post?.followStatus === null
                                      ? "Follow"
                                      : post?.followStatus}
                                  </div>
                                )}
                              </div>

                              <div className="flex items-center gap-1">
                                {post?.location && (
                                  <div className="flex items-center gap-2">
                                    <span>{post?.location}</span>
                                    <IoEarthSharp className="text-[#9ea2ab]" />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div>
                            {userData?._id === post?.user?._id && (
                              <BsThreeDots
                                className="cursor-pointer three-dots-icon"
                                onClick={() => handleIconClick(index)}
                              />
                            )}

                            {showPopupIndex === index && (
                              <div className="popup right-0 mt-2 bg-white shadow-lg rounded border border-gray-600 w-[35px]">
                                <ul>
                                  <li
                                    className="cursor-pointer hover:bg-gray-200 p-2"
                                    onClick={() => handleEdit(post)}
                                  >
                                    <BiSolidEdit />
                                  </li>
                                  <li
                                    className="cursor-pointer hover:bg-gray-200 p-2"
                                    onClick={() => handleDelete(post._id)}
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
                              <button
                                className="absolute top-2 right-2 text-xl font-semibold"
                                onClick={cancelDelete}
                              >
                                &times;
                              </button>
                              <h2 className="text-xl font-semibold mb-4">
                                Confirm Deletion
                              </h2>
                              <p>Are you sure you want to delete this post?</p>
                              <div className="flex  mt-4 gap-3">
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
                        <p className="text-sm mt-3 font-semibold ">
                          {post?.caption}
                        </p>
                        <div>
                          {post.media.map((mediaItem: any, fileIndex: any) => {
                            if (mediaItem.mimetype.startsWith("video")) {

                              return (
                                <div
                                  key={fileIndex}
                                  className="relative !xl:w-full !max-w-full  !h-auto rounded-lg mb-4 mt-3"
                                >
                                  <ReactPlayer
                                    ref={(el: ReactPlayer | null) => {
                                      playerRefs.current[index] = el;
                                    }}
                                    url={mediaItem.url}
                                    width={"auto"}
                                    height={"auto"}
                                    playing={isPlaying[index]}
                                    controls={false}
                                    config={{
                                      file: {
                                        attributes: {
                                          controlsList:
                                            "nodownload nofullscreen noremoteplayback",
                                        },
                                      },
                                    }}
                                  />
                                  <div className="absolute inset-0 flex justify-center items-center">
                                    <button
                                      className="bg-blue-600 text-white p-4 rounded-full opacity-75 hover:opacity-100"
                                      onClick={() => handlePlayPause(index)}
                                    >
                                      {isPlaying[index] ? (
                                        <TbPlayerPauseFilled size={40} />
                                      ) : (
                                        <TbPlayerPlayFilled
                                          size={40}
                                          className="text-blue-500 bg-white w-12 h-12 p-1 rounded-full"
                                        />
                                      )}
                                    </button>
                                  </div>
                                </div>
                              );
                            } else if (mediaItem.mimetype.startsWith("image")) {
                              return (
                                <div
                                  key={fileIndex}
                                  className="image-container mb-4 mt-3"
                                >
                                  <img
                                    src={mediaItem.url}
                                    alt={mediaItem.originalname}
                                    className="xl:w-full max-w-full  h-auto rounded-lg"
                                  />


                                </div>
                              );
                            }
                            return null;
                          })}
                          <div className="">
                            <div className="flex justify-between">
                              <div className="ml-1 flex items-center">
                                {post?.likeCount > 0 && (
                                  <Image
                                    key={index}
                                    src="/images/heart.png"
                                    width={20}
                                    height={22}
                                    alt="heart"
                                    className="inline-block size-6 rounded-full ring-2 ring-white mb-2"
                                  />
                                )}

                                {post?.likeCount > 0 && (
                                  <div className="ml-1">{post?.likeCount}</div>
                                )}
                              </div>
                              <div>
                                {post.comments.length > 0 && (
                                  <p
                                    className="cursor-pointer"
                                    onClick={() => toggleCommentCard(index)}
                                  >
                                    {post.comments.length} Comments
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="w-full h-0.5 bg-[#D9D9D9]"></div>
                          <div className="grid grid-cols-3 mt-2">
                            <div
                              className="flex items-center gap-2 group cursor-pointer"
                              onClick={() => toggleLike(post._id)}
                            >
                              {post?.likeCount > 0 ? (
                                <FaThumbsUp className="text-[#1a73e8] cursor-pointer" />
                              ) : (
                                <FaRegThumbsUp />
                              )}
                              {post?.likeCount > 0 ? "like" : "Like"}

                            </div>

                            <div
                              className="flex items-center gap-2 justify-center cursor-pointer"
                              onClick={() => toggleCommentCard(index)}
                            >
                              <FaRegCommentAlt /> Comment
                            </div>
                            <div className="flex items-center gap-2 justify-end cursor-pointer"  onClick={() => handleShare(post)}>
                              <GrShareOption /> Share
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                    {activeCommentIndex === index && (
                      <div className="bg-white shadow-custom border border-[#D9D9D9] rounded-lg mt-4 p-2">
                        {post.comments.map(
                          (comment: {
                            _id: any;
                            user: {
                              avatar: string | undefined;
                              displayname: any;
                            };
                            content: any;
                          }) => (
                            <div className="flex justify-between items-center">
                              <div
                                key={comment._id}
                                className="flex gap-2 mt-2 mb-3 ml-4"
                              >
                                <img
                                  src={comment?.user?.avatar || "/images/profile.png"}
                                  alt={comment?.user?.displayname}
                                  className="rounded-full w-8 h-8"
                                />
                                <div>
                                  <span className="font-semibold">
                                    {comment?.user?.displayname}
                                  </span>
                                  <p>{comment?.content}</p>
                                </div>
                              </div>
                              <BsThreeDotsVertical
                                onClick={() =>
                                  handleThreeDotsClick(comment._id)
                                }
                                className="cursor-pointer three-dots-icon"
                              />

                              {showPopup === comment._id && (
                                <div className="popup right-0 mt-2 bg-white shadow-lg rounded border border-gray-600 w-[35px]">
                                  <ul>
                                    <li
                                      className="cursor-pointer hover:bg-gray-200 p-2"
                                      onClick={() =>
                                        handleEditClick(
                                          comment._id,
                                          comment.content
                                        )
                                      }
                                    >
                                      <BiSolidEdit />
                                    </li>
                                    <li
                                      className="cursor-pointer hover:bg-gray-200 p-2"
                                      onClick={() =>
                                        handleDeleteClick(comment._id, post._id)
                                      }
                                    >
                                      <MdDelete />
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </div>
                          )
                        )}
                        <div className="flex ml-3 ">
                          <img
                            src={post?.user?.avatar || "/images/profile.png"}
                            alt={post?.user?.originalname}
                            className="rounded-full w-8 h-8"
                          />
                          <textarea
                            placeholder="Add your comment"
                            className="ml-3 p-2 border rounded-md w-full"
                            value={commentContent}
                            onChange={handleCommentChange}
                          />
                        </div>

                        <div className="flex gap-4 p-2 justify-center">
                          <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-md"
                            onClick={() => handleSubmitComment(post._id)}
                          >
                            {editingCommentId ? "Update" : "Send"}
                          </button>
                          <button
                            className="px-4 py-2 bg-[#e5e7eb] border border-[#a8aeb9] text-black rounded-md"
                            onClick={handleCancel}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )
              )}
            </div>
          ) : (
            <p>No posts available.</p>
          )}
        </div>

        <ToastContainer />
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white  rounded-lg shadow-lg relative w-[700px]">
              <div className="">
                <button
                  className="absolute top-2 right-6 text-xl font-semibold mt-3 "
                  onClick={toggleModal}
                >
                  <IoCloseOutline className="text-white" />
                </button>
                <h2 className="text-2xl  mb-4 text-white h-[59px] p-3  bg-blue-500">
                  {editPost ? "Edit Post" : "Create New Post"}
                </h2>
              </div>
              <div className="p-6">
                <UploadPost
                  fetchPosts={fetchPosts}
                  post={editPost} // Pass the post data when editing
                  onClose={toggleModal}
                  toggleModal={undefined}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div className="mt-4 ml-6">
        <FollowRequest />
      </div> */}
    </div>
  );
};

export default FeedCard;
