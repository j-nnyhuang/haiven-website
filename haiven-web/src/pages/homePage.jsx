import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../assets/css/fonts.scss";
import "../assets/css/homePage.scss";
import { Row, Col, Container } from "react-bootstrap";
import {
  AiOutlineSafety,
  AiOutlinePhone,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import colors from "../config/colors.js";

export class Slogan extends Component {
  state = {};
  render() {
    return (
      <h1 class="slogan gradient">
        <span>Your New Friendly Neighbour</span>
      </h1>
    );
  }
}

class Statistics extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>760,000 CANADIANS</h1>
        <Row>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col className="justify-content-md-center">
            <Row>
              <Col>
                <h5 class="tertiary center padding">Emotional</h5>
              </Col>
              <Col>
                <h5 class="white center padding">Physical</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5 class="white center padding">Sexual</h5>
              </Col>
              <Col>
                <h5 class="tertiary center padding">Financial</h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

class Features extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>What We Do</h1>
        <Row>
          <Col>
            <h5>Aggression Detection</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col>
            <h5>Emotion Analysis</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col>
            <h5>Journaling</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

class SafetyFeature extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Col>
          <h5>{this.props.safetyFeature}</h5>
          <Row>
            <Col md="auto">{this.props.children}</Col>
            <Col>
              <p>{this.props.safetyDescription}</p>
            </Col>
          </Row>
        </Col>
      </React.Fragment>
    );
  }
}

class Safety extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Keeping You Safe</h1>
        <Row>
          <SafetyFeature
            safetyFeature="Secure Storage"
            safetyDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          >
            <AiOutlineSafety style={{ fill: colors.tertiary }} size={100} />
          </SafetyFeature>
          <SafetyFeature
            safetyFeature="Emergency Contact"
            safetyDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          >
            <AiOutlinePhone style={{ fill: colors.tertiary }} size={100} />
          </SafetyFeature>
          <SafetyFeature
            safetyFeature="Emergency Contact"
            safetyDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          >
            <AiOutlineExclamationCircle
              style={{ fill: colors.tertiary }}
              size={100}
            />
          </SafetyFeature>
        </Row>
      </React.Fragment>
    );
  }
}

export default function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        <Row className="px-sm-1">
          <Col>
            <Slogan />
          </Col>
          <Col>
            <img src={require("../assets/Prototype.PNG")} />
          </Col>
        </Row>
        <Row className="secondary">
          <Statistics />
        </Row>
        <Row>
          <Features />
        </Row>
        <Row>
          <Safety />
        </Row>
        <Row className="primary">
          <Footer />
        </Row>
      </Container>
    </React.Fragment>
  );
}
