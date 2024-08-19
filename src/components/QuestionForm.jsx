import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Alert from './Alert';
import { addDocument } from '../firebase_setup/api';

const QuestionForm = () => {

    const location = useLocation();
    const [question, setQuestion] = useState('');
    const [questionSent, setQuestionSent] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const onQuestionSubmit = async (e) => {
        e.preventDefault();
        const classCode = location?.state || '';
        setLoading(true);
        if (classCode && question) {
            await addDocument(classCode, question);
            setLoading(false);
            setQuestionSent(true);   
        }
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
                    onChange={(e) => setQuestion(e?.target?.value)}
                ></textarea>
                <label htmlFor="floatingTextarea2">Your question...</label>
            </div>
            <div className='d-grid gap-2'>
                <button className='btn btn-info text-white' type='submit'>
                    {loading ? 
                    <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> 
                    : <span>Ask</span>}
                </button>
            </div>
        </form>
    </div>
    </>
  )
}

export default QuestionForm