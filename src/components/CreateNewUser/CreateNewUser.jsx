import { useState, Component } from "react";
import axios from "axios";
import { Form, Col, Button, InputGroup, Row, Container } from "react-bootstrap";
import "./Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function handleSearchUser(e) {
  e.preventDefault();
  searchUser();
  window.scrollIntoView({ block: "end", inline: "nearest" });
}

function searchUser() {
  // Ajustar erro quando não encontra usuário
  try {
    axios({
      method: "get",
      url: `https://api.github.com/users/`,
    }).then((res) => {
      return res.data;
    });
  } catch (error) {
    return alert("usuário não encontrado");
  }
}

class CreateNewUser extends Component {
  constructor() {
    super();
    this.state = {
      login: "",
      id: "",
      node_id: "",
      avatar_url: "",
      gravatar_id: "",
      url: "",
      html_url: "",
      followers_url: "",
      following_url: "",
      gists_url: "",
      starred_url: "",
      subscriptions_url: "",
      organizations_url: "",
      repos_url: "",
      events_url: "",
      received_events_url: "",
      type: "",
      site_admin: "",
      name: "",
      company: "",
      blog: "",
      location: "",
      email: "",
      hireable: "",
      bio: "",
      twitter_username: "",
      public_repos: "",
      public_gists: "",
      followers: "",
      following: "",
      created_at: "",
      updated_at: "",
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      localidade: "",
      uf: "",
      ibge: "",
      gia: "",
      ddd: "",
      siafi: "",
    };
  }

  render() {
    return (
      <Container>
        <Form>
          <Form.Label>Nome de usuário github</Form.Label>
          <InputGroup className="mb-3" id="start-input">
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              onChange={this.getUserName}
              value={this.state.user}
            />
          </InputGroup>
          <InputGroup className="mb-3" id="start-input">
            <Form.Control
              placeholder="CEP"
              onChange={this.getPostalcode}
              value={this.state.postalcode}
            />
          </InputGroup>
          <Form.Group className="mb-3">
            <Button
              className="button"
              onClick={handleSearchUser}
              //   variant={loadingSearchUser ? "success" : "primary"}
              type="submit"
            >
              {/* {loadingSearchUser ? "Procurando..." : "Procurar"} */}
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

// const CreateNewUser = () => {
//   return <div></div>;
// };

export default CreateNewUser;
