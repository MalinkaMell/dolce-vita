import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBContainer } from "mdbreact";
import Titles from "../parts/Titles";

const CareersContainer = props => {
  return (
    <MDBContainer className="p-lg-5 p-0 mb-3 text-center careers">
      <MDBRow className="justify-content-center">
        <MDBCol>
          <Titles title="Careers" subTitle="Would you like to work at Gelato Dolce Vita?" />
        </MDBCol>
      </MDBRow>
      <MDBCard className="mx-2 mx-md-0">
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="8" className="m-lg-0 mb-4 text-left">
              <h4 className="my-4">Open Positions: SERVERS</h4>
              <p>Please download the job application, fill up with all your data and sign and then send the signed application together with your resume to <a href="Mailto:info@gelatodolcevita.com">info@gelatodolcevita.com</a></p>

            </MDBCol>
            <MDBCol md="4" className="m-lg-0 mb-4">
              <a href="assets/files/Job_Application.pdf" target="_blank"><button className="btn btn-green btn-lg">Download job application</button></a>
              <a href="Mailto:info@gelatodolcevita.com?subject=New Job Application"><button className="btn btn-danger btn-lg">Send job application package</button></a>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default CareersContainer;