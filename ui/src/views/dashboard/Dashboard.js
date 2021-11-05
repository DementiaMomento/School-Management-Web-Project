import React from 'react';
import { Link } from 'react-router-dom';
import { CCard, CCardBody, CCol, CContainer, CRow } from '@coreui/react'


const Dashboard = () => {
  return (
    <>
    <CRow className="align-items-md-stretch">
    <CCol md={4}>
    <Link to={'/browser'} style={{ color: '#3c4b64', textDecoration: 'none' }}>
    <CCard className="mb-4">
        <CCardBody>
          <CContainer className="py-5" fluid>
            <h1 className="display-5 fw-bold">Math Browser</h1>
            <p className="col-md-8 fs-4">
              Math is kinda sus
            </p>
          </CContainer>
              <div className="h-100 p-5 text-white bg-dark rounded-3">
                <h2>Change the background</h2>
                <p>
                  Swap the background-color utility and add a `.text-*` color utility to mix up the
                  jumbotron look. Then, mix and match with additional component themes and more.
                </p>
              </div>
        </CCardBody>
      </CCard>
      </Link> 
      </CCol> 
      <CCol md={4}>
      <Link to={'/calendar'} style={{ color: '#3c4b64', textDecoration: 'none' }}>
      <CCard className="mb-4">
        <CCardBody>
          <CContainer className="py-5" fluid>
            <h1 className="display-5 fw-bold">2021 - 2022 Annotatable Calendar</h1>
            <p className="col-md-8 fs-4">
              Calendars are kinda sus
            </p>
          </CContainer>
              <div className="h-100 p-5 text-white bg-dark rounded-3">
                <h2>Change the background</h2>
                <p>
                  Swap the background-color utility and add a `.text-*` color utility to mix up the
                  jumbotron look. Then, mix and match with additional component themes and more.
                </p>
              </div>
        </CCardBody>
      </CCard>   
      </Link>
      </CCol> 
      <CCol md={4}>
      <Link to={'/notebook'} style={{ color: '#3c4b64', textDecoration: 'none' }}>
      <CCard className="mb-4">
        <CCardBody>
          <CContainer className="py-5" fluid>
            <h1 className="display-5 fw-bold">Digital Notebook</h1>
            <p className="col-md-8 fs-4">
              Books are kinda sus
            </p>
          </CContainer>
              <div className="h-100 p-5 text-white bg-dark rounded-3">
                <h2>Change the background</h2>
                <p>
                  Swap the background-color utility and add a `.text-*` color utility to mix up the
                  jumbotron look. Then, mix and match with additional component themes and more.
                </p>
              </div>
        </CCardBody>
      </CCard>
      </Link>
      </CCol> 
      </CRow>
    </>
  )
}

export default Dashboard
