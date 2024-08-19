import React from 'react'
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { getDocuments } from '../firebase_setup/api';
import QuestionCard from './QuestionCard';
import RefreshButton from './RefreshButton';
import LoadingDot from './LoadingDot';

const ViewQuestions = () => {

    const location = useLocation();
    const [questions, setQuestions] = useState([]);
    const [animate, setAnimate] = useState(false);
    const [loading, setLoading] = useState(false);

    const animateOnClick = () => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
    };

    const orchestrateQuestionData = (data, setState) => {
      const questions = data?.map((doc) => ({...doc?.data(), id: doc?.id})) || [];
      console.log('DOCUMENTS_FROM_FIRESTORE: ', questions);
      setState(questions);
    };

    useEffect(() => {
        setLoading(true);
        const classCode = location?.state || '';
        getDocuments(classCode)
          .then(data => {
            orchestrateQuestionData(data, setQuestions);
            setLoading(false);
          });
    }, [location?.state]);

return (
  <>
    <div className='narrow-container'>
      <div className='d-flex justify-content-center mt-3 mb-3'>
        <RefreshButton
          shouldAnimate={animate}
          onClick={async () => {
            animateOnClick();
            const refetchQuestions = await getDocuments(location?.state || '');
            orchestrateQuestionData(refetchQuestions, setQuestions);
          }}  
        />
      </div>
      {loading ? <LoadingDot/>
      : questions.map((val, i) => {
        return (
          <QuestionCard key={val?.id || i}
            payload={val}
            index={i}
          />
        )
      })}
    </div>
  </>
)
}

export default ViewQuestions