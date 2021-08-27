import React, { useState } from "react";
import { Link } from "react-router-dom";
import Detail from "./Detail";

const Courses = () => {
  const [courseList, setCourseList] = useState([
    {
      title: "Java",
      body: "Java is an OOP",
      prof: "Pranav",
      id: 1
    },
    {
      title: "React",
      body: "React is a framework",
      prof: "Pranav",
      id: 2
    },
    {
      title: "MySQL",
      body: "Structured Database",
      prof: "Pranav",
      id: 3
    }
  ]);
  return (
    <div className="home">
      {courseList.map((course) => (
        <div className="course-preview" key={course.id}>
          <Link to={"/Courses/${course.id}"}>
            <h2>{course.title}</h2>
            <p>Taught by {course.prof}</p>
          </Link>
        </div>
      ))}
    </div>
  );
  // return <Detail courseList={courseList} />;
};
export default Courses;
