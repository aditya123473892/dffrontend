'use client'; // Ensure this is the very first line

import { useState, useRef, useCallback, useEffect, Key, useMemo } from 'react';
import { MdAddToPhotos } from 'react-icons/md';
import { TbPlayerPlayFilled, TbPlayerPauseFilled } from 'react-icons/tb';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { getApi } from '@/common/apis/main.api';
import axios from 'axios';
import EditProfile from '../EditProfile';
import { IoCloseOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { FaRegSquarePlus } from 'react-icons/fa6';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UploadPost from '@/components/feeds/UploadPost';
import Link from "next/link";
import { FaEdit } from 'react-icons/fa';
import { FaMapMarkerAlt } from "react-icons/fa";

// import Follower from '../followers';

type Props = {
  params: {
    id: string;
  };
};
type PlayerRef = React.RefObject<any>; // Replace 'any' with the actual type of the player (e.g., VideoPlayer type if available)


const UserProfilePage = ({ params: { id } }: Props) => {
  const [showPhoto, setShowPhoto] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  // Handle the photo button click
  const handlePhotoClick = () => {
    setShowPhoto(true);
    setShowVideo(false); // Hide video if photo is shown
  };
  const [isModalOpens, setIsModalOpens] = useState(false);
  const toggleModals = () => {
    setIsModalOpens(!isModalOpens);
  };
  // Handle the video button click
  const handleVideoClick = () => {
    setShowVideo(true);
    setShowPhoto(false); // Hide photo if video is shown
  };


  const [isPlaying, setIsPlaying] = useState<boolean[]>([]); // Track playing state of each video
  const playerRefs: any = useRef<PlayerRef[]>([]); // Array of refs for video players

  // Function to handle play/pause
  const handlePlayPause = useCallback((index: number) => {
    const newState = [...isPlaying];
    newState[index] = !newState[index]; // Toggle play/pause state for the specific video

    // Control the specific video
    if (newState[index]) {
      playerRefs.current[index]?.current?.getInternalPlayer().play(); // Play the video
    } else {
      playerRefs.current[index]?.current?.getInternalPlayer().pause(); // Pause the video
    }

    setIsPlaying(newState); // Update the playing state
  }, [isPlaying]);

  const [userData, setUserData]: any = useState(null);
  const [error, setError] = useState('');

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      if (token) {
        const response = await getApi({
          url: '/auth/me',
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


  useEffect(() => {
    if (id === "own-profile") {
      fetchUserData();
    }
  }, [id]);

  const [posts, setPosts] = useState<any>([]);

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/private/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(response.data.data.posts);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (id === "own-profile") {
      fetchPosts();
    }
  }, [id]);



  const userId = useMemo(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }, []);

  const viewerId = userId?._id

  const [serposts, setserpostsPosts] = useState<any>(null); // Initialize as null
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editPost, setEditPost] = useState<any>(null); // To store the post to be edited
  const handleEdit = (post: any) => {
    setEditPost(post); // Set the post to be edited
    toggleModal(); // Open the modal
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const userPost = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${id}`, // Pass `id` in the URL
          {
            params: {
              viewerId: viewerId, // Pass `viewerId` as a query parameter
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPosts(response.data.data.user.usersPost); // Set the user posts data
        setserpostsPosts(response.data.data.user); // Set the user data
      }
    } catch (err) {
      console.error(err); // Handle error
    }
  };


  useEffect(() => {
    if (id !== "own-profile") {
      userPost();
    }
  }, [id]);

  const token = localStorage.getItem("accessToken");
  const [followRequests, setFollowRequests] = useState<any[]>([]);
  const [followingsRequests, setFollowingsRequests] = useState<any[]>([]);
  const fetchFollowRequests = async () => {
    try {
      if (token) {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/follow/followers`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFollowRequests(response.data.data.followers); // Set the follow requests data
      }
    } catch (err) {
      console.error(err); // Handle error
    }
  };

  const fetchFollowingsRequests = async () => {
    try {
      if (token) {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/follow/following`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFollowingsRequests(response.data.data.following); // Set the follow requests data
      }
    } catch (err) {
      console.error(err); // Handle error
    }
  };

  useEffect(() => {
    fetchFollowingsRequests()
    fetchFollowRequests();
  }, []);
  const [totalDuration, setTotalDuration] = useState<string>('0:00'); // State for total video duration

  useEffect(() => {
    let totalSeconds = 0;

    // Loop through the media in each post and calculate total video duration
    posts.forEach((post: any) => {
      post.media.forEach((item: any) => {
        if (item.mimetype.includes('video')) {
          const videoElement = document.createElement('video');
          videoElement.src = item.url;

          // When video metadata is loaded, add its duration to the total
          videoElement.onloadedmetadata = () => {
            totalSeconds += videoElement.duration;
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = Math.floor(totalSeconds % 60);
            setTotalDuration(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
          };
        }
      });
    });
  }, [posts]);

  const [showFollowers, setShowFollowers] = useState(false);
  const handleFollowerClick = () => {
    setShowFollowers(!showFollowers);
  };

  const handleClose = () => {
    setShowFollowers(false); // Close the followers list by setting state to false
  };

  const [showFollowing, setshowFollowing] = useState(false);
  const handleFolloweringClick = () => {
    setshowFollowing(!showFollowing);
  };

  const handlefollowingClose = () => {
    setshowFollowing(false); // Close the followers list by setting state to false
  };


  const sendRequest = async (userId: any) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/post-request`,
        {
          userId: userId,
        }, // The body of the request, if any (empty here, add data if needed)
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      console.log('Request sent successfully:', response);
      toast.success(response.data.message); // Success toast
    } catch (error: any) {
      console.error('Error sending request:', error);
      // Check if the error response exists, then show the error message
      if (error.response && error.response.data) {
        toast.error(error.response.data.message); // Error toast
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };


  return (
    <div className="bg-white my-8 xs:mx-3 xl:mx-[135px] shadow-lg sx:px-20 xs:p-4 rounded-2xl border border-[#dcdfe4]">
      <div className="sm:flex items-center xs:gap-8 p-3">

        {serposts ? (
          <div className="image-container">
            <img
              src={serposts?.avatar || "/images/profile.png"}
              alt={serposts?.originalname || "User Avatar"}
              className="rounded-full border border-[#b5b7bb] w-[50px] h-[50px] sm:w-[75px] sm:h-[75px] md:w-[100px] md:h-[100px] lg:w-[125px] lg:h-[125px] xl:w-[150px] xl:h-[150px]"
            />

            <p className="text-black mt-3">
              {serposts?.displayname || userData?.displayname}
            </p>
            {/* Display the user's displayname */}
          </div>
        ) : (
          <div className="text-center">
            {/* Placeholder when user data is not loaded */}
            <p className="text-black"> <img
              src={userData?.avatar || "/images/profile.png"}
              alt={userData?.originalname || 'User Avatar'} // Provide fallback for alt text
              className="rounded-full border border-[#b5b7bb] xs:w-[50px] xs:h-[50px] sm:w-[75px] sm:h-[75px] md:w-[100px] md:h-[100px] lg:w-[125px] lg:h-[125px] xl:w-[150px] xl:h-[150px]"
            /></p>
          </div>
        )}
        <ToastContainer />
        <div>
          <div className='flex gap-8 mb-5 justify-between'>
            {serposts ? (
              <p className="text-black font-semibold">{serposts?.displayname} </p>
            ) : (
              <p className="text-black font-semibold">{userData?.displayname}</p>
            )}
            {!serposts && (
              <button className='bg-blue-500 p-2 py-2 rounded-md text-white text-sm flex items-center gap-2' onClick={toggleModals}> <FaEdit /> Edit Profile</button>

            )}
          </div>
          <div className="flex gap-9">
            <div className='text-center'>
              <p className='font-semibold text-xl'>{posts.length}</p>
              <p className='text-sm '> Posts</p>
            </div>
            <div>
              {
                followRequests?.length > 0 && (
                  <div className='text-center'><p className='font-semibold text-xl' onClick={handleFollowerClick}>{followRequests.length}</p>
                    <p onClick={handleFollowerClick} className='text-sm '> Followers</p></div>
                )
              }

            </div>
            <div>
              <div>
                {followingsRequests?.length > 0 ? (
                  <div className="text-gray-700 text-center">
                    <p onClick={handleFolloweringClick} className='font-semibold text-xl'>{followingsRequests.length}</p>
                    <p onClick={handleFolloweringClick} className='text-sm '> Following</p>
                  </div>
                ) : (
                  <div className="text-gray-500">
                    {/* <p>0 Following</p> */}
                  </div>
                )}
              </div>
            </div>


            {showFollowers && Array.isArray(followRequests) && followRequests.length > 0 ? (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50">
                <div className="bg-white  rounded-lg shadow-lg relative w-[400px]">
                  <div className=" justify-between flex  text-xl font-semibold p-2 rounded-md bg-[#e5e7eb]" >
                    <div >  Followers</div><div onClick={handleClose} className='cursor-pointer'> &times;</div>
                  </div>

                  <div className="followers-list p-4 bg-gray-100  rounded-md">
                    {followRequests.map((follower, index) => (
                      <div key={follower._id} className="flex items-center gap-3  py-2">
                        <Link href={`/users/${follower?._id}`} className='flex items-center justify-between gap-3  py-2 w-full p-2 rounded-md'>
                          <img
                            src={follower.avatar || "/images/profile.png"}
                            alt={follower.displayname}
                            className="rounded-full w-10 h-10"
                          />

                          <div>
                            <div className="font-semibold">{follower.displayname}</div>
                          </div>
                          <div className="ml-auto text-gray-600">{index + 1} Followers</div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <> <div className="text-gray-500">
                {/* <p>0 Followers</p> */}
              </div></>
            )}

          </div>

          {showFollowing && Array.isArray(followingsRequests) && followingsRequests.length > 0 ? (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50">
              <div className="bg-white  rounded-lg shadow-lg relative w-[400px] border border-[#a8aeb9]">
                <div className=" justify-between flex  text-xl font-semibold p-2 rounded-md bg-[#e5e7eb]" >
                  <div >  Following</div><div onClick={handlefollowingClose} className='cursor-pointer'> &times;</div>
                </div>
                <div className="followers-list  bg-gray-100  rounded-md p-4">
                  {followingsRequests.map((follower, index) => (
                    <div key={follower._id} className="flex items-center gap-3  py-2">
                      <Link href={`/users/${follower?._id}`} className='flex items-center justify-between gap-3  py-2 w-full'>
                        <img
                          src={follower.avatar || "/images/profile.png"}
                          alt={follower.displayname}
                          className="rounded-full w-10 h-10"
                        />
                        <div>
                          <div className="font-semibold">{follower.displayname}</div>
                        </div>
                        <div className="ml-auto text-gray-600">{index + 1} Followers</div></Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-gray-500 mt-4"></div>
          )}

          <div className='xs:hidden md:block w-full h-[1px]  bg-blue-500'></div>
          <div className="xl:flex    xs:gap-32 mt-4">
            {serposts ? (
              <p className="text-black">{serposts?.firstName} {serposts?.lastName}</p>
            ) : (
              <p className="text-black">{userData?.firstName} {userData?.lastName}</p>
            )}

            {serposts ? (
              <p className="text-black">{serposts?.gender} </p>
            ) : (
              <p className="text-black">{userData?.gender} </p>
            )}
            {serposts ? (
              <p className="text-gray-600"><FaMapMarkerAlt />

                {serposts?.city} , {serposts?.state} , India</p>
            ) : (
              <p className="text-gray-600 text-sm sm:flex items-center gap-2"><FaMapMarkerAlt />
                {userData?.city} , {userData?.state} , India</p>
            )}
          </div>
          <div className='w-full h-[1px]  bg-blue-500 mt-4'></div>

        </div>

      </div>
      <div className='flex items-center justify-end'>
        {serposts && (
          <button
            className="bg-blue-500 p-2 py-2 rounded-md text-white text-sm"
            title="If you like to view my private posts, please follow me and send a request."
            onClick={() => sendRequest(serposts._id)}
          >
            Send Request
          </button>
        )}


      </div>

      {isModalOpens && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white  rounded-lg shadow-lg relative w-[700px]">
            <button className="absolute top-2 right-6 text-xl font-semibold mt-2.5 " onClick={toggleModals}><IoCloseOutline className="text-white" /></button>
            <h2 className="text-2xl  mb-4 text-white h-[59px] p-3  bg-blue-500"><span className='ml-2'>Edit Profile</span> </h2>
            <div className='ml-6'>
              <p className="text-sm text-[#a9afb9]"  > <span className="text-black ">Note : - </span>To edit Email and Phone Number, first have to obtain permissions from the.</p>
              <span className="text-sm text-[#a9afb9] ml-[58px]">Administrator</span>
            </div>
            <div className="p-6 h-[500px] overflow-scroll">
              <EditProfile
                fetchUserData={fetchUserData}
                userData={userData}
                onClose={toggleModals}
              />
            </div>
          </div>
        </div>
      )}
      {serposts ? (
        <p className="text-black">{serposts?.firstName} {serposts?.lastName}</p>
      ) : (
        <p className="text-black"> {userData?.firstName} {userData?.lastName}</p>
      )}
      {serposts ? (
        <p className="text-[#c4d5f8] text-sm">{serposts?.bio}</p>
      ) : (
        <p className="text-[#999ca3] text-sm">{userData?.bio}</p>
      )}

      {serposts ? (
        <p className="text-black  text-sm font-semibold">{serposts?.intrests?.join(" , ")}</p>
      ) : (
        <p className="text-black text-sm font-semibold">{userData?.intrests?.join(" , ")}</p>
      )}



      {userData && userData.roles.includes('user') && (
        <div className='justify-end flex'>
          <button className="bg-blue-500 text-white p-2 text-sm mt-2 rounded flex items-center gap-2" onClick={toggleModal}>  <FaRegSquarePlus className="text-white" /> Create New Post</button>
        </div>
      )}

      <ToastContainer />
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white  rounded-lg shadow-lg relative w-[700px]">
            <div className="">
              <button className="absolute top-2 right-6 text-xl font-semibold mt-3 " onClick={toggleModal}><IoCloseOutline className="text-white" /></button>
              <h2 className="text-2xl  mb-4 text-white h-[59px] p-3  bg-blue-500">{editPost ? 'Edit Post' : 'Create New Post'}</h2>
            </div>
            <div className="p-6">
              <UploadPost
                fetchPosts={fetchPosts}
                post={editPost} // Pass the post data when editing
                onClose={toggleModal} toggleModal={undefined} />
            </div>
          </div>
        </div>
      )}

      <div className="w-full h-0.5 bg-[#8773FF] mt-4"></div>

      <div className="flex gap-8 justify-center mt-4">
        <div className={`flex items-center gap-3 cursor-pointer ${showPhoto ? 'text-blue-500' : 'text-gray-600'}`} onClick={handlePhotoClick}>
          <MdAddToPhotos /> <span>Photo</span>
        </div>
        <div className={`flex items-center gap-2 cursor-pointer ${showVideo ? 'text-blue-500' : 'text-gray-600'}`}
          onClick={handleVideoClick}>
          <div className={` w-4 h-4 rounded-full items-center justify-center flex ${showVideo ? 'bg-blue-500' : "bg-[#949494]"}`}>
            <TbPlayerPlayFilled className="text-white" size={12} />
          </div>
          <span>Video</span>
        </div>
      </div>

      <div className="flex gap-4 justify-center mt-3">
        {showPhoto && (
          <>
            {posts.filter((post: { media: { mimetype: string; }[]; }) => post.media.some((item: { mimetype: string; }) => item.mimetype.startsWith('image/'))).length > 0 ? (
              <div className="md:grid md:grid-cols-3 gap-4">
                {posts.map((post: { media: any[]; _id: Key | null | undefined; }) =>
                  post.media.map((mediaItem) => {
                    if (mediaItem.mimetype.startsWith('image/')) {
                      return (
                        <div key={post._id} className="rounded-xl p-3 border border-[#c0c4c4] mb-3">
                          <div className="image-container">
                            <img
                              src={mediaItem.url}
                              alt={mediaItem.originalname}
                              style={{ width: '476px', height: '290px', borderRadius: '8px' }}
                            />
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })
                )}
              </div>
            ) : (
              <p>No posts available.</p>
            )}
          </>
        )}

        {showVideo && (
          <>
            {posts.filter((post: { media: { mimetype: string; }[]; }) => post.media.some((item: { mimetype: string; }) => item.mimetype.startsWith('video/'))).length > 0 ? (
              <div className="grid grid-cols-3 gap-4">
                {posts.map((post: { media: any[]; _id: Key | null | undefined; }, index: number) =>
                  post.media.map((mediaItem) => {
                    if (mediaItem.mimetype.startsWith('video/')) {
                      return (
                        <div key={post._id} className="max-w-[400px] w-[400px] rounded-xl border border-[#c0c4c4]">
                          <div className="relative w-[400px] h-[290px]  gap-5">
                            <ReactPlayer
                              ref={(el: ReactPlayer | null) => {
                                playerRefs.current[index] = el; // Assign the element to the ref
                              }}
                              url={mediaItem.url}
                              width="400px"
                              height="290px"
                              playing={isPlaying[index]}
                              controls={false}
                              config={{
                                file: {
                                  attributes: {
                                    controlsList: 'nodownload nofullscreen noremoteplayback',
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
                                  <TbPlayerPlayFilled size={40} className="text-blue-500 bg-white w-12 h-12 p-1 rounded-full" />
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })
                )}
              </div>
            ) : (
              <p>No posts available.</p>
            )}
          </>
        )}

      </div>
    </div>
  );
};

export default UserProfilePage;
