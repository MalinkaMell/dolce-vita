import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard } from "mdbreact";
import deli from '../menus/deli.json';
import MenuItemWPrice from '../menus/Menuitemwprice';

const DeliMenu = () => {
  const panini = deli.filter(i => i.category === "panini");
  const antipasti = deli.filter(i => i.category === "antipasti");
  const taglieri = deli.filter(i => i.category === "taglieri");
  const salads = deli.filter(i => i.category === "salads");
  const bruschette = deli.filter(i => i.category === "bruschette");
  return (
    <MDBContainer fluid className="italian-white-bg p-1 mb-3">
      <MDBRow className="m-2 p-2">
        <MDBCol md="6 my-2">
          <h2 className="mb-5 italian-red-color">Antipasti</h2>
          {antipasti.map((item, i, arr) =>
              <MDBCard column className="mb-2"><MenuItemWPrice key={item + i + arr} name={item.name} text={item.description} img={item.img} price={item.price} /></MDBCard>)}
          <h2 className="my-5 italian-red-color">Taglieri</h2>
          {taglieri.map((item, i, arr) =>
              <MDBCard column className="mb-2"><MenuItemWPrice key={item + i + arr} name={item.name} text={item.description} img={item.img} price={item.price} /></MDBCard>)}
          <h2 className="my-5 italian-red-color">Salads</h2>
          {salads.map((item, i, arr) =>
              <MDBCard column className="mb-2"><MenuItemWPrice key={item + i + arr} name={item.name} text={item.description} img={item.img} price={item.price} /></MDBCard>)}
          <h2 className="my-5 italian-red-color">Bruschette</h2>
          {bruschette.map((item, i, arr) =>
              <MDBCard column className="mb-2"><MenuItemWPrice key={item + i + arr} name={item.name} text={item.description} img={item.img} price={item.price} /></MDBCard>)}
        </MDBCol>
        <MDBCol md="6 my-2">
          <h2 className="mb-5 italian-red-color">Panini</h2>
          {panini.map((item, i, arr) => <MDBCard column className="mb-2"><MenuItemWPrice key={item + i + arr} name={item.name} text={item.description} img={item.img} price={item.price} /></MDBCard>)}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default DeliMenu;