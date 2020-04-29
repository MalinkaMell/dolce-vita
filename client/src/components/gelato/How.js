import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import Titles from "../parts/Titles";
import ContentText from "../parts/Text";
import ContentButton from "../parts/Button";
import ContentImage from "../parts/Image";


const HowWeMakeIt = () => {
  return (
    <MDBCard className="p-lg-5 p-0 mb-3 text-center">
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="7">
            <Titles title="How we make our gelato" subTitle="Artisan gelato made daily with local and fresh ingredient" />
            <ContentText>
              <p>Quality, Healthy and Fresh are three important elements of our gelato. We select the best ingredients, we use only fresh and local ingredients based on the period of the year. We have more than 400 recipes but we use only the one where we can use fresh ingredients.</p>
              <p>We import from Italy some ingredients such as Pistachios from Bronte, Sicily. Our almonds come from Puglia; pistachios from Sicily; hazelnuts from Piedmont. We try to select the best ingredients for our gelato. Every morning we make fresh gelato. Our flavors change often because of the availability of the ingredients. We prefer to sell only flavors that are fresh and healthier.</p>
              <p>In our 15 years, we received a lot of awards. We are proud of it and it guarantees all our customers that our gelato is truly artisan and made daily fresh.</p>
            </ContentText>
            <ContentButton btnText="Check out our Flavors" link="/gelato" color="dark-green" />
          </MDBCol>
          <MDBCol lg="5">
            <ContentImage src="/assets/images/gelato.jpg" alt="Our Gelato" />
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default HowWeMakeIt;