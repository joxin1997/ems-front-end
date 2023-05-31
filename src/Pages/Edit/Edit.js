import React from 'react';
import './Edit.css';
import {Card,Form,Row,Button} from 'react-bootstrap'
//we have to instaal "npm i react-select"
import Select from 'react-select'


function Edit() {
  
    const option=[
      {value:'Active', label:'Active'},
      {value:'InActive', label:'InActive'}
    ]
    return (
      <>
        <div className="container mt-2">
          <h2 className="text-center mt-3">Register Employee Details</h2>
          <Card className='shadow mt-3 p-3'>
            <div className='text-center'>
              <img className="rounded" width={'50px'} height={'50px'} src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-11640168385tqosatnrny.png?v=2023052700"
                alt="profile picture" />
  
            </div>
            <Form>
              <Row>
              
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicfname">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" name="fname" placeholder="First name" />
          
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicfname">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" name="lname"  placeholder="Last name" />
          
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicfname">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" name="ename"  placeholder="email name" />
          
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicfname">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="number" name="mobile"  placeholder="mobile" />
          
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicgender">
          <Form.Label>Select Gender</Form.Label>
          <Form.Check
              
              type={'radio'}
              label={`Male`}
              name='gender'
              value={"Male"}
              
            />
             <Form.Check
              
              type={'radio'}
              label={`Female`}
              name='gender'
              value={"female"}
              
            />
            
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicstatus">
          <Form.Label>Select Employee status</Form.Label>
          <Select options={option}></Select>
          
          
        </Form.Group>
        
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicfname">
          <Form.Label>choose profile picture</Form.Label>
          <Form.Control type="file" name="user_profile" />
          
        </Form.Group>
        
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicfname">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="text" name="location"  placeholder="enter employee location" />
          
        </Form.Group>
        <Button className='mt-3' variant ="primary" type='submit'>Submit</Button>
              </Row>
            </Form>
  
          </Card>
        </div>
      </>
    )
}

export default Edit