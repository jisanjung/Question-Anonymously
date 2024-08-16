import React, { useEffect, useState } from "react";
import JoinClass  from '../components/JoinClass'

const TeacherViewPage = () => {

  useEffect(() => {
    console.log("from use effect");
  }, []);

  return (
    <div className="container">
      <JoinClass name="Teacher"/>
    </div>
  )
}

export default TeacherViewPage