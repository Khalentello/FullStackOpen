import { useState } from "react";

const App = () => {
  const [person, setPerson] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearchName, setSearchName] = useState("");

  const addPerson = (event) => {
    console.log("Click Submit");
    event.preventDefault();

    const arrNames = person.map((person) => person.name.toLowerCase());
    const arrNum = person.map((person) => person.number);
    console.log(arrNum);

    if (arrNames.includes(newName.toLowerCase())) {
      alert(`The person ${newName} is already added to the phone book`);
    } else if (arrNum.includes(newNumber)) {
      alert(`Phone number ${newNumber} is already added to the phone book`);
    } else {
      const nameObj = {
        id: person.length + 1,
        name: newName,
        number: newNumber,
      };
      setPerson(person.concat(nameObj));
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
  const handleNameSearchChange = (event) => {
    setSearchName(event.target.value);
    console.log("Previous", newSearchName);
    console.log("New", event.target.value);
  };
  const contactsToShow =
    newSearchName.length <= 0
      ? person
      : person.filter((person) =>
          person.name.toLowerCase().includes(newSearchName.toLowerCase())
        );
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
        {/* <div>debug: {person}</div> */}
        <div>
          {newName && newNumber ? (
            <button type="submit">Add</button>
          ) : (
            "Write a name"
          )}
        </div>
      </form>
      <h2>Search</h2>
      <div>
        By Name:{" "}
        <input value={newSearchName} onChange={handleNameSearchChange} />
      </div>
      <h2>Numbers</h2>
      <ul>
        {contactsToShow.map((person) => (
          <li key={person.id}>
            {person.name}: {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
