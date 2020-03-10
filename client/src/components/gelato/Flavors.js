import React from "react";
import { MDBCardGroup, MDBCard, MDBCardBody, MDBRow, MDBCol } from "mdbreact";
import Titles from "../parts/Titles";
import gelato from '../menus/gelato.json';
import GelatoCard from "./gelatoCard";

const Flavors = () => {
  return (
    <React.Fragment>

      <MDBCard className="p-lg-5 p-0 mb-3">
        <MDBCardBody>
          <MDBRow>
            <MDBCol lg="12">
              <Titles title="Our gelato flavors" subTitle="Try them all!" />
              <MDBCardGroup deck className="d-flex justify-content-center">
                {gelato.map((item, i, arr) => <GelatoCard key={item + i + arr} name={item.name} text={item.description} img={item.img} />)}
              </MDBCardGroup>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </React.Fragment>


  );
}

export default Flavors;