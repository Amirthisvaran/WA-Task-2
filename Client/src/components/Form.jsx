import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [question, setQuestion] = useState("");
  const [message, setMessage] = useState("");

  const collectData = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch("http://localhost:4000/", {
        method: "POST",
        body: JSON.stringify({ name, location, question }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      let result = await response.json();
      console.log("Server Response:", result);

      // Store feedback locally (optional)
      localStorage.setItem("feedback", JSON.stringify(result));

      // Show success message
      setMessage("Your question has been submitted successfully!");

      // Reset form fields
      setName("");
      setLocation("");
      setQuestion("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setMessage("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={collectData}>
        <h1>Ask your Question</h1>
        <input
          type="text"
          className="per"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="location"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          className="question"
          placeholder="Enter your Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <p className="note-p">
          Notes: இந்தப் பகுதியில் உங்களுக்கான பொதுவான கேள்விகள் அல்லது பொதுவான
          சந்தேகங்களை கேட்டுக் கொள்ளலாம். தனிப்பட்ட உங்களது ஜாதக கேள்விகளுக்கு
          விடை அளிக்கப்படாது.
        </p>
        <button type="submit">Submit</button>
      </form>

      {/* Display Success or Error Message */}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Form;
