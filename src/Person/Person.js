import React from 'react';
import classes from './Person.css'
//import Radium from 'radium';
//import styled from 'styled-components'

const person = (props) => {

	/* const StyledDiv = styled.div`
	
	width: 30%;
			margin: 20px auto;
			border: 2px solid #eee;
			box-shadow: 0 2px 3px #ccc;
			padding: 16px;
			text-align: center;
			@media(min-width: 500px):{width: '450px'}
	
	` */
			


	return (
		//< className = 'Person' style={style}>
		<div className={classes.Person}>
			<p onClick= {props.click}> I am {props.name} and I am {props.age} years old</p>
			<p>{props.children}</p>
			<input type='text' onChange={props.changed} value={props.name}/>
		</div>
		)
};

export default person;