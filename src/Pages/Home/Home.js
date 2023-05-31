import React from 'react'
import  './Home.css'
import {Form,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import HomeTable from '../../Components/HomeTable/HomeTable'
function Home() {
  const navigate= useNavigate()
  const adduser = ()=>{
    //navigate to register page
    navigate('/register')
  }
  return (
    <>
    
    <div className="container mt-5">
     <div className='main-div'>
{/*search btn , add employee */ }
        <div className="search-add d-flex">
          <div className="search col-lg-4" >
            <Form className='d-flex'>
            <Form.Control type="text" placeholder="search"  className='me-2'/>
              <button className='btn btn-primary' >search</button>

            </Form>
          </div>
          <div className="add-btn"  style={{marginLeft:'650px'}} >
          <button className='btn btn-success' onClick={adduser}><i className='fa-solid fa-user-plus'></i> Add</button>
          </div>
        </div>
     </div>
     <div className="second-div">
      {/*table*/}
      <HomeTable/>
     </div>
    </div>
    </>
  )
}

export default Home