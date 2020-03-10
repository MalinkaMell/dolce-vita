import React from "react";
import { MDBTypography, MDBContainer, MDBBox } from "mdbreact";
import '../common/styles.css';

const Cite = () => {
  return (
    <MDBContainer fluid className="italian-white-bg p-5 mb-0 dancing-script">
      <MDBTypography blockquote>
        <MDBBox tag="h1" mb={0} className="italian-red-color">"There is nothing more romantic than Italian food"</MDBBox>
        <MDBBox tag="footer" mb={0} className="blockquote-footer italian-green-color"><cite title="Elisha Cuthbert">Elisha Cuthbert</cite></MDBBox>
      </MDBTypography>
    </MDBContainer>
  );
}

export default Cite;