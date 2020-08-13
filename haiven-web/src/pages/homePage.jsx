import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../assets/css/fonts.scss";
import "../assets/css/homePage.scss";
import { Row, Col, Container, Card } from "react-bootstrap";

import { ReactComponent as Secure } from "../assets/icons/undraw_safe.svg";
import { ReactComponent as Calling } from "../assets/icons/undraw_calling.svg";
import { ReactComponent as Alert } from "../assets/icons/undraw_alert.svg";

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
          <Col className="mx-auto my-auto">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col className="d-flex align-content-around">
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
            <Card>
              <Card.Body>
                <Card.Title>
                  <h5>Aggression Detection</h5>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h5>Emotion Analysis</h5>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h5>Journaling</h5>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
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
        <Col className="center">
          <h5>{this.props.safetyFeature}</h5>
          {this.props.children}

          <p>{this.props.safetyDescription}</p>
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
            <Secure className="svg" />
          </SafetyFeature>
          <SafetyFeature
            safetyFeature="Emergency Contact"
            safetyDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          >
            <Calling className="svg" />
          </SafetyFeature>
          <SafetyFeature
            safetyFeature="Quick Exit"
            safetyDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          >
            <Alert className="svg" />
          </SafetyFeature>
        </Row>
      </React.Fragment>
    );
  }
}

class Content extends Component {
  state = {};
  render() {
    return (
      <Row className={"content " + this.props.styleName}>
        {this.props.children}
      </Row>
    );
  }
}

export default function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        <Row>
          <Col className="center">
            <Slogan />
          </Col>
          <Col className="center">
            <img src={require("../assets/Prototype.PNG")} />
          </Col>
        </Row>
        <Content styleName="secondary" style={{ paddingBottom: 0 }}>
          <Statistics />
        </Content>
        <Content styleName="padding-bottom-none">
          <Features />
        </Content>
        <Content>
          <Safety />
        </Content>
        <Row className="primary">
          <Footer />
        </Row>
      </Container>
    </React.Fragment>
  );
}
