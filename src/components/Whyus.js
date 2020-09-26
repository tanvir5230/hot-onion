import React from "react";
import { Card, CardBody, CardImg, Col, Container, Row } from "reactstrap";
import img1 from "../resources/Image/whyus-1.jpg";
import img2 from "../resources/Image/whyus-2.jpg";
import img3 from "../resources/Image/whyus-3.jpg";
const Whyus = () => {
  return (
    <Container className="my-5 py-5">
      <h2 className="py-4 text-center">Why Us</h2>
      <Row className="justify-content-center">
        <Col xs="9" md="4">
          <div className="mb-4">
            <Card className="border-0 shadow">
              <CardImg src={img1} top className="p-1" />
              <CardBody>
                <img
                  src={require("../resources/ICON/whyus-1.png")}
                  alt=""
                  className="float-left"
                  width="40"
                  height="40"
                />
                <div className="ml-5">
                  <h5>
                    <span>Fast Delivary</span>
                  </h5>
                  <p>
                    Keep your system om sync with automated web hook based
                    notification each time link is paid and how we dream about
                    our future
                  </p>
                  <button className="btn btn-outline-primary">
                    see more &gt;
                  </button>
                </div>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col xs="9" md="4" className="mb-4">
          <div className="mb-4">
            <Card className="border-0 shadow">
              <CardImg src={img2} top className="p-1" height="350" />
              <CardBody>
                <img
                  src={require("../resources/ICON/whyus-1.png")}
                  alt=""
                  className="float-left"
                  width="40"
                  height="40"
                />
                <div className="ml-5">
                  <h5>
                    <span>A Good Auto Responder</span>
                  </h5>
                  <p>
                    Keep your system om sync with automated web hook based
                    notification each time link is paid and how we dream about
                    our future
                  </p>
                  <button className="btn btn-outline-primary">
                    see more &gt;
                  </button>
                </div>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col xs="9" md="4">
          <div className="mb-4">
            <Card className="border-0 shadow">
              <CardImg src={img3} top className="p-1" />
              <CardBody>
                <img
                  src={require("../resources/ICON/whyus-1.png")}
                  alt=""
                  className="float-left"
                  width="40"
                  height="40"
                />
                <div className="ml-5">
                  <h5>
                    <span>Home Delivery </span>
                  </h5>
                  <p>
                    Keep your system om sync with automated web hook based
                    notification each time link is paid and how we dream about
                    our future
                  </p>
                  <button className="btn btn-outline-primary">
                    see more &gt;
                  </button>
                </div>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Whyus;
