import React from 'react'
import JoinClass from '../components/JoinClass';
import Nav from '../components/Nav';

const TeacherViewPage = () => {

  return (
    <>
      <Nav>
        Welcome Teacher
      </Nav>
      <div className="container">
        <div className='d-flex justify-content-center align-items-center'
          style={{ height: '80vh' }}
        >
          <JoinClass/>
        </div>
      </div>
    </>
  )
}

export default TeacherViewPage