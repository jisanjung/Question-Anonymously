import React from 'react'
import { Link } from "react-router-dom";
import Nav from '../components/Nav';
import Card from '../components/Card';

const RoleSelectPage = () => {
  return (
    <>
      <Nav>
        Welcome to Asker!
      </Nav>
      <div className='container'>
        <div className='d-flex justify-content-center align-items-center flex-column'
          style={{ height: '80vh' }}
        >
          <div>
            <h5>Are you a...</h5>
            <div className='d-md-flex align-items-center'>
              <Link to="/student">
                  <Card
                    headerText='Student'
                    desc='Ask questions to the teacher anonymously, no name needed.'
                    borderType='border-info'
                    styleOverrides={{ width: '18rem', height: '136px' }}
                  />
                </Link>
                <span className='d-block m-3 text-center'>or</span>
                <Link to="/teacher">
                  <Card
                    headerText='Teacher'
                    desc='Have the ability to see questions that the students submit anonymously.'
                    borderType='border-warning'
                    styleOverrides={{ width: '18rem', height: '136px' }}
                  />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RoleSelectPage