import React from 'react'
import './Profile.css'
import { Row, Card } from 'react-bootstrap'
function Profile() {
  return (
    <>
      <div className="container">
        <card className='shadow col-lg-6 mx-auto mt-5'>
          <Card.Body>
            <Row>
              <div className="col">
                <div className="profile-img d-flex justify-content-center">
                <img className="border p-1 rounded-circle" width={'250px'} height={'250px'} src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-11640168385tqosatnrny.png?v=2023052700"
                alt="profile picture" />
                </div>
              </div>
            </Row>
            <div className="text-center mt-3">
              <h3>Max Miller</h3>
              <h4><i className="fa-solid fa-envelope text-primary"></i>max@gmail.com</h4>
              <h4><i className="fa-solid fa-mobile text-info"></i>987654321</h4>
              <h4><i className="fa-solid fa-venus-mars text-success"></i>Male</h4>
              <h4><i className="fa-solid fa-location-dot text-danger"></i>Location</h4>
              <h4><i className="fa-solid fa-chart-line"></i>status</h4>
            </div>
          </Card.Body>
        </card>

      </div>

    </>
  )
}

export default Profile