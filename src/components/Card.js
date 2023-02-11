import React from 'react'

const Card = ({ children }) => {
  return (
    <div className={`bg-primary text-white`}>
        {children}
    </div>
  )
}

export default Card