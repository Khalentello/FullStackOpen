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
    <>
      <Header key={`Header key ${course.id}`} course={course} />
      <Content course={course.parts} />
      <Total course={course.parts} />
    </>
  ));
};

const App = () => {
  const courses = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return <Course courses={courses} />;
};

export default App;
