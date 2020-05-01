import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBContainer } from "mdbreact";
import GelatoReview from "./Gelato";
import GrocerReview from "./Grocer";
import Titles from "../parts/Titles";
import ContentText from "../parts/Text";
import axios from "axios";

const ReviewsContainer = () => {

  const [reviewsGelato, setReviewsGelato] = useState([]);
  const [reviewsGrocer, setReviewsGrocer] = useState([]);

  useEffect(() => {
    axios
      .get("/api/yelp/gelato")
      .then(response => { setReviewsGelato(response.data) })
      .catch(error => console.log(error))
    axios
      .get("/api/yelp/grocer")
      .then(response => { setReviewsGrocer(response.data) })
      .catch(error => console.log(error))
  }, [])

  console.log(reviewsGelato)

  return (
    <React.Fragment>
      <MDBCard className="pt-lg-5 p-0 mb-3 text-center">
        <MDBCardBody>
          <MDBRow>
            <MDBCol>
              <Titles title="Reviews" subTitle="What people say about us" />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

      <MDBContainer fluid className="italian-white-bg p-1 mb-3">
        <MDBRow className="m-2 p-2">
          <MDBCol className="my-2">
            <MDBContainer className="reviews">
              <h2 className="mb-5 italian-red-color">Dolce Vita Gelato Yelp</h2>
              <MDBRow className="pb-3 mb-3 d-flex justify-content-center">
                {reviewsGelato.map((item, i, arr) => <GelatoReview key={item + i + arr} review={item} />)}
              </MDBRow>
              <h2 className="mb-5 italian-green-color">Dolce Vita Grocer Yelp</h2>
              <MDBRow className="pb-3 mb-3 d-flex justify-content-center">
                {reviewsGrocer.map((item, i, arr) => <GrocerReview key={item + i + arr} review={item} />)}
              </MDBRow>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>



    </React.Fragment>

  );
}

export default ReviewsContainer;