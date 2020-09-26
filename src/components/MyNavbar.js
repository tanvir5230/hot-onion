import React from "react";
import { Link } from "react-router-dom";
import { Badge, Col, Container, Nav, NavbarBrand, Row } from "reactstrap";

const MyNavbar = () => {
  return (
    <Container style={{ height: "10vh" }}>
      <Row className="h-100 align-items-center">
        <Col className="pb-1">
          <Nav>
            <Link to="/">
              <NavbarBrand>
                <img
                  src={require("../resources/logo2.png")}
                  alt=""
                  width="150"
                  height="40"
                />
              </NavbarBrand>
            </Link>
            <div className="ml-auto d-flex align-items-center">
              <Link to="/cart">
                <button className="btn position-relative ">
                  <img
                    src={require("../resources/ICON/cart.png")}
                    alt="cart"
                    width="30"
                  />
                  <Badge
                    pill
                    color="danger"
                    style={{
                      position: "absolute",
                      top: "1px",
                      right: "3px",
                    }}
                  >
                    1
                  </Badge>
                </button>
              </Link>
              <Link to="/login">
                <button className="btn-sm btn-light mx-2">login</button>
              </Link>
              <Link to="/signup">
                <button className="btn-sm btn-danger rounded-pill px-md-4">
                  SingUp
                </button>
              </Link>
            </div>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default MyNavbar;
