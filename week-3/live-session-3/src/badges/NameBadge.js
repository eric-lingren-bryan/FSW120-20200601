import React from 'react';


const NameBadge = ({index, firstName, lastName, age, handleDelete }) => {
  return (
    <div >
        <h1> {firstName} </h1>
        <h1>{lastName}</h1>
        <h1>{age}</h1>
        <button onClick={() => handleDelete(index)}> Delete Me</button>
    </div>
  )
}

export default NameBadge;
