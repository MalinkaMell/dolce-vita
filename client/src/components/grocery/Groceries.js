import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard } from "mdbreact";
import grocery from '../menus/grocery.json';
import MenuItemWPrice from '../menus/Menuitemwprice';


const Groceries = props => {
  const meats = grocery.filter(i => i.category === "meat");
  const cheeses = grocery.filter(i => i.category === "cheese");
  const other = grocery.filter(i => i.category === "other");

  return (
    <MDBContainer fluid className="italian-white-bg p-1 mb-3">
      <MDBRow className="m-2 p-2">
        <MDBCol>
          {props.location.pathname === "/meats" &&
            meats.map((item, i, arr) =>
              <MDBCard className="mb-2" key={item + i + arr}><MenuItemWPrice name={item.name} text={item.description} img={item.img} price={item.price} /></MDBCard>)}

          {props.location.pathname === "/cheeses" &&
            cheeses.map((item, i, arr) =>
              <MDBCard className="mb-2" key={item + i + arr}><MenuItemWPrice name={item.name} text={item.description} img={item.img} price={item.price} /></MDBCard>)}

          {props.location.pathname === "/more" &&
            other.map((item, i, arr) =>
              <MDBCard className="mb-2" key={item + i + arr}><MenuItemWPrice name={item.name} text={item.description} img={item.img} price={item.price} /></MDBCard>)}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Groceries;