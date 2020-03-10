import React from "react";
import Testimonial from "./Testimonial";
import { MDBContainer, MDBRow } from "mdbreact";
import Titles from "../parts/Titles";

const TestimonialsHome = () => {
  return (
    <React.Fragment>
      <MDBContainer fluid className="italian-white-bg p-5 mb-3">
        <Titles title="Customer reviews" subTitle="What they say" />
        <MDBRow className="text-center">
          <Testimonial name="Sam Amato" text="My wife and I stopped in for the first time, and I had the best...... I can't even call it a sandwich, but a piece of edible heaven, WOW the best I ever had, the Parma not to mention the Gelato my wife had.... Unbelievable.... Thanks my freinds for the great service." stars={5} />
          <Testimonial name="Jacob-Alexandra Droz" text="I came here with my family today for my birthday! The food was amazing, the bread was so delicious! !! We all tried different plates and we left nothing to take home!!! The Gelato WAS AMAZING!!! ! The 4 of us tried different ones and all of them were excellent!  I am so glad we found this treasure! The owners were amazing as well... Thank you and see you soon!!!" stars={5} />
          <Testimonial name="Andrew McCargar" text="We love this place so much! Best gelato in the valley by far!!!" stars={5} />
        </MDBRow>
      </MDBContainer>
    </React.Fragment>

  );
}

export default TestimonialsHome;