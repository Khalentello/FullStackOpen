import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", key: 0, phone: 1234 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    console.log("Click Submit");
    event.preventDefault();

    const arrNames = persons.map((person) => person.name.toLowerCase());
    const arrNum = persons.map((person) => person.phone);
    console.log(arrNum);

    if (arrNames.includes(newName.toLowerCase())) {
      alert(`The person ${newName} is already added to the phone book`);
    } else if (arrNum.includes(newNumber)) {
      alert(`Phone number ${newNumber} is already added to the phone book`);
    } else {
      const nameObj = {
        key: persons.length + 1,
        name: newName,
        phone: newNumber,
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

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
    console.log("Previous", newNumber);
    console.log("New", event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Phone: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        {/* <div>debug: {persons.name}</div> */}
        <div>
          {newName && newNumber ? (
            <button type="submit">Add</button>
          ) : (
            "Write a name"
          )}
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.key}>
            {person.name}:{person.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
