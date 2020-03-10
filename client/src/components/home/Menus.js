import React, { Component } from "react";
import { MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "../common/styles.css";
import MenuItem from '../menus/Menuitem';
import gelatohome from '../menus/gelatohome.json';
import delihome from '../menus/delihome.json';
import groceryhome from '../menus/groceryhome.json';

class Menus extends Component {
  state = {
    items: {
      content: "1",
      contentCard: "1"
    }
  }

  togglePills = (type, tab) => e => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items
      });
    }
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>

          <MDBCol>
            <MDBNav pills color="warning" className="nav-justified mb-4">
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  active={this.state.items["contentCard"] === "1"}
                  onClick={this.togglePills("contentCard", "1")}
                  className="italian-green-bg"
                >
                  Gelato
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  active={this.state.items["contentCard"] === "2"}
                  onClick={this.togglePills("contentCard", "2")}
                  className="italian-white-bg color-black"
                >
                  Deli
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  active={this.state.items["contentCard"] === "3"}
                  onClick={this.togglePills("contentCard", "3")}
                  className="italian-red-bg color-ligth"
                >
                  Grocery
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent className={"card"} activeItem={this.state.items["contentCard"]} >
              <MDBTabPane tabId="1">
                {gelatohome.map((item, i, arr) => <MenuItem key={item + i + arr} name={item.name} text={item.description} img={item.img} />)}
              </MDBTabPane>
              <MDBTabPane tabId="2">
                {delihome.map((item, i, arr) => <MenuItem key={item + i + arr} name={item.name} text={item.description} img={item.img} />)}
              </MDBTabPane>
              <MDBTabPane tabId="3">
                {groceryhome.map((item, i, arr) => <MenuItem key={item + i + arr} name={item.name} text={item.description} img={item.img} />)}
              </MDBTabPane>
            </MDBTabContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Menus;