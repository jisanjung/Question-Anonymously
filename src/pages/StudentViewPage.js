import React from 'react'
import ClassCode from '../components/ClassCode'
import Nav from '../components/Nav'

const StudentViewPage = () => {
  
  return (
    <>
      <Nav>
        Welcome Student
      </Nav>
      <div className="container">
        <ClassCode/>
      </div>
    </>
  )
}

export default StudentViewPage