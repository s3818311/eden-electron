import React, {useState} from "react";
import useFetch from "react-fetch-hook";
import SelectParticipant from "../components/select_participants";
import Loading from "../components/loading";


const StartExam = () => {
  const [showParticipant, toggleSelection] = useState(false);

  const renderExamList = () => {
    const {isLoading, data} = useFetch("http://localhost:3001/file/examList.json");
    return isLoading ? <Loading /> :
      data.map(
        (item, index) => {
          return(
            <option value={item.fileName} key={index}>{item.title}</option>
          );
        }
      );
  };

  return (
    <div className="w-full">
      <div className="flex justify-end w-full">
        <div className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red">
            Start Exam
        </div>
      </div>


      <div className = "flex justify-center px-20 py-10">
        <div className = "flex flex-row">
          <form>
            <div className="grid grid-rows-2 gap-5">

              <div className="grid grid-cols-2 gap-2">
                <div className="text-lg text-rmit-blue">
                Select Exam
                </div>
                <select className="inline-block px-2 py-1 border rounded-md" name="exam" id="exam-input">
                  {renderExamList()}
                </select>
              </div>


              <div className="grid grid-cols-2 gap-2">
                <div className="text-lg text-rmit-blue">
                Select Participants
                </div>
                <div>
                  <select className="inline-block px-2 py-1 border rounded-md" name="participant" id="participant-input" onChange={(event)=>{event.target.value == "select" ? toggleSelection(true) : toggleSelection(false);}}>
                    <option selected value="default">All students (default)</option>
                    <option value="select">Select students</option>
                  </select>
                </div>
              </div>

              {showParticipant && <SelectParticipant /> }

              <div>
                <div className="text-lg text-rmit-blue">
                  Exam settings
                </div>

                <div className="grid grid-rows-2 gap-2">
                  <div className="pl-7">
                    <input type="checkbox" name="suffle" id=""/>
                    <div className="inline-block px-5">
                    Shuffle answers
                    </div>
                  </div>

                  <div className="pl-7">
                    <input type="checkbox" name="time-limit" id=""/>
                    <div className="inline-block px-5">
                    Time limit
                    </div>
                    <input type="text" className="w-8 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600" name="time"/>
                    <div className="inline-block px-2">
                      minutes
                    </div>
                  </div>
                </div>

              </div>

              <div>
                <div className="text-lg text-rmit-blue">
                  Grading settings
                </div>

                <div className="pl-7">
                  <input type="checkbox" name="auto-grade" id=""/>
                  <div className="inline-block px-5">
                    Auto grading (multiple choice questions)
                  </div>
                </div>

              </div>

              <div>
                <div className="text-lg text-rmit-blue">
                  Display grade
                </div>

                <div className="pl-7">
                  <input type="checkbox" name="show-grade" id=""/>
                  <div className="inline-block px-5">
                    Auto show grades
                  </div>
                </div>

              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartExam;
