import React, { useState } from 'react'
import JoinClass  from '../components/JoinClass'
import ClassCode from '../components/ClassCode'
import Nav from '../components/Nav'
import QuestionForm from '../components/QuestionForm'

const StudentViewPage = () => {

  const [renderQuestionForm, setRenderQuestionForm] = useState(false);
  
  return (
    <>
      <Nav>
        Welcome Student
      </Nav>
      <div className="container">
        {!renderQuestionForm ? 
          <ClassCode setRenderQuestionForm={setRenderQuestionForm}/> 
          : <QuestionForm/>
        }
      </div>
    </>
  )
}

export default StudentViewPage