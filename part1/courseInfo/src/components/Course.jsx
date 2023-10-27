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
export default Course;
