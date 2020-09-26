import { foods } from "../data";
import React from "react";
import {
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import {
  Card,
  CardImg,
  Col,
  Container,
  Nav,
  Navbar,
  NavItem,
  Row,
} from "reactstrap";
import MyJumbotron from "./MyJumbotron";
import Whyus from "./Whyus";

const Foods = () => {
  const { url, path } = useRouteMatch();
  return (
    <>
      <MyJumbotron />
      <Nav navbar>
        <Navbar className="justify-content-center py-5">
          <NavItem>
            <NavLink to={`${url}/breakfast`}>Breakfast</NavLink>
          </NavItem>
          <NavItem className="mx-4">
            <NavLink activeClassName="active" to={`${url}/lunch`}>
              Lunch
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={`${url}/dinner`}>Dinner</NavLink>
          </NavItem>
          <button className="btn text-warning">see all</button>
        </Navbar>
      </Nav>
      <Switch>
        <Route path={`${path}/:foodId`}>
          <Food />
        </Route>
        <Redirect to={`${path}/lunch`} />
      </Switch>
      <Whyus />
    </>
  );
};

const Food = () => {
  let { foodId } = useParams();
  const foodList = foods.filter((food) => food.category === foodId).slice(0, 6);
  return (
    <Container className="mb-5">
      <Row className="justify-content-center">
        {foodList.map((food) => {
          return (
            <Col xs={10} md="4" className=" p-5 mt-md-0">
              <Link to={`/${foodId}/${food.id}`}>
                <Card className="food text-center border-0">
                  <CardImg top src={food.img} className="p-3" />
                  <h5>{food.title}</h5>
                  <p className="text-secondary">{food.subtitle}</p>
                  <h3>${food.price}</h3>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Foods;
