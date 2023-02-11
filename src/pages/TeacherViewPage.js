import React, { useEffect } from 'react';

const TeacherViewPage = () => {

  useEffect(() => {
    console.log("from use effect");
  }, []);

  return (
    <div>TeacherViewPage</div>
  )
}

export default TeacherViewPage