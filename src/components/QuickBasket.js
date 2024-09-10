import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

// Modal Component
const Modal = ({ title, description, onClose, icon }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      modalRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        ref={modalRef}
        className="relative p-6 rounded-lg shadow-lg w-11/12 md:w-1/3 max-w-lg bg-white"
      >
        <div className="flex items-center gap-2 mb-4">
          <i className={`${icon} text-gray-600 mr-2 text-3xl mt-1`}></i>
          <h3 className="text-2xl font-bold text-gray-800 underline underline-offset-4">
            {title}
          </h3>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

// QuickBasket Component
const QuickBasket = () => {
  const [visibleModal, setVisibleModal] = useState(null);
  const buttonRefs = useRef([]);
  buttonRefs.current = [];

  const sections = [
    {
      title: "About",
      description: (
        <>
          <p className="mb-4">
            <strong>Welcome to QuickBasket, a subbrand of EatMore!</strong>
          </p>
          <p className="mb-4">
            When emergencies strike or cravings hit unexpectedly,{" "}
            <strong>QuickBasket</strong> is here to provide fast, reliable food
            delivery. Our app ensures you get fresh meals delivered quickly,
            often within minutes, from a curated selection of top local
            restaurants.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Fast Delivery:</strong> Get your food swiftly, whenever
              you need it.
            </li>
            <li>
              <strong>Emergency Ready:</strong> Perfect for those urgent meal
              moments.
            </li>
            <li>
              <strong>Quality Choices:</strong> Enjoy a variety of high-quality,
              local options.
            </li>
            <li>
              <strong>Easy Ordering:</strong> Simple, quick, and efficient app
              experience.
            </li>
          </ul>
          <p className="text-gray-700">
            <strong>QuickBasket</strong> is committed to keeping you well-fed in
            any situation. Thanks for choosing us for your emergency food needs!
          </p>
        </>
      ),
      sectionName: "about",
      backgroundColor: "bg-blue-300", // Blue color for About
      icon: "fi fi-sr-info", // Icon for About
    },
    {
      title: "Team",
      description:
        "Meet the talented and dedicated team behind QuickBasket. Our experts are committed to delivering exceptional service and ensuring that your food delivery experience is second to none. From our tech wizards to our customer support specialists, our team works tirelessly to bring you the best.",
      sectionName: "team",
      backgroundColor: "bg-green-300", // Green color for Team
      icon: "fi fi-rr-team-check",
    },
    {
      title: "Careers",
      description:
        "At QuickBasket, we’re always looking for passionate and driven individuals to join our team. If you’re excited about working in a fast-paced environment and making a difference in the food delivery industry, explore our career opportunities and see how you can be part of our success story.",
      sectionName: "career",
      backgroundColor: "bg-yellow-300", // Yellow color for Careers
      icon: "fi fi-bs-career-growth", // Icon for Careers
    },
    {
      title: "Our Values",
      description:
        "Our values drive everything we do at QuickBasket. We believe in delivering excellence, fostering innovation, and maintaining integrity in all our interactions. Our commitment to quality and customer satisfaction is at the core of our mission, and we strive to make a positive impact through every delivery.",
      sectionName: "ourValues",
      backgroundColor: "bg-red-300", // Red color for Our Values
      icon: "fi fi-sr-hands-holding-diamond", // Icon for Our Values
    },
  ];

  const handleOpenModal = (sectionName) => {
    const section = sections.find((sec) => sec.sectionName === sectionName);
    setVisibleModal(section);
  };

  const handleCloseModal = () => {
    setVisibleModal(null);
  };

  const addToRefs = (el) => {
    if (el && !buttonRefs.current.includes(el)) {
      buttonRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      buttonRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
      }
    );
  }, []);

  return (
    <div className="p-8 bg-gray-200 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">QuickBasket</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-[400px] w-[70%] p-2">
        {sections.map(({ title, sectionName, backgroundColor, icon }, index) => (
          <button
            key={sectionName}
            ref={addToRefs}
            onClick={() => handleOpenModal(sectionName)}
            className={`text-gray-800 font-semibold text-2xl p-4 rounded-lg shadow-md transition hover:scale-105 ${backgroundColor}`}
          >
            {title}
          </button>
        ))}
      </div>
      {visibleModal && (
        <Modal
          title={visibleModal.title}
          description={visibleModal.description}
          onClose={handleCloseModal}
          icon={visibleModal.icon}
        />
      )}
    </div>
  );
};

export default QuickBasket;
