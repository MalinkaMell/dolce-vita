import React from "react";
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import DatePicker from "react-datepicker";

import { addDays, setHours, setMinutes } from 'date-fns';
import { MDBBtn, MDBInput, MDBRow, MDBCol } from "mdbreact";
const animatedComponents = makeAnimated();

const FormDisplay = props => {
  return (
    <form>
      <MDBRow>
        <MDBCol md="6">
          <div className="md-form">
            <MDBInput
              label="Your name *"
              type="text"
              id="form-name"
              name="formName"
              onChange={props.inputHandler}
              value={props.formData.formName}
            />
          </div>
          <div className="md-form">
            <MDBInput
              label="Your email *"
              type="text"
              id="form-email"
              name="formEmail"
              onChange={props.inputHandler}
              value={props.formData.formEmail}
            />
          </div>
          <div className="md-form">
            <MDBInput
              label="Phone number *"
              type="text"
              id="form-number"
              name="formNumber"
              onChange={props.inputHandler}
              value={props.formData.formSubject}
            />
          </div>
        </MDBCol>
        <MDBCol md="6">
          <label>Select pickup day and time</label>
          <div className="md-form">
            <DatePicker
              minDate={addDays(new Date(), 1)}
              selected={props.pickUpDate}
              onChange={props.pickDate}
              name="formDate"
              filterDate={props.noMonday}
              placeholderText="Click to select a date"
              inline
              showTimeSelect
              minTime={setHours(setMinutes(new Date(), 0), 11)}
              maxTime={setHours(setMinutes(new Date(), 30), 20)}
            />
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="6">
          <div className="md-form">
            <Select
              isMulti
              isSearchable
              closeMenuOnSelect={false}
              value={props.selectedOptions}
              components={animatedComponents}
              onChange={props.handleChange}
              options={props.options}
              placeholder="Select gelato flavor, start typing to search for flavor *"
            />
          </div>
        </MDBCol>
        <MDBCol md="6">
          {props.selectedOptions.map(item => item.value === "other" &&
            <div className="md-form" key={item.value}>
              <MDBInput
                label="Other flavor"
                type="text"
                id="form-custom"
                name="formCustom"
                onChange={props.inputHandler}
                value={props.formData.formCustom}
              />
            </div>)}
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <div className="md-form">
            <MDBInput
              type="textarea"
              label="Additional comments"
              rows="5"
              id="form-message"
              name="formMessage"
              onChange={props.inputHandler}
              value={props.formData.formMessage}
            />
          </div>
        </MDBCol>
      </MDBRow>
      {props.infoText !== "" ? props.infoText : null}
      <div className="text-center">
        <MDBBtn
          color="dark-green"
          disabled={props.isLoading}
          onClick={!props.isLoading ? props.submitHandler : null}
        >
          {props.isLoading ? "Sending..." : "Submit"}
        </MDBBtn>
      </div>
    </form>
  )
}

export default FormDisplay;