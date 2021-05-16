import React, {useState} from "react";
import Question from "../components/question";
import AddQuestionCard from "../components/addQuestionCard";

function QuestionBank() {

  // eslint-disable-next-line no-unused-vars
  const[questionList, updateQuestion]= useState([
    {
      question: "Question 1",
      options: [
        {
          id: 1,
          content: "Test1",
        },
        {
          id: 2,
          content: "Test2",
        },
        {
          id: 3,
          content: "Test3",
        },
        {
          id: 4,
          content: "Test4",
        },
      ],
      difficulty: "Easy"
    },
    {
      question: "Question 2",
      options: [
        {
          id: 1,
          content: "Test1",
        },
        {
          id: 2,
          content: "Test2",
        },
        {
          id: 3,
          content: "Test3",
        },
        {
          id: 4,
          content: "Test4",
        },
      ],
      difficulty: "Intermediate"
    },
    {
      question: "Question 3",
      options: [
        {
          id: 1,
          content: "Test1",
        },
        {
          id: 2,
          content: "Test2",
        },
        {
          id: 3,
          content: "Test3",
        },
        {
          id: 4,
          content: "Test4",
        },
      ],
      difficulty: "Hard"
    }
  ]);

  // eslint-disable-next-line no-unused-vars
  const [addQuestion, toggleCard] = useState(false);

  const toggleAddQuestion = () => {toggleCard(!addQuestion);};

  const buttonToggleCard = () => {
    return(
      <div className="flex justify-end w-full py-5">
        <div className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red" onClick={toggleCard}>
                Add Question
        </div>
      </div>
    );
  };


  return (
    <div className="w-full overflow-auto">
      {questionList.map((question, index)=>{
        console.log(question);
        return(
          <div key={index}>
            <Question questionObj={question} />
          </div>
        );
      })}

      {addQuestion ? <AddQuestionCard toggleCard={()=>{toggleAddQuestion();}}/> : buttonToggleCard()}

    </div>
  );
}

export default QuestionBank;
