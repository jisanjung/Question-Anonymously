import React from 'react'

const RoleSelectPage = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <button className='btn btn-primary p-5 m-1'>
            Student
        </button>
        <span className='m-5'>or</span>
        <button className='btn btn-primary p-5 m-1'>
            Teacher
        </button>
    </div>
  )
}

export default RoleSelectPage