import React from 'react'
import {useState, useEffect} from 'react';
import {db} from '../firebase_setup/firebase';
import {collection, getDocs} from 'firebase/firestore';
import { useLocation } from 'react-router-dom';

const ViewData = () => {

  const location = useLocation();
    
    const [classroom, setClassroom] = useState([]);
    const teachersCollectionRef = collection(db, location.state)
    useEffect(() => {
        const getTeachers = async () => {
        const data = await getDocs(teachersCollectionRef);
    
        setClassroom(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    
        console.log(data);
        }

        getTeachers()
    }, []
    )

return (
  <div>
    {console.log(classroom)}
    {classroom.map((user, i) => {
      return (
      <div className="card data-card" key={i}>
        <div className="card-body"> 
          <h5>Timestamp: {user.date}</h5>
          <h5>Student: {user.name}</h5>
          <h3>Question: {user.question}</h3>
        </div>
      </div>
      )
    })}
    </div>
)
}

export default ViewData