import React from 'react'
import {useState, useEffect} from 'react';
import {db} from '../firebase_setup/firebase';
import {collection, getDocs} from 'firebase/firestore';



const ViewData = () => {

    
    const [classroom, setClassroom] = useState([]);
    const teachersCollectionRef = collection(db, "1234")
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
    {classroom.map((user, i) => {
      return (
      <div key={i}>
        <h2>Student: {user.name} || Question: {user.question}</h2>
        
      </div>
      )
    })}
    </div>
)
}

export default ViewData