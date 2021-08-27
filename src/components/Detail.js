import React, { useState } from "react";

const Details = ({ courseList }) => {
  return (
    <div className="Courses">
      {courseList.map((course) => (
        <div className="course-preview" key={course.id}>
          <h2>{course.title}</h2>
          <p>Taught by {course.prof}</p>
        </div>
      ))}
    </div>
  );
};
export default Details;
