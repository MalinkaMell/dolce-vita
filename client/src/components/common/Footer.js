import React from 'react';
import Gmap from './Gmap';

const Footer = () => {
  return (
    <React.Fragment>
     <Gmap />
      <div className="text-center w-100 italian-red-bg py-4 italian-white-color small footer px-2">
        Copyright © 2015-2020 Dolce Vita Italian Grocer &amp; Gelato Dolce Vita. All Rights Reserved. <br></br>
        Designed and developed by <a href="http://irinakudosova.com" target="_blank" rel="noopener noreferrer">Irina K.</a>
      </div>
    </React.Fragment>
  )
}

export default Footer;