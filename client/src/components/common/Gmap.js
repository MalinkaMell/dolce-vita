import React from 'react';
import { Navlink } from 'react-router-dom';
import { MDBCard, MDBView, MDBContainer, MDBRow } from "mdbreact";

const Gmap = () => {
  return (
    <React.Fragment>
          <MDBCard className="p-5 mb-3">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.5082535637466!2d-111.71936418495244!3d33.43606258077804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872ba59cf4c42775%3A0x636123840e146e90!2sGelato%20Dolce%20Vita!5e0!3m2!1sen!2sus!4v1583117582136!5m2!1sen!2sus" width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" title="map"></iframe>
         </MDBCard>
    </React.Fragment>


  )
}

export default Gmap;