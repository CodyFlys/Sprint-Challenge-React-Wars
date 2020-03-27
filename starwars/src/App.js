import React, {useState, useEffect} from 'react';
import './App.css';
import Cards from "./components/Card";
import axios from 'axios';


const App = () => {

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people')
    .then(response => {
      console.log(response);
      setCharacters(response.data.results)
    })
    .catch(error => {
      console.log("DID NOT GET DATA", error)
    })
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])

  console.log(characters)


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {characters.map(character => {
        return <Cards 
        key={character.index} 
        name={character.name} 
        height={character.height} 
        mass={character.mass} 
        hair_color={character.hair_color}
        skin_color={character.skin_color}
        eye_color={character.eye_color}
        birth_year={character.birth_year}
        gender={character.gender}
        />
      })}
    </div>
  );
}

export default App;

