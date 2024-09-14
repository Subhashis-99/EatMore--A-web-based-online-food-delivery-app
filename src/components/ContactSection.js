import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();


 // Access environment variables
 const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
 const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
 const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Support Team",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        // Show success toast message
        toast.success("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        handleCloseModal(); // Close the modal after successful submission
      })
      .catch((error) => {
        // Show error toast message
        toast.error("Error sending email. Please try again.");
      });
  };

  return (
    <div className="relative p-5 lg:p-10 bg-gray-100 min-h-screen animate-fadeInUp">
      <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 lg:mb-9 text-center mt-3 underline underline-offset-8 animate-fadeInUp">
        Contact Us
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 p-5 lg:p-11 animate-fadeInUp">
        <div className="flex flex-col items-center justify-between gap-4 animate-fadeInUp">
          <i className="fi fi-sr-phone-rotary text-4xl lg:text-6xl text-orange-500"></i>
          <h2 className="text-base lg:text-lg font-semibold text-gray-900 tracking-[.20em] lg:tracking-[.30em] animate-fadeInUp">
            BY PHONE
          </h2>
          <p className="text-gray-600 text-sm lg:text-xl text-center animate-fadeInUp">
            Get telephone support by signing into your account.
          </p>
          <Link to="/signIn">
            <button className="bg-white text-black border border-gray-300 rounded-sm hover:bg-orange-400 hover:text-white px-8 lg:px-10 py-1 lg:py-2 animate-fadeInUp">
              LOG IN
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 animate-fadeInUp">
          <i className="fi fi-sr-envelope text-4xl lg:text-6xl text-orange-500"></i>
          <h2 className="text-base lg:text-lg font-semibold text-gray-900 tracking-[.20em] lg:tracking-[.30em] animate-fadeInUp">
            SEND US AN EMAIL
          </h2>
          <p className="text-gray-600 text-sm lg:text-xl text-center w-full lg:w-[70%] animate-fadeInUp">
            Have questions? Email us, and our team will get back to you quickly.
            Just fill out the form below.
          </p>
          <button
            className="bg-white text-black border border-gray-300 rounded-sm hover:bg-orange-400 hover:text-white px-20 lg:px-28 py-1 lg:py-2 mt-5 animate-fadeInUp"
            onClick={handleOpenModal}
          >
            SEND EMAIL
          </button>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 animate-fadeInUp">
          <i className="fi fi-ss-comment-sms text-4xl lg:text-6xl text-orange-500"></i>
          <h2 className="text-base lg:text-lg font-semibold text-gray-900 tracking-[.20em] lg:tracking-[.30em] animate-fadeInUp">
            LIVE CHAT
          </h2>
          <p className="text-gray-600 text-sm lg:text-xl text-center animate-fadeInUp">
            Chat with a member of our in-house team.
          </p>
          <button className="bg-white text-black border border-gray-300 rounded-sm hover:bg-orange-400 hover:text-white px-8 lg:px-10 lg:py-2 animate-fadeInUp">
            START HERE
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50 p-6 md:p-0">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative overflow-hidden">
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-3xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Email Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-gray-800 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-800 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-800 text-sm font-medium">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition duration-200 ease-in-out"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
