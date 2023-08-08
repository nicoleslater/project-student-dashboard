import React from 'react';
import './index.css';
import './data/data.json';

const App = () => <StudentList />;

 const StudentList = () => {
  const student = [
    {
      img:34,
      name: "",
      email: "", 
      birthday:"",
    }
  ]
 };

const StudentList  = () => {
    return (<Student />)
  
};

const Student = () => {
  const url = "https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48";
  return ( 
  <div className="student">
    <p> Component </p>
    <img src={url} atl=""/>
    <div>
      <h4>Name</h4>
      <h4>Email</h4>
      <h4>Birthday</h4>
    </div>
    </div>
  )
  
};





export default App;
