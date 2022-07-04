import { useState } from "react";
import React from "react";
import NewUser from "./components/NewUser/NewUser";
import ListUsers from "./components/ListUsers/ListUsers";
import { Form, Col, Button, InputGroup, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // States
  const [newUser, setNewUser] = useState(false);

  function handleNewUser(e) {
    e.preventDefault();
    setNewUser(true);
  }

  return (
    <div className="container">
      <>
        {newUser === false ? (
          <div className="container">
            <Button
              className="button"
              onClick={handleNewUser}
              // variant={loadingSearchUser ? "success" : "secondary"}
              variant="secondary"
              type="submit"
            >
              {/* {loadingSearchUser ? "Procurando..." : "Procurar"} */}
              Criar novo usuário
            </Button>
            <ListUsers />
          </div>
        ) : (
          <div className="hidden">
            <NewUser />
          </div>
        )}
      </>
    </div>
  );
};

export default App;
