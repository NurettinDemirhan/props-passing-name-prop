import React from 'react';

function renderAge(age){
  return(
    Number(age) >=18 
    ? <p>Your age is {age}.</p>
    : ""
    )
}


const Age = (props) =>{
    return (
      renderAge(props.age)
    )
}
export default Age;