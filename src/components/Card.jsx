import React from 'react'

const Card = ({ headerText, desc, borderType, styleOverrides }) => {
  return (
    <div className={`card ${borderType} mb-3`} style={{...styleOverrides}}>
        <div className="card-body">
            <h5 className="card-title">{headerText}</h5>
            <p className="card-text">{desc}</p>
        </div>
    </div>
  )
}

export default Card