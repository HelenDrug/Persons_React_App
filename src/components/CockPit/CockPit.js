import React from "react";
import classes from './CockPit.css'

const CockPit = (props) => {

    const assignedClasses = [];
    let btnClass = '';
    let btnClasses = [classes.Button];
    
    if(props.showpersons){
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }


  return (
    <div className={classes.CockPit}>
      <h1>Hi, I am a React app!!!</h1>
      <p className={assignedClasses.join(" ")}>This is working</p>
      <button
        className={btnClasses.join(" ")}
        alt={props.showpersons}
        onClick={props.togglePersons}
      >
        Toggle names
      </button>
    </div>
  );
};

export default CockPit;
