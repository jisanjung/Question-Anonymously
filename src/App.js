import './App.css';
import RoleSelectPage from './pages/RoleSelectPage';
import { Routes, Route } from 'react-router-dom';
import StudentViewPage from './pages/StudentViewPage';
import TeacherViewPage from './pages/TeacherViewPage';
import ClassroomStudentView from './pages/ClassroomStudentView';
import ClassroomTeacherView from './pages/ClassroomTeacherView';
import {useState, useEffect} from 'react';
import {db} from './firebase_setup/firebase';
import {collection, getDocs} from 'firebase/firestore';

function App() {
  const [classrooms, setClassroom] = useState([]);
  const teachersCollectionRef = collection(db, "Classrooms")
  useEffect(() => {
    const getTeachers = async () => {
      const data = await getDocs(teachersCollectionRef);
      console.log(
        setClassroom(data.docs.map((doc) => ({...doc.data()})))
        );
      console.log(data);
    }

    getTeachers()
  }, []
  )

  return (
    <div>
      <Routes>
        <Route path='/' element={<RoleSelectPage/>}/>
        <Route path='/student' element={<StudentViewPage/>}/>
        <Route path='/teacher' element={<TeacherViewPage/>}/>
        <Route path='/classTeacher' element={<ClassroomTeacherView/>}/>
        <Route path='/classStudent' element={<ClassroomStudentView/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
