import React from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ListUsers = () => {
  return (
    <Form className="form-container">
      <Row>
        <Col>
          <Form.Control
            className="mb-3"
            placeholder="Nome do usuário do GitHub"
          />
          <Button>Salvar Dados</Button>
        </Col>
        <Col>
          <Form.Control className="mb-3" placeholder="CEP da residência" />
        </Col>
      </Row>
    </Form>
  );
};

export default ListUsers;
