import { useState, useEffect } from "react";
import Search from "./components/Search";
import serverCommands from "./services/countriesAPI";
import CountryLi from "./components/CountryLi";
import CountryUnique from "./components/CountryUnique";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    serverCommands.getAll().then((data) => setCountries(data));
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const countriesToShow =
    search.length <= 0
      ? countries
      : countries.filter(
          (c) =>
            c.name.common.toLowerCase().includes(search.toLowerCase()) ||
            c.name.official.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <>
      <Search value={search} onChange={handleSearchChange} />
      <section>
        {countriesToShow.length === 1 ? (
          <CountryUnique country={countriesToShow} />
        ) : countriesToShow.length <= 10 ? (
          countriesToShow.map((country) => (
            <CountryLi
              key={`${country.idd.root}${country.cca2}`}
              country={country}
            />
          ))
        ) : (
          <p>Too many matches</p>
        )}
      </section>
    </>
  );
}

export default App;
