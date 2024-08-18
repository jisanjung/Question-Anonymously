import React, { useState } from 'react'
import Alert from './Alert';

const QuestionForm = () => {

    const [questionSent, setQuestionSent] = useState(false);
    
    const onQuestionSubmit = (e) => {
        e.preventDefault();
        setQuestionSent(true);
    };
    
  return (
    <>
    <div id='questionForm'>
        {questionSent && 
        <Alert type='success' setVisible={setQuestionSent}>Question sent!</Alert>}
        <form onSubmit={(e) => onQuestionSubmit(e)}>
            <div className="form-floating mb-3 mt-3">
                <textarea 
                    className="form-control" 
                    placeholder="Your question..." 
                    id="floatingTextarea2" 
                    style={{ height: '150px' }}
                ></textarea>
                <label htmlFor="floatingTextarea2">Your question...</label>
            </div>
            <div className='d-grid gap-2'>
                <button className='btn btn-info text-white' type='submit'>Ask</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default QuestionForm