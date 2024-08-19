import React from 'react';
import { IoMdRefresh } from "react-icons/io";

const RefreshButton = ({ onClick, shouldAnimate }) => {
  return (
    <button
        className='btn link-info'
        onClick={onClick}
    >
        <IoMdRefresh size={36} className={`refresh-btn ${shouldAnimate && 'spin'}`}/>
    </button>
  )
}

export default RefreshButton