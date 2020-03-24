import React from "react";
import Titles from "../parts/Titles";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import RequestForm from "./FormContainer";

const RequestGelato = () => {
  return (
    <MDBContainer className="p-lg-5 p-0 mb-3 text-center">
      <MDBRow className="justify-content-center">
        <MDBCol>
          <Titles title="Request gelato flafor" subTitle="We'll make it for you!" />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="m-lg-0 mb-4">
          <RequestForm />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default RequestGelato;