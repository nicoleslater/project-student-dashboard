import React from 'react';
import './index.css';
import jsonData from "./data/data.json";

// function App() {
  
//   return (
//     <div>
//       <Student data={jsonData} />

//     </div>
//   );
// }

const App = () => <StudentList />;



const StudentList  = () => {

console.log(jsonData[0].cohort.cohortStartDate);
console.log(jsonData[3]);

 
    return (<Student />);
  
};

// const Name = () => {
//   return (
//     <Name className="name"></Name>
//   )
// }

const Student = () => {
 
  
  const url = "https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48";
  return ( 
  <div className="student">
    <p> Cohort: {jsonData[0].cohort.cohortCode} </p>
    <img src={url} atl=""/>
    <div>
      <h4>Name: </h4>
      <h4>Email</h4>
      <h4>Birthday</h4>
    </div>
    </div>
  )
  
};





export default App;
