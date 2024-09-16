import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I place an order on EatMore?",
      answer:
        "To place an order on EatMore, first, search for your preferred restaurant or cuisine using the search bar on the homepage. Once you find a restaurant, browse the menu and select the items you want to order. Add the items to your cart and proceed to checkout. Enter your delivery address, choose a payment method, and confirm your order. You'll receive a confirmation and estimated delivery time via email or SMS.",
    },
    {
      question: "Can I track my order in real-time?",
      answer:
        'Yes, you can track your order in real-time through the EatMore app. After placing your order, go to the "My Orders" section in your account to see the current status and location of your delivery.',
    },
    {
      question: "How do I cancel an order?",
      answer:
        'You can cancel an order within a certain timeframe by going to the "My Orders" section in the app and selecting the order you wish to cancel. If the option to cancel is not available, please contact our customer support for assistance.',
    },
    {
      question: "What payment methods are accepted on EatMore?",
      answer:
        "EatMore accepts various payment methods including credit/debit cards, net banking, digital wallets, and cash on delivery (COD). You can choose your preferred payment method during the checkout process.",
    },
    {
      question: "Are there any delivery charges?",
      answer:
        "Delivery charges may apply depending on your location and the restaurant's policies. You can view the delivery charges before finalizing your order in the checkout section.",
    },
    {
      question: "Can I modify my order after placing it?",
      answer:
        "Once an order is confirmed, it may not be possible to modify it. However, you can contact customer support as soon as possible to request any changes. We will do our best to accommodate your request if the order has not yet been processed.",
    },
    {
      question: "How do I report an issue with my order?",
      answer:
        "If you encounter any issues with your order, such as incorrect items or delivery problems, please contact our customer support team through the app or via email. Provide your order number and details of the issue, and we will resolve it promptly.",
    },
    {
      question: "How can I provide feedback on my experience?",
      answer:
        "You can provide feedback on your experience by leaving a review on the restaurant's page or by contacting our support team. Your feedback helps us improve our services.",
    },
    {
      question: "Is my personal information safe with EatMore?",
      answer:
        "Yes, your personal information is safe with EatMore. We use advanced security measures to protect your data and ensure it is not shared with unauthorized parties. For more details, you can review our privacy policy.",
    },
    {
      question: "Can I use EatMore in multiple locations?",
      answer:
        "Yes, EatMore is available in multiple locations. You can enter your delivery address to see the available restaurants and options in your area.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 underline underline-offset-8">
        FAQ
      </h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-gray-300 mb-4 shadow-md rounded-lg bg-white"
        >
          <div
            className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-100 rounded-t-lg transition duration-300 ease-in-out"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-lg font-semibold text-gray-800">
              {faq.question}
            </span>
            <i
              className={`transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              } text-2xl`}
            >
              &uarr;
            </i>
          </div>
          {openIndex === index && (
            <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
