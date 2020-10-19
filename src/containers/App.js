import React, { Component } from "react";
import classes from "./App.css";
import PersonList from "../components/PersonList/PersonList.js";
import CockPit from "../components/CockPit/CockPit";
import withClass from "../hoc/WithClass";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";
//import Radium, {StyleRoot} from 'radium';
//import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: "1", name: "Holly", age: 35 },
        { id: "2", name: "Molly", age: 26 },
        { id: "3", name: "Peter", age: 30 },
      ],
      showpersons: true,
      authenticated: false,
    };
  }

  /* static getDerivedStateFromProps(props, state){
	  console.log('App.js derived method', props);
	  return state;
  };

  componentDidMount(){
	  console.log('component did mount');
  } */

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

  togglePersonsHandler = () => {
    const doesShow = this.state.showpersons;
    this.setState({
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
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons, showpersons: true });
  };

  nameChangedHandler = (event, id) => {
    //console.log(id);
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;

    const newPersons = [...this.state.persons];
    console.log(newPersons);
    newPersons[personIndex] = person;
    console.log(newPersons[personIndex]);
    this.setState({
      persons: newPersons,
      /* persons: [
			{name: 'Holly', age: 35},
			{name: event.target.value, age: 26},
			{name: 'Peter', age: 30}
      ] */
      showpersons: true,
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    let persons = null;
    if (this.state.showpersons) {
      persons = (
        <div>
          <PersonList
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}
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
	  //<WithClass classes={classes.App}>
	  // Context Provider
      <Aux className={classes.App}>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          <CockPit
            showpersons={this.state.showpersons}
            personsLength={this.state.persons.length}
            togglePersons={this.togglePersonsHandler}
          />
          {persons}
        </AuthContext.Provider>
      </Aux>
      //</WithClass>
      //</StyleRoot>
    );
  }

  //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I am a React app!!!'));
}

export default withClass(App, classes.App);
