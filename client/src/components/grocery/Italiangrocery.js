import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import Titles from "../parts/Titles";
import Contenttext from "../parts/Contenttext";
import ContentButton from "../parts/Contentbutton";
import ContentImage from "../parts/ContentImage";


const ItalianGrocery = props => {
  return (
    <MDBCard className="p-lg-5 p-0 mb-3 text-center">
      <MDBCardBody>
        <MDBRow>
          <MDBCol>
            <Titles title="Italian Grocery" subTitle="Everything is imported from Italy" />
            <Contenttext>
              <p className="text-center">Our paninis and antipastos are made with cold cuts, cheeses, oil and vinegar imported from Italy. </p>
              <p className="text-center">Our bread is imported from Italy as well.</p>
              <p className="text-center">All the vegetables we use are local and organic</p>
            </Contenttext>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default ItalianGrocery;