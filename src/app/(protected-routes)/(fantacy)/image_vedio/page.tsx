"use client"; // Ensure this is the very first line

import { useState, useRef, useCallback, useEffect, Key, useMemo } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { TbPlayerPlayFilled, TbPlayerPauseFilled } from "react-icons/tb";
import ReactPlayer from "react-player";
import { getApi } from "@/common/apis/main.api";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";

type Props = {
  params: {
    id: string;
  };
};
type PlayerRef = React.RefObject<any>; // Replace 'any' with the actual type of the player (e.g., VideoPlayer type if available)

const UserProfilePage = ({ params: { id } }: Props) => {
  const [showPhoto, setShowPhoto] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [privateview, setPrivate] = useState(false)

  // Handle the photo button click
  const handlePhotoClick = () => {
    setShowPhoto(true);
    setShowVideo(false);
    setPrivate(false)
  };

  // Handle the video button click
  const handleVideoClick = () => {
    setShowVideo(true);
    setShowPhoto(false);
    setPrivate(false)
  };

  const handleprivate = () => {
    setPrivate(true)
    setShowPhoto(false)
    setShowVideo(false);

  }

  const [isPlaying, setIsPlaying] = useState<boolean[]>([]); // Track playing state of each video
  const playerRefs: any = useRef<PlayerRef[]>([]); // Array of refs for video players

  // Function to handle play/pause
  const handlePlayPause = useCallback(
    (index: number) => {
      const newState = [...isPlaying];
      newState[index] = !newState[index]; // Toggle play/pause state for the specific video

      // Control the specific video
      if (newState[index]) {
        playerRefs.current[index]?.current?.getInternalPlayer().play(); // Play the video
      } else {
        playerRefs.current[index]?.current?.getInternalPlayer().pause(); // Pause the video
      }

      setIsPlaying(newState); // Update the playing state
    },
    [isPlaying]
  );

  const [userData, setUserData]: any = useState(null);
  const [error, setError] = useState("");

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("accessToken");

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

  useEffect(() => {
    if (id !== "own-profile") {
      fetchUserData();
    }
  }, [id]);

  const [posts, setPosts] = useState<any>([]);

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (token) {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/private/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPosts(response.data.data.posts);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (id !== "own-profile") {
      fetchPosts();
    }
  }, [id]);

  const userId = useMemo(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }, []);

  const viewerId = userId?._id;

  const [serposts, setserpostsPosts] = useState<any>(null); // Initialize as null

  const userPost = async () => {
    try {
      const token = localStorage.getItem("accessToken");
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
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/follow/followers`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFollowRequests(response.data.data.followers); // Set the follow requests data
      }
    } catch (err) {
      console.error(err); // Handle error
    }
  };

  const fetchFollowingsRequests = async () => {
    try {
      if (token) {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/follow/following`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFollowingsRequests(response.data.data.following); // Set the follow requests data
      }
    } catch (err) {
      console.error(err); // Handle error
    }
  };

  useEffect(() => {
    fetchFollowingsRequests();
    fetchFollowRequests();
  }, []);
  const [totalDuration, setTotalDuration] = useState<string>("0:00"); // State for total video duration

  useEffect(() => {
    let totalSeconds = 0;

    // Loop through the media in each post and calculate total video duration
    posts.forEach((post: any) => {
      post.media.forEach((item: any) => {
        if (item.mimetype.includes("video")) {
          const videoElement = document.createElement("video");
          videoElement.src = item.url;

          // When video metadata is loaded, add its duration to the total
          videoElement.onloadedmetadata = () => {
            totalSeconds += videoElement.duration;
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = Math.floor(totalSeconds % 60);
            setTotalDuration(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
          };
        }
      });
    });
  }, [posts]);

  return (
    <div>
      <h2 className="font-bold text-4xl mb-3 justify-center text-center mt-5 text-blue-500">
        All Posts
      </h2>
      <div className="bg-white sx:my-8 sx:mx-[135px] shadow-lg sx:px-20 p-4 rounded-2xl border border-[#dcdfe4]">

        <ToastContainer />

        <div className="flex gap-8 justify-center mt-4">
          <div
            className={`flex items-center gap-3 cursor-pointer ${showPhoto ? "text-blue-500" : "text-gray-600"
              }`}
            onClick={handlePhotoClick}
          >
            <MdAddToPhotos /> <span>Photo</span>
          </div>
          <div
            className={`flex items-center gap-2 cursor-pointer ${showVideo ? "text-blue-500" : "text-gray-600"
              }`}
            onClick={handleVideoClick}
          >
            <div
              className={` w-4 h-4 rounded-full items-center justify-center flex ${showVideo ? "bg-blue-500" : "bg-[#949494]"
                }`}
            >
              <TbPlayerPlayFilled className="text-white" size={12} />
            </div>
            <span>Video</span>
          </div>
          <div
            className={`flex items-center gap-3 cursor-pointer ${privateview ? "text-blue-500" : "text-gray-600"
              }`}
            onClick={handleprivate}
          >
          <RiGitRepositoryPrivateFill /> <span>Private Post</span>
          </div>
        </div>

        <div className="flex gap-4 justify-center mt-3">




          {showPhoto && (
            <>
              {posts.filter((post: { media: { mimetype: string }[]; visibility: string }) =>
                post.media.some((item: { mimetype: string }) =>
                  item.mimetype.startsWith("image/") && post.visibility === "public" // Check if post is public
                )
              ).length > 0 ? (
                <div className="sm:grid sm:grid-cols-3 gap-4">
                  {posts.map(
                    (post: { media: any[]; _id: Key | null | undefined; visibility: string }) =>
                      post.media.map((mediaItem) => {
                        if (mediaItem.mimetype.startsWith("image/") && post.visibility === "public") {
                          return (
                            <div
                              key={post._id}
                              className="rounded-xl p-3 border border-[#c0c4c4] mb-3"
                            >
                              <div className="image-container">
                                <img
                                  src={mediaItem.url}
                                  alt={mediaItem.originalname}
                                  style={{
                                    width: "476px",
                                    height: "290px",
                                    borderRadius: "8px",
                                  }} // Image styling
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
              {posts.filter((post: { media: { mimetype: string }[]; visibility: string }) =>
                post.media.some((item: { mimetype: string }) =>
                  item.mimetype.startsWith("video/") && post.visibility === "public" // Check if post is public
                )
              ).length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                  {posts.map(
                    (
                      post: { media: any[]; _id: Key | null | undefined; visibility: string },
                      index: number
                    ) =>
                    post.media.map((mediaItem) => {
                        if (mediaItem.mimetype.startsWith("video/") && post.visibility === "public") {
                        return (
                            <div
                              key={post._id}
                              className="max-w-[400px] w-[400px] rounded-xl border border-[#c0c4c4]"
                            >
                              <div className="relative w-[400px] h-[290px] gap-5">
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
                                        controlsList: "nodownload nofullscreen noremoteplayback",
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



          {privateview && (
            <>
              {posts.filter((post: { media: { mimetype: string }[]; visibility: string }) =>
                post.media.some((item: { mimetype: string }) =>
                  item.mimetype.startsWith("image/") && post.visibility === "private" // Check if post is public
                )
              ).length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                  {posts.map(
                    (post: { media: any[]; _id: Key | null | undefined; visibility: string }) =>
                      post.media.map((mediaItem) => {
                        if (mediaItem.mimetype.startsWith("image/") && post.visibility === "private") {
                          return (
                            <div
                              key={post._id}
                              className="max-w-[400px] w-[400px] rounded-xl p-3 border border-[#c0c4c4]"
                            >
                              <div className="image-container">
                                <img
                                  src={mediaItem.url}
                                  alt={mediaItem.originalname}
                                  style={{
                                    width: "476px",
                                    height: "290px",
                                    borderRadius: "8px",
                                  }} // Image styling
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
          {privateview && (
            <>
              {posts.filter((post: { media: { mimetype: string }[]; visibility: string }) =>
                post.media.some((item: { mimetype: string }) =>
                  item.mimetype.startsWith("video/") && post.visibility === "private" // Check if post is public
                )
              ).length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                  {posts.map(
                    (
                      post: { media: any[]; _id: Key | null | undefined; visibility: string },
                      index: number
                    ) =>
                      post.media.map((mediaItem) => {
                        if (mediaItem.mimetype.startsWith("video/") && post.visibility === "private") {
                          return (
                            <div
                              key={post._id}
                              className="max-w-[400px] w-[400px] rounded-xl border border-[#c0c4c4]"
                            >
                              <div className="relative w-[400px] h-[290px] gap-5">
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
                                        controlsList: "nodownload nofullscreen noremoteplayback",
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
                            </div>
                          );
                        }
                        return null;
                      })
                  )}
                </div>
              ) : (
                <p></p>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
