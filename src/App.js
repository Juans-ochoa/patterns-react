import axios from "axios";
import { DataSource } from "./DataSource";
import { ProductInfo } from "./ProductInfo";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";

const getServerData = (url) => async () => {
  const res = await axios.get(url);
  return res.data;
};

function App() {
  return (
    <>
      <DataSource getDataFunc={getServerData("/users/123")} resourceName="user">
        <UserInfo />
      </DataSource>
    </>
  );
}

export default App;
