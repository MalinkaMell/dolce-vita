import React from "react";
import { MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom';


const ContentButton = props => {
  return (
    <React.Fragment>
      <Link to={props.link}>
        <MDBBtn color={props.color} size="md" className="mb-lg-0 my-4 waves-light" >
          {props.btnText}
        </MDBBtn>
      </Link>
    </React.Fragment>
  );
}

export default ContentButton;