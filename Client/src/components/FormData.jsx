import React, { useEffect, useState } from "react";
import axios from "axios";

const FormData = () => {
  const [feedbacks, setFeedback] = useState([]);

  const answers = [
    { ans: "தருமம் எப்போதுமே தலைகாக்கும்"},
    { ans: "அண்மை காலமாக மக்களின் மனிதாபிமானம், கடமை உணர்வு, பெருந்தன்மை போன்ற நல்ல குணங்கள்"},
    { ans: "ஒவ்வொரு ஜாதகத்திலும் சிறப்பான நல் யோகங்களும் இருக்கும். சில தோஷங்களும் இருக்கும். அந்த வகையில்"},
    { ans: ""},
    { ans: "ஓரறிவு, இரண்டறிவு, மூன்றறிவு, நான்கறிவு, ஐந்தறிவு ஜீவன்களிடம் இருப்பது உயிர். ஆறறிவு படைத்த"},
  ]

  useEffect(() => {
    axios
      .get("http://localhost:4000/feedback")
      .then((response) => {
        console.log("Fetched Data:", response.data);
        setFeedback(response.data);
      })
      .catch((err) => console.log("Error fetching data:", err));
  }, []);

  return (
    <div className="fb-container">
      <div className="wrapper">
      {feedbacks.map((fbs, index) => (
  <div key={index} className="ques-container">
    <p className="ques">{fbs.question}</p>
    <p className="ans">{answers[index]?.ans || "No answer available"}</p>
  </div>
))}

      </div>
    </div>
  );
};

export default FormData;
