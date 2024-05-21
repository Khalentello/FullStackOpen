import { useState, useEffect } from "react";
import Person from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import serverCommands from "./services/notes";
import Notification from "./components/Notification";

const App = () => {
  const [person, setPerson] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearchName, setSearchName] = useState("");
  const [alertMessage, setAlertMessage] = useState();
  const [typeMessage, setTypeMessage] = useState();

  useEffect(() => {
    serverCommands.getAll().then((data) => setPerson(data));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    const personObj = {
      name: newName,
      number: newNumber,
    };

    const data = person.find((p) => p.name === newName);

    if (data) {
      if (
        window.confirm(
          `Change number of ${data.name} from ${data.number} to ${newNumber}?`
        )
      ) {
        serverCommands
          .update(data.id, personObj)
          .then((returnedNote) => {
            setPerson(person.map((n) => (n.id !== data.id ? n : returnedNote)));
            setAlertMessage(
              `Changed number of ${data.name} with the number ${newNumber}`
            );
            setTypeMessage("notification");
            setTimeout(() => {
              setAlertMessage(null);
              setTypeMessage(null);
            }, 2000);
          })
          .catch((error) => {
            setAlertMessage(
              `${data.name} has already been deleted from the server`
            );
            setTypeMessage("error");
            console.log(`error: ${error}`);
            setTimeout(() => {
              setAlertMessage(null);
              setTypeMessage(null);
            }, 2000);
          });
      }
    } else {
      serverCommands.create(personObj).then((returnedPerson) => {
        setPerson(person.concat(returnedPerson));
        setNewName("New?");
        setNewNumber("");
        setAlertMessage(
          `Added ${returnedPerson.name} with the number ${returnedPerson.number}`
        );
        setTypeMessage("notification");
        setTimeout(() => {
          setAlertMessage(null);
          setTypeMessage(null);
        }, 2000);
      });
    }
  };
  const deletePerson = (id) => {
    const data = person.find((n) => n.id === id);
    if (window.confirm(`Delete ${data.name}?`)) {
      serverCommands
        .deletePerson(id)
        .then(() => {
          setPerson(person.filter((p) => p.id !== id));
        })
        .catch((error) => console.log(`Something happened: ${error}`));
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleNameSearchChange = (event) => {
    setSearchName(event.target.value);
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
      <Notification message={alertMessage} type={typeMessage} />
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
          <Person
            key={person.id}
            person={person}
            deletePerson={() => deletePerson(person.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default App;
