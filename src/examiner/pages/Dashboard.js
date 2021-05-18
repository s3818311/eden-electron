import React from "react";
import PropTypes from "prop-types";
import {AiFillEdit} from "react-icons/ai";

const courses =[
  {id:1,
    title: "Software Engineering Project Management",
    code:"ISYS4044",
    img: "https://previews.123rf.com/images/sdecoret/sdecoret1610/sdecoret161000629/63999852-hand-drawn-project-presentation-on-blue-background.jpg"
  },
  {id:2,
    title: "Data Structure",
    code: "DATA001",
    img:"https://videohive.img.customer.envatousercontent.com/files/226179982/data_and_numbers_preview_image.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=585e610d39da0d5f0cdc216c380ce211"
  },
  {id:3,
    code: "Software Architecture and Design",
    title: "ISYS114",
    img: "https://blog.radware.com/wp-content/uploads/2019/10/SDLC.jpg"
  },
];
const recipes =[
  {id:1,

    title:"Add new exam for data structure",
    time:"60 mins",
    author:"DATA001"
  },
  {id:2,
    title:"Grade midterm exam for Software Architecture",
    time:"80 minutes",
    author:"ISYS114"
  }
];
const Course= (course)=>{
  const {title,code,img} = course.course;
  return (
    <section className="grid grid-cols-1 px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
      <ul className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
        <li x-for="item in items">
          <a  className="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
            <dl className="grid grid-cols-2 sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
              <div>
                <img src ={img}></img>
              </div>
              <div>
                <dt className="sr-only">Title</dt>
                <dd className="group-hover:text-rmit-blue leading-6 font-medium text-black">
                  {title}
                </dd>
              </div>
              <div>
                <dt className="sr-only">Code</dt>
                <dd className="group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4">
                  {code}
                </dd>
              </div>
            </dl>
          </a>
        </li>
      </ul>
    </section> );
};
function Booklist(){
  return(
    <div className="">{courses.map((course)=>
    // {const {img,title,author} = book;
    {return (
      <Course key={course.id} course={course}></Course>);
    })}
    </div>
  );
}
function ListItem(recipe) {
  const {title,time,author}= recipe.recipe;
  return (
    <article className="p-4 flex space-x-4">
      <div className="text-6xl">
        <AiFillEdit/>
      </div>
      <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
        <h2 className="text-lg font-semibold text-black mb-0.5">
          {title}
        </h2>
        <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
          <div>
            <dt className="sr-only">Time</dt>
            <dd>
              <abbr title={`${time} minutes`}>{time}</abbr>
            </dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">By </dt>{""}
            <dd className="inline text-black">{author}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
function Recipes() {
  return (
    <div className="divide-y-2 divide-dashed md:divide-solid">
      <nav className="p-4">
        <ul className="flex space-x-2">
          <li>
            <a className="bg-green-700 text-amber-900 px-8 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
            To Do</a>
          </li>
          <li>
            <a className="bg-blue-300 text-amber-900 px-8 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
            Scheduled exam</a>
          </li>
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


const Dashboard = () => {
  return (
    <div className="flex-grow h-screen px-10 pb-10">
      <div className="flex items-center border-b-2 h-1/6 border-rmit-red">
        <div className="text-3xl text-rmit-blue">
          Dashboard
        </div>
      </div>
      <div className="flex flex-wrap md:flex-wrap-reverse ... pb-5">
        <div className="pt-6 text-2xl text-rmit-blue">
          Recently accessed folders
        </div>
      </div>
      <form className="relative">
        <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <path fillrule="evenodd" cliprule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
        </svg>
        <input className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Filter projects" placeholder="Filter projects" />
      </form>
      <div className ="flex overflow-y-scroll h-96">
        <div className="flex flex-row flex-wrap content-start h-full  w-2/3">
          <Booklist></Booklist>
        </div>
        <div className="flex flex-row flex-wrap content-start h-full  w-1/2">
          <Recipes/>
        </div>
      </div>
    </div>
  );
};
Dashboard.propTypes = {
  tabName : PropTypes.string.isRequired,
  className : PropTypes.string.isRequired,
};

export default Dashboard;
