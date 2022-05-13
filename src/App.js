import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "red" }}>{name}</h1>;
};
const RightHandComponent = ({ message }) => {
  return <p style={{ backgroundColor: "blueviolet" }}>{message}</p>;
};

function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={4}>
        <LeftHandComponent name='Sebastian' />
        <RightHandComponent message='Hello!' />
      </SplitScreen>
    </>
  );
}

export default App;
