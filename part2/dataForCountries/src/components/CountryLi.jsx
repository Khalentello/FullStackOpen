/* eslint-disable react/prop-types */

function CountryLi({ country }) {
  return (
    <>
      <li>{country.name.common}</li>
    </>
  );
}

export default CountryLi;
