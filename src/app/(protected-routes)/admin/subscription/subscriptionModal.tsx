

import React from 'react';

interface FormData {
    planName: string;
    description: string;
    price: string;
    duration: string;
    isActive: boolean;
}

interface SubscriptionModalProps {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleCreateSubscription: () => void;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    formData: FormData;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
    handleInputChange,
    handleCreateSubscription,
    setShowModal,
    formData
}) => {
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                    <label htmlFor="planName" className="block text-sm">Plan Name</label>
                    <input
                        type="text"
                        id="planName"
                        name="planName"
                        value={formData.planName}
                        onChange={handleInputChange}
                        className="w-full p-2.5 text-sm rounded-lg border border-[#d1d5db] text-black  bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"

                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full p-2.5 text-sm rounded-lg border border-[#d1d5db] text-black  bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"

                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full p-2.5 text-sm rounded-lg border border-[#d1d5db] text-black  bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"

                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="duration" className="block text-sm">Duration</label>
                    <input
                        type="number"
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full p-2.5 text-sm rounded-lg border border-[#d1d5db] text-black  bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"

                    />
                </div>
                <div className="flex items-center mt-5 gap-4 ">
                    <button
                        type="button"
                        onClick={handleCreateSubscription}
                        className="bg-blue-500 text-white py-2 px-6 rounded"
                    >
                        Create
                    </button>
                    <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="border text-blue-500 border-blue-500 p-2 rounded "
                    >
                        Cancel
                    </button>

                </div>
            </form>
        </>
    )
}

export default SubscriptionModal