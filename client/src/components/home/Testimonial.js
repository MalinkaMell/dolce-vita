import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";

const Testimonial = props => {
  let starsCount = 0;
  return (
    <React.Fragment>
      <MDBCol xs="12" md="4">
        <h4 className="font-weight-bold dark-grey-text mt-4">{props.name}</h4>
        <p className="font-weight-normal dark-grey-text">
          <i className="fa fa-quote-left pr-2" />{props.text}</p>
        <div className="italian-red-color">
          {Array.from(Array(props.stars), () => <MDBIcon key={starsCount++} icon="star" />)}
        </div>
      </MDBCol>
    </React.Fragment>
  );
}

export default Testimonial;