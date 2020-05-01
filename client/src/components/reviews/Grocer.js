import React from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBIcon } from "mdbreact";
import StarRatings from "react-star-ratings";

const GrocerReview = props => {

  const date = new Date(props.review.time_created).toDateString();

  return (

    <MDBCol md="3" xs="12" className="mb-3 pb-3">
      <MDBCard className="h-100">
        <div className="rounded-top italian-green-bg lighten-3 text-center pt-3">
          <ul className="list-unstyled list-inline font-small">
            <li className="list-inline-item pr-2 white-text">
              <MDBIcon far icon='clock' /> {date}
            </li>
          </ul>
        </div>
        <MDBCardBody>
          <MDBCardTitle tag="h5" className="italian-red-color">{props.review.user.name}</MDBCardTitle>
          <StarRatings
            rating={props.review.rating}
            starDimension="30px"
            starSpacing="5px"
            starRatedColor="green"
          />
          <MDBCardText className="pt-2">
            {props.review.text}
          </MDBCardText>
        </MDBCardBody>
        <div className='rounded-bottom italian-white-bg text-center pt-3'>
          <ul className="list-unstyled list-inline d-flex justify-content-between align-content-center">
            <li className='list-inline-item pr-2 white-text align-self-center'>
              <a href={props.review.url} className="italian-green-color font-weight-bold pl-4">Dolce Vita Grocer</a>
            </li>
            <li className='list-inline-item pr-2 white-text'>
              <img className="img-fluid" src="assets/images/yelp.png" />
            </li>
          </ul>
        </div>
      </MDBCard>
    </MDBCol>

  );
}

export default GrocerReview;

/* id: "ba80XHa7InSURt5L2CCnWQ"
rating: 5
text: "Outstanding gelato! It is the best I have had since moving  to AZ seven years ago. It's difficult selecting a flavor or two because they all are great.↵The..."
time_created: "2020-02-05 10:44:45"
url: "https://www.yelp.com/biz/gelato-dolce-vita-mesa?adjust_creative=wY_baAjJzbBgXN0PvaPAyw&hrid=ba80XHa7InSURt5L2CCnWQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=wY_baAjJzbBgXN0PvaPAyw"
user:
id: "XO7qOW4q1HbxOXmo6iIf3w"
image_url: null
name: "Claudia H."
profile_url: "https://www.yelp.com/user_details?userid=XO7qOW4q1HbxOXmo6iIf3w" */