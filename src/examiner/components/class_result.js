import React, {useState} from "react";

const Result = () => {
  // eslint-disable-next-line no-unused-vars
  const [results, setResults] = useState(
    [
      {
        id: "001",
        name: "Student 1",
        exam1: "100",
        exam2: "100",
        exam3: "100",
        exam4: "100",
        exam5: "100",
        exam6: "100"
      },
      {
        id: "002",
        name: "Student 2",
        exam1: "100",
        exam2: "100",
        exam3: "100",
        exam4: "100",
        exam5: "100",
        exam6: "100"
      },
      {
        id: "003",
        name: "Student 3",
        exam1: "100",
        exam2: "100",
        exam3: "100",
        exam4: "100",
        exam5: "100",
        exam6: "100"
      },
      {
        id: "004",
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
      <div className="flex justify-end w-full py-5">
        <div className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red">
            Download Result
        </div>
      </div>

      <div className="">
        <table className="w-full table-fixed">
          <thead>
            <tr className="text-rmit-blue bg-rmit-blue bg-opacity-10">
              <th className="sticky top-0 py-2 bg-blue-200">Profile Picture</th>
              <th className="sticky top-0 py-2 bg-blue-200">Name</th>
              <th className="sticky top-0 py-2 bg-blue-200">Exam 1</th>
              <th className="sticky top-0 py-2 bg-blue-200">Exam 2</th>
              <th className="sticky top-0 py-2 bg-blue-200">Exam 3</th>
              <th className="sticky top-0 py-2 bg-blue-200">Exam 4</th>
              <th className="sticky top-0 py-2 bg-blue-200">Exam 5</th>
              <th className="sticky top-0 py-2 bg-blue-200">Exam 6</th>
            </tr>
          </thead>
          <tbody>
            {results.map(
              (item,index)=>{
                return(
                  <tr key={index} className="border-b-2 border-black border-opacity-20">
                    <td className="px-2 py-1 text-center grid justify-items-center">
                      {item.id}
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
