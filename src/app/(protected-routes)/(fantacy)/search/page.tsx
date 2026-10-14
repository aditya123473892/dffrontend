"use client"; // <-- Marking this file as a Client Component

import { getApi } from "@/common/apis/main.api";
import FeedCard from "@/components/feeds/FeedCard"; // Ensure FeedCard is client-side
import axios from "axios";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Select from "react-select";
import citiesData from "../users/cities.json";


const SearchPage = () => {


  const states = [
    { value: "Andhra Pradesh", label: "Andhra Pradesh" },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    { value: "Chhattisgarh", label: "Chhattisgarh" },
    { value: "Goa", label: "Goa" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Haryana", label: "Haryana" },
    { value: "Himachal Pradesh", label: "Himachal Pradesh" },
    { value: "Jharkhand", label: "Jharkhand" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Kerala", label: "Kerala" },
    { value: "Madhya Pradesh", label: "Madhya Pradesh" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Manipur", label: "Manipur" },
    { value: "Meghalaya", label: "Meghalaya" },
    { value: "Mizoram", label: "Mizoram" },
    { value: "Nagaland", label: "Nagaland" },
    { value: "Odisha", label: "Odisha" },
    { value: "Punjab", label: "Punjab" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Sikkim", label: "Sikkim" },
    { value: "Tamil Nadu", label: "Tamil Nadu" },
    { value: "Telangana", label: "Telangana" },
    { value: "Tripura", label: "Tripura" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "Uttarakhand", label: "Uttarakhand" },
    { value: "West Bengal", label: "West Bengal" },
    { value: "Andaman and Nicobar Islands", label: "Andaman and Nicobar Islands" },
    { value: "Chandigarh", label: "Chandigarh" },
    { value: "Dadra and Nagar Haveli and Daman and Diu", label: "Dadra and Nagar Haveli and Daman and Diu" },
    { value: "Lakshadweep", label: "Lakshadweep" },
    { value: "Delhi", label: "Delhi" },
    { value: "Puducherry", label: "Puducherry" },
    { value: "Ladakh", label: "Ladakh" },
    { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
  ];

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
    { value: "couples", label: "Couples" },

  ];
  const [followingsRequests, setFollowingsRequests] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState<any | null>(null);
  const [error, setError] = useState("");
  const token = localStorage.getItem("accessToken");
  const [selectedState, setSelectedState]:any = useState(null);
  const [selectedGender, setSelectedGender]:any = useState(null);
  const [selectedCity, setSelectedCity]:any = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (token) {
          const response = await getApi({ url: "/auth/me" });
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

  const fetchFollowingsRequests = async () => {
    try {
      if (token) {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFollowingsRequests(response.data.data.users);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFollowingsRequests();
  }, []);

  const cityOptions:any = citiesData.map((city) => ({
    value: city.id,
    label: city.name,
  }));


  const filteredCityOptions = selectedState
    ? cityOptions.filter((city:any) => {
      const stateObj = citiesData.find((c) => c.id === city.value);
      return stateObj && stateObj.state === selectedState.value;
    })
    : cityOptions;
  const filteredFriends = followingsRequests.filter(
    (friend) =>
      (!query ||
        friend.displayname.toLowerCase().includes(query.toLowerCase()) ||
        friend.city.toLowerCase().includes(query.toLowerCase()) ||
        friend.state.toLowerCase().includes(query.toLowerCase())) &&
      (!selectedState || friend.state === selectedState.value) &&
      (!selectedGender || friend.gender === selectedGender.value)
  );

  const handleStateChange = (state:any) => {
    setSelectedState(state);
    if (!state) {
      setSelectedCity(null);
    }
  };

  // Handle city change
  const handleCityChange = (city:any) => {
    setSelectedCity(city);
  };

  // Handle gender change
  const handleGenderChange = (gender:any) => {
    setSelectedGender(gender);
  };


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

  return (
    <div className="min-h-[90vh] md:p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search friends..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FiSearch size={24} />
          </div>
        </div>
        <div className="lg:flex  gap-4 w-full mt-5 mb-5">
          <div className="w-full">
            <label className="text-sm font-medium">Select State:</label>
            <Select
              options={states}
              value={selectedState}
              onChange={handleStateChange}
              isClearable
              isSearchable
              styles={customStyles}
              placeholder="Select State"
            />
          </div>
          <div className="w-full">
            <label className="text-sm font-medium">Select City:</label>
            <Select
              options={filteredCityOptions}
              value={selectedCity}
              onChange={handleCityChange}
              isClearable
              isSearchable
              styles={customStyles}
              isDisabled={!selectedState} // Disable until state is selected
              placeholder="Select City"

            />
          </div>
          <div className="w-full">
            <label className="text-sm font-medium">Select Gender:</label>
            <Select
              options={genderOptions}
              value={selectedGender}
              onChange={handleGenderChange}
              isClearable
              styles={customStyles}
              isSearchable
              placeholder="Select Gender"
            />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5 space-y-4 flex flex-col">
          {filteredFriends?.length === 0 && query ? (
            <div className="p-6 text-center text-gray-500">
              <p>No users found</p>
            </div>
          ) : (
            filteredFriends?.map((friend) => (
              <Link key={friend._id} href={`/users/${friend?._id}`}>
                <div className="md:p-4 xs:p-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer border border-solid border-[#e3e3e3] rounded-md">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        src={friend.avatar || "/images/profile.png"}
                        alt={friend.displayname}
                        className="xs:w-8 xs:h-8  md:w-12 md:h-12 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1 sm:text-sm">
                      <h3 className="md:text-lg !sm:text-sm font-semibold text-gray-800">
                        {friend.displayname}
                      </h3>
                      <p className="md:text-sm  xs:text-xs text-gray-500">
                        {friend.firstName} {friend.lastName}
                      </p>
                    </div>
                    <p className="text-sm sm:block text-gray-500 xs:hidden">
                      {friend.city ? `${friend.city}, ` : ""}
                      {friend.state ? `${friend.state}, ` : ""} India
                    </p>
                    <div className="text-sm text-gray-500">
                      <button className="bg-blue-500 text-white md:px-3 md:py-2  xs:px-1.5  xs:py-1 rounded-md text-xs sm:text-sm md:text-base">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
