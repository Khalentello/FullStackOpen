const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
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

  const Header = (props) => {
    return <h2>{props.courses.name}</h2>;
  };
  const Part = (props) => {
    return (
      <p>
        {props.name}: {props.exercises}
      </p>
    );
  };
  const Content = (props) => {
    return (
      <>
        {props.course.parts.map((part) => (
          <Part
            key={`${part.name} ${part.id}`}
            name={part.name}
            exercises={part.exercises}
          />
        ))}
      </>
    );
  };
  const Total = (props) => {
    const totalExercise = props.course.parts
      .map((part) => part.exercises)
      .reduce((accumulator, currentNumber) => {
        return accumulator + currentNumber;
      });
    return <p>Total of {totalExercise} exercises</p>;
  };

  const Course = (props) => {
    return (
      <>
        <h1>Web development curriculum</h1>
        {props.courses.map((course) => (
          <div key={`Header ${course.id}`}>
            <Header courses={course} />
            <Content course={course} />
            <Total course={course} />
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <Course courses={courses} />
    </>
  );
};

export default App;
