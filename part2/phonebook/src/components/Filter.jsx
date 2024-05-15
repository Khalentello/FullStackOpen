/* eslint-disable react/prop-types */

function Filter(props) {
  // console.log(props);
  return (
    <>
      <div>
        By Name: <input value={props.value} onChange={props.onChange} />
      </div>
    </>
  );
}

export default Filter;
