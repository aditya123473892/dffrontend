import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import Select from 'react-select';
import citiesData from "./cities.json";

const options: any = [
    { value: 'sports', label: 'Sports' },
    { value: 'music', label: 'Music' },
    { value: 'technology', label: 'Technology' },
    { value: 'reading', label: 'Reading' },
    { value: 'traveling', label: 'Traveling' },
    { value: 'photography', label: 'Photography' },
    { value: 'cooking', label: 'Cooking' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'art', label: 'Art' },
    { value: 'fitness', label: 'Fitness' },
    { value: 'writing', label: 'Writing' },
    { value: 'gardening', label: 'Gardening' },
    { value: 'dancing', label: 'Dancing' },
    { value: 'swimming', label: 'Swimming' },
    { value: 'cycling', label: 'Cycling' },
    { value: 'hiking', label: 'Hiking' },
    { value: 'movies', label: 'Movies' },
    { value: 'painting', label: 'Painting' },
    { value: 'yoga', label: 'Yoga' },
    { value: 'coding', label: 'Coding' },
    { value: 'singing', label: 'Singing' },
    { value: 'fishing', label: 'Fishing' },
    { value: 'surfing', label: 'Surfing' },
    { value: 'skiing', label: 'Skiing' },
    { value: 'motorsports', label: 'Motorsports' },
    { value: 'volunteering', label: 'Volunteering' },
    { value: 'watching_tv', label: 'Watching TV' },
    { value: 'bird_watching', label: 'Bird Watching' },
    { value: 'astronomy', label: 'Astronomy' },
    { value: 'pets', label: 'Pets' },
    { value: 'knitting', label: 'Knitting' },
    { value: 'camping', label: 'Camping' },
    { value: 'beekeeping', label: 'Beekeeping' },
    { value: 'collecting', label: 'Collecting' },
    { value: 'rollerblading', label: 'Rollerblading' },
    { value: 'pottery', label: 'Pottery' },
    { value: 'horseback_riding', label: 'Horseback Riding' },
    { value: 'poetry', label: 'Poetry' },
    { value: 'motorcycling', label: 'Motorcycling' },
    { value: 'sculpture', label: 'Sculpture' },
    { value: 'luxury_cars', label: 'Luxury Cars' },
    { value: 'origami', label: 'Origami' },
    { value: 'beer_tasting', label: 'Beer Tasting' },
    { value: 'wine_tasting', label: 'Wine Tasting' },
    { value: 'astrology', label: 'Astrology' },
    { value: 'magic', label: 'Magic' },
    { value: 'chess', label: 'Chess' },
    { value: 'robotics', label: 'Robotics' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'sailing', label: 'Sailing' },
    { value: 'snowboarding', label: 'Snowboarding' },
    { value: 'theater', label: 'Theater' },
    { value: 'puppetry', label: 'Puppetry' },
    { value: 'makeup', label: 'Makeup' },
    { value: 'surfboard_building', label: 'Surfboard Building' },
    { value: 'tattoo_art', label: 'Tattoo Art' },
    { value: 'wine_making', label: 'Wine Making' },
    { value: 'homebrewing', label: 'Homebrewing' },
    { value: 'bird_caring', label: 'Bird Caring' },
    { value: 'watercolor_painting', label: 'Watercolor Painting' },
    { value: 'sea_creature_watching', label: 'Sea Creature Watching' },
    { value: 'mixology', label: 'Mixology' },
    { value: 'vlogging', label: 'Vlogging' },
    { value: 'travel_photography', label: 'Travel Photography' },
    { value: 'urban_exploring', label: 'Urban Exploring' },
    { value: 'escape_rooms', label: 'Escape Rooms' },
    { value: 'geocaching', label: 'Geocaching' },
    { value: 'beach_volleyball', label: 'Beach Volleyball' },
    { value: 'roller_coasters', label: 'Roller Coasters' },
    { value: 'sand_castles', label: 'Sand Castles' },
    { value: 'acrobatics', label: 'Acrobatics' },
    { value: 'car_maintenance', label: 'Car Maintenance' },
    { value: 'poetry_slams', label: 'Poetry Slams' },
    { value: 'farming', label: 'Farming' },
    { value: 'sustainable_living', label: 'Sustainable Living' },
    { value: 'public_speaking', label: 'Public Speaking' },
    { value: 'self_defense', label: 'Self Defense' },
    { value: 'herpetology', label: 'Herpetology' },
    { value: 'circus_arts', label: 'Circus Arts' },
    { value: 'snowshoeing', label: 'Snowshoeing' },
    { value: 'crossfit', label: 'Crossfit' },
    { value: 'golf', label: 'Golf' },
    { value: 'paddleboarding', label: 'Paddleboarding' },
    { value: 'parkour', label: 'Parkour' },
    { value: 'lumberjack_skills', label: 'Lumberjack Skills' },
    { value: 'ballroom_dancing', label: 'Ballroom Dancing' },
    { value: 'kite_surfing', label: 'Kite Surfing' },
    { value: 'birdwatching', label: 'Birdwatching' },
    { value: 'zip_lining', label: 'Zip Lining' },
    { value: 'jujutsu', label: 'Jujutsu' },
    { value: 'scuba_diving', label: 'Scuba Diving' },
    { value: 'free_diving', label: 'Free Diving' },
    { value: 'rock_climbing', label: 'Rock Climbing' },
    { value: 'pottery_wheel', label: 'Pottery Wheel' },
    { value: 'brewing_coffee', label: 'Brewing Coffee' },
    { value: 'foraging', label: 'Foraging' },
    { value: 'acro_yoga', label: 'Acro Yoga' },
    { value: 'paragliding', label: 'Paragliding' },
    { value: 'salsa_dancing', label: 'Salsa Dancing' }
];


