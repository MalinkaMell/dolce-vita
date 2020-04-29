import React from "react";
import { MDBView, MDBMask } from "mdbreact";

const ContentImage = props => {
  return (
    <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
      <img className="img-fluid" src={props.src} alt={props.alt} />
      <MDBMask overlay="white-slight" />
    </MDBView>
  );
}

export default ContentImage;