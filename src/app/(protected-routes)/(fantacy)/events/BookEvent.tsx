import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


interface Event {
    _id?: string;
    name: string;
    description: string;
    capacity: number;
    location: string;
    theme: string;
    startAt: string;
    registrationDeadline: string;
    endAt: string;
    type: string;
    cover?: File | null;
}

interface BookEventProps {
    fetchEvents: () => void;
    onClose: () => void;
    events: Event | null;
    editPost: any
}
const BookEvent: React.FC<BookEventProps> = ({ fetchEvents, onClose, events,editPost }) => {
    const currentDate = new Date().toISOString().split('T')[0];

    const [formData, setFormData]:any = useState({
        name: "",
        description: "",
        capacity: "",
        location: "",
        theme: "",
        startAt: "",
        registrationDeadline: "",
        endAt: "",
        type: "",
        cover: null,
        id: null,  // Store event ID for PUT request
    });

    useEffect(() => {
        if (events) {
            setFormData({
                name: events.name,
                description: events.description,
                capacity: events.capacity,
                location: events.location,
                theme: events.theme,
                cover: events.cover || null,
                startAt: new Date(events.startAt),
                registrationDeadline: new Date(events.registrationDeadline),
                endAt: new Date(events.endAt),
                type: events.type,
                id: events._id,  // Store event ID for PUT request
            });
        }
    }, [events]);

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e:any) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            cover: file, // Update cover image
        });
    };

    const handleDateChange = (date: Date | null, name: string) => {
        setFormData({
            ...formData,
            [name]: date,
        });
    };

    const token = localStorage.getItem("accessToken");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Validate that capacity is a valid number
        if (isNaN(formData.capacity)) {
            toast.error("Capacity must be a valid number.");
            return;
        }

        if (!token) {
            toast.error("Authentication required. Please log in.");
            return;
        }

        try {
            // Create FormData for file upload
            const requestPayload = new FormData();
            requestPayload.append("name", formData.name);
            requestPayload.append("description", formData.description);
            requestPayload.append("capacity", formData.capacity); // Convert capacity to number
            requestPayload.append("location", formData.location);
            requestPayload.append("theme", formData.theme);
            requestPayload.append("startAt", formData.startAt.toISOString());
            requestPayload.append("registrationDeadline", formData.registrationDeadline.toISOString());
            requestPayload.append("endAt", formData.endAt.toISOString());
            requestPayload.append("type", formData.type);

            // If cover image is selected, append it to FormData
            if (formData.cover) {
                requestPayload.append("cover", formData.cover);
            }

            let response;
            if (formData.id) {
                // If ID is present, it's an update (PUT request)
                response = await axios.put(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/events/${formData.id}`,
                    requestPayload,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "multipart/form-data", // Indicate multipart/form-data for file upload
                        },
                    }
                );
                toast.success("Event updated successfully!");
            } else {
                // If no ID is present, it's a create (POST request)
                response = await axios.post(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/events`,
                    requestPayload,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "multipart/form-data", // Indicate multipart/form-data for file upload
                        },
                    }
                );
                toast.success("Event created successfully!");
            }

            // After success, fetch events and close modal
            fetchEvents();
            onClose();

            // Reset form data
            setFormData({
                name: "",
                description: "",
                capacity: "",
                location: "",
                theme: "",
                cover: null,
                registrationDeadline: new Date(currentDate),
                startAt: new Date(currentDate),
                endAt: new Date(currentDate),
                type: "",
                id: null, // Reset ID
            });
        } catch (error) {
            toast.error("Error saving event.");
            console.error(error);
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label>
                Event Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2.5 text-sm rounded-lg border border-[#d1d5db] text-black  bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
                    placeholder="Event Name"
                />
            </label>
            <label>
                Description:
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-2.5 text-sm rounded-lg border border-[#d1d5db] text-black  bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
                    placeholder="Description"
                />
            </label>
            <label>
                Theme Name:
                <input
                    type="text"
                    name="theme"
                    value={formData.theme}
                    onChange={handleChange}
                    className="w-full p-2.5 text-sm rounded-lg border border-[#d1d5db] text-black  bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
                    placeholder="Theme Name"
                />
            </label>

            <div className="gap-4 flex">
                <label className="w-full">
                    Start Date
                    <DatePicker
                        selected={formData.startAt}
                        onChange={(date) => handleDateChange(date, 'startAt')}
                        showTimeSelect
                        timeIntervals={15}
                        dateFormat="Pp"
                        className="w-full p-2.5 text-sm rounded-lg border border-[#d1d5db] text-black  bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
                    />
                </label>
                <label className="w-full">
                    End Date
                    <DatePicker
                        selected={formData.endAt}
                        onChange={(date) => handleDateChange(date, 'endAt')}
                        showTimeSelect
                        timeIntervals={15}
                        dateFormat="Pp"
                        minDate={formData.startAt}
                        className="w-full p-2.5 text-sm rounded-lg border border-[#d1d5db] text-black  bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
                    />
                </label>
            </div>

            <label>
                Event Type:
                <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full p-3 text-sm rounded-lg border border-[#d1d5db] text-black  bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
                >
                    <option value="">Select Event Type</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                </select>
            </label>
            <label>
                Location:
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full p-2.5 text-sm rounded-lg border border-[#d1d5db] text-black  bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
                    placeholder="Location"
                />
            </label>
            <label>
                Capacity:
                <input
                    type="number"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    className="w-full p-2.5 text-sm rounded-lg border border-[#d1d5db] text-black  bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
                    placeholder="Capacity"
                />
            </label>
            <label className="w-full">
                Registration Deadline
                <DatePicker
                    selected={formData.registrationDeadline}
                    onChange={(date) => handleDateChange(date, 'registrationDeadline')}
                    showTimeSelect
                    timeIntervals={15}
                    dateFormat="Pp"
                    className="w-full p-2.5 text-sm rounded-lg border border-[#d1d5db] text-black  bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
                />
            </label>
            <label>
                Cover Image:
                <input
                    type="file"
                    name="cover"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full p-2.5 text-sm rounded-lg border border-[#d1d5db] text-black bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
                />
              {formData.cover && formData.cover instanceof File && (
    <div className="mt-2">
        <img
            src={URL.createObjectURL(formData.cover)}  // Only call createObjectURL on a valid File
            alt="Cover Preview"
            className="w-32 h-32 object-cover"
        />
    </div>
)}
            </label>
            <ToastContainer />
            <div className="flex gap-5 items-center justify-between">
                <div className="gap-5 flex">
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
                        {formData.id ? 'Update Event' : 'Create Event'}
                    </button>
                    <button type="button" onClick={onClose} className="border text-blue-500 border-blue-500 p-2 rounded mt-4">
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
};

export default BookEvent;
