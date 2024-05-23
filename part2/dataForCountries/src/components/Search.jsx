/* eslint-disable react/prop-types */

function Search(props) {
  return (
    <>
      <div>
        Find Countries: <input value={props.value} onChange={props.onChange} />
      </div>
    </>
  );
}

export default Search;
