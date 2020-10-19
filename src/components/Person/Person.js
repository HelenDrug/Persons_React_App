import React, { useEffect } from "react";
import classes from "./Person.css";
import Aux from "../../hoc/Aux";
import withClass from "../../hoc/WithClass";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth-context"

//import Radium from 'radium';
//import styled from 'styled-components'

const Person = (props) => {
  /* const StyledDiv = styled.div`
	
	width: 30%;
			margin: 20px auto;
			border: 2px solid #eee;
			box-shadow: 0 2px 3px #ccc;
			padding: 16px;
			text-align: center;
			@media(min-width: 500px):{width: '450px'}
	
	` */

  const inputElementRef = React.createRef();
  useEffect(() => {
    inputElementRef.current.focus();
  });

  return (
    //< className = 'Person' style={style}>
    //<div className={classes.Person}>
      <Aux>
      <AuthContext.Consumer>
        {(context)=> context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
      </AuthContext.Consumer>
        <p onClick={props.click}>
          I am {props.name} and I am {props.age} years old
        </p>
        <p>{props.children}</p>
        <input
          key="i3"
          //ref = {(inputEl)=>{this.inputElement = inputEl}}
          ref={inputElementRef}
          type="text"
          onChange={props.changed}
          value={props.name}
        />
      </Aux>
    //</div>
  );
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  value: PropTypes.string,
};

export default withClass(Person, classes.Person);
