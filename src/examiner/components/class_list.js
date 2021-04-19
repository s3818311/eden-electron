import React, {useState} from "react";
import {AiFillFileText} from "react-icons/ai";
import { Link } from "react-router-dom";


const List = () => {
  // eslint-disable-next-line no-unused-vars
  const [examList, setExamList] = useState(
    [
      {
        title: "Exam 1",
        path: ""
      },
      {
        title: "Exam 2",
        path: ""
      },
      {
        title: "Exam 3",
        path: ""
      },
      {
        title: "Exam 4",
        path: ""
      },
      {
        title: "Exam 5",
        path: ""
      },
      {
        title: "Exam 6",
        path: ""
      }
    ]
  );

  return (
    <div>
      <div className="flex justify-end w-full">
        <div className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red">
            Create new exam
        </div>
      </div>


      <div className = "px-20 py-10 grid grid-cols-6 gap-20">
        {examList.map(
          (item, index)=>{
            return(
              <Link to={item.path} key={index} className="flex flex-col items-center text-rmit-blue">
                <div className="text-6xl">
                  <AiFillFileText />
                </div>
                <div className=" ">
                  {item.title}
                </div>
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};

export default List;
