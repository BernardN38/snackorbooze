import React from "react";
import { Card, CardBody, CardTitle, Table } from "reactstrap";

function Home({snacks, drinks}) {

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>

          </CardTitle>
            <p>Our menu includes {snacks.length} snacks and {drinks.length} drinks.</p>
          
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
