import { PrintProps } from "./PrintProps";
import { UserInfo } from "./UserInfo";

const UserInfoWrapped = PrintProps(UserInfo);

function App() {
  return (
    <>
      <UserInfoWrapped a={1} b="Hello" c={{ name: "Shun" }} />
    </>
  );
}

export default App;
