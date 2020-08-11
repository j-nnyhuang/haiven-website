import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/fonts.scss";
import "../assets/css/footer.scss";
import colors from "../config/colors";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container
          fluid
          style={{ backgroundColor: colors.primary, padding: 20 }}
        >
          <Row>
            <Col>
              <h6>Our Mission</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phaseluus finibus sollicitudin ligula in consectuer.
              </p>
            </Col>
            <Col>
              <h6>About Us</h6>
              <ul>
                <li>Team</li>
                <li>Code of Ethics</li>
                <li>Contact</li>
              </ul>
            </Col>
            <Col>
              <h6>Legal</h6>
              <ul>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Footer;
