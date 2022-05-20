import axios from "axios";
import { DataSource } from "./DataSource";
import { ProductInfo } from "./ProductInfo";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";

const getServerData = (url) => async () => {
  const res = await axios.get(url);
  return res.data;
};

const getLocalStorage = (key) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => <h3>{message}</h3>;

function App() {
  return (
    <>
      <DataSource getDataFunc={getServerData("/users/123")} resourceName="user">
        <UserInfo />
      </DataSource>
      <DataSource
        getDataFunc={getLocalStorage("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
}

export default App;
