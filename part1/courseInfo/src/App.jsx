const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const Header = (props) => <h1>{props.course}</h1>;
  const Part = (props) => (
    <p>
      {props.part} {props.exercises}
    </p>
  );
  const Content = (props) => (
    <>
      <Part
        part={props.argument[0].part}
        exercises={props.argument[0].exercises}
      />
      <Part
        part={props.argument[1].part}
        exercises={props.argument[1].exercises}
      />
      <Part
        part={props.argument[2].part}
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
      <Content
        argument={[
          { part: part1, exercises: exercises1 },
          { part: part2, exercises: exercises2 },
          { part: part3, exercises: exercises3 },
        ]}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </>
  );
};

export default App;
