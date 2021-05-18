import React from "react";
import "./style.css";

import {
  Form,
  Button,
  Container,
  Col,
  Row,
  Image,
  Badge,
} from "react-bootstrap";

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
          <h1 className="contact">
            Contact Us <Badge variant="secondary"></Badge>
          </h1>
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
                <Button className="button-1" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col lg={6}>
              Have questions about our services?
              <Row>
                <p>
                  Have questions about class availability, tech issues or
                  general information. ? Our entire team receives specialized
                  training regularly to ensure you're receiving the best
                  information possible. From basic questions to complex
                  compliance inquiries, we're here to help! Interested in
                  learning more about our services? Our Account Executives take
                  the time to discuss your existing background screening program
                  and help you make smart decisions that best meet your needs.
                  complex compliance inquiries, we're here to help! Interested
                  in learning more about our services? Our Account Executives
                  take the time to discuss your existing background screening
                  program and help you make smart decisions that best meet your
                  needs. the time to discuss your existing background screening
                  program and help you make smart decisions that best meet your
                  needs. Interested in learning more about our services? Our
                  Account Executives take Interested in learning more about our
                  services? needs. Interested in learning more about our
                  services? Our Account Executives take Interested in learning
                  more about our services. We're here to help!
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
