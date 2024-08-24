import React from 'react';
import { timeFromNow } from '../util/helper';

const QuestionCard = ({ payload, index }) => {
  return (
    <>
        <div className="card mb-3 cursor-pointer question-card">
            <div className="card-body">
                <h5 className="card-title">Question {index + 1}</h5>
                <p className="card-text">{payload?.question}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {payload?.timestamp ? timeFromNow(payload?.timestamp) : 'N/A'}
                  </small>
                </p>
            </div>
        </div>
    </>
  )
}

export default QuestionCard