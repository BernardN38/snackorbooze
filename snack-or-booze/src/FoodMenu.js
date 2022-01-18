import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import SnackOrBoozeApi from "./Api";
function FoodMenu({ path }) {
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    const getFood = async () => {
      const apiFood = await SnackOrBoozeApi.getSnacks();
      return setSnacks(apiFood);
    };
    const getDrinks = async () => {
      const apiFood = await SnackOrBoozeApi.getDrinks();
      return setDrinks(apiFood);
    };
    getFood();
    getDrinks();
  }, []);
  const returnSnacks = ()=>{
    return snacks.map((snack) => (
      <Link to={`${path}/${snack.id}`} key={snack.id}>
        <ListGroupItem>{snack.name}</ListGroupItem>
      </Link>
    ))
  };
  const returnDrinks = ()=>{
    return drinks.map((snack) => (
      <Link to={`${path}/${snack.id}`} key={snack.id}>
        <ListGroupItem>{snack.name}</ListGroupItem>
      </Link>
    ))
  };
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {path==="snacks" ?  returnSnacks() : returnDrinks()}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
