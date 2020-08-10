import React, { Component } from "react";
import "../assets/css/fonts.css";

import colors from "../config/colors";

class Haiven extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1 class="haiven" style={{ color: colors.white }}>
          H<span style={{ color: colors.tertiary }}>ai</span>ven
        </h1>
      </React.Fragment>
    );
  }
}

export default Haiven;
