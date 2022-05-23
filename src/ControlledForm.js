import { useState, useEffect } from "react";

export const ControlledForm = () => {
  const [nameInputError, setNameInputError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      setNameInputError("Name must be two or more characters");
    } else {
      setNameInputError("");
    }
    console.log("change name");
  }, [name]);

  return (
    <form>
      {nameInputError && <p>{nameInputError}</p>}
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="number"
        name="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />
      <input
        type="text"
        name="hairColor"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
        placeholder="Hair Color"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
