import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const MathBrowser = React.lazy(() => import('./views/browser/MathBrowser'));
const YearlyCalendar = React.lazy(() => import('./views/calendar/YearlyCalendar'));
const NotePage = React.lazy(() => import('./views/notebook/NotePage'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/browser', name: 'Math Browser', component:MathBrowser },
  { path: '/calendar', name: '2021 - 2022 Annotatable Calendar', component: YearlyCalendar },
  { path: '/notebook', name: 'Digital Notebook', component: NotePage }
];

export default routes;
