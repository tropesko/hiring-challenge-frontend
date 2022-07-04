import { useState } from "react";
import axios from "axios";
import ListUser from "../ListUser/ListUser";
import { Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const ListUsers = () => {
  // States
  const [listUser, setListUser] = useState(false);
  const [userData, setUserData] = useState([]);

  function listUsers() {
    axios({
      method: "get",
      url: "http://localhost:4000/users",
    }).then((res) => {
      return setUserData(res.data);
    });
  }

  function openUserCard() {
    // setListUser(true);
  }

  return (
    <>
      {listUser === false ? (
        <>
          <hr></hr>
          <Row xs={1} md={2} xl={3} className="g-4">
            {listUsers()}
            {userData.map(function (d, idx) {
              return (
                <Col>
                  <div className="cards">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={d.avatar_url} />
                      <Card.Body>
                        <Card.Title>{d.name}</Card.Title>
                        <Card.Text>
                          <span>username: {d.login}</span>
                        </Card.Text>
                        <Button
                          className="button"
                          onClick={openUserCard()}
                          variant="secondary"
                        >
                          Visualizar
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              );
            })}
          </Row>
          <hr></hr>
        </>
      ) : (
        <ListUser />
      )}
    </>
  );
};

export default ListUsers;
