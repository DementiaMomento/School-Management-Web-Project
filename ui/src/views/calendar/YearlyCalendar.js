import React, { Component } from 'react';
import Calendar from 'react-awesome-calendar';
import UserService from "../../services/user.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { SliderPicker } from 'react-color';
import { DateRangePicker } from 'rsuite';

class YearlyCalendar extends Component {
  constructor(props) {
    super(props);

    this.addEvent = this.addEvent.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);

    this.state = { 
      events: [],
      event_title: "",
      color: "#fff",
      from: "",
      to: "",
      message: ""
    };
  }
  
  callEvent() {
    UserService.getEvents().then(
      response => {
        this.setState({
          events: response.data
        });
      }
    );
  }

  onChangeTitle(e) {
    this.setState({
      event_title: e.target.value
    });
  }

  onChangeColor(e) {
    this.setState({
      color: e.hex
    });
  }

  addEvent(e) {
    e.preventDefault();

    this.setState({
      message: ""
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      console.log(this.state.event_title);
      console.log(this.state.color);
      // UserService.addEvent(this.state.username, this.state.password).then(
      //   () => {
      //     window.location.reload();
      //   }
      // );
    }
  }

  componentDidMount() {
      this.callEvent();
  }

  render() {
    return (
    <div className="CalendarApp">
      <Calendar
        events={this.state.events}
      />
      <div className="col-md-10">
        <div className="card card-container">
          <Form
            onSubmit={this.addEvent}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="title">Event Title</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="title"
                    onChange={this.onChangeTitle}
                    value={this.state.event_title}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="color">Event Color</label>
                  <SliderPicker
                      color={this.state.color || false}
                      onChange={this.onChangeColor}
                      value={this.state.color}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Add event</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    </div>
    );
  }
}

export default YearlyCalendar