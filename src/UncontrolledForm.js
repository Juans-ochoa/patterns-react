import React from "react";

export const UncontrolledForm = () => {
  const nameInput = React.createRef();
  const ageInput = React.createRef();
  const colorHairInput = React.createRef();

  const handleSubmit = (e) => {
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(colorHairInput.current.value);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" ref={nameInput} />
      <input type="text" name="age" placeholder="Age" ref={ageInput} />
      <input
        type="text"
        name="colorHair"
        placeholder="Color Hair"
        ref={colorHairInput}
      />
      <input type="submit" value="Send" />
    </form>
  );
};
