import React from "react";
import Titles from "../parts/Titles";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import BookingContainer from "./BookingContainer";

const Reservation = () => {
  return (
    <MDBContainer className="p-lg-5 p-0 mb-3 text-center">
      <MDBRow className="justify-content-center">
        <MDBCol>
          <Titles title="Make a reservation" subTitle="Booking" />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="m-lg-0 mb-4">
          <BookingContainer />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Reservation;