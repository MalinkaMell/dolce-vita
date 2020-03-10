import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import Titles from "../parts/Titles";
import Contenttext from "../parts/Contenttext";
import ContentButton from "../parts/Contentbutton";
import ContentImage from "../parts/ContentImage";


const Compare = () => {
  return (
    <MDBCard className="p-lg-5 p-0 mb-3 text-center">
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="7">
            <Titles title="Gelato VS Ice Cream" subTitle="Gelato is the Iyalian translation of ice cream, but they are different" />
            <Contenttext>
                <p>Gelato is the Italian word for ice cream. It starts out with a similar custard base as ice cream, but has a higher proportion of milk and a lower proportion of cream and eggs (or no eggs at all). It is churned at a much slower rate, incorporating less air and leaving the gelato denser than ice cream. Gelato is served at a slightly warmer temperature than ice cream, so its texture stays silkier and softer. Because it has a lower percentage of fat than ice cream, the main flavor ingredient really shines through.</p>

                <p><b>Creaminess:</b> Gelato is creamier, smoother and silkier, as well as denser and more elastic and fluid, than American ice cream.</p>
                
                <p><b>Ingredients:</b> While both gelato and ice cream contain cream, milk and sugar, authentic gelato uses more milk and less cream than ice cream and generally doesn’t use egg yolks, which are a common ingredient in ice cream.</p>
                
                <p><b>Butterfat, air and flavor:</b> Ice cream contains at least 10 percent butterfat and usually has between 14 and 25 percent. Meanwhile, Italian gelato includes only about 4 to 9 percent fat. Yet gelato also contains less air than American ice cream — that helps keep it dense, fluid and creamy. And having less butterfat to coat your palate allows the flavors to emerge more.
                </p>
                <p><b>Temperature:</b> Another flavor enhancer: Italian gelato is served about 10 to 15 degrees warmer than American ice cream, at about 7 to 12 degrees Fahrenheit, so your mouth is less numb and better able to taste it.</p>
                
                <p><b>Serving style:</b> Authentic Italian gelato isn’t scooped, it’s served with a spade.`</p>
           </Contenttext>
            <ContentButton btnText="Check out our Flavors" link="/gelato" />
          </MDBCol>
          <MDBCol lg="5">
            <ContentImage src="/assets/images/gelatovsice.png" alt="Our Gelato" />
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Compare;