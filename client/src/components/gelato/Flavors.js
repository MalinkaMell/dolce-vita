import React from "react";
import { MDBContainer, MDBCard, MDBCardBody, MDBRow, MDBCol } from "mdbreact";
import Titles from "../parts/Titles";
import gelato from '../menus/gelato.json';
import GelatoCard from "./Gelatocard";

const Flavors = () => {
  return (
    <React.Fragment>
      <MDBCard className="p-lg-5 p-0 mb-3">
        <MDBCardBody>
          <MDBRow>
            <MDBCol>
              <Titles title="Our gelato flavors" subTitle="Try them all!" />
              <MDBContainer>
                <MDBRow className="pb-3 mb-3 d-flex justify-content-center">
                  {gelato.map((item, i, arr) => <GelatoCard key={item + i + arr} name={item.name} text={item.description} img={item.img} />)}
                </MDBRow>
              </MDBContainer>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </React.Fragment>


  );
}

export default Flavors;