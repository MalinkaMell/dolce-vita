import React, { useState } from "react";
import Titles from "../parts/Titles";


import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBInput, MDBContainer } from "mdbreact";
import ContactForm from "./Form";
import ContactInfo from "./Info";

const ContactContainer = props => {

  return (
    <MDBContainer className="p-lg-5 p-0 mb-3 text-center">
      <MDBRow className="justify-content-center">
        <MDBCol>
          <Titles title="Contact us" subTitle="Everything is imported from Italy" />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol lg="8" className="lg-0 mb-4">
          <ContactForm />
        </MDBCol>
        <MDBCol lg="4">
          <ContactInfo />
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  )
}

export default ContactContainer;