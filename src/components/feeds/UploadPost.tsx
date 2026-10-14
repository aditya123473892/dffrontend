import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UploadPost = ({ post, onClose, fetchPosts, toggleModal }: { post?: any; fetchPosts: any, toggleModal: any, onClose: () => void }) => {
    const [caption, setCaption] = useState(post?.caption || "");
    const [location, setLocation] = useState(post?.location || "");
    const [visibility, setVisibility] = useState(post?.visibility || "");
    // const [status, setStatus] = useState(post?.status || "");
    const [media, setMedia] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === "caption") setCaption(value);
        if (name === "location") setLocation(value);
        if (name === "visibility") {
            setVisibility(value);
            // if (value === 'private') {
            //     setStatus('approved');
            // } else if (value === 'public') {
            //     setStatus('pending');
            // }
        }
        // if (name === "status") setStatus(value);
    };

    // Handle file input change
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            setMedia(selectedFiles); // Store the selected files in state

            const previewUrls = selectedFiles.map(file => {
                if (file.type.startsWith('image')) {
                    return URL.createObjectURL(file); // For images, create object URLs
                } else if (file.type.startsWith('video')) {
                    return URL.createObjectURL(file); // For videos, create object URLs
                }
                return ''; // In case the file is not an image or video
            });

            setImagePreviews(previewUrls); // Store the preview URLs in state
        }
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Form validation
        if (!caption || !location || !visibility || !status || media.length === 0) {
          
        }

        const formData = new FormData();

        formData.append("caption", caption);
        formData.append("location", location);
        formData.append("visibility", visibility);
        // formData.append("status", status);

        media.forEach((file) => {
            formData.append("media", file); // "media" is the name that the server will expect
        });

        const token = localStorage.getItem("accessToken");

        try {
            const url = post ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/${post._id}` : `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts`;
            const method = post ? "put" : "post";


            await axios({
                method,
                url,
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data", // Necessary for FormData
                },
                data: formData,
            });

            fetchPosts();
            toast.success(post ? "Post updated successfully!" : "Post created successfully!");
            onClose();
        } catch (error) {
            // Show error toast if submission fails
            toast.error("Failed to submit the post. Please try again.");
            console.error(error);
        }
    };

    const handleRemoveImage = (index: number) => {
        const updatedMedia = [...media];
        updatedMedia.splice(index, 1); // Remove the file from media
        setMedia(updatedMedia);
        const updatedPreviews = [...imagePreviews];
        updatedPreviews.splice(index, 1); // Remove the preview URL
        setImagePreviews(updatedPreviews);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="block text-sm font-medium text-gray-700">
                Caption:
                <input
                    type="text"
                    name="caption"
                    value={caption}
                    onChange={handleInputChange}
                    className="w-full p-3 text-sm rounded-lg border mt-1 border-[#d1d5db] bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="caption"
                />
            </label>
            <label className="block text-sm font-medium text-gray-700">
                Location:
                <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={handleInputChange}
                    className="w-full p-3 text-sm rounded-lg border mt-1 border-[#d1d5db] bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="location"
                />
            </label>
            <label className="block text-sm font-medium text-gray-700">
                Visibility:
                <select
                    name="visibility"
                    value={visibility}
                    onChange={handleInputChange}
                    className="w-full p-3 text-sm rounded-lg border mt-1 border-[#d1d5db] bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"

                >
                    <option>select Visibility </option>
                    <option value="private">Private</option>
                    <option value="public">Public</option>
                    <option value="friends">Friends</option>
                    <option value="custom">Custom</option>
                </select>
            </label>
            {/* <label className="block text-sm font-medium text-gray-700">
                Status:
                <select
                    name="status"
                    value={status}
                    onChange={handleInputChange}
                    disabled={visibility === 'private' || visibility === 'public'}
                    className="w-full p-3 text-sm rounded-lg border mt-1 border-[#d1d5db] bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"

                >
                    <option>select Status </option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                </select>
            </label> */}
            <label>
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-500 file:text-white
                    hover:file:bg-blue-"
                />
            </label>
            <div className="mt-4">
                {imagePreviews.length > 0 && (
                    <div className="flex gap-4">
                        {imagePreviews.map((preview, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={preview}
                                    alt={`preview-${index}`}
                                    style={{ width: '100px', height: 'auto' }}
                                    className="rounded"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveImage(index)}
                                    className="absolute top-0 right-0 bg-gray-800 text-black rounded-full p-1 text-sm"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <ToastContainer />
            <div className="flex  gap-5 justify-end">
                <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
                    {post ? "Update Post" : "Create Post"}
                </button>
                <button onClick={onClose} className=" border text-blue-500 border-blue-500  p-2 rounded mt-4">
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default UploadPost;
