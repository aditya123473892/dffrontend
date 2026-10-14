"use client"; // This line is important for using client-side hooks like useState

import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router
import { IoMdCheckmark } from "react-icons/io";
import {
  AwaitedReactNode,
  ChangeEvent,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useMemo,
  useState,
} from "react";
import Header from "../../components/home/HomeNavbar";
import axios from "axios";
import { useAccount } from "@/common/hooks";
import { postApi } from "@/common/apis/main.api";
import AuthApi from "@/common/apis/auth.api";
import toast from "react-hot-toast";
import LoginForm from "./LoginSubscription";
import { loginRedirectUrl } from "@/common/utils/login-redirect-url";
import Image from "next/image";

const Subscription = () => {
  const router = useRouter();
  const [isYearly, setIsYearly] = useState(false);
  const [activeTab, setActiveTab]: any = useState("packages"); // State to track active tab

  const [isPackageFilled, setIsPackageFilled]: any = useState(false); // Track if package is filled out

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const [couponData, setCouponData]: any = useState(null); // State to store coupon data

  const handleSignUpClick = async (subscription: {
    planName?:
      | string
      | number
      | bigint
      | boolean
      | ReactPortal
      | Promise<AwaitedReactNode>
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | null
      | undefined;
    price?:
      | string
      | number
      | bigint
      | boolean
      | ReactPortal
      | Promise<AwaitedReactNode>
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | null
      | undefined;
    description?:
      | string
      | number
      | bigint
      | boolean
      | ReactPortal
      | Promise<AwaitedReactNode>
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | null
      | undefined;
    duration?:
      | string
      | number
      | bigint
      | boolean
      | ReactPortal
      | Promise<AwaitedReactNode>
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | null
      | undefined;
    _id?: any;
    subscriptionId?: any;
  }) => {
    if (activeTab === "packages") {
      setIsPackageFilled(true); // Mark the package tab as filled
      setActiveTab("details");
      if (typeof window !== "undefined") {
        localStorage.setItem("selectedSubscriptionId", subscription._id);
      }
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/coupons/subscription/${subscription._id}`
        );

        const data = response.data;
        const couponArray: any = Object.values(data).filter(
          (item: any) => item._id
        ); // Filter out non-coupon data (e.g., statusCode)

        setCouponData(couponArray); // Store coupon data in the state
        setUserDetails((prevDetails: any) => ({
          ...prevDetails,
          subscriptionId: subscription.subscriptionId,
        }));

        setActiveTab("payment"); // Move to payment tab after successful API call
      } catch (error) {
        setErrors((prevErrors: any) => ({
          ...prevErrors,
          // coupon: error.response ? error.response.data.message : "An error occurred while fetching coupon data",
        }));
      }
      if (!userDetails.name || !userDetails.email) {
        setErrors({
          name: !userDetails.name ? "Name is required" : "",
          email: !userDetails.email ? "Email is required" : "",
        });
        return;
      }
    } else if (activeTab === "details") {
    } else if (activeTab === "payment") {
      if (
        !userDetails.cardNumber ||
        !userDetails.cardholderName ||
        !userDetails.expirationDate ||
        !userDetails.cvv ||
        !userDetails.country
      ) {
        setErrors({
          cardNumber: !userDetails.cardNumber ? "Card number is required" : "",
          cardholderName: !userDetails.cardholderName
            ? "Cardholder name is required"
            : "",
          expirationDate: !userDetails.expirationDate
            ? "Expiration date is required"
            : "",
          cvv: !userDetails.cvv ? "CVV is required" : "",
          country: !userDetails.country ? "Country selection is required" : "",
        });
        return;
      }
      console.log("Proceeding with payment...");
      setActiveTab("confirmation"); // Move to confirmation tab after payment
    }
  };

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails: any) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const [userDetails, setUserDetails]: any = useState({
    cardNumber: "",
    cardholderName: "",
    expirationDate: "",
    cvv: "",
    name: "",
    email: "",
    country: "",
  });

  const [errors, setErrors]: any = useState({
    cardNumber: "",
    cardholderName: "",
    expirationDate: "",
    cvv: "",
    country: "",
  });

  const handleCardNumberChange = (e: { target: { value: any } }) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    if (value.length <= 4) {
      value = value.replace(/(\d{4})(\d{0,4})/, "$1$2");
    } else if (value.length <= 8) {
      value = value.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2$3");
    } else if (value.length <= 12) {
      value = value.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3$4");
    } else {
      value = value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
    }
    setUserDetails((prevDetails: any) => ({
      ...prevDetails,
      cardNumber: value,
    }));
  };

  const handleExpirationDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    if (value.length <= 2) {
      value = value.replace(/(\d{2})(\d{0,2})/, "$1$2");
    } else if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{0,2})/, "$1/$2");
    }
    setUserDetails((prevDetails: any) => ({
      ...prevDetails,
      expirationDate: value,
    }));
  };

  const [subscriptions, setSubscriptions]: any = useState([]); // State to hold the fetched subscriptions data
  const [loading, setLoading] = useState(true); // State to manage loading state

  const fetchSubscriptions = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/subscriptions`,
        {}
      );

      if (Array.isArray(response.data.data)) {
        setSubscriptions(response.data.data); // Set subscriptions if data is an array
      } else {
        console.warn("Received data is not an array:", response.data);
        setSubscriptions([]); // Fallback to an empty array
      }

      setLoading(false); // Set loading to false after successful data fetch
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
      setLoading(false); // Set loading to false if an error occurs
    }
  };

  useEffect(() => {
    fetchSubscriptions(); // Call fetchSubscriptions on component mount
  }, []);

  const { authenticate } = useAccount();
  const { account } = useAccount();

  // useEffect(() => {
  //    if (account.user && account.isAuthenticated)
  //       router.push(loginRedirectUrl(account.user.roles[0], account.user));
  // }, [account]);

  // const userId = useMemo(() => {
  //   const user = localStorage.getItem("user");
  //   return user ? JSON.parse(user) : null;
  // }, []);

  // const viewerId = userId?._id;

  // const selectedSubscriptionId = localStorage.getItem("selectedSubscriptionId");
  const [userId, setUserId]:any = useState(null);
  const [selectedSubscriptionId, setSelectedSubscriptionId]:any = useState(null);

  useEffect(() => {
    // This code runs only on the client-side
    const user = localStorage.getItem("user");
    const subscriptionId = localStorage.getItem("selectedSubscriptionId");

    if (user) {
      setUserId(JSON.parse(user));
    }
    if (subscriptionId) {
      setSelectedSubscriptionId(subscriptionId);
    }
  }, []);

  const viewerId = userId?._id;

  const [formData, setFormData] = useState({
    subscription: selectedSubscriptionId,
    user: viewerId,
    coupon: "",
    // email: "",
    // country: "",
    fullame: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setFormData({
      ...formData,
    });

    postSubscription(formData);
  };

  const postSubscription = async (data: {
    subscription: string | null;
    user: any;
    coupon: string;
    // email: string;
    // country: string;
    fullame: string;
  }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-subscriptions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (response.ok) {
        console.log("Subscription successful:", result);
      } else {
        console.error("Subscription failed:", result);
      }
    } catch (error) {
      console.error("Error making the request:", error);
    }
  };

  const handleLogin = async (values: any) => {
    try {
      const res = await postApi({
        url: AuthApi.login,
        values: { ...values, role: parseInt(values.role) }, // Ensure role is an integer
      });

      if (res.error) {
        throw new Error(res.message || "Login failed"); // Provide a default error message
      }

      const { user, accessToken } = res.data;

      authenticate({ user, accessToken });

      toast.success("Logged In");

      handleSubmit();
      setActiveTab("confirmation");
      // Redirect based on user role (optional, assuming you have a function `loginRedirectUrl`)
      // router.push(loginRedirectUrl(user.roles[0], user));
      // You can choose to redirect based on specific role or conditions here.
    } catch (error: any) {
      toast.error(error.message || "An error occurred during login");
    }
  };

  return (
    <>
      <Header />

      <div className="items-start justify-center overflow-auto gap-5 scrollbar-hide xs:p-2 md:p-8">
        <div className="mb-5 mt-10 justify-center flex">
          <p className="text-blue-500 font-semibold ">All-access</p>
        </div>
        <div className="mb-5 justify-center flex">
          <p className="text-blue-500 mb-10 text-2xl font-bold">
            Get everything, forever.{" "}
          </p>
        </div>
        <div className="md:flex gap-4 mb-5 justify-center">
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === "packages"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("packages")}
          >
            Packages
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === "details" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("details")}
            disabled={!isPackageFilled} // Disable if package isn't filled
          >
            Details
          </button>
          <button
            className={`px-4 py-2  rounded-lg ${
              activeTab === "payment" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("payment")}
            disabled={!userDetails.name || !userDetails.email} // Disable if details aren't filled
          >
            Payment
          </button>
          <button
            className={`px-4 py-2  rounded-lg ${
              activeTab === "confirmation"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("confirmation")}
            disabled={
              !userDetails.cardNumber ||
              !userDetails.cardholderName ||
              !userDetails.expirationDate ||
              !userDetails.cvv
            }
          >
            Confirmation
          </button>
        </div>
        <div className="flex gap-8 justify-center">
          {/* Tab Content */}
          {activeTab === "packages" && (
            <div className="md:flex gap-8 ">
              {subscriptions?.map((subscription: any) => (
                <div className="w-full max-w-[900px] rounded-xl p-3 bg-white shadow-custom border border-[#D9D9D9] flex flex-col md:flex-row items-center justify-center mx-auto sm:w-[350px] xs:m-1 mb-2">
                <div>
                    <p className="font-semibold text-[24px] mt-5 uppercase justify-center flex text-blue-500">
                      {" "}
                      {subscription.planName}
                    </p>

                    <p className="mb-4">Get access to all premium features.</p>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[38px] ">
                        Rs {subscription.price}
                      </span>
                      <div>
                        <div className="text-xs">per user</div>
                        <div className="text-xs">18 months</div>
                      </div>
                    </div>
                    <div className="gap-6 ">
                      <p className="mb-3 text-sm font-semibold">
                        Everything you need to get started:
                      </p>
                      <div className="flex gap-3 ">
                        <IoMdCheckmark />
                        <p className="mb-3 text-sm">
                          <span className="font-semibold">
                            {subscription.description}
                          </span>
                        </p>
                      </div>
                    </div>
                    <button
                      className="bg-blue-500 text-white rounded-2xl py-2 px-20 mb-3 ml-7"
                      onClick={() => handleSignUpClick(subscription)}
                    >
                      Subscribe Now
                    </button>
                    <p className="mb-3 text-sm ml-12">
                      Comes with a {subscription.duration} day trial
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Details Tab */}
          {activeTab === "payment" && (
            <div className="w-[650px] rounded-xl p-3 bg-white shadow-custom border border-[#D9D9D9] justify-center flex flex-col gap-6">
              <h2 className="font-semibold text-base">
                Please enter your details
              </h2>
              <p className=" text-sm">
                We collect this information to help combat fraud, and to keep
                your payment secure.
              </p>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Coupon:
                </label>
                <select
                  id="coupon"
                  name="coupon"
                  value={formData.coupon}
                  onChange={handleChange}
                  className="w-full p-3 text-sm mb-4 rounded-lg border border-[#d1d5db] bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select your coupon</option>
                  {Array.isArray(couponData) && couponData.length > 0 ? (
                    couponData.map(
                      (coupon: any, index: Key | null | undefined) => (
                        <option key={index} value={coupon._id}>
                          {coupon.code}{" "}
                          {/* Or another field you wish to display */}
                        </option>
                      )
                    )
                  ) : (
                    <option value="">No coupons available</option> // Handle case where no coupons are available
                  )}
                </select>

                <label className="block text-sm font-medium text-gray-700">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="fullame"
                  name="fullame"
                  value={formData.fullame}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full p-3 text-sm rounded-lg border border-[#d1d5db] bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/* {errors.name && <p className="text-[#e91e63] text-sm">{errors.name}</p>} */}
              </div>
              <LoginForm onSubmit={handleLogin} />
              {/* <button
                className="bg-blue-500 text-white rounded-2xl py-2 px-20 mb-3"
                onClick={handleSubmit }
              >
                Proceed to Payment
              </button> */}
            </div>
          )}

          {/* Payment Tab */}
          {activeTab === "details" && (
            <div className="w-[650px] rounded-xl p-6 bg-white shadow-lg border border-[#D9D9D9] flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-xl">Payment</h2>
              </div>
              <div>
                <label
                  htmlFor="card-number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="card-number"
                  name="cardNumber"
                  value={userDetails.cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="xxxx xxxx xxxx xxxx"
                  maxLength={19} // Limit to 19 characters (16 digits + 3 spaces)
                  inputMode="numeric" // Suggests a numeric keypad on mobile
                  className="w-full p-3 text-sm rounded-lg border border-[#d1d5db] bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.cardNumber && (
                  <p className="text-[#e91e63] text-sm">{errors.cardNumber}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="cardholder-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name on Card
                </label>
                <input
                  type="text"
                  id="cardholder-name"
                  name="cardholderName"
                  value={userDetails.cardholderName}
                  onChange={handleInputChange}
                  placeholder="Cardholder name"
                  className="w-full p-3 text-sm rounded-lg border border-[#d1d5db] bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.cardholderName && (
                  <p className="text-[#e91e63] text-sm">
                    {errors.cardholderName}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="expiration-date"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Expiration Date (MM/YY)
                </label>
                <input
                  type="text"
                  id="expiration-date"
                  name="expirationDate"
                  value={userDetails.expirationDate}
                  onChange={(e) => handleExpirationDateChange(e)}
                  placeholder="MM/YY"
                  maxLength={5} // Limit the input to 5 characters (MM/YY)
                  inputMode="numeric" // Suggests a numeric keypad on mobile
                  className="w-full p-3 text-sm rounded-lg border border-[#d1d5db] bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.expirationDate && (
                  <p className="text-[#e91e63] text-sm">
                    {errors.expirationDate}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700"
                >
                  Security Code
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={userDetails.cvv}
                  onChange={handleInputChange}
                  placeholder="CVV"
                  maxLength={3} // Limit input to a maximum of 4 digits (for AmEx cards)
                  pattern="[0-9]*" // Ensures only numeric input
                  inputMode="numeric" // Helps on mobile to display numeric keypad
                  className="w-full p-3 text-sm rounded-lg border border-[#d1d5db] bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.cvv && (
                  <p className="text-[#e91e63] text-sm">{errors.cvv}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700"
                >
                  Discount
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    name="cvv"
                    placeholder="Apply Coupon"
                    className="w-full p-3 text-sm rounded-lg border border-[#d1d5db] bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    className="bg-blue-500 text-white rounded-md  p-2"
                    // onClick={handleSignUpClick}
                  >
                    Apply
                  </button>
                </div>
                <p className="mt-2 text-[#8f9294] text-sm">
                  Apply to DARK10 Take 10% OFF
                </p>
                {errors.cvv && (
                  <p className="text-[#e91e63] text-sm">{errors.cvv}</p>
                )}
              </div>
              <button
                className="bg-blue-500 text-white rounded-2xl py-3 px-6 mt-4"
                // onClick={handleSignUpClick}
              >
                Pay $345
              </button>
            </div>
          )}

          {activeTab === "confirmation" && (
            <div className="bg-gray-100 xs:p-2 md:p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-center mb-4">
                Payment Confirmation
              </h2>
              <div className="bg-white xs:p-2 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">
                  All-access Personal license
                </h3>
                {/* <p className="mb-4">US$6 - one-time payment</p> */}
                <p className="mb-6">
                  Includes access to Dark Fantasy components and templates
                  available in Dark Fantasy today, plus all future updates.
                </p>
                <p className="text-sm text-gray-500 mb-6">All prices in USD</p>

                {/* <div className="flex justify-between text-sm text-gray-700 mb-4">
                  <div>
                    <strong>Subtotal:</strong>
                    <p>US$6.00</p>
                  </div>
                  <div>
                    <strong>Taxes:</strong>
                    <p>US$0.00</p>
                  </div>
                  <div>
                    <strong>Total price:</strong>
                    <p>US$6.00</p>
                  </div>
                </div> */}

                <p className="text-green-500 text-center">
                  Thank you for your purchase! Your payment was successful.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Subscription;
