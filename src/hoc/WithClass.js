import React from 'react';

// 1st way of creating High Order component
/* const withClass = props =>{

    return(
        <div className={props.classes}>
            {props.children}
        </div>
    )
}; */

// 2nd way of creating High Order Component
const withClass = (WrappedComponent, className)=>{
    return props => (
        <div className = {className}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default withClass;