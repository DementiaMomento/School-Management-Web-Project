import React from 'react'
import Calendar from 'react-awesome-calendar';

const events = [{
    id: 1,
    color: '#fd3153',
    from: '2021-05-02T18:00:00+00:00',
    to: '2021-05-05T19:00:00+00:00',
    title: 'Watterson orders Fried Chicken'
}, {
    id: 2,
    color: '#1ccb9e',
    from: '2021-05-01T13:00:00+00:00',
    to: '2021-05-05T14:00:00+00:00',
    title: 'KFsus'
}, {
    id: 3,
    color: '#3694DF',
    from: '2021-05-05T13:00:00+00:00',
    to: '2021-05-05T20:00:00+00:00',
    title: 'Dorime, Interimo Adapare Dorime, Ameno, Ameno, Latire'
}];

const YearlyCalendar = () => {

  return (
    <><Calendar
    events={events}
/>
    </>
  )
}

export default YearlyCalendar