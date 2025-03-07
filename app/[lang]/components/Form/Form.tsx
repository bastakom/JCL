"use client";

import { useState } from "react";
import { render } from "storyblok-rich-text-react-renderer";

const Form = ({ title, lang }: any) => {
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
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
        <select
          required
          className="lg:w-1/2"
          value={formData.subject}
          onChange={handleChange}
          id="subject"
          name="subject"
        >
          <option value="" disabled>
            {lang.lang == "en"
              ? "- Choose -"
              : lang.lang == "fr"
              ? "- Choisir -"
              : "- Välj -"}
          </option>
          <option value="coaching">
            {lang.lang == "fr" ? "Entraînement" : "Coaching"}
          </option>
          <option value="consulting">
            {lang.lang == "fr" ? "Consultante" : "Consulting"}
          </option>
          <option value="utbildning">
            {lang.lang == "en"
              ? "Education"
              : lang.lang == "fr"
              ? "Éducation"
              : "Utbildning"}
          </option>
          <option value="Annat"></option>
          {lang.lang == "en" ? "Other" : lang.lang == "fr" ? "Autre" : "Annat"}
        </select>
        <input
          type="text"
          name="name"
          placeholder={
            lang.lang == "en"
              ? "Sur- & lastname*"
              : lang.lang == "fr"
              ? "Avant et après"
              : "För- och efternamn*"
          }
          required
          value={formData.name}
          onChange={handleChange}
          aria-required
        />
        <input
          type="email"
          name="email"
          placeholder={lang.lang == "sv" ? "E-post*" : "Email*"}
          required
          value={formData.email}
          onChange={handleChange}
          aria-required
        />
        <input
          type="phone"
          name="phone"
          placeholder={
            lang.lang == "en"
              ? "Phone*"
              : lang.lang == "fr"
              ? "Téléphone"
              : "Telefon*"
          }
          required
          value={formData.phone}
          onChange={handleChange}
        />

        <textarea
          rows={10}
          name="message"
          placeholder={lang.lang == "sv" ? "Meddelande" : "Message"}
          value={formData.message}
          onChange={handleChange}
        />
        <label className="flex gap-2 items-start">
          <input type="checkbox" />
          <span className="text-white -mt-2">
            {lang.lang == "en"
              ? "I agree that you process my personal data as above. Read more about how we process your personal data here"
              : lang.lang == "fr"
              ? "J'accepte que vous traitiez mes données personnelles comme ci-dessus. En savoir plus sur la manière dont nous traitons vos données personnelles ici"
              : "Jag godkänner att ni hanterar mina personuppgifter enligt ovan. Läs mer om hur vi behandlar dina personuppgifter här"}
          </span>
        </label>
        <button
          className="text-white border-2 border-white py-2  max-w-[150px] hover:bg-white hover:text-black transition-all duration-300"
          type="submit"
        >
          {lang.lang == "en"
            ? "Send"
            : lang.lang == "fr"
            ? "Envoyer"
            : "Skicka"}
        </button>
      </form>
    </div>
  );
};

export default Form;
