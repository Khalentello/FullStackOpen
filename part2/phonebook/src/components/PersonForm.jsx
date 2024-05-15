/* eslint-disable react/prop-types */
function PersonForm({ props }) {
  // console.log(props);
  return (
    <>
      <div>
        Name: <input value={props.newName} onChange={props.handleName} />
      </div>
      <div>
        Phone: <input value={props.newNumber} onChange={props.handlePhone} />
      </div>
    </>
  );
}
export default PersonForm;
