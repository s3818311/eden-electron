import React, {useState} from "react";


const WatingScreen = () => {
  // eslint-disable-next-line no-unused-vars
  const [studentList, setStudentList] = useState(
    [
      {
        name: "Student 1"
      },
      {
        name: "Student 2"
      },
      {
        name: "Student 3"
      },
      {
        name: "Student 4"
      },
      {
        name: "Student 5"
      },
      {
        name: "Student 6"
      },
      {
        name: "Student 7"
      }

    ]
  );

  return (
    <div className="flex items-center w-screen h-screen">

      <div className="justify-center w-full h-auto grid grid-rows gap-y-3">
        <div className="h-16 px-32 ">
          <div className="flex items-center w-full h-full rounded-sm bg-rmit-blue">
            <div className="mx-auto text-2xl text-center text-white">Title of Examination</div>
          </div>
        </div>
        <div className="h-12 px-32 ">
          <div className="flex items-center w-full h-full rounded-sm bg-wating-banner bg-opacity-70">
            <div className="mx-auto text-xl text-center text-white">Wating for examinees to join</div>
          </div>
        </div>


        <div className="px-36">
          <div className="w-full h-48 p-2 overflow-auto border-2">
            {
              studentList.map(
                (item, index)=>{
                  return(
                    <div key={index} className="py-2">
                      {item.name}
                    </div>
                  );
                }
              )
            }
          </div>
          <div className="flex justify-end w-full py-2">
            <button type="submit" className="px-4 py-2 font-bold text-white rounded bg-rmit-red hover:bg-rmit-red-bold">
                Distribute test
            </button>
          </div>
        </div>

        <div className="h-12 px-32 ">
          <div className="flex items-center justify-center w-1/2 h-full rounded-sm bg-rmit-blue">
            <div className="text-xl text-center text-white">
                Announcement
            </div>
          </div>
        </div>

        <div className="px-36">
          <textarea type="text" className="w-full px-3 py-2 mb-2 text-lg text-gray-700 border rounded focus:bg-primary"
            placeholder="Message"/>
          <div className="flex justify-end w-full py-2">
            <button type="submit" className="px-4 py-2 font-bold text-white rounded bg-rmit-red hover:bg-rmit-red-bold">
                Send
            </button>
          </div>
        </div>

        <div className="px-96">
        </div>
      </div>
    </div>
  );

};

export default WatingScreen;
