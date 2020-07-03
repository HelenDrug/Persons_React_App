import React, { useState } from "react";
import classes from "./App.css";
import PersonList from "../components/PersonList/PersonList.js";
import CockPit from "../components/CockPit/CockPit";
//import Radium, {StyleRoot} from 'radium';
//import styled from 'styled-components';

const App = () => {
  const [personState, setPersonState] = useState({
    persons: [
      { id: "1", name: "Holly", age: 35 },
      { id: "2", name: "Molly", age: 26 },
      { id: "3", name: "Peter", age: 30 },
    ],
    showpersons: true,
  });

  /* const StyledButton = styled.button
`
		background-color: ${props => props.alt ? 'red' : 'green'};
		font: inherit;
		color: blue;
		border: 2px solid green;
		padding: 8px;
		cursor: pointer;
		&:hover{
			background-color: lightgreen;
			color: black;
		};`
 */
  /* const style = {
		backgroundColor: 'white',
		font: 'inherit',
		color: 'blue',
		border: '2px solid green',
		padding: '8px',
		cursor: 'pointer',
		':hover':{
			backgroundColor: 'lightgreen',
			color: 'black'
		}
	} */

  const togglePersonsHandler = () => {
    const doesShow = personState.showpersons;
    setPersonState({
      persons: [
        { id: "1", name: "Holly", age: 35 },
        { id: "2", name: "Molly", age: 26 },
        { id: "3", name: "Peter", age: 30 },
      ],
      showpersons: !doesShow,
    });
  };

  // const switchNameHandler = (newName)=> {
  // 	//console.log('Was clicked!');
  // 	setPersonState({
  // 		persons: [
  // 		{name: newName, age: 35},
  // 		{name: 'Molly', age: 26},
  // 		{name: 'Peter', age: 30}
  // 		]
  // 	});
  // };
  const deletePersonHandler = (personIndex) => {
    const persons = [...personState.persons];
    persons.splice(personIndex, 1);
    setPersonState({ persons: persons, showpersons: true });
  };

  const nameChangedHandler = (event, id) => {
    //console.log(id);
    const personIndex = personState.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...personState.persons[personIndex],
    };
    person.name = event.target.value;

    const newPersons = [...personState.persons];
    console.log(newPersons);
    newPersons[personIndex] = person;
    console.log(newPersons[personIndex]);
    setPersonState({
      persons: newPersons,
      /* persons: [
			{name: 'Holly', age: 35},
			{name: event.target.value, age: 26},
			{name: 'Peter', age: 30}
      ] */
      showpersons: true,
    });
  };

  let persons = null;

  if (personState.showpersons) {
    persons = (
      <div>
        <PersonList
          persons={personState.persons}
          clicked={deletePersonHandler}
          changed={nameChangedHandler}
        />
      </div>
    );

    /* style.backgroundColor = 'red';
			style[':hover']={
				backgroundColor: 'lightred',
				color: 'black' 
			}*/
		}

  return (
    //<StyleRoot>
    <div className={classes.App}>
		<CockPit showpersons={personState.showpersons} 
				persons={personState.persons}
				togglePersons={togglePersonsHandler}
		/>
      {persons}
    </div>
    //</StyleRoot>
  );
  //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I am a React app!!!'));
};

export default App;
