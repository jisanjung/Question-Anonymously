import React from 'react'

const Alert = ({ type, setVisible, children }) => {
  return (
    <div className={`d-block alert alert-${type} alert-dismissible fade show mt-3`} role="alert">
        <strong>{children}</strong>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
          onClick={() => setVisible(false)}
        ></button>
    </div>
  )
}

export default Alert