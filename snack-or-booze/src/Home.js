import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, Table } from "reactstrap";
import SnackOrBoozeApi from "./Api";
function Home() {
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
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>Welcome to Silicon Valley's premier dive cafe!</CardTitle>
          <p>
            Our menu includes {snacks.length} snacks and {drinks.length} drinks.
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
