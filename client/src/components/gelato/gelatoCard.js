import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from "mdbreact";

const GelatoCard = props => {
  return (

    <MDBCard className="meni-items mb-3">
      <MDBCardBody>
        <MDBCardTitle tag="h5">{props.name}</MDBCardTitle>
        <MDBCardImage className="img-fluid" src={props.img} waves />
        <MDBCardText className="pt-2">
          {props.text}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>

  );
}

export default GelatoCard;