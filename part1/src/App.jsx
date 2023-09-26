const App = () => {
  const course = "Half Stack application development";
  const part1 = { name: "Fundamentals of React", exercises: 10 };
  const part2 = { name: "Using props to pass data", exercises: 7 };
  const part3 = { name: "State of a component", exercises: 14 };

  const Header = (props) => <h1>{props.course}</h1>;
  const Part = (props) => (
    <p>
      {props.part} {props.exercises}
    </p>
  );
  const Content = (props) => (
    <>
      <Part
        part={props.argument[0].name}
        exercises={props.argument[0].exercises}
      />
      <Part
        part={props.argument[1].name}
        exercises={props.argument[1].exercises}
      />
      <Part
        part={props.argument[2].name}
        exercises={props.argument[2].exercises}
      />
    </>
  );
  const Total = (props) => (
    <p>
      Number of exercises{" "}
      {props.exercises1 + props.exercises2 + props.exercises3}{" "}
    </p>
  );
  return (
    <>
      <Header course={course} />
      <Content argument={[part1, part2, part3]} />
      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </>
  );
};

export default App;
