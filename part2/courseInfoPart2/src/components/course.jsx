/* eslint-disable react/prop-types */
const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};
const Content = ({ course }) => {
  return course.map((part) => (
    <Part
      key={`Part key ${part.id}`}
      part={part.name}
      exercises={part.exercises}
    />
  ));
};
const Part = (props) => {
  return (
    <p>
      {props.part}: {props.exercises}
    </p>
  );
};
const Total = ({ course }) => {
  const totalCourses = course.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises;
  }, 0);
  return <b>Total of {totalCourses} courses</b>;
};
const Course = ({ courses }) => {
  return courses.map((course) => (
    <div key={`${course.id}`}>
      <Header course={course} />
      <Content course={course.parts} />
      <Total course={course.parts} />
    </div>
  ));
};

export default Course;
