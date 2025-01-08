"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "0773538179",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sathusabapathy@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Ward no-1, Mulliyawalai, Mullaitivu ",
  },
];

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    const formData = new FormData(form.current);
    const mail = formData.get("user_email");
    const message = formData.get("user_message");

    if (!mail || !message) {
      setError(true);
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container justify-center items-center mx-auto px-4 lg:w-full ">
        <div className="flex flex-col lg:flex-row  gap-20">
          {/* form container */}
          <div className=" lg:w-[70%]">
            <form
              onSubmit={sendEmail}
              ref={form}
              className="bg-purple-50 rounded-xl flex flex-col gap-6 p-6 lg:p-10 justify-center"
            >
              <span>
                <h3 className="text-2xl font-bold lg:text-4xl mb-4 lg:mb-5 ">
                  Let's Work Together
                </h3>
                <p className="text-gray-900 mb-4 lg:mb-5 text-lg lg:text-xlg">
                  Hello! I'm Sathursana Kanakasapapathy, I'm focused on creating
                  user-centric applications that are both innovative and
                  efficient. Let's connect and explore how we can create
                  something great together!
                </p>
                <span className="font-bold">Message:</span>
              </span>
              <textarea
                rows={4}
                placeholder="Type your Requirements here..."
                className="bg-transparent border-2 border-b-black outline-none resize-none placeholder:text-gray-500 text-sm lg:text-base"
                name="user_message"
              />
              <span className="font-bold">Email: </span>
              <input
                name="user_email"
                type="text"
                placeholder="Email address"
                className="bg-transparent border-b-2 border-b-black outline-none placeholder:text-gray-500 text-sm lg:text-base"
              />
              <button className="bg-black hover:bg-teal-500 text-white p-3 rounded-full w-24">Send</button>


              {success && (
                <span className="text-green-600 font-semibold text-sm lg:text-base">
                  Your message has been sent successfully!
                </span>
              )}
              {error && (
                <span className="text-red-600 font-semibold text-sm lg:text-base">
                  Something went wrong!
                </span>
              )}
            </form>
          </div>
          {/* text container */}
          <div className="flex-1 flex items-center justify-start ">
            <ul className="flex flex-col gap-6 lg:gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-4 lg:gap-6">
                    <div className="w-[40px] h-[40px] lg:w-[72px] lg:h-[72px] bg-transparent text-black rounded-md flex items-center justify-center">
                      <div className="text-2xl lg:text-4xl">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-md lg:text-lg">{item.title}</p>
                      <h3 className="text-base  font-semibold lg:text-xl">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