const customStyles = {
    control: (provided: any) => ({
        ...provided,
        padding: "2.01px",
        borderRadius: "0.375rem",
        borderColor: "#D1D5DB", // Tailwind Gray-300
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    }),
    menu: (provided: any) => ({
        ...provided,
        borderRadius: "0.375rem",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        marginTop: "4px",
    }),
    option: (provided: any, state: { isSelected: any; }) => ({
        ...provided,
        // backgroundColor: state.isSelected ? "#3B82F6" : "#FFFFFF",
        // color: state.isSelected ? "#FFFFFF" : "#111827", // Tailwind Gray-900
        cursor: "pointer",
        padding: "8px 16px",

    }),
};

const UploadPost = ({ userData, onClose, fetchUserData }: { userData: any, fetchUserData: any, onClose: () => void }) => {
    const [displayname, setDisplayname] = useState(userData?.displayname || "");
    const [firstName, setFirstName] = useState(userData?.firstName || "");
    const [lastName, setLastName] = useState(userData?.lastName || "");
    const [location, setLocation] = useState(userData?.location || "")
    const [bio, setBio] = useState(userData?.bio || "");
    const [status, setStatus] = useState(userData?.status || "");
    const [gender, setgender] = useState(userData?.gender || "");
    const [media, setMedia] = useState<File | null>(null);  // Store a single file
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [username, setUserName] = useState(userData?.username || "")  // For single image preview
    const [phoneNumber, setPhoneNumber] = useState(userData?.phoneNumber || "")


    useEffect(() => {
        // If avatar exists, set it for preview
        if (userData?.avatar) {
            setImagePreview(userData.avatar);
        }

        if (userData?.intrests) {
            const interestsMapped = userData.intrests.map((interest: string) => ({ value: interest, label: interest }));
            setSelectedInterests(interestsMapped);
        }
    }, [userData]);


    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        if (name === "displayname") setDisplayname(value);
        if (name === "firstName") setFirstName(value);
        if (name === "lastName") setLastName(value);
        if (name === "location") setLocation(value)
        if (name === "bio") setBio(value);
        if (name === "status") setStatus(value);
        if (name === "username") setUserName(value);
        if (name === "phoneNumber") setPhoneNumber(value);
        if (name === "gender") setgender(value);
    };

    const handleFileChange = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setMedia(selectedFile); // Store the selected single file

            // Preview the selected image or video
            if (selectedFile.type.startsWith('image')) {
                const previewUrl = URL.createObjectURL(selectedFile);
                setImagePreview(previewUrl); // Set the preview URL for the selected image
            } else if (selectedFile.type.startsWith('video')) {
                const previewUrl = URL.createObjectURL(selectedFile);
                setImagePreview(previewUrl); // Handle video preview as well
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();

        const interestsValues = selectedInterests.map((interest: any) => interest.value).join(",");

        formData.append("displayname", displayname);
        formData.append("username", username);
        formData.append("gender", gender);
        formData.append("phoneNumber", phoneNumber);
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("location", location);
        formData.append("bio", bio);
        formData.append("intrests", interestsValues);
        formData.append("status", status);

        // Add selectedCity and selectedState to formData
        formData.append("city", selectedCity ? selectedCity.label : "");
        formData.append("state", selectedState);

        // If there's a new image, append it as the avatar field
        if (media) {
            formData.append("avatar", media); // Append the new avatar file
        }

        const token = localStorage.getItem("accessToken");

        try {
            const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/update-profile`; // Update the profile using PUT API
            const method = "put"; // Use PUT method to update the user's profile

            const response = await axios({
                method,
                url,
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data", // Necessary for FormData
                },
                data: formData,
            });

            if (response.status === 200) {
                fetchUserData(); // Fetch updated user data after update
                toast.success("Profile updated successfully!");
                onClose(); // Close the modal/form after successful update
            } else {
                toast.error("Profile update failed. Please try again.");
                console.error("Failed to update profile: ", response);
            }
        } catch (error) {
            toast.error("Failed to update the profile. Please try again.");
            if (axios.isAxiosError(error)) {
                console.error("Axios error details: ", error.response?.data || error.message);
            } else {
                console.error("Error: ", error);
            }
        }
    };


    const handleRemoveImage = () => {
        setMedia(null); // Remove the selected image
        setImagePreview(null); // Remove the image preview
    };



    const [loading, setLoading] = useState(false);  // For showing loading state
    const [error, setError]: any = useState(null);  // For handling errors

    const handleButtonClick = async () => {
        setLoading(true); // Start loading
        setError(null); // Clear previous errors

        try {
            const token = localStorage.getItem("accessToken");  // Replace with actual token

            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/send-request`,
                {
                    remark: 'I want to update my email and phone number', // Request body
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,  // Add token to Authorization header
                    },
                }
            );

            toast.success('Request was successful!', {
            });

            console.log('Request was successful:', response.data);
        } catch (error) {

            console.error('Error:', error);
        } finally {
            setLoading(false); // Stop loading
        }
    };



    const [selectedInterests, setSelectedInterests]: any = useState(userData?.city || "");

    const handleSelectChange = (selectedOption: any) => {
        setSelectedInterests(selectedOption ? selectedOption : []);
    };


    const [selectedCity, setSelectedCity] = useState(
        userData?.city ? { value: userData.city.id, label: userData.city } : null
    );    const [selectedState, setSelectedState] = useState(userData?.state || "");

    const handleCityChange = (selectedOption: any) => {
        setSelectedCity(selectedOption);
        const city = citiesData.find((city) => city.id === selectedOption.value);
        if (city) {
            setSelectedState(city.state);
        }
    };

    const cityOptions = citiesData.map((city) => ({
        value: city.id,
        label: city.name,
    }));


    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <label>
                UserName:
                <input
                    type="text"
                    name="displayname"
                    value={displayname}
                    onChange={handleInputChange}
                    className="w-full p-2.5 text-sm rounded-lg 
                    border border-[#d1d5db] bg-[#f9fafb] text-gray-900 
                    focus:outline-none focus:ring-0 focus:border-transparent
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
                    placeholder="Display Name"
                />
            </label>
            <label>
                Email:
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                    className={`w-full p-2.5 text-sm rounded-lg 
        border border-[#d1d5db] 
        ${userData?.canEditProfile === false ? 'bg-gray-500 text-black bg-[#aeb2b8]' : 'bg-[#f9fafb] text-gray-900'} 
        focus:outline-none focus:ring-0 focus:border-transparent
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-0 dark:focus:border-transparent`}
                    placeholder="Display Name"
                    disabled={userData?.canEditProfile === false}
                />
            </label>

            <label>
                Phone Number:
                <input
                    type="text"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleInputChange}
                    className={`w-full p-2.5 text-sm rounded-lg 
        border border-[#d1d5db] 
        ${userData?.canEditProfile === false ? ' text-black bg-[#aeb2b8]' : 'bg-[#f9fafb] text-gray-900'} 
        focus:outline-none focus:ring-0 focus:border-transparent
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-0 dark:focus:border-transparent`}
                    placeholder="Display Name"
                    disabled={userData?.canEditProfile === false}
                />
            </label>

            <label>
                First Name:
                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={handleInputChange}
                    className="w-full p-2.5 text-sm rounded-lg 
                    border border-[#d1d5db] bg-[#f9fafb] text-gray-900 
                    focus:outline-none focus:ring-0 focus:border-transparent
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
                    placeholder="First Name"
                />
            </label>

            <label>
                Last Name:
                <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={handleInputChange}
                    className="w-full p-2.5 text-sm rounded-lg 
                    border border-[#d1d5db] bg-[#f9fafb] text-gray-900 
                    focus:outline-none focus:ring-0 focus:border-transparent
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
                    placeholder="Last Name"
                />
            </label>


            {/* City Dropdown with Search */}
            <label htmlFor="city" className="block text-sm font-medium mb-2">
                City:
                <Select
                    id="city"
                    options={cityOptions}
                    value={selectedCity}
                    onChange={handleCityChange}
                    placeholder="Select a city"
                    isClearable
                    styles={customStyles}
                />
            </label>

            {/* State Dropdown */}
            <label>
                State:
                <select
                    id="state"
                    value={selectedState}
                    disabled
                    className="w-full p-2.5 text-sm rounded-lg 
        border border-[#d1d5db] bg-[#f9fafb] text-gray-900 
        focus:outline-none focus:ring-0 focus:border-transparent
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
                >
                    <option value="">Select a state</option>
                    <option>{selectedState}</option>
                </select>
            </label>


            <label>
                Bio:
                <input
                    name="bio"
                    value={bio}
                    onChange={handleInputChange}
                    className="w-full p-2.5 text-sm rounded-lg 
                    border border-[#d1d5db] bg-[#f9fafb] text-gray-900 
                    focus:outline-none focus:ring-0 focus:border-transparent
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
                    placeholder="Bio"
                />
            </label>
            <label>
                Interests:
                <div>
                    <Select
                        isMulti
                        name="interests"
                        options={options}
                        value={selectedInterests}
                        onChange={handleSelectChange}
                        getOptionLabel={(e) => e.label}
                        getOptionValue={(e) => e.value}
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        styles={{
                            option: (provided, state) => ({
                                ...provided,
                                backgroundColor: state.isSelected ? '#d3d3d3' : state.isFocused ? '#e0e0e0' : 'transparent',
                                color: state.isSelected ? 'black' : 'gray',
                                padding: 10,
                                cursor: 'pointer',
                            }),
                            singleValue: (provided) => ({
                                ...provided,
                                color: '#333',
                            }),
                            control: (provided) => ({
                                ...provided,
                                border: '1px solid #ccc',
                                padding: '5px',
                            }),
                            menu: (provided) => ({
                                ...provided,
                                zIndex: 9999,
                            }),
                        }}
                    />
                </div>
            </label>
            <label>
                Gender:
                <select name="gender"
                    value={gender}
                    onChange={handleInputChange}
                    className="w-full p-2.5 text-sm rounded-lg 
                    border border-[#d1d5db] bg-[#f9fafb] text-gray-900 
                    focus:outline-none focus:ring-0 focus:border-transparent
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
                >
                    <option>Select Gender</option>
                    <option>
                        Male
                    </option>
                    <option>
                        Female
                    </option>
                    <option>
                        Other
                    </option>
                    <option>
                        Couples
                    </option>
                </select>

            </label>

            <label>
                {/* File input now allows only a single file */}
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-500 file:text-white
                    hover:file:bg-blue-600"
                />
            </label>

            <div className="mt-4">
                {imagePreview && (
                    <div className="relative">
                        {imagePreview.startsWith('data:image') || imagePreview.startsWith('http') ? (
                            <img
                                src={imagePreview}
                                alt="preview"
                                style={{ width: '100px', height: 'auto' }}
                                className="rounded"
                            />
                        ) : imagePreview.startsWith('data:video') ? (
                            <video
                                src={imagePreview}
                                controls
                                style={{ width: '100px', height: 'auto' }}
                                className="rounded"
                            />
                        ) : null}
                        <button
                            type="button"
                            onClick={handleRemoveImage}
                            className="absolute top-0 right-0 bg-gray-800 text-black rounded-full p-1 text-sm"
                        >
                            X
                        </button>
                    </div>
                )}
            </div>

            <ToastContainer />
            <div className="md:flex gap-5 items-center justify-between">
                <div>
                    <Link href="#" className="bg-blue-500 text-white p-3 rounded mt-5 text-sm" onClick={handleButtonClick}>
                        {loading ? 'Loading...' : 'Change Email and Phone Number'}
                    </Link>
                </div>
                <div className="gap-5 flex ">
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
                        Edit Profile
                    </button>
                    <button onClick={onClose} className="border text-blue-500 border-blue-500 p-2 rounded mt-4">
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
};

export default UploadPost;
