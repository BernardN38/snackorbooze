import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import Form from "./Form"
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [newItems, setNewItems] = useState({snacks:[],drinks:[]});
  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
  console.log(newItems);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={[...snacks, ...newItems.snacks]} drinks={[...drinks, ...newItems.drinks]}/>
            </Route>
            <Route exact path="/snacks">
              <Menu food={[...snacks, ...newItems.snacks]} path="snacks"title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu food={[...drinks, ...newItems.drinks]} path="/drinks" title="Drinks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={[...snacks, ...newItems.snacks]} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <Snack items={[...drinks, ...newItems.drinks]} cantFind="/snacks" />
            </Route>
            <Route path="/additem">
              <Form newItems={newItems} setNewItems={setNewItems} />
            </Route>
            <Route>
              <p>Page Not Found</p>
            </Route>

          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
