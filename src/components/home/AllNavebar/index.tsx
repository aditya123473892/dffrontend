"use client"; // This makes the component a Client Component

import AuthApi from "@/common/apis/auth.api";
import { getApi } from "@/common/apis/main.api";
import { Button } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { IoMdClose, IoMdNotifications } from "react-icons/io";

export default function HomeNavbar() {
  const pathname = usePathname();

  // Hide header on specific routes
  const excludedRoutes = [
    "/signin",
    "/",
    "/subscprition",
    "/privacy-policy",
    "/terms",
    "/signup",
    "/forgot-password",
    "/reset-password",
    "/signin/admin",
    "/aboutus",
    "/refundpolicy",
    "/contactus"
  ];

  if (excludedRoutes.includes(pathname)) {
    return null;
  }

  const [userData, setUserData] = useState<any>(null);
  const [followRequests, setFollowRequests] = useState<any>();
  const [error, setError] = useState("");
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tokenFromStorage = localStorage.getItem("accessToken");
      setToken(tokenFromStorage);
    }
  }, []);

  useEffect(() => {
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

    const fetchFollowRequests = async () => {
      try {
        if (token) {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/follow/follow-requests`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setFollowRequests(response.data.data.followRequests?.length);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
    fetchFollowRequests();
  }, [token]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = (e: any) => {
    if (e.target.classList.contains("backdrop")) {
      setIsModalOpen(false);
    }
  };

  return (
    <header className="bg-blue-500 sticky top-0 z-10">
      <div  className="grid grid-cols-2 items-center px-4 sm:px-8 md:px-12 lg:px-24 py-3 max-w-[1680px] m-auto">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 sm:gap-2 text-xl sm:text-2xl font-black"
        >
          <Image
            src={"/images/logo.png"}
            width={260}
            height={31}
            alt="Logo"
            className="py-1 w-[120px] sm:w-[140px] md:w-[180px] lg:w-[220px]"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        {/* User Info and Notification Section */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {/* Follow Request Button */}
          <Link href="/follow-request" className="">
            <button className="rounded-full bg-[#0003] text-white cursor-pointer p-2 relative">
              <BiUser className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="bg-[#fff] rounded-full w-4 h-4 text-[10px] flex justify-center items-center text-black absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2">
                {followRequests || 0}
              </span>
            </button>
          </Link>

          {/* Notification Icon */}
          <IoMdNotifications
            className="text-white w-5 h-5 sm:w-6 sm:h-6"
            onClick={toggleModal}
          />

          {/* Notification Modal */}
          {isModalOpen && (
            <div
              className="fixed inset-0 backdrop flex justify-end mr-[272px] mt-[62px]"
              onClick={closeModal}
            >
              <div className="w-96 h-80 bg-white rounded-xl shadow-custom">
                <div className="bg-blue-500 p-4 flex justify-between items-center">
                  <span className="font-semibold text-xl text-white">All Notifications</span>
                  <IoMdClose className="text-white cursor-pointer" onClick={toggleModal} />
                </div>
                <div className="text-[#a8a6a6] text-xl flex justify-center mt-24">
                  No Notifications
                </div>
              </div>
            </div>
          )}

          {/* User Info */}
          {userData && (
            <p className="text-white text-sm sm:text-base">{userData.displayname}</p>
          )}

          {/* User Avatar */}
          {userData ? (
            <div>
              <img
                src={userData?.avatar || "/images/profile.png"}
                alt={userData?.originalname}
                className="rounded-full w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 border border-[#b5b7bb]"
              />
            </div>
          ) : (
            <p className="text-black"></p>
          )}
        </div>
      </div>
    </header>
  );
}
