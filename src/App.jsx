import React from 'react';
import './index.css';
import './data/data.json';

const App = () => <StudentList />;


const StudentList  = () => {
    return <Student />
  
};

const Student = () => {
  const data = {};
  return <div className="student">
    <img src={"profilePhoto"} atl="profilePhoto"/>
    </div>;
  
};





export default App;
