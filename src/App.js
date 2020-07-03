import React, { useState } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';
//import Radium, {StyleRoot} from 'radium';
//import styled from 'styled-components';

const App =()=> {
	const [personState, setPersonState ] = useState({
		persons: [
		{id: '1', name: 'Holly', age: 35},
		{id: '2', name: 'Molly', age: 26},
		{id: '3', name: 'Peter', age: 30}
		],
		showpersons: true
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
		{id:'1', name: 'Holly', age: 35},
		{id: '2', name: 'Molly', age: 26},
		{id: '3', name: 'Peter', age: 30}
		],
			showpersons: !doesShow});
	}

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
	const deletePersonHandler =(personIndex) =>{
		const persons = [...personState.persons];
		persons.splice(personIndex, 1);
		setPersonState({persons: persons, showpersons: true});
	}

	const nameChangedHandler = (event, id)=> {
    //console.log(id);
		const personIndex = personState.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...personState.persons[personIndex]
    }
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
      showpersons: true
		});
	};

	let btnClasses = [classes.Button];

	let persons = null;
	if(personState.showpersons){
		persons = (
			<div>
			{
				personState.persons.map((person, index) =>{
					return (<Person 
						name={person.name} 
						age={person.age}
						click={()=> deletePersonHandler(index)}
            key={person.id}
						changed={(event)=>nameChangedHandler(event, person.id)}/>);
				})}
			</div> );

			/* style.backgroundColor = 'red';
			style[':hover']={
				backgroundColor: 'lightred',
				color: 'black' 
			}*/

			btnClasses.push(classes.Red);
	};

	const assignedClasses = [];
	if(personState.persons.length <= 2){assignedClasses.push(classes.red)};
	if(personState.persons.length <= 1){assignedClasses.push(classes.bold)};

	return (
		//<StyleRoot>
		<div className={classes.App}>
			<h1>Hi, I am a React app!!!</h1>
			<p className={assignedClasses.join(' ')}>This is working</p>
			<button className={btnClasses.join(' ')} alt={personState.showpersons}
				onClick={togglePersonsHandler}>Toggle names</button>
				{persons}
		</div>
		//</StyleRoot>
		);
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I am a React app!!!'));
}

export default App;
