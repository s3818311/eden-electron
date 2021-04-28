import React, {useState} from "react";

const Result = () => {
  // eslint-disable-next-line no-unused-vars
  const [results, setResults] = useState(
    [
      {
        profilepic: "",
        name: "Student 1",
        exam1: "100",
        exam2: "100",
        exam3: "100",
        exam4: "100",
        exam5: "100",
        exam6: "100"
      },
      {
        profilepic: "",
        name: "Student 2",
        exam1: "100",
        exam2: "100",
        exam3: "100",
        exam4: "100",
        exam5: "100",
        exam6: "100"
      },
      {
        profilepic: "",
        name: "Student 3",
        exam1: "100",
        exam2: "100",
        exam3: "100",
        exam4: "100",
        exam5: "100",
        exam6: "100"
      },
      {
        profilepic: "",
        name: "Student 4",
        exam1: "100",
        exam2: "100",
        exam3: "100",
        exam4: "100",
        exam5: "100",
        exam6: "100"
      }

    ]
  );

  return (

    <div className="w-full overflow-auto">
      <div className="flex justify-end w-full">
        <div className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red">
            Download Result
        </div>
      </div>

      <div className="px-20 py-10">
        <table className="w-full table-fixed">
          <thead>
            <tr className="text-rmit-blue bg-rmit-blue bg-opacity-10">
              <th>Profile Picture</th>
              <th>Name</th>
              <th>Exam 1</th>
              <th>Exam 2</th>
              <th>Exam 3</th>
              <th>Exam 4</th>
              <th>Exam 5</th>
              <th>Exam 6</th>
            </tr>
          </thead>
          <tbody>
            {results.map(
              (item,index)=>{
                return(
                  <tr key={index} className="border-b-2 border-black border-opacity-20">
                    <td className="px-2 py-1 text-center grid justify-items-center">
                      <img src="https://cdn.tgdd.vn/GameApp/3/228748/Screentshots/among-us-228748-logo-14-09-2020.png"
                        className="object-scale-down h-28"
                        alt="profilepic"></img>
                    </td>
                    <td className="px-2 py-1 text-center">
                      {item.name}
                    </td>
                    <td className="px-2 py-1 text-center">
                      {item.exam1}
                    </td>
                    <td className="px-2 py-1 text-center">
                      {item.exam2}
                    </td>
                    <td className="px-2 py-1 text-center">
                      {item.exam3}
                    </td>
                    <td className="px-2 py-1 text-center">
                      {item.exam4}
                    </td>
                    <td className="px-2 py-1 text-center">
                      {item.exam5}
                    </td>
                    <td className="px-2 py-1 text-center">
                      {item.exam6}
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

export default Result;
