/* eslint-disable react/prop-types */
import Course from "../components/course";

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
          id: 4,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 5,
        },
      ],
    },
    {
      name: "Test 3",
      id: 3,
      parts: [
        {
          name: "Test3.3",
          exercises: 10,
          id: 6,
        },
        {
          name: "test3.2",
          exercises: 200,
          id: 7,
        },
      ],
    },
  ];

  return <Course courses={courses} />;
};

export default App;
