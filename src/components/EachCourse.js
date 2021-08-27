import { useParams } from "react-router";
const EachCourse = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>The course selected have ID : {id} </h1>
    </div>
  );
};
export default EachCourse;
