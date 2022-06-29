import { useEffect, useState } from "react";
import React from "react";
import NewUser from "./components/NewUser/NewUser";
import ListUsers from "./components/ListUsers";

const App = () => {
  // States
  const [newUser, setNewUser] = useState(false);
  // const [searchTerm, setSearchTerm] = useState([]);

  return (
    <>
      {newUser === false ? (
        <div className="container">
          <NewUser />
        </div>
      ) : (
        <div className="container">
          <ListUsers />
        </div>
      )}
    </>
  );
};

export default App;
