import React from "react";
import { MDBRow, MDBCol, MDBView, MDBMask } from "mdbreact";
import "./styles.css";

const MenuItemWPrice = (props) => {
  return (
    <React.Fragment>
      <div className="panel">
      <MDBRow className="align-items-center d-flex my-0 my-md-3 ml-md-1">
        <MDBCol md="3">
          <MDBView hover zoom  >
            <img className="img-fluid m-0 pb-4 p-md-0" src={props.img} alt={props.name} />
            <MDBMask overlay="white-light" className="waves-light" />
          </MDBView>
        </MDBCol>
        <MDBCol md="9">
          <h5 className="text-left mx-2 italian-red-color pb-3 p-md-0">{props.name} <small className="float-right italian-green-color">${props.price}</small></h5>
          <div className="text-left mx-2  pb-4 p-md-0">{props.text}</div>
        </MDBCol>
      </MDBRow>
      </div>
    </React.Fragment>

  )
}
export default MenuItemWPrice;