import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Logo from "../Logo/index";
import TopHeader from "../Top_header/index";
import "./Menu.css";

class Menu extends Component {
  static propTypes = {};
  render = () => (
    <div className="mainHeaderWrapper">
      <TopHeader />
      <div className="mainMenuWrapper">
        <Container>
          <Row>
            <Col md="2" sm="2">
              <Row>
                <Logo />
              </Row>
            </Col>
          </Row>
        </Container>
        <div id="stickyNavWrapper">
          <Container>
            <Row>
              <Col>
                <Row>
                  <div className="menuWrapper">
                    <ul>
                      <li>
                        <NavLink
                          to="/quran"
                          activeClassName="active"
                          activeStyle={{ color: "#fff" }}
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/hadith"
                          activeClassName="active"
                          activeStyle={{ color: "#fff" }}
                        >
                          Hadith
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Menu;
