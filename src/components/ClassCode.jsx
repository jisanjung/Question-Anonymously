import React, { useState } from 'react';
import { Link } from "react-router-dom";

const ClassCode = () => {

    const [classCodeValue, setClassCodeValue] = useState('');

  return (
    <>
        <div className='d-flex justify-content-center align-items-center'
            style={{ height: '80vh' }}
        >
            <div className='text-center'>
                <h3 className='mb-3'>Enter class code</h3>
                <p className='mb-3'>6 digit numeric code from your teacher</p>
                <form>
                    <div className='input-group input-group-lg mb-3'>
                        <input type="text" className="form-control" placeholder='ex: 498579'
                            onChange={(e) => setClassCodeValue(e?.target?.value)}
                            inputMode='numeric'
                        />
                    </div>
                    <Link to="/classStudent"
                        state={classCodeValue}
                    >
                        <div className='d-grid gap-2'>
                            <button type='submit' className='btn btn-info text-white w-full'>Continue</button>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    </>
  )
}

export default ClassCode