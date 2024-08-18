import React, {  useState } from 'react'
import ClassCode from '../components/ClassCode'
import Nav from '../components/Nav'
import QuestionForm from '../components/QuestionForm'

const StudentViewPage = () => {

  const [renderQuestionForm, setRenderQuestionForm] = useState(false);
  const [classCode, setClassCode] = useState('');
  
  return (
    <>
      <Nav>
        Welcome Student
      </Nav>
      <div className="container">
        {!renderQuestionForm ? 
          <ClassCode 
            setRenderQuestionForm={setRenderQuestionForm} 
            setClassCode={setClassCode}
          /> 
          : <QuestionForm classCode={classCode}/>
        }
      </div>
    </>
  )
}

export default StudentViewPage