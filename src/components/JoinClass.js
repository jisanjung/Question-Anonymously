import React from 'react'
import {Link} from 'react-router-dom'

const JoinClass = (props) => {

    if(props.name === "Teacher"){
        return (
            <div className="card text-center bg-light">
                <h3>Hello {props.name} </h3>
                <br/>
                Input your name<br/>
                <input type="text"></input>
                <br/>
                Input your password<br/>
                <input type="text"></input>
                <br/>
                <Link  to="/classTeacher" className='btn btn-primary'>Generate Class Code</Link>
            </div> 
          )
    }

  return (
    <div className="card text-center bg-light">
        <h3>Hello {props.name} </h3>
        <br/>
        Input your name<br/>
        <input type="text"></input>
        <br/>
        Input your class code<br/>
        <input type="text"></input>
        <br/>
        <Link to="/classStudent" type="button" className="btn btn-primary">Join Classroom</Link>
    </div>
  )
}

export default JoinClass