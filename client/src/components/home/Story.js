import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import Titles from "../parts/Titles";
import ContentText from "../parts/Text";
import ContentButton from "../parts/Button";
import ContentImage from "../parts/Image";

const Story = () => {
  return (
    <MDBCard className="p-lg-5 p-0 mb-3">
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="7">
            <Titles title="Gelato and Grocery Dolce Vita" subTitle="How It All Began" />
            <ContentText>
              <p>Food is a passion and who can have more food passion than Italians?\nMore than 10 years ago Walter and Marti decided to create a little Italian spot in Mesa to offer gelato and share their Italian food culture.</p>
              
              <p>They attended Gelato University and they started! It was hard at the beginning because Gelato was unknown in US but people began to appreciate our Italian Gelato! Fabrizio joined them Italians meet Italians in order to add a authentic Italian Grocery and Deli.</p>
              
              <p>Come to visit us! You will feel the authentic Italian passion for food and maybe you will even learn Italian!</p>
            </ContentText>
            <ContentButton btnText="Read More" link="/about" color="dark-green" />
          </MDBCol>
          <MDBCol lg="5">
            <ContentImage src="/assets/images/gelato-1.jpg" alt="Our Gelato" />
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Story;