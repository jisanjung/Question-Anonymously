import React from 'react'
import QuestionForm from '../components/QuestionForm'
import Nav from '../components/Nav'

const ClassroomStudentView = () => {
  return (
    <>
      <Nav>
        Welcome Student
      </Nav>
      <div className='container'> 
        <QuestionForm/>
      </div>
    </>
  )
}

export default ClassroomStudentView