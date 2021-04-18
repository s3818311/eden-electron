import React from "react";
import NavTab from "../components/navtab";
import { Route } from "react-router";


const ExamFolder = () => {
  return (
    <div className="w-9/12 h-screen px-10 pb-10">
      <div className="flex items-center h-1/6">
        <div className="text-3xl text-rmit-blue">
          Exam Folder
        </div>
      </div>
      <NavTab/>
      <div className="pt-2 h-5/6">

        <div className="flex flex-row flex-wrap">
          <Route exact path="/exam/folder/list">

          </Route>
          <Route exact path="/exam/folder/participant">
              
          </Route>
          <Route exact path="/exam/folder/result">
              
          </Route>
        </div>
      </div>
    </div>
  );
};

export default ExamFolder;
