export const LargePersonListItem = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Hair color: {hairColor}</p>
      <p>Hobbies:</p>
      <ul>
        {hobbies.map((hobbye) => (
          <li key={hobbye}>{hobbye}</li>
        ))}
      </ul>
    </div>
  );
};
