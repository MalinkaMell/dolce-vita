import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import Menus from "./Menus";
import Titles from "../parts/Titles";
import ContentImage from "../parts/ContentImage";

const Dishes = () => {
  return (
    <MDBCard className="p-lg-5 p-0 mb-3">
      <MDBCardBody className="text-center">
        <MDBRow className="d-flex align-items-start">
          <MDBCol md="12" lg="7">
            <Titles title="Signature dishes" subTitle="We make our gelato daily, please check with us if a specific flavor is available" />
            <Menus />
          </MDBCol>
          <MDBCol md="12" lg="5" className="py-4 py-md-0 mx-2 mx-md-0">
            <ContentImage src="/assets/images/Photo3.jpg" alt="Our Gelato" />
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Dishes;