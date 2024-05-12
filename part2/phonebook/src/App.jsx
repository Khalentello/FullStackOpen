import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", key: 0 }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    console.log("Click Submit");
    event.preventDefault();
    const nameObj = {
      name: newName,
      key: persons.length + 1,
    };
    setPersons(persons.concat(nameObj));
    setNewName("New?");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
    console.log("Previous", newName);
    console.log("New", event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        {/* <div>debug: {persons.name}</div> */}
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.key}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
