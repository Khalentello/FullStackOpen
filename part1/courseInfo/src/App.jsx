const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10, id: crypto.randomUUID() },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: crypto.randomUUID(),
      },
      { name: "State of a component", exercises: 14, id: crypto.randomUUID() },
      { name: "Extra 1", exercises: 4, id: crypto.randomUUID() },
      { name: "Extra 2", exercises: 9, id: crypto.randomUUID() },
    ],
  };

  const Header = (props) => {
    return <h1>{props.course.name}</h1>;
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
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </>
    );
  };

  const Course = (props) => {
    return (
      <>
        <Header course={props.course} />
        <Content course={props.course} />
      </>
    );
  };

  return (
    <>
      <Course course={course} />
    </>
  );
};

export default App;
