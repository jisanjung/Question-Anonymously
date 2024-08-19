import React from 'react';
import ViewQuestions from "../components/ViewQuestions";
import Nav from '../components/Nav';

const ClassroomTeacherView = () => {

  return (
    <>
      <Nav>
        Welcome Teacher
      </Nav>
      <div className='container'>
        <ViewQuestions/>
      </div>  
    </>
  )
}

export default ClassroomTeacherView