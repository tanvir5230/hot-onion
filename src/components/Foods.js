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
import FoodDetails from "./FoodDetails";
import Checkout from "./Checkout";

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
        <Route path={`${path}/:foodCat`}>
          <Food path={path} url={url} />
        </Route>

        <Redirect to={`${path}/lunch`} />
      </Switch>
      <Whyus />
    </>
  );
};

const Food = ({ path, url }) => {
  let { foodCat } = useParams();
  console.log(foodCat);
  const foodList = foods
    .filter((food) => food.category === foodCat)
    .slice(0, 6);
  return (
    <Container className="mb-5">
      <Row className="justify-content-center align-items-center">
        <Switch>
          <Route exact path={`${path}/${foodCat}`}>
            {foodCat === "checkout" && <Checkout />}

            {foodCat !== "checkout" &&
              foodList.map((food) => {
                return (
                  <Col xs={10} md="4" className=" p-5 mt-md-0">
                    <Link to={`${foodCat}/${food.id}`}>
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

            {foodCat !== "checkout" && (
              <Link to={`${url}/checkout`}>
                <CheckoutFoodBtn />
              </Link>
            )}
          </Route>

          <Route path={`${path}/${foodCat}/:foodId`}>
            <FoodDetails path={path} foodCat={foodCat} />
          </Route>
        </Switch>
      </Row>
    </Container>
  );
};

export const CheckoutFoodBtn = () => {
  return <button className="btn btn-danger">Checkout your Food</button>;
};

export default Foods;
