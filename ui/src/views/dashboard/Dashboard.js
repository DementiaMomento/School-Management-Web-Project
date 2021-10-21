import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CRow } from '@coreui/react'


const Dashboard = () => {
  console.log("CHECK");

  return (
    <>
    <CRow className="align-items-md-stretch">
    <CCol md={4}>
    <CCard className="mb-4">
        <CCardBody>
          <CContainer className="py-5" fluid>
            <h1 className="display-5 fw-bold">Math Browser</h1>
            <p className="col-md-8 fs-4">
              abc .
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
      </CCol> 
      <CCol md={4}>
      <CCard className="mb-4">
        <CCardBody>
          <CContainer className="py-5" fluid>
            <h1 className="display-5 fw-bold">2021 - 2022 Annotatable Calendar</h1>
            <p className="col-md-8 fs-4">
              abc .
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
      </CCol> 
      <CCol md={4}>
      <CCard className="mb-4">
        <CCardBody>
          <CContainer className="py-5" fluid>
            <h1 className="display-5 fw-bold">Digital Notebook</h1>
            <p className="col-md-8 fs-4">
              abc .
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
      </CCol> 
      </CRow>
    </>
  )
}

export default Dashboard
