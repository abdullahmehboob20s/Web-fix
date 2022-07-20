import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full flex justify-center items-center p-4">
      <form
        method="POST"
        action="https://getform.io/f/9c81a620-e4cb-4561-9f2b-1ce313e2a40b"
        className="flex flex-col max-w-xl w-full"
      >
        <div className="pb-3">
          <p className="text-4xl font-bold inline border-b-4 border-orange text-gray-light ">
            Contact
          </p>
          <p className="text-gray-light py-4">
            Feel free to reach out anytime!
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-gray-light border-2 hover:bg-pink-600 hover:text-orange px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
