import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../MyContext";
import axios from "axios";
import HomeworksComponent from "./HomeworksComponents";
import CreateHomework from "./CreateHomework";
import AnswersList from "./AnswersList";

const TeacherDashboard = () => {
  const [homeworks, setHomeworks] = useState([]);
  const [answers, setAnswers] = useState([]);
  const { user } = useContext(MyContext);

  useEffect(() => {
    const fetchHomeworks = async () => {
      const userId = user._id;
      try {
        const response = await axios.get(
          `http://localhost:8000/teacher/fetch-homeworks/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setHomeworks(response.data.homeworks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHomeworks();
  }, []);

  return (
    <div className="p-4 flex justify-around items-center gap-5  ">
      <div>
        <CreateHomework homeworks={homeworks} setHomeworks={setHomeworks} />
        <HomeworksComponent homeworks={homeworks} />
      </div>
      <div>
        <AnswersList />
      </div>
    </div>
  );
};

export default TeacherDashboard;
