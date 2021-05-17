import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Col, Row, Image } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col></Col>
            <Col lg={6}>
              <Image src="Viktoria's Yoga Club.png" rounded />
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={6}>
              <Form>
                <Row>
                  <Col lg={6}>
                    <Form.Group controlId="formBasicFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control required size="lg" type="text" />
                    </Form.Group>
                  </Col>

                  <Col lg={6}>
                    <Form.Group controlId="formBasicLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control required size="lg" type="text" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email Adress</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Example@email.com"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email address, trust us!
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                  <Form.Label>Phone Number (optional)</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="formBasicWhatAreYouLookingForr">
                  <Form.Label>How can we help you online?</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows="3"
                    placeholder="What do you do?"
                  />
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Form>
            </Col>
            <Col lg={6}>Additional Text goes here</Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
