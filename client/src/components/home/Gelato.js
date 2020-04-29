import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import Titles from "../parts/Titles";
import ContentText from "../parts/Text";
import ContentButton from "../parts/Button";
import ContentImage from "../parts/Image";


const Gelato = () => {
  return (
    <MDBCard className="p-lg-5 p-0 mb-3">
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="5">
            <ContentImage src="/assets/images/gelato.jpg" alt="Our Gelato" />
          </MDBCol>
          <MDBCol lg="7">
            <Titles title="Our Gelato" subTitle="We do it italian way!" />
            <ContentText>

              <p>We pride ourselves in using only the highest quality ingredients for our gelato. Our almonds come from Puglia; pistachios from Sicily; hazelnuts from Piedmont, etc. Our fruit sorbets use local, in season fruits whenever possible. Even the milk and cream we use is local.</p>

              <p>The process of making gelato is a science. The recipes have to be balanced between fat, sugars, air, ice crystals and other solids such as proteins, nuts, cookies, etc. Get one of those ingredients wrong, and it will turn out icy, runny or with a sandy texture. In fact, we use advance technology to help us ensure that our gelato is perfectly balanced before it goes into our display.</p>

              <p>Our gelato is completely handmade, no additives, no artificial flavors. Only true and healthy ingredients.</p>

            </ContentText>
            <ContentButton btnText="Check out our gelato" link="/gelato" />
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Gelato;