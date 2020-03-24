import React from "react";
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage, MDBCol } from "mdbreact";

const AwardCard = props => {
  return (
    <MDBCol md="3" xs="12" className="mb-3 pb-3">
      <MDBCard className="h-100">
        <MDBCardBody>
          <MDBCardImage className="img-fluid" src={props.img} waves />
          <MDBCardText className="pt-2">
            {props.name}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default AwardCard;