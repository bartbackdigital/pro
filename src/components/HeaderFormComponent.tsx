import React, { useState } from "react";
import OrangeButton from "./OrangeButton";
import { v4 as uuidv4 } from "uuid"; // Ensure you've installed uuid with `npm install uuid`

function HeaderFormComponent() {
  const [formData, setFormData] = useState({
    formId: uuidv4(), // Generate a unique ID for each form instance
    name: "",
    email: "",
    phone: "",
    inquiryType: "", // Changed from product to inquiryType
    message: "",
    submissionDate: new Date().toISOString().replace("T", " ").substring(0, 19), // Formatted date
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submitToZapier", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submissionDate: new Date()
            .toISOString()
            .replace("T", " ")
            .substring(0, 19), // Update date to the moment of submission
        }),
      });
      const data = await response.json();
      console.log(data);
      // Reset form after submission
      setFormData({
        formId: uuidv4(), // Generate a new unique ID for the next form
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
        submissionDate: new Date()
          .toISOString()
          .replace("T", " ")
          .substring(0, 19),
      });
      // Add any post-submission logic here (e.g., display a success message)
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="w-full bg-[#f3f3f3] pb-12 text-darkGray mt-28">
      <div className="relative max-w-screen-xl mx-auto py-6 font-poppins">
        <div className="text-center mb-14">
          <h1 className="text-[30px] font-bold">Stel uw vraag hieronder</h1>
          <span className="text-gray50 text-[19px]">
            En wij zullen z.s.m. contact opnemen met u.
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="max-w-screen-md w-full flex flex-col space-y-3 px-10 mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Uw naam"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mailadres"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefoonnummer"
              value={formData.phone}
              onChange={handleChange}
            />
            <div>
              <strong className="block mt-5 mb-3">
                Waar bent u naar opzoek?
              </strong>
              <select
                name="inquiryType"
                className="w-full"
                value={formData.inquiryType}
                onChange={handleChange}
              >
                <option value="">Waar bent u naar opzoek?</option>
                <option value="Verkopen">Verkopen</option>
                <option value="Verkopen & Terughuren">
                  Verkopen & Terughuren
                </option>
                <option value="Verkopen met Huurders">
                  Verkopen met Huurders
                </option>
                <option value="Overig">Overig</option>
              </select>
            </div>
            <textarea
              name="message"
              className="min-h-[200px]"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              className="inline-block cursor-pointer select-none align-top m-0 text-center font-body text-base relative  
    py-4 px-4 bg-[#ee6556] text-white border border-[#ea6953] rounded shadow-[0_3px_1px_#b64a38] 
    transition-all duration-200 outline-none leading-none text-body font-normal hover:bg-[#ba463a] hover:shadow-[0_3px_1px_#ba463a] hover:text-white"
              type="submit"
            >
              Versturen
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default HeaderFormComponent;
