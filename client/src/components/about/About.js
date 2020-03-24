import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import Titles from "../parts/Titles";
import Contenttext from "../parts/Contenttext";
import ContentImage from "../parts/ContentImage";

const AboutUs = () => {
  return (
    <MDBCard className="p-lg-5 p-0 mb-3">
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="7">
            <Titles title="Dolce Vita Founders" subTitle="Italians do it better" />
            <Contenttext>
              <p>Gelato and Grocery Dolce Vita is family owned and operated. Two Italian families joined to provide the most authentic Italian experience you can find in Phoenix Valley.</p>

              <p>Walter and Marti are from Bergamo, in the North of the Italy and they are the founders of Dolce Vita. They attended the Gelato University Carpigiani and then opened one of the first Gelato Shop in Arizona. Fabrizio born in Sicily but he lived in Milan most of the "Italian life". He owned a restaurant in Italy and provided a lot of consultancy to restaurant businesses in Italy and here in US.
              Everyone is committed to provide the best Italian food experience to all our customers. First of all authentic Italian and using only fresh and local ingredients without addictive. We made our gelato daily in our store. You can even ask for a specific flavor! If it is possible, we can make it for you!</p>
            </Contenttext>
          </MDBCol>
          <MDBCol lg="5">
            <ContentImage src="/assets/images/Photo1.jpg" alt="Our Gelato" />
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default AboutUs;