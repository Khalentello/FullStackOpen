/* eslint-disable react/prop-types */
const CountryUnique = ({ country }) => {
  return (
    <section>
      <h1>{country[0].name.common}</h1>
      <p>
        <b>Capital:</b> {country[0].capital[0]}
      </p>
      <p>
        <b>Population:</b> {country[0].population}
      </p>
      <img src={`${country[0].flags.png}`}></img>
    </section>
  );
};
export default CountryUnique;
