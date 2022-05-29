import { DangerButton, BigSuccessButton } from "./partiallyApply";
// import { RecursiveComponent } from "./RecursiveComponent";

// const nestedObject = {
//   a: 1,
//   b: {
//     b1: 4,
//     b2: {
//       b23: "Hello",
//     },
//     b3: {
//       b31: {
//         message: "Hi",
//       },
//       b32: {
//         message: "Hi",
//       },
//     },
//   },
//   c: {
//     c1: 2,
//     c2: 3,
//   },
// };

function App() {
  return (
    <>
      <DangerButton text="Error!" />
      <BigSuccessButton text="Ok,all right!" size="large" />
    </>
  );
}

export default App;
