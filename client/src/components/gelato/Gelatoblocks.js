import React from "react";
import { MDBRow, MDBCard, MDBCardBody } from "mdbreact";
import Blocks from "../common/Blocks";

const Gelatoblocks = () => {
  return (
    <React.Fragment>
      <MDBCard className="p-4 mb-3">
        <MDBCardBody className="text-center">
          <MDBRow>
            <Blocks cols={3} img="/assets/images/blocks/chef1.jpg" title="Artisan Gelato" subtitle="Homemade And Fresh">
              We make our gelato from scratch, using only local and fresh ingredients.
            </Blocks>

            <Blocks cols={3} img="/assets/images/blocks/fresh.jpg" title="Local ingredients" subtitle="Healthy And Fresh">
              We buy local even milk and cream. We make flavors based on the season availability.
            </Blocks>

            <Blocks cols={3} img="/assets/images/blocks/daily.jpg" title="Made daily" subtitle="Every Morning For You">
              We make our gelato from scratch, using only local and fresh ingredients.
            </Blocks>

            <Blocks cols={3} img="/assets/images/blocks/italian.jpg" title="Authentic Italian" subtitle="Italian Gelato And Deli">
              You don't visit a store, you will visit a little authentic Italian shop. It is like to travel to Italy.
            </Blocks>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </React.Fragment>

  );
}

export default Gelatoblocks;