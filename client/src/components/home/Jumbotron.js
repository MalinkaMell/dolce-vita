import React from 'react';
import '../common/styles.css';
import { MDBMask, MDBView, MDBContainer, MDBRow } from "mdbreact";

const Jumbo = () => {
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBView className="jumbotron w-100 vh-100 m-0">
          <MDBMask className="flex-center  pb-5" overlay="white-light" >
            <h1 className="jumbo-text mb-5">
              <span className="display-1 righteous">Dolce Vita Gelato and Grocery</span>
              <br />
              <small>Gold Medal Winner Of Gelato Festival Scottsdale</small>
            </h1>
          </MDBMask>
        </MDBView>
      </MDBRow>
    </MDBContainer>
  )
}
export default Jumbo;