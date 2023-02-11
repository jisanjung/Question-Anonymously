import './App.css';
import RoleSelectPage from './pages/RoleSelectPage';
import { Routes, Route } from 'react-router-dom';
import StudentViewPage from './pages/StudentViewPage';
import TeacherViewPage from './pages/TeacherViewPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RoleSelectPage/>}/>
        <Route path='/student' element={<StudentViewPage/>}/>
        <Route path='/teacher' element={<TeacherViewPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
