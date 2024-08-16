import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase_setup/firebase';

const JoinClass = (props) => {

  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");

    if(props.name === "Teacher"){
        return (
            <div className="card text-center bg-light">
                <h3>Hello {props.name} </h3>
                <br/>
                Input your class code<br/>
                <input type="text" onChange={e => setCode(e.target.value)}></input>
                <br/>
                <Link to="/classTeacher" className='btn btn-primary' state={code}>join classroom</Link>
            </div> 
          )
    }

  return (
    //FOR STUDENTS
    <div className="card text-center bg-light">
        <h3>Hello {props.name} </h3>
        <br/>
        Class code<br/>
        <input type="text" id="studentCode" placeholder="ex: 8675309" onChange={e => setCode(e.target.value)}></input>
        <br/>
        <br/>
        What's your name<br/>
        <input type="text" id="studentName" placeholder="ex: John Doe" onChange={e => setName(e.target.value)}></input>
        <br/>
        Ask a question<br/>
        <input type="text" id="studentQuestion" placeholder="ex: what did you say?" onChange={e => setQuestion(e.target.value)}></input>
        <br/>
        <button type='button' className="btn btn-primary" onClick={async () => {
          // Add a new document with a generated id.
          const docRef = await addDoc(collection(db, code), {
            name: name,
            question: question
          });

          document.getElementById("studentCode").value = null;
          document.getElementById("studentName").value = null;
          document.getElementById("studentQuestion").value = null;

          console.log("Document written with ID: ", docRef.id);
        }}>Ask in class</button>
    </div>
  )
}

export default JoinClass