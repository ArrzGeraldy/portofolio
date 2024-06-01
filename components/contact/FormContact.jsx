"use client";
import React, { useState } from "react";
import Title from "../Title";
import toast, { Toaster } from "react-hot-toast";

const FormContact = () => {
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(emailForm),
    });
    const json = await res.json();
    if (res.ok) {
      toast.success(json.message);
    } else {
      toast.error(json.error.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="mt-12 text-gray-300">
      <Toaster />
      <Title title={"Send Me Email"} />
      <form
        action=""
        className="mt-8 flex flex-col gap-4 w-full lg:w-1/2"
        onSubmit={sendEmail}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={emailForm.name}
            onChange={handleChange}
            id="name"
            placeholder="your name"
            className="bg-color-dark w-full p-2 rounded-md border border-color-orange focus:outline-none focus:ring-1 focus:ring-color-orange focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={emailForm.email}
            onChange={handleChange}
            placeholder="jon@gmail.com"
            className="bg-color-dark w-full p-2 rounded-md border border-color-orange focus:outline-none focus:ring-1 focus:ring-color-orange focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={emailForm.message}
            onChange={handleChange}
            className="bg-color-dark w-full h-44 p-2 rounded-md border border-color-orange focus:outline-none focus:ring-1 focus:ring-color-orange focus:shadow-outline"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 mt-4 bg-color-orange rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default FormContact;
