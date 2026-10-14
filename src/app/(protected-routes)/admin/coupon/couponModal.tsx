import { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface CouponModalProps {
  formData: any;
  handleInputChange: any;
  handleCloseModal:any;
  handleCreateSubscription: any;
  setShowModal: any;
  setFormData: any;
  setEditSubscriptionId: any;
  AllSubscriptions:any
}

const CouponModal = ({
  formData,
  handleInputChange,
  handleCloseModal,
  handleCreateSubscription,
  setShowModal,
  setFormData,
  setEditSubscriptionId,
  AllSubscriptions
}: CouponModalProps) => {

    const handleDateTimeChange = (date: Date | null) => {
        if (date) {
          handleInputChange({
            target: {
              name: 'expiryDate',
              value: date, // Send the complete ISO string (date + time)
            },
          });
        }
      };

  useEffect(() => {
    // Close the modal on pressing Escape key
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowModal]);

 

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-white w-[450px] p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{formData.code ? "Edit Coupon" : "Create Coupon"}</h2>

          <IoCloseOutline
            className="cursor-pointer text-2xl"
            onClick={handleCloseModal}
          />
        </div>
        <form>
          <div className="mb-4">

            <label className="block text-sm font-semibold mb-2" htmlFor="code">Coupon Code</label>
            <input
              type="text"
              id="code"
              name="code"
              value={formData.code}
              onChange={handleInputChange}
              className="w-full p-2.5 text-sm rounded-lg border border-[#d1d5db] text-black  bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
              placeholder="Enter coupon code"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="discountType">Discount Type</label>
            <select
              id="discountType"
              name="discountType"
              value={formData.discountType}
              onChange={handleInputChange}
              className="w-full p-2.5 text-sm rounded-lg border border-[#d1d5db] text-black  bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
              >
              <option value="">Select discount type</option>
              <option value="percentage">Percentage</option>
              <option value="fixed">Fixed Amount</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="discountValue">Discount Value</label>
            <input
              type="number"
              id="discountValue"
              name="discountValue"
              value={formData.discountValue}
              onChange={handleInputChange}
              className="w-full p-2.5 text-sm rounded-lg border border-[#d1d5db] text-black  bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
              placeholder="Enter discount value"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="subscription">Subscription</label>
            <select
        name="subscription" // Set the name attribute to match the state field
        className="w-full p-2.5 text-sm rounded-lg border border-[#d1d5db] text-black bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
        value={formData.subscription} // Bind the select value to the state
        onChange={handleInputChange} // Use the handleInputChange to update the state
      >
        <option>Select Subscription</option>
        {AllSubscriptions?.map((subscription: any) => (
          <option key={subscription._id} value={subscription._id}>
            {subscription.planName}
          </option>
        ))}
      </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="expiryDate">Expiry Date</label>
            <DatePicker
            id="expiryDate"
            name="expiryDate"
            selected={formData.expiryDate ? new Date(formData.expiryDate) : null}
            onChange={handleDateTimeChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="yyyy-MM-dd HH:mm"
            className="w-full p-2.5 text-sm rounded-lg border border-[#d1d5db] text-black  bg-[#f9fafb] text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-transparent"
            />
            {/* <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            /> */}
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleCloseModal}
              className="bg-gray-300 text-black py-2 px-4 rounded-md"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleCreateSubscription}
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              {formData.code ? "Update Coupon" : "Create Coupon"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CouponModal;
