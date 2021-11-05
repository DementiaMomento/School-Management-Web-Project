import React, { Component } from 'react';
import Calendar from 'react-awesome-calendar';

const events = [{
    id: 1,
    color: '#fd3153',
    from: '2021-05-02T18:00:00+00:00',
    to: '2021-05-05T19:00:00+00:00',
    title: 'This is an event'
}, {
    id: 2,
    color: '#1ccb9e',
    from: '2021-05-01T13:00:00+00:00',
    to: '2021-05-05T14:00:00+00:00',
    title: 'This is another event'
}, {
    id: 3,
    color: '#3694DF',
    from: '2021-05-05T13:00:00+00:00',
    to: '2021-05-05T20:00:00+00:00',
    title: 'This is also another event'
}];

class YearlyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: "",
      dbResponse: "" 
    };
  }
  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }
  callDB() {
    fetch("http://localhost:9000/testDB")
        .then(res => res.text())
        .then(res => this.setState({ dbResponse: res }))
        .catch(err => err);
  }
  componentWillMount() {
      this.callAPI();
      this.callDB();
  }

  render() {
    return (
    <div className="CalendarApp">
      <p className="App-intro">{this.state.apiResponse}</p>
      <p className="App-intro">{this.state.dbResponse}</p>
      <Calendar
        events={events}
      />
    </div>
    );
  }
}

export default YearlyCalendar