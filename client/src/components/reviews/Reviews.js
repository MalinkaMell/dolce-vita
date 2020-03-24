import React, { useEffect } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBContainer } from "mdbreact";
import Titles from "../parts/Titles";
import Contenttext from "../parts/Contenttext";
import axios from "axios";

const Reviews = () => {

  useEffect(() => {
    axios.get(`https://api.yelp.com/v3/businesses/${process.env.businessId}/reviews`,
    {headers: {
      "accept": "application/json",
      "x-requested-with": "xmlhttprequest",
      "Access-Control-Allow-Origin":"*",
      "Authorization": `Bearer ${process.env.yelpApiKey}`
   }})
    .then(response => console.log(response))
  }, [])


  return (
    <React.Fragment>
      <MDBCard className="p-lg-5 p-0 mb-3 text-center">
        <MDBCardBody>
          <MDBRow>
            <MDBCol>
              <Titles title="Reviews" subTitle="What people say about us" />
              <Contenttext>
                <p className="text-center">Our paninis and antipastos are made with cold cuts, cheeses, oil and vinegar imported from Italy. </p>
                <p className="text-center">Our bread is imported from Italy as well.</p>
                <p className="text-center">All the vegetables we use are local and organic</p>
              </Contenttext>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <MDBContainer fluid className="italian-white-bg p-1 mb-3">
        <MDBRow className="m-2 p-2">
          <MDBCol md="6 my-2">
            <h1>reviews</h1>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
}

export default Reviews;