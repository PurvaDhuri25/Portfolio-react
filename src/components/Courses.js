import React, { useState } from "react";
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

  return <Detail courseList={courseList} />;
};
export default Courses;
