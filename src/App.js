import React, { useState, useEffect } from 'react'
import phoneNumberService from './services/phonenumber'
import './App.css'

const SuccessNotification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="success">
      {message}
    </div>
  )
}

const ErrorNotification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

const Filter = ({addFilter}) => {
  return <p>Filter shown with: <input onChange={addFilter}/></p>
}

const Persons = ({ persons, setPersons }) => {

  const deletePerson = person => {
    if (window.confirm(`Delete ${person.name}`)){
      phoneNumberService
        .deleteNumber(person.id)
        .then(setPersons(persons.filter(item => item.id !== person.id)))
        .catch(error => {
          alert(error)
        })
    }
  }

  return persons.map(person => 
      <p key={person.name}>{person.name} {person.number}
      <button onClick={() => deletePerson(person)}>delete</button></p>
  )
}

const PersonForm = ({ addPerson, addName, addNumber }) => {
  return (
    <form onSubmit={addPerson}> 
      <div>
        name: <input onChange={addName}/>
      </div>
      <div>number: <input onChange={addNumber}/></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    phoneNumberService
      .getAll()
      .then(returnedNumbers => setPersons(returnedNumbers))
  }, [])

  const addName = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  }

  const addNumber = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  }

  const addFilter = (event) => {
    event.preventDefault();
    setFilter(event.target.value.toLowerCase());
  }

  const addPerson = (event) => {
    event.preventDefault();
    const duplicate_name = persons.find(person => person.name === newName);
    if (duplicate_name){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const changedPerson = {...duplicate_name,number:newNumber};
        phoneNumberService
          .put(changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedPerson))
            setSuccessMessage(`Added new "${returnedPerson.number}" number of ${returnedPerson.name}'s to the phonebook.`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 5000)
          })
          .catch(error => {
            setErrorMessage(`${newName}'s already deleted from server.`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
      }
    } else {
      phoneNumberService
        .create({
          name: `${newName}`,
          number: `${newNumber}`})
        .then(returnedNumber => {
          setPersons(persons.concat(returnedNumber))
          setSuccessMessage(`Added ${newName} to the phonebook.`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
        .catch(error => {
          alert(error)
        })
    }
  }

  const personToShow = persons.filter(person => person.name.toLowerCase().includes(filter));

  return (
    <div className="main">
      <SuccessNotification message={successMessage || null}/>
      <ErrorNotification message={errorMessage || null}/>
      <h2>Phonebook</h2>
      <Filter addFilter={addFilter}/>
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} addName={addName} addNumber={addNumber}/>
      <h2>Numbers</h2>
      <Persons persons={personToShow} setPersons={setPersons}/> 
    </div>
  )
}

export default App