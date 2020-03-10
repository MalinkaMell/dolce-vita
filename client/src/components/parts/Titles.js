import React from "react";


const Titles = (props) => {
  return (
    <React.Fragment>
      <h6 className="font-weight-bold mb-3 italian-red-color">{props.subTitle}</h6>
      <h3 className="font-weight-bold mb-3 mb-md-5 p-0 italian-green-color">{props.title}</h3>
    </React.Fragment>
  );
}

export default Titles;