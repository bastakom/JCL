"use client";

import { useState } from "react";
import { render } from "storyblok-rich-text-react-renderer";

const Form = ({ title }: any) => {
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleButtonClick = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setSent(true);
      } else {
        setStatus("error");
        setSent(false);
      }
    } catch (error) {
      console.error("Error sending message.", error);
      setStatus("error");
    }
  };

  return (
    <div className="">
      <span className="text-center mb-10 text-[29px]">{render(title)}</span>
      <form className="flex flex-col form gap-6" onSubmit={handleButtonClick}>
        <input
          type="text"
          name="name"
          placeholder="För- och efternamn*"
          required
          value={formData.name}
          onChange={handleChange}
          aria-required
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          value={formData.email}
          onChange={handleChange}
          aria-required
        />
        <input
          type="phone"
          name="phone"
          placeholder="Telefon"
          required
          value={formData.phone}
          onChange={handleChange}
        />

        <textarea
          rows={10}
          name="message"
          placeholder="Meddelande"
          value={formData.message}
          onChange={handleChange}
        />
        <label className="flex gap-2 items-start">
          <input type="checkbox" />
          <span className="text-white -mt-2">
            Jag godkänner att ni hanterar mina personuppgifter enligt ovan. Läs
            mer om hur vi behandlar dina personuppgifter här
          </span>
        </label>
        <button
          className="text-white border-2 border-white py-2  max-w-[150px] hover:bg-white hover:text-black transition-all duration-300"
          type="submit"
        >
          Skicka
        </button>
      </form>
    </div>
  );
};

export default Form;
