import React from 'react'

const NameElement = props => {

  const elName = props.name

  function formatName (fName) {
    return fName.firstName + ' ' + fName.lastName;
  }

  return(
    <p>
      Hello, {formatName(elName)}!
    </p>
    )
};

  export default NameElement