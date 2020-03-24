import React, { useState } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNav } from "mdbreact";
import { Image } from "react-bootstrap";

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <MDBNavbar scrolling fixed="top" dark expand="md" className="italian-red-bg justify-content-around justify-content-center-md ">
      <MDBNav className="justify-content-around">
        <MDBNavbarBrand className="d-block d-sm-none mx-auto">
          <MDBNavLink to="/"><Image src="/assets/images/logo.png" /></MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav center="true" className=" align-items-center">
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Gelato</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/gelato">Flavors</MDBDropdownItem>
                  <MDBDropdownItem href="/gelvsice">Gelato VS Ice Cream</MDBDropdownItem>
                  <MDBDropdownItem href="/howto">How we Make gelato</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/deli">Deli</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Grocery</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/meats">Cold Cuts</MDBDropdownItem>
                  <MDBDropdownItem href="/cheeses">Cheeses</MDBDropdownItem>
                  <MDBDropdownItem href="/more">More</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavbarBrand className="d-none d-sm-block mx-auto">
              <MDBNavLink to="/"><Image src="/assets/images/logo.png" /></MDBNavLink>
            </MDBNavbarBrand>
            <MDBNavItem>
              <MDBNavLink to="/about">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/awards">Awards</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/reviews">Reviews</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Contact</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/contact">Contact Us</MDBDropdownItem>
                  <MDBDropdownItem href="/request">Request Gelato Flavor</MDBDropdownItem>
                  <MDBDropdownItem href="/booking">Make Reservation</MDBDropdownItem>
                  <MDBDropdownItem href="/careers">Careers</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNav>
    </MDBNavbar>
  );

}

export default Navigation;
