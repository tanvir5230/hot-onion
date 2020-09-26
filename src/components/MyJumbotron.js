import React from "react";
import { Container, Row } from "reactstrap";

const MyJumbotron = () => {
  return (
    <div className="bg-img">
      <Container fluid className="g-0 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <form>
            <h3>Best food waiting for your belly!</h3>
            <div className="position-relative mt-3">
              <input
                type="text"
                className="form-control m-0 d-inline border-0 px-3 rounded-pill"
                placeholder="search"
              />
              <button
                className="btn btn-danger rounded-pill position-absolute"
                style={{ right: "2px" }}
              >
                search
              </button>
            </div>
          </form>
        </Row>
      </Container>
    </div>
  );
};

export default MyJumbotron;
