import React, {useState} from "react";

const Participants = () => {
  // eslint-disable-next-line no-unused-vars
  const [participants, setParticipant] = useState(
    [
      {
        profilepic: "",
        name: "Student 1",
        dob: "2000/01/01"
      },
      {
        profilepic: "",
        name: "Student 2",
        dob: "1999/05/12"
      },
      {
        profilepic: "",
        name: "Student 3",
        dob: "2002/08/23"
      },
      {
        profilepic: "",
        name: "Student 4",
        dob: "2001/06/19"
      }

    ]
  );

  return (
    <div>
      <div className="flex justify-end w-full">
        <div className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red">
            Add participant
        </div>
      </div>

      <div className="px-20 py-10">

        <table className="w-full table-fixed">
          <thead>
            <tr className="text-rmit-blue bg-rmit-blue bg-opacity-10">
              <th>Profile Picture</th>
              <th>Name</th>
              <th>Date of birth</th>
            </tr>
          </thead>
          <tbody>
            {participants.map(
              (item,index)=>{
                return(
                  <tr key={index} className="border-b-2 border-black border-opacity-20">
                    <td className="px-2 py-2 text-center grid justify-items-center">
                      <img src="https://cdn.tgdd.vn/GameApp/3/228748/Screentshots/among-us-228748-logo-14-09-2020.png"
                        className="items-center object-scale-down h-28"
                        alt="profilepic"></img>
                    </td>
                    <td className="px-2 py-2 text-center">
                      {item.name}
                    </td>
                    <td className="px-2 py-2 text-center">
                      {item.dob}
                    </td>
                  </tr>
                );
              }
            )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Participants;
