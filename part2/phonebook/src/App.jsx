import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", key: 0 }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    console.log("Click Submit");
    event.preventDefault();

    const arrNames = persons.map((person) => person.name.toLowerCase());
    console.log(arrNames);

    if (arrNames.includes(newName.toLowerCase())) {
      alert(`${newName} is already added to the phone book`);
    } else {
      const nameObj = {
        name: newName,
        key: persons.length + 1,
      };
      setPersons(persons.concat(nameObj));
      setNewName("New?");
    }
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
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        {/* <div>debug: {persons.name}</div> */}
        <div>
          {newName ? <button type="submit">Add</button> : "Write a name"}
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
