/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { AiFillEdit } from "react-icons/ai";
import ClassTile from "../components/class_tile";
import Loading from "../components/loading";
import useFetch from "react-fetch-hook";

const courses = [
  {
    id: 1,
    title: "Software Engineering Project Management",
    code: "ISYS4044",
    img: "https://previews.123rf.com/images/sdecoret/sdecoret1610/sdecoret161000629/63999852-hand-drawn-project-presentation-on-blue-background.jpg",
  },
  {
    id: 2,
    title: "Data Structure",
    code: "DATA001",
    img: "https://videohive.img.customer.envatousercontent.com/files/226179982/data_and_numbers_preview_image.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=585e610d39da0d5f0cdc216c380ce211",
  },
  {
    id: 3,
    code: "Software Architecture and Design",
    title: "ISYS114",
    img: "https://blog.radware.com/wp-content/uploads/2019/10/SDLC.jpg",
  },
];

const recipes = [
  {
    id: 1,

    title: "Exam 1 result",
    // time:"60 mins",
    // author:"DATA001"
  },

  {
    id: 2,
    title: "Exam 2 result",
    // time:"80 minutes",
    // author:"ISYS114"
  },
];

const Course = (course) => {
  const { title, code, img } = course.course;
  return (
    <div className="px-4 pt-4 pb-4 grid grid-cols-1 sm:px-6 lg:px-4 xl:px-6 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
      <ul className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
        <li x-for="item in items">
          <a className="block p-4 border border-gray-200 rounded-lg hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group">
            <dl className="items-center grid grid-cols-2 sm:block lg:grid xl:block grid-rows-2">
              <div>
                <img src={img}></img>
              </div>
              <div>
                <dt className="sr-only">Title</dt>
                <dd className="font-medium text-black group-hover:text-rmit-blue leading-6">
                  {title}
                </dd>
              </div>
              <div>
                <dt className="sr-only">Code</dt>
                <dd className="text-sm font-medium group-hover:text-light-blue-200 sm:mb-4 lg:mb-0 xl:mb-4">
                  {code}
                </dd>
              </div>
            </dl>
          </a>
        </li>
      </ul>
    </div>
  );
};

// function Booklist(){
//   return(
//     <div className="">{courses.map((course)=>
//     // {const {img,title,author} = book;
//     {return (
//       <Course key={course.id} course={course}></Course>);
//     })}
//     </div>
//   );
// }

function ListItem(recipe) {
  const { title } = recipe.recipe;
  return (
    <div className="flex p-4 space-x-4">
      <div className="text-3xl">
        <AiFillEdit />
      </div>
      <div className="relative flex-auto min-w-0 sm:pr-20 lg:pr-0 xl:pr-20">
        <h2 className="text-lg font-semibold text-black mb-0.5">{title}</h2>
        {/* <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
          <div>
            <dt className="sr-only">Time</dt>
            <dd>
              <abbr title={`${time} minutes`}>{time}</abbr>
            </dd>
          </div>
          <div className="flex-none w-full font-normal mt-0.5">
            <dt className="inline">By </dt>{""}
            <dd className="inline text-black">{author}</dd>
          </div>
        </dl> */}
      </div>
    </div>
  );
}

function Recipes() {
  return (
    <div className="divide-y-2 divide-dashed md:divide-solid">
      <nav className="p-4">
        <ul className="flex space-x-2">
          <li>
            <a className="items-center hidden px-8 text-white bg-rmit-blue rounded-md text-amber-900 py-0.5 sm:flex lg:hidden xl:flex space-x-1">
              Recent results
            </a>
          </li>
          {/* <li>
            <a className="items-center hidden px-8 bg-blue-300 rounded-md text-amber-900 py-0.5 sm:flex lg:hidden xl:flex space-x-1">
            Scheduled exam</a>
          </li> */}
        </ul>
      </nav>
      <ul className="divide-y divide-teal-400 md:divide-pink-400"></ul>
      <ul className="divide-y divide-fuchsia-300">
        {recipes.map((recipe) => (
          <ListItem key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
}

const deleteClass = (formData) => {
  fetch("http://localhost:3001/classes/" + formData.classId, {
    method: "DELETE",
  });
};

const renderClasses = () => {
  const { isLoading, data } = useFetch("http://localhost:3001/classes");

  return isLoading ? (
    <Loading />
  ) : (
    data.map((classObj, index) => (
      <ClassTile
        classId={classObj.id}
        name={classObj.name}
        key={index}
        deleteFunc={deleteClass}
      />
    ))
  );
};

const Dashboard = () => {
  return (
    <div className="flex-grow h-screen px-10 pb-10">
      <div className="flex items-center border-b-2 h-1/6 border-rmit-red">
        <div className="text-3xl text-rmit-blue">Dashboard</div>
      </div>
      <div className="flex flex-wrap pb-5 md:flex-wrap-reverse ...">
        <div className="pt-6 text-2xl text-rmit-blue">
          Recently accessed classes
        </div>
      </div>
      <form className="relative">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2"
        >
          <path
            fillrule="evenodd"
            cliprule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          className="w-full py-2 pl-10 text-sm text-black placeholder-gray-500 border border-gray-200 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none rounded-md"
          type="text"
          aria-label="Filter projects"
          placeholder="Filter projects"
        />
      </form>

      <div className="flex flex-grow overflow-auto">
        <div className="flex flex-row flex-wrap content-start w-2/3 h-full">
          {/* <Booklist></Booklist> */}
          {renderClasses()}
        </div>
        <div className="sticky top-0 flex flex-row flex-wrap content-start w-1/2 h-full">
          <Recipes />
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  tabName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Dashboard;
