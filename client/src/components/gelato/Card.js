import React from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from "mdbreact";

const GelatoCard = props => {
  return (

    <MDBCol md="3" xs="12" className="mb-3 pb-3">
      <MDBCard className="h-100">
      <MDBCardBody>
        <MDBCardTitle tag="h5">{props.name}</MDBCardTitle>
        <MDBCardImage className="img-fluid" src={props.img} waves />
        <MDBCardText className="pt-2">
          {props.text}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>

  );
}

export default GelatoCard;