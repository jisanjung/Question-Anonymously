import './App.css';
import RoleSelectPage from './pages/RoleSelectPage';
import { Routes, Route } from 'react-router-dom';
import StudentViewPage from './pages/StudentViewPage';
import TeacherViewPage from './pages/TeacherViewPage';
import ClassroomStudentView from './pages/ClassroomStudentView';
import ClassroomTeacherView from './pages/ClassroomTeacherView';
import ViewData from './components/ViewData';

function App() {

  return (
    <div>
      <ViewData/>
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
