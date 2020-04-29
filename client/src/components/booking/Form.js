import React from "react";
import DatePicker from "react-datepicker";

import { addDays, setHours, setMinutes } from 'date-fns';
import { MDBBtn, MDBInput, MDBRow, MDBCol } from "mdbreact";

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
          <div className="md-form">
            <select
              className="browser-default custom-select"
              onChange={props.inputHandler}
              value={props.formData.formParty}
              name="formParty"
            >
              <option>Party size</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6">6 People</option>
              <option value="7">7 People</option>
              <option value="8">8 People</option>
              <option value="9">9 People</option>
              <option value="10">10 People</option>
              <option value="Over 10">Over 10 People - Please, call</option>
            </select>
          </div>
        </MDBCol>
        <MDBCol md="6">
          <label>Select pickup day and time</label>
          <div className="md-form">
            <DatePicker
              minDate={addDays(new Date(), 1)}
              selected={props.reservationDate}
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