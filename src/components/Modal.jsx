import React, { useEffect, useState } from 'react'
import { getDocumentById } from '../firebase_setup/api';
import { generateNumberFromId } from '../util/helper';
import { timeFromNow } from '../util/helper';

const Modal = ({ classCode, id }) => {

    const [questionData, setQuestionData] = useState(null);

    useEffect(() => {
        if (classCode && id) {
            getDocumentById(classCode, id)
            .then(data => setQuestionData({ ...data, id }));
        }
    }, [classCode, id]);

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Question #{generateNumberFromId(questionData?.id)}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <h5 className="card-text fw-bold">{questionData?.question}</h5>
                    <p className="card-text">
                    <small className="text-body-secondary">
                        {questionData?.timestamp ? timeFromNow(questionData?.timestamp) : 'N/A'}
                    </small>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal