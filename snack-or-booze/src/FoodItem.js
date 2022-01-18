import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import SnackOrBoozeApi from "./Api";
function FoodItem({ cantFind }) {
  const { id } = useParams();
  const [snack,setSnack] = useState({})
  useEffect(() => {
    const getSnack = async () => {
      const apiSnacks = await SnackOrBoozeApi.getSnacks();
      const apiDrinks = await SnackOrBoozeApi.getDrinks();
      const items = [...apiSnacks, ...apiDrinks]
      const displayItem = items.find(item => item.id === id);
      setSnack(displayItem)
    }
    getSnack()
  }, []);
  if (!snack) return <Redirect to={cantFind} />;
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snack.name}
          </CardTitle>
          <CardText className="font-italic">
          <b>Description:</b> {snack.description}</CardText>
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          <p>
            <b>Serve:</b> {snack.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
