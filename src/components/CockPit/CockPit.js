import React, { useEffect, useRef } from "react";
import classes from "./CockPit.css";
import AuthContext from "../../context/auth-context"

const CockPit = (props) => {
  const btnElementRef = useRef();

  useEffect(() => {
    btnElementRef.current.click();
  }, []);

  const assignedClasses = [];
  let btnClass = "";
  let btnClasses = [classes.Button];

  if (props.showpersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
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
        ref={btnElementRef}
      >
        Toggle names
      </button><br/>
      <AuthContext.Consumer>
          {(context)=> <button onClick={context.login}>Log in </button>}
      </AuthContext.Consumer>
      
    </div>
  );
};

export default React.memo(CockPit);
