import React, { useEffect, useState } from 'react'
import { createUnique6DigitNumber } from '../util/helper'

const JoinClass = () => {

    const [inputClassCode, setInputClassCode] = useState('');

    useEffect(() => {
        const storedClassCode = localStorage.getItem('classCode');
        if (storedClassCode) {
            setInputClassCode(storedClassCode);
        }
    }, []);

  return (
    <>
    <div className='text-center'>
        <h3 className='mb-3'>Join your classroom</h3>
        <p className='d-flex align-items-center'>
            <span>Don't have a code?</span> 
            <button className='btn'
                onClick={() => {
                    const createClassCode = createUnique6DigitNumber();
                    setInputClassCode(createClassCode());
                }}
            >
                <span className='link-primary' role="button">Generate a new one.</span>
            </button>
        </p>
        <div className='input-group input-group-lg mb-3'>
            <input type="text" className="form-control" 
                value={inputClassCode} 
                onChange={(e) => setInputClassCode(e?.target?.value)}
            />
        </div>
        <div className='d-grid gap-2'>
            <button type='submit' className='btn btn-info text-white w-full'
                onClick={() => {
                    localStorage.setItem('classCode', inputClassCode);
                }}
            >Join</button>
        </div>
    </div>
    </>
  )
}

export default JoinClass