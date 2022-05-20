import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";

const usersId = ["123", "234", "345"];

function App() {
  return (
    <>
      {usersId.map((userId) => (
        <UserLoader key={userId} userId={userId}>
          <UserInfo />
        </UserLoader>
      ))}
    </>
  );
}

export default App;
