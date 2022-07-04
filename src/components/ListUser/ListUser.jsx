import { useState } from "react";
import axios from "axios";
import { Form, Col, Button, InputGroup, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const ListUser = (user_id) => {
  return (
    <h1>Teste List User</h1>
    // <Container>
    //   <Form>
    //     <Form.Label>Criar cadastro</Form.Label>
    //     <InputGroup className="mb-3" id="start-input">
    //       <InputGroup.Text>@</InputGroup.Text>
    //       <Form.Control
    //         placeholder="Nome de usuário Github"
    //         aria-describedby="basic-addon1"
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </InputGroup>

    //     <Form.Group className="mb-3">
    //       <Button
    //         className="button"
    //         onClick={handleSearchUser}
    //         variant={loadingSearchUser ? "success" : "secondary"}
    //         type="submit"
    //       >
    //         {loadingSearchUser ? "Procurando..." : "Procurar"}
    //       </Button>
    //     </Form.Group>

    //     {githubData.url ? (
    //       <>
    //         <fieldset disabled>
    //           <Form.Group className="mb-3">
    //             <img
    //               src={githubData.avatar_url}
    //               alt={githubData.avatar_url}
    //               id="avatar-img"
    //             ></img>
    //           </Form.Group>
    //           <Row>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>bio</Form.Label>
    //               <Form.Control id="bio" value={githubData.bio} />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>avatar_url</Form.Label>
    //               <Form.Control id="avatar-url" value={githubData.avatar_url} />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>Blog</Form.Label>
    //               <Form.Control id="blog" value={githubData.blog} />
    //             </Form.Group>
    //           </Row>

    //           <Row>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>Company</Form.Label>
    //               <Form.Control id="company" value={githubData.company} />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>Created at</Form.Label>
    //               <Form.Control id="created-at" value={githubData.created_at} />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>E-mail</Form.Label>
    //               <Form.Control id="email" value={githubData.email} />
    //             </Form.Group>
    //           </Row>

    //           <Row>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>Events URL</Form.Label>
    //               <Form.Control id="events-url" value={githubData.events_url} />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>Blog</Form.Label>
    //               <Form.Control id="blog" value={githubData.blog} />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>Followers</Form.Label>
    //               <Form.Control id="followers" value={githubData.followers} />
    //             </Form.Group>
    //           </Row>

    //           <Row>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>Followers URL</Form.Label>
    //               <Form.Control
    //                 id="followers_url"
    //                 value={githubData.followers_url}
    //               />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>following</Form.Label>
    //               <Form.Control id="following" value={githubData.following} />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>following_url</Form.Label>
    //               <Form.Control
    //                 id="following_url"
    //                 value={githubData.following_url}
    //               />
    //             </Form.Group>
    //           </Row>

    //           <Row>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>gists_url</Form.Label>
    //               <Form.Control id="gists_url" value={githubData.gists_url} />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>gravatar_id</Form.Label>
    //               <Form.Control
    //                 id="gravatar_id"
    //                 value={githubData.gravatar_id}
    //               />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>hireable</Form.Label>
    //               <Form.Control id="hireable" value={githubData.hireable} />
    //             </Form.Group>
    //           </Row>

    //           <Row>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>html_url</Form.Label>
    //               <Form.Control id="html_url" value={githubData.html_url} />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>id</Form.Label>
    //               <Form.Control id="id" value={githubData.id} />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>location</Form.Label>
    //               <Form.Control id="location" value={githubData.location} />
    //             </Form.Group>
    //           </Row>

    //           <Row>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>login</Form.Label>
    //               <Form.Control id="login" value={githubData.login} />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>name</Form.Label>
    //               <Form.Control id="name" value={githubData.name} />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>node_id</Form.Label>
    //               <Form.Control id="node_id" value={githubData.node_id} />
    //             </Form.Group>
    //           </Row>

    //           <Row>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>organizations_url</Form.Label>
    //               <Form.Control
    //                 id="organizations_url"
    //                 value={githubData.organizations_url}
    //               />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>public_gists</Form.Label>
    //               <Form.Control
    //                 id="public_gists"
    //                 value={githubData.public_gists}
    //               />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>public_repos</Form.Label>
    //               <Form.Control
    //                 id="public_repos"
    //                 value={githubData.public_repos}
    //               />
    //             </Form.Group>
    //           </Row>

    //           <Row>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>received_events_url</Form.Label>
    //               <Form.Control
    //                 id="received_events_url"
    //                 value={githubData.received_events_url}
    //               />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>repos_url</Form.Label>
    //               <Form.Control id="repos_url" value={githubData.repos_url} />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>site_admin</Form.Label>
    //               <Form.Control id="site_admin" value={githubData.site_admin} />
    //             </Form.Group>
    //           </Row>

    //           <Row>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>starred_url</Form.Label>
    //               <Form.Control
    //                 id="starred_url"
    //                 value={githubData.starred_url}
    //               />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>subscriptions_url</Form.Label>
    //               <Form.Control
    //                 id="subscriptions_url"
    //                 value={githubData.subscriptions_url}
    //               />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>twitter_username</Form.Label>
    //               <Form.Control
    //                 id="twitter_username"
    //                 value={githubData.twitter_username}
    //               />
    //             </Form.Group>
    //           </Row>

    //           <Row>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>type</Form.Label>
    //               <Form.Control id="type" value={githubData.type} />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>updated_at</Form.Label>
    //               <Form.Control id="updated_at" value={githubData.updated_at} />
    //             </Form.Group>
    //             <Form.Group sm={12} md={4} as={Col} className="mb-3">
    //               <Form.Label>url</Form.Label>
    //               <Form.Control id="url" value={githubData.url} />
    //             </Form.Group>
    //           </Row>
    //         </fieldset>

    //         {/* CEP */}
    //         <Form.Label>CEP</Form.Label>
    //         <InputGroup className="mb-3">
    //           <Form.Control
    //             placeholder="80000-000"
    //             aria-describedby="basic-addon1"
    //             onChange={(e) => setPostalcode(e.target.value)}
    //           />
    //         </InputGroup>

    //         <Form.Group className="mb-3">
    //           <Button
    //             className="button"
    //             onClick={handleSearchPostalcode}
    //             variant={loadingPostalCode ? "success" : "secondary"}
    //             type="submit"
    //           >
    //             {loadingPostalCode ? "Procurando..." : "Procurar CEP"}
    //           </Button>
    //         </Form.Group>

    //         {postalcode.cep ? (
    //           <Form>
    //             <Row>
    //               <Form.Group as={Col} className="mb-3">
    //                 <Form.Label>logradouro</Form.Label>
    //                 <Form.Control
    //                   id="logradouro"
    //                   value={postalcode.logradouro}
    //                   disabled
    //                 />
    //               </Form.Group>

    //               <Form.Group as={Col} className="mb-3">
    //                 <Form.Label>complemento</Form.Label>
    //                 <InputGroup>
    //                   <Form.Control
    //                     id="complemento"
    //                     value={postalcode.complemento}
    //                     disabled
    //                   />
    //                 </InputGroup>
    //               </Form.Group>

    //               <Form.Group as={Col} className="mb-3">
    //                 <Form.Label>bairro</Form.Label>
    //                 <Form.Control
    //                   id="bairro"
    //                   value={postalcode.bairro}
    //                   disabled
    //                 />
    //               </Form.Group>
    //             </Row>

    //             <Row>
    //               <Form.Group sm={6} as={Col} className="mb-3">
    //                 <Form.Label>localidade</Form.Label>
    //                 <Form.Control
    //                   id="localidade"
    //                   value={postalcode.localidade}
    //                   disabled
    //                 />
    //               </Form.Group>

    //               <Form.Group as={Col} className="mb-3">
    //                 <Form.Label>uf</Form.Label>
    //                 <Form.Control id="uf" value={postalcode.uf} disabled />
    //               </Form.Group>

    //               <Form.Group as={Col} className="mb-3">
    //                 <Form.Label>ibge</Form.Label>
    //                 <Form.Control id="ibge" value={postalcode.ibge} disabled />
    //               </Form.Group>
    //             </Row>

    //             <Row>
    //               <Form.Group as={Col} className="mb-3">
    //                 <Form.Label>gia</Form.Label>
    //                 <Form.Control id="gia" value={postalcode.gia} disabled />
    //               </Form.Group>

    //               <Form.Group as={Col} className="mb-3">
    //                 <Form.Label>ddd</Form.Label>
    //                 <Form.Control id="ddd" value={postalcode.ddd} disabled />
    //               </Form.Group>

    //               <Form.Group as={Col} className="mb-3">
    //                 <Form.Label>siafi</Form.Label>
    //                 <Form.Control
    //                   id="siafi"
    //                   value={postalcode.siafi}
    //                   disabled
    //                 />
    //               </Form.Group>
    //             </Row>

    //             <Form.Group className="mb-3">
    //               <Button
    //                 className="button"
    //                 onClick={handleSubmit}
    //                 variant={loadingSave ? "success" : "secondary"}
    //                 type="submit"
    //                 id="save-data-button"
    //               >
    //                 {loadingSave ? "Salvando..." : "Salvar Dados"}
    //               </Button>
    //             </Form.Group>
    //           </Form>
    //         ) : (
    //           <div className="empty"></div>
    //         )}
    //       </>
    //     ) : (
    //       <div className="empty"></div>
    //     )}
    //   </Form>
    // </Container>
  );
};

export default ListUser;
