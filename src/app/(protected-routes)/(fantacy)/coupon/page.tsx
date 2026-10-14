'use client';

import { IoMdCheckmark } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Subscription = () => {
    const [showPopupIndex, setShowPopupIndex]: any = useState(null);
    const popupRef = useRef<HTMLDivElement>(null);
    const token = localStorage.getItem("accessToken");
    const [loading, setLoading] = useState(true);

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

    const [coupons, setCoupons]: any = useState([]);
    const [error, setError]: any = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('authToken'); // Adjust accordingly

        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/coupons`, {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in Authorization header
            },
        })
            .then((response) => {
                const couponData = Object.values(response.data).filter((item: any) => item._id); // Ensure the object has _id (valid coupon)

                if (Array.isArray(couponData) && couponData.length > 0) {
                    setCoupons(couponData); // Store the coupon data as an array
                } else {
                    setError('No coupons found.');
                }

                setLoading(false);
            })
            .catch((err) => {
                setError(err.response ? err.response.data : err.message);
                setLoading(false);
            });
    }, []);

    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async (text: string | undefined) => {
        if (!text) return;
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1000); 
            toast.success("Code copied to clipboard!");
            // Revert after 1 second
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div className="items-start justify-center overflow-auto gap-5 scrollbar-hide p-8">
            <div className="flex gap-8 justify-center">

                {coupons.length > 0 ? (
                    coupons.map((subscription: any) => (
                        <div key={subscription._id} className="max-w-[900px] w-[350px] rounded-xl p-4 bg-white shadow-custom border border-[#D9D9D9] flex">
                            <div>
                                <div className="flex items-baseline justify-between">
                                    <p className="font-semibold text-[24px] mt-5 uppercase text-blue-500 justify-center flex">{subscription.subscription?.planName}</p>
                                </div>
                                <ToastContainer />
                                <span className="font-semibold text-xl ">${subscription.subscription?.price} Price  Only</span>
                                <div className="flex items-center gap-3">
                                    <span className="font-semibold text-[38px] ">${subscription?.discountValue}% Off</span>
                                    {/* <div>
                                        <div className="text-xs">per user</div>
                                        <div className="text-xs">per month</div>
                                    </div> */}
                                </div>
                                <div className="gap-6 ">
                                    <p className="mb-3 text-sm text-black font-semibold ">{subscription?.subscription?.description}</p>
                                    <div className="px-2 pt-2 pb-2">
                                        <span className="inline-block bg-[#d0d4db] rounded-full px-3 py-1 text-sm font-semibold text-[#8f9196] mr-2 mb-2 uppercase">
                                            #{subscription?.code}
                                        </span>
                                    </div>
                                    <div className="flex gap-3 ">
                                        <IoMdCheckmark />
                                        <p className="mb-3 text-sm">
                                            <span className="font-semibold">{subscription.subscription?.duration} days</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="px-6 py-4">
                                    <button
                                        onClick={() => handleCopy(subscription?.code)}
                                        className={`${isCopied ? "border border-blue-500 text-blue-500" : "bg-blue-500 hover:bg-blue-700 text-white"
                                            }  font-bold py-2 px-4 rounded`}
                                    >
                                        {isCopied ? "Copied!" : "Copy Code"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <li>No coupons available.</li>
                )}
            </div>
        </div>
    );
};

export default Subscription;
