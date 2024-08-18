import React from 'react'
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { getDocuments } from '../firebase_setup/api';

const ViewData = () => {

  const location = useLocation();
    
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const classCode = location?.state || '';
        getDocuments(classCode)
          .then(data => {
            const questions = data?.map((doc) => ({...doc?.data(), id: doc?.id})) || [];
            console.log('DOCUMENTS_FROM_FIRESTORE: ', questions);
            setQuestions(questions);
          });
    }, [location?.state]);

return (
  <div>
    {questions.map((user, i) => {
      return (
      <div className="card data-card" key={i}>
        <div className="card-body"> 
          <h5>Timestamp: {user.date}</h5>
          <h5>Student: {user.name}</h5>
          <h3>Question: {user.question}</h3>
        </div>
      </div>
      )
    })}
    </div>
)
}

export default ViewData