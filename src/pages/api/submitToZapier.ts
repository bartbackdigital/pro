import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Destructuring to extract all fields directly
    const {
      name,
      email,
      first_name,
      last_name,
      phone,
      inquiryType,
      message,
      formId,
      submissionDate,
    } = req.body;

    const payload = {
      formId: formId, // Unique ID for each submission
      name: name,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      inquiryType: inquiryType,
      message: message,
      date: submissionDate, // Formatted submission date
    };

    try {
      const zapierResponse = await fetch(
        "https://hooks.zapier.com/hooks/catch/10706393/3n6eqcq/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!zapierResponse.ok) {
        const textResponse = await zapierResponse.text();
        throw new Error(
          `Failed to submit to Zapier. Status: ${zapierResponse.status}, Response: ${textResponse}`
        );
      }

      const result = await zapierResponse.json();
      res.status(200).json({ message: "Form submitted successfully", result });
    } catch (error: unknown) {
      // Explicitly marking error as unknown
      console.error("API Route error", error);
      if (error instanceof Error) {
        res
          .status(500)
          .json({ message: "Failed to submit form", error: error.message });
      } else {
        res.status(500).json({
          message: "Failed to submit form",
          error: "An unknown error occurred",
        });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
