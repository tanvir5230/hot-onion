import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const Login = () => {
  return (
    <>
      <hr />
      <Container>
        <Row
          className=" justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          <Col xs={8} md={6} lg={4} className="py-5">
            <img
              className="img-fluid w-75 d-block m-auto pb-4"
              src={require("../resources/logo2.png")}
              alt=""
            />
            <form>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />

              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />

              <input
                className="form-control btn-danger"
                type="submit"
                value="Sign in"
              />
            </form>
            <Link to="/signup">
              <button className="btn text-danger text-center w-100">
                create a new account
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
