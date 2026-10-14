"use client";

import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

function CuntactUs() {

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

//   const token = localStorage.getItem("accessToken");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      message: message
    };

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`, data, {
        headers: {
        //   'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

       toast.success('Message sent successfully!');
      console.log('Response:', response.data);
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
       toast.success('Error sending message.');
      console.error('Error:',);
    }
  };
  return (
    <div className=" bg-gray-100 mt-2 flex items-center justify-center md:p-8 xs:p-1">
      <div className="bg-white p-8 rounded-lg shadow-custom border border-[#D9D9D9] max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-500">Contact Us</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              value={name}
            onChange={(e) => setName(e.target.value)}
            required
              className="w-full p-3 text-sm rounded-lg border mt-1 border-[#d1d5db] bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
              type="email"
              className="w-full p-3 text-sm rounded-lg border mt-1 border-[#d1d5db] bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Share your thoughts</label>
            <textarea
             value={message}
             onChange={(e) => setMessage(e.target.value)}
             required
                    className="w-full p-3 text-sm rounded-lg border mt-1 border-[#d1d5db] bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
             
              placeholder="Your thoughts..."
            ></textarea>
          </div>

          <div className="text-center">
            <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Send!
            </button>
          </div>

          <p className="text-sm text-gray-600 text-center mt-4">
            It is very important for us to keep in touch with you, so we are always ready to answer any question that interests you.
          </p>
        </div>
        <ToastContainer/>
      </div>
    </div>
  );
}

export default CuntactUs;