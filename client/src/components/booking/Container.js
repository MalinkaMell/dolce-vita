import React, { useState } from "react";
import axios from "axios";
import { MDBCard, MDBCardBody } from "mdbreact";
import { addDays, getDay } from 'date-fns';
import FormDisplay from "./Form";
import "react-datepicker/dist/react-datepicker.css";


const BookingForm = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [infoText, setInfoText] = useState("");
  const [formData, setFormData] = useState({
    formName: "",
    formEmail: "",
    formNumber: "",
    formParty: "",
    formCustom: "",
    formMessage: "",
    formDate: ""
  });
  const [partySize, setPartySize] = useState(0);
  const [reservationDate, setReservationDate] = useState(addDays(new Date(), 1));

  const noMonday = date => {
    const day = getDay(date);
    return day !== 1
  };

  const resetForm = () => {
    setFormData({
      formName: "",
      formEmail: "",
      formNumber: "",
      formParty: "",
      formCustom: "",
      formMessage: "",
      formDate: ""
    });
    setPartySize(0);
    setReservationDate(addDays(new Date(), 1))
    setIsLoading(false);
  }

  const inputHandler = e => {
    const { name, value } = e.target;
    setInfoText("")
    setFormData(prevInput => ({ ...prevInput, [name]: value }))
  }

  const pickDate = date => {
    console.log(date)
    setReservationDate(date)
  };

  const submitHandler = e => {
    e.preventDefault();
    let data = {
      name: formData.formName,
      email: formData.formEmail,
      phone: formData.formNumber,
      party: formData.formParty,
      custom: formData.formCustom,
      date: reservationDate.toLocaleString(),
      comments: formData.formMessage
    }
    console.log(data)
    if (formData.formName !== "" && formData.formEmail !== "" && formData.formNumber !== "" && formData.formParty !== "") {
      setIsLoading(true);
      axios
        .post("/api/booking/send", data)
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
          partySize={partySize}
          infoText={infoText}
          isLoading={isLoading}
          submitHandler={submitHandler}
          reservationDate={reservationDate}
          pickDate={pickDate}
        />
      </MDBCardBody>
    </MDBCard>
  );
}

export default BookingForm;