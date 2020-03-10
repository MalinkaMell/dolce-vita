import React, { useState } from "react";
import axios from "axios";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBInput, MDBContainer } from "mdbreact";

const ContactForm = props => {

  const [isLoading, setIsLoading] = useState(false);
  const [infoText, setInfoText] = useState("");
  const [formData, setFormData] = useState({
    formName: "",
    formEmail: "",
    formSubject: "",
    formMessage: ""
  })

  const resetForm = () => {
    setFormData({
      formName: "",
      formEmail: "",
      formSubject: "",
      formMessage: ""
    });
    setIsLoading(false);
  }

  const inputHandler = e => {
    const { name, value } = e.target;
    //console.log({ [name]: value });

    setFormData(prevInput => ({ ...prevInput, [name]: value  }))
  }

 // console.log(formData)
  const submitHandler = e => {
    e.preventDefault();
    setIsLoading(true);
    let data = {
      name: formData.formName,
      email: formData.formEmail,
      subject: formData.formSubject,
      message: formData.formMessage
    }
    console.log(data)
    axios
      .post("/api/contact/send", data)
      .then((response) => {
        if (response.data.msg === "success") {
          resetForm();
          setInfoText("Your message has been sent.");
        } else if (response.data.msg === "fail") {
          setInfoText("Your message has been sent.");
        }

      })
  }

  return (

    <MDBCard>
      <MDBCardBody>
        <form>
          <div className="md-form">
            <MDBInput
              label="Your name"
              type="text"
              id="form-name"
              name="formName"
              onChange={inputHandler}
              value={formData.formName}
            />
          </div>
          <div className="md-form">
            <MDBInput
              label="Your email"
              type="text"
              id="form-email"
              name="formEmail"
              onChange={inputHandler}
              value={formData.formEmail}
            />
          </div>
          <div className="md-form">
            <MDBInput
              label="Subject"
              type="text"
              id="form-subject"
              name="formSubject"
              onChange={inputHandler}
              value={formData.formSubject}
            />
          </div>
          <div className="md-form">
            <MDBInput
              type="textarea"
              label="Message"
              rows="5"
              id="form-message"
              name="formMessage"
              onChange={inputHandler}
              value={formData.formMessage}
            />
          </div>
          {infoText !== "" ? infoText : null}
          <div className="text-center">
            <MDBBtn
              color="dark-green"
              disabled={isLoading}
              onClick={!isLoading ? submitHandler : null}
              onClick={submitHandler}>
              {isLoading ? 'Sending...' : 'Submit'}
            </MDBBtn>
          </div>
        </form>
      </MDBCardBody>
    </MDBCard>

  );
}

export default ContactForm;