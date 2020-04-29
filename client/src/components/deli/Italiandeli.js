import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import Titles from "../parts/Titles";
import ContentText from "../parts/Text";

const ItalianDeli = () => {
  return (
    <MDBCard className="p-lg-5 p-0 mb-3 text-center">
      <MDBCardBody>
        <MDBRow>
          <MDBCol>
            <Titles title="Italian deli" subTitle="Only authentic italian panini, antipasti and more" />
            <ContentText>
              <p className="text-center">Our paninis and antipastos are made with cold cuts, cheeses, oil and vinegar imported from Italy. </p>
              <p className="text-center">Our bread is imported from Italy as well.</p>
              <p className="text-center">All the vegetables we use are local and organic</p>
            </ContentText>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default ItalianDeli;