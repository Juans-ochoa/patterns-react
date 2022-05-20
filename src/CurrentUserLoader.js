import axios from "axios";
import React, { useState, useEffect } from "react";

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get("/current-user");
      setUser(res.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child))
          return React.cloneElement(child, { user });
        return child;
      })}
    </>
  );
};
