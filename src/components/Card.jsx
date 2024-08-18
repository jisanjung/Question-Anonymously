import React, { useState } from 'react'

const Card = ({ 
  headerText, 
  desc, 
  borderType, 
  styleOverrides, 
  className 
}) => {

  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className={`card ${borderType} mb-3 ${hovered && 'shadow'} ${className}`} 
      style={{...styleOverrides}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
        <div className="card-body d-flex flex-column justify-content-start">
            <h5 className="card-title">{headerText}</h5>
            <p className="card-text">{desc}</p>
        </div>
    </div>
  )
}

export default Card