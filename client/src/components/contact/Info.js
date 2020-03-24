import React from "react";
import { MDBRow, MDBCol } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBRow className="text-right pt-3 mx-2 pt-md-0 mx-md-0">
      <MDBCol md="12" className="flex-column contacts">
        <div className="icon-wrapper">
          <i className="fas fa-map-marker-alt"></i> Address
                </div>
        <p className="pt-2">5251 E Blown Rd. #104, Mesa AZ 85205</p>

        <div className="icon-wrapper">
          <i className="fas fa-envelope"></i> Email
                </div>
        <p className="pt-2"><a href="Mailto:info@gelatodolcevita.com" className="italian-red-color">info@gelatodolcevita.com</a></p>
        <div className="icon-wrapper">
          <i className="fas fa-phone"></i> Phone
                </div>
        <p className="pt-2">(480) 218-0225</p>
        <div className="icon-wrapper">
          <i className="far fa-clock"></i> Opening Hours
                </div>
        <MDBRow className="pt-2">
          <MDBCol size="4">
            <ul className="list-unstyled  text-left">
              <li>Monday:</li>
              <li>Tuesday:</li>
              <li>Wednesday:</li>
              <li>Thursday:</li>
              <li>Friday:</li>
              <li>Saturday:</li>
              <li>Sunday:</li>
            </ul>
          </MDBCol>
          <MDBCol size="8">
            <ul className="list-unstyled  text-right">
              <li>Closed</li>
              <li>11:00 AM - 9:30 PM</li>
              <li>11:00 AM - 9:30 PM</li>
              <li>11:00 AM - 9:30 PM</li>
              <li>11:00 AM - 10:00 PM</li>
              <li>11:00 AM - 10:00 PM</li>
              <li>2:00 PM - 8:30 PM</li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </MDBRow>
  );
}

export default ContactInfo;