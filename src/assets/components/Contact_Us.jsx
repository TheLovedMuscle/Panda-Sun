import React, { useState, useRef } from "react";
import { useForm, ValidationError } from '@formspree/react';
import Logo from "../img/Logo.png";
import Contact from "../img/Sun_In.jpg";

const Contact_Us = () => {
  const [email, setEmail] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [message, setMessage] = useState("");
  const messageRef = useRef(null);

  const commonDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
  const subjects = ["Fees Enquiry", "Service Enquiry", "Product Information", "Technical Support", "Others"];

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value.includes("@")) {
      const [localPart, domainPart] = value.split("@");
      if (!domainPart) {
        setShowSuggestions(true);
        setSuggestions(commonDomains.map(domain => `${localPart}@${domain}`));
      } else {
        setShowSuggestions(false);
      }
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setEmail(suggestion);
    setShowSuggestions(false);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    const textarea = messageRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const [state, handleSubmit] = useForm("mrgndjob");
  if (state.succeeded) {
    return <p >Thanks for reaching out! We will get back to you soon.</p>;
  }

  return (
    <div className="contact-us-container bg-white text-black overflow-hidden">
      <header className="flex justify-center items-center py-4">
        <img src={Logo} alt="Go Solar Energy Logo" className="w-20" />
        <h1 className="text-2xl ml-2">Contact Us</h1>
      </header>
      <p className="text-center text-20px">
        Have Any Questions? Send Us A Message And We Will Get Back To You As Soon As We Can
      </p>

      <div className="Readjust_Half_Screen_C  flex justify-around p-4">
        <div className="w-1/2 p-4">
          <form className="contact-us-form" onSubmit={handleSubmit}>
            <div className="form-group relative">
              <label htmlFor="email" className="label text-2xl ml-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="input"
              />
              <ValidationError 
                prefix="Email" 
                field="email" 
                errors={state.errors}
              />
              {showSuggestions && (
                <ul className="absolute bg-white mt-1 w-full">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="name" className="label text-2xl ml-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="label text-2xl ml-2">Subject</label>
              <select id="subject" name="subject" required className="input">
                {subjects.map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="label text-2xl ml-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
                ref={messageRef}
                required
                className="input w-full h-auto overflow-hidden resize-none"
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message" 
                errors={state.errors}
              />
            </div>

            <button type="submit" disabled={state.submitting} className="submit-button mt-4">
              Submit
            </button>
          </form>
        </div>

        <div className="w-1/2 p-4  flex flex-col items-center">
          <img
            src={Contact}
            alt="Contact"
            className="h-80 w-80 object-cover"
          />
          <h1 className="text-4xl text-center mt-4">
            The <span className="text-orange-600">Power</span> Of The Sun In Your Hands
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
