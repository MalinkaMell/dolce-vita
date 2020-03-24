import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBContainer } from "mdbreact";
import Titles from "../parts/Titles";
import AwardCard from "./AwardsCard";
import awards from "../menus/awards.json";

const years = ["2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012/2011"];

const AwardsGroup = () => {
  return (
    <React.Fragment>
      {
        years.map(year => {
          return (
              <MDBCard className="pt-lg-5 p-0 mb-3 text-center" key={year} >
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol>
                      <Titles title={year} subTitle={`Our Awards in ${year}`} />
                      <MDBContainer>
                        <MDBRow className="pb-3 mb-3 d-flex justify-content-center">
                            {awards.map((item, i, arr) => item.year === year && <AwardCard key={item + i + arr} name={item.title} img={item.img} />)}
                        </MDBRow>
                      </MDBContainer>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            )
        })
      }
    </React.Fragment>
  );
}

export default AwardsGroup;