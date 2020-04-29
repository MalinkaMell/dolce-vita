import React from "react";
import Titles from "../parts/Titles";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import ContactForm from "./Form";
import ContactInfo from "./Info";

const ContactContainer = () => {
  return (
    <MDBContainer className="p-lg-5 p-0 mb-3 text-center">
      <MDBRow className="justify-content-center">
        <MDBCol>
          <Titles title="Contact us" subTitle="Everything is imported from Italy" />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="8" className="m-lg-0 mb-4">
          <ContactForm />
        </MDBCol>
        <MDBCol md="4" className="m-lg-0 mb-4">
          <ContactInfo />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default ContactContainer;