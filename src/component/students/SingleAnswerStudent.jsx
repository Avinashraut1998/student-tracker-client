import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleAnswerStudent = () => {
  const [answer, setAnswer] = useState(null);
  const { homeworkId } = useParams();
  const cleanAnswerId = homeworkId.replace(/[{}]/g, "");

  useEffect(() => {
    const fetchAnswer = async () => {
      const response = await axios.get(
        `http://localhost:8000/student//single-homework/${cleanAnswerId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setAnswer(response.data);
    };
    fetchAnswer();
  }, []);

  return <div>SingleAnswerStudent</div>;
};

export default SingleAnswerStudent;
