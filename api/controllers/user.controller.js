const db = require("../models");
const User = db.user;
const Role = db.role;
const Event = db.event;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.events = (req, res) => {
  res.status(200).send([{
    id: 1,
    color: '#fd3153',
    from: '2021-11-02T18:00:00+00:00',
    to: '2021-11-05T19:00:00+00:00',
    title: 'This is an event'
  }, {
    id: 2,
    color: '#1ccb9e',
    from: '2021-11-01T13:00:00+00:00',
    to: '2021-11-05T14:00:00+00:00',
    title: 'This is another event'
  }, {
    id: 3,
    color: '#3694DF',
    from: '2021-11-05T13:00:00+00:00',
    to: '2021-11-05T20:00:00+00:00',
    title: 'This is also another event'
  }])
}

exports.add_event = (req, res) => {
  res.status(200).send("add_event Content.");
}
