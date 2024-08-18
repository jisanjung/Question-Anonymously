import React from 'react'

const QuestionForm = () => {
  return (
    <form>
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
  )
}

export default QuestionForm