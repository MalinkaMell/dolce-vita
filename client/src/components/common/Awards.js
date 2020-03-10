import React from "react";
import { MDBRow, MDBCol, MDBContainer, MDBMask, MDBView } from "mdbreact";

const images = ["earth", "gelatofestival", "worldtour", "yahoofood"];

const Awards = () => {
  return (
    <MDBContainer fluid className="italian-white-bg px-5 py-3">
      <MDBRow>
        {
          images.map((image, i) => (
            <MDBCol lg="3" md="12" key={i}>
              <MDBView hover className="rounded z-depth-1 mb-3" waves>
                <img className="img-fluid w-100 p-2" src={`assets/images/awards/${image}.jpg`} alt="" />
                <MDBMask overlay="white-slight" />
              </MDBView>
            </MDBCol>
          ))
        }
      </MDBRow>
    </MDBContainer>
  );
}

export default Awards;