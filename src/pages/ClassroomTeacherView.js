import React from 'react';
import ViewData from "../components/ViewData";

const ClassroomTeacherView = () => {

  return (
    <div>
      <button onClick={() => document.location.reload()}>Refresh questions</button>
      <ViewData/>
    </div>
  )
}

export default ClassroomTeacherView