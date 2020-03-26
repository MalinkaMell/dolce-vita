import React, { useState } from "react";
import axios from "axios";
import { MDBCard, MDBCardBody, MDBBtn, MDBInput, MDBRow, MDBCol } from "mdbreact";
import { addDays, getDay, setHours, setMinutes } from 'date-fns';
import options from "../menus/gelato.json";
import FormDisplay from "./FormDisplay";
import "react-datepicker/dist/react-datepicker.css";


const RequestForm = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [infoText, setInfoText] = useState("");
  const [formData, setFormData] = useState({
    formName: "",
    formEmail: "",
    formNumber: "",
    formFlavor: "",
    formCustom: "",
    formMessage: "",
    formDate: ""
  });
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [pickUpDate, setPickUpDate] = useState(addDays(new Date(), 1));

  const noMonday = date => {
    const day = getDay(date);
    return day !== 1
  };

  const resetForm = () => {
    setFormData({
      formName: "",
      formEmail: "",
      formNumber: "",
      formFlavor: "",
      formCustom: "",
      formMessage: "",
      formDate: ""
    });
    setSelectedOptions([]);
    setPickUpDate(addDays(new Date(), 1))
    setIsLoading(false);
  }

  const inputHandler = e => {
    const { name, value } = e.target;
    setInfoText("")
    setFormData(prevInput => ({ ...prevInput, [name]: value }))
  }

  const handleChange = selectedOption => {
    console.log(`Option selected:`, [selectedOption]);
    setSelectedOptions(selectedOption)

  };

  const pickDate = date => {
    console.log(date)
    setPickUpDate(date)
  };

  const submitHandler = e => {
    e.preventDefault();
    let data = {
      name: formData.formName,
      email: formData.formEmail,
      phone: formData.formNumber,
      flavors: [selectedOptions.map(item => item.label).join(", ")],
      custom: formData.formCustom,
      date: pickUpDate.toLocaleString(),
      comments: formData.formMessage
    }
    console.log(data)
    if (formData.formName !== "" && formData.formEmail !== "" && formData.formNumber !== "" && selectedOptions !== "") {
      setIsLoading(true);
      axios
        .post("/api/request/send", data)
        .then((response) => {
          if (response.data.msg === "success") {
            resetForm();
            setInfoText("Your message has been sent.");
          } else if (response.data.msg === "fail") {
            setInfoText("Your message has been sent.");
          }
        })
    } else {
      setInfoText("Please fill all the required fields")
    }

  }

  return (
    <MDBCard className="mx-2 mx-md-0">
      <MDBCardBody>
        <FormDisplay
          inputHandler={inputHandler}
          formData={formData}
          noMonday={noMonday}
          selectedOptions={selectedOptions}
          handleChange={handleChange}
          options={options}
          infoText={infoText}
          isLoading={isLoading}
          submitHandler={submitHandler}
          pickUpDate={pickUpDate}
          pickDate={pickDate}
        />
      </MDBCardBody>
    </MDBCard>
  );
}

export default RequestForm;