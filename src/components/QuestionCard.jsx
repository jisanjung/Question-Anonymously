import React from 'react';
import { timeFromNow } from '../util/helper';
import { generateNumberFromId } from '../util/helper';

const QuestionCard = ({ payload, index }) => {
  return (
    <>
        <div className="card mb-3 cursor-pointer question-card">
            <div className="card-body">
                <p className="card-title">Question #{generateNumberFromId(payload?.id)}</p>
                <h5 className="card-text fw-bold">{payload?.question}</h5>
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