// import React from 'react'
// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h1", {}, props.animal),
//       React.createElement("h1", {}, props.breed),
//     ]);

// SAME Code I write on normal react above ^

const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.animal}</h1>
      <h1>{props.breed}</h1>
    </div>
  );
};

export default Pet;
