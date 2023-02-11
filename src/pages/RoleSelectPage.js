import React from 'react'
import { Link } from "react-router-dom";

const RoleSelectPage = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <Link to="/student" className='btn btn-primary btn-lg p-5'>Student</Link>
        <span className='m-5'>or</span>
        <Link to="/teacher" className='btn btn-primary btn-lg bg-white text-primary p-5'>Teacher</Link>
    </div>
  )
}

export default RoleSelectPage