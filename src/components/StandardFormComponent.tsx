import React, { useState } from "react";
import OrangeButton from "./OrangeButton"; // Assuming OrangeButton is another component
import { v4 as uuidv4 } from "uuid";

function StandardFormComponent() {
  const [formData, setFormData] = useState({
    formId: uuidv4(),
    name: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    submissionDate: new Date().toISOString().replace("T", " ").substring(0, 19),
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
            .substring(0, 19),
        }),
      });
      const data = await response.json();
      console.log(data);
      setFormData({
        formId: uuidv4(),
        name: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
        submissionDate: new Date()
          .toISOString()
          .replace("T", " ")
          .substring(0, 19),
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="w-full sticky top-0 py-10">
      <div className="relative max-w-screen-xl mx-auto py-6 font-poppins">
        <form onSubmit={handleSubmit}>
          <div className="max-w-screen-md w-full flex flex-col space-y-3 px-10 mx-auto">
            <div className="flex space-y-3 md:space-y-0 md:space-x-5 flex-col md:flex-row">
              <input
                type="text"
                name="first_name"
                className="w-full"
                placeholder="Voornaam"
                value={formData.first_name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="last_name"
                className="w-full"
                placeholder="Achternaam"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
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
                * Waar bent u naar opzoek?
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
              placeholder="Overige opmerkingen (hoeveel panden, type woning, adres pand)"
              onChange={handleChange}
            />
            <button
              className="inline-block cursor-pointer select-none align-top m-0 text-center font-body text-base relative py-4 px-4 bg-[#ee6556] text-white border border-[#ea6953] rounded shadow-[0_3px_1px_#b64a38] transition-all duration-200 outline-none leading-none text-body font-normal hover:bg-[#ba463a] hover:shadow-[0_3px_1px_#ba463a] hover:text-white"
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

export default StandardFormComponent;
