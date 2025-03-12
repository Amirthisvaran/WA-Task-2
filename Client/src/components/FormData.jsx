import React, { useEffect, useState } from "react";
import axios from "axios";

const FormData = ({ location }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState(null);

  const answers = [
    { ans: "தருமம் எப்போதுமே தலைகாக்கும்" },
    { ans: "அண்மை காலமாக மக்களின் மனிதாபிமானம், கடமை உணர்வு, பெருந்தன்மை போன்ற நல்ல குணங்கள்" },
    { ans: "ஒவ்வொரு ஜாதகத்திலும் சிறப்பான நல் யோகங்களும் இருக்கும். சில தோஷங்களும் இருக்கும். அந்த வகையில்" },
    { ans: "" },
    { ans: "ஓரறிவு, இரண்டறிவு, மூன்றறிவு, நான்கறிவு, ஐந்தறிவு ஜீவன்களிடம் இருப்பது உயிர். ஆறறிவு படைத்த" },
  ];

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        let url = "http://localhost:4000/feedback";

        if (location) {
          url += `?location=${encodeURIComponent(location)}`;
        }

        const response = await axios.get(url);
        console.log("Fetched Data:", response.data);
        setFeedbacks(response.data);
      } catch (err) {
        console.log("Error fetching data:", err);
        setError("Failed to load feedbacks");
      }
    };

    fetchFeedbacks();
  }, [location]);

  return (
    <div className="fb-container">
      <div className="wrapper">
        {error ? (
          <p>{error}</p>
        ) : feedbacks.length > 0 ? (
          feedbacks.map((fbs, index) => (
            <div key={index} className="ques-container">
              <p className="ques">{fbs.question}</p>
              <p className="ans">{answers[index]?.ans || "No answer available"}</p>
            </div>
          ))
        ) : (
          <p>No feedbacks found for this location.</p>
        )}
      </div>
    </div>
  );
};

export default FormData;
