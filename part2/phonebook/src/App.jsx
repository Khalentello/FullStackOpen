import { useState } from "react";
import Person from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

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
    // console.log(arrNum);

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
      setNewNumber("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
    // console.log("Previous", newName);
    // console.log("New", event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
    // console.log("Previous", newNumber);
    // console.log("New", event.target.value);
  };
  const handleNameSearchChange = (event) => {
    setSearchName(event.target.value);
    //   console.log("Previous", newSearchName);
    //   console.log("New", event.target.value);
  };
  const contactsToShow =
    newSearchName.length <= 0
      ? person
      : person.filter((person) =>
          person.name.toLowerCase().includes(newSearchName.toLowerCase())
        );

  const propsPerson = {
    newName: newName,
    handleName: handleNameChange,
    newNumber: newNumber,
    handlePhone: handleNumberChange,
  };
  return (
    <>
      {/* <div>debug: {person}</div> */}
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <PersonForm props={propsPerson} />
        <div>
          {newName && newNumber ? (
            <button type="submit">Add</button>
          ) : (
            "Type the info"
          )}
        </div>
      </form>
      <h2>Search</h2>
      <Filter value={newSearchName} onChange={handleNameSearchChange} />
      <h2>Numbers</h2>
      <ul>
        {contactsToShow.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </ul>
    </>
  );
};

export default App;
