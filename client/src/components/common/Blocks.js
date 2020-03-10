import React from "react";
import { MDBCol, MDBMask, MDBView } from "mdbreact";

const Blocks = props => {
  return (
    <MDBCol lg={props.cols} md="12" className="mb-lg-0 mb-4">
      <MDBView hover className="rounded z-depth-1 mb-4" waves>
        <img className="img-fluid w-100 p-2" src={props.img} alt="" />
        <MDBMask overlay="white-slight" />
      </MDBView>
      <h4 className="italian-red-color font-weight-bold mb-3">{props.title}</h4>
      <h6 className="italian-green-color mb-3">{props.subtitle}</h6>
      <p className="dark-grey-text">
        {props.children}
      </p>
    </MDBCol>
  );
}

export default Blocks;