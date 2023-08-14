import React from "react";
import data from "./data/data.json";
import StudentCard from "./components/StudentCard";
import StudentList from "./components/StudentList";
import CohortCodeList from "./components/CohortCodeList";
import { useState } from "react";
import "./index.css";


export default function App(){
function getCohortData(students){
  let result={}
  for(let i=0;i<students.length;i++){
   let student=students[i]
   let studentCohort=student.cohort
   let studentCohortCode=studentCohort.cohortCode

    if(result[studentCohortCode]==undefined){
     result[studentCohortCode]={
     startDate:studentCohort.cohortStartDate,
      students: [student]

     }   
    
    }else{
     result[studentCohortCode].students.push(student)
    }
  }


  return result
 }

const cohortObject = getCohortData(data)
const cohortList = Object.keys(cohortObject)
const [showStudents, setShowStudents] = useState([]);
const [showCohort, setShowCohort] = useState(cohortList);

return (
  <div>
<header>Student Dashboard</header>
<div className="container">
    <div className="students">
       <StudentList data={data} showStudents={showStudents} />
    </div>
<div>
<h2 className="message">Choose Cohort</h2>

  {showCohort.map((cohort) => {


    
    let splitIndex=cohort.length-4;
    let sem=cohort.substring(0,splitIndex)
    let year=cohort.substring(splitIndex)
    let title=sem+" "+year


    return <CohortCodeList title={title} startDate={cohortObject[cohort].startDate} studentsList={cohortObject[cohort].students} setShowStudents={setShowStudents} />;
  })}
</div>
  </div>
</div>
);
}






//  const useStudentList = () => {
//   const url = "https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48";
//   const [allStudents, setAllStudents] = useState([]);
//   const [displayedStudents, setDisplayedStudents] = useState([]);

//   const getNewStudents = async () => {
//     const studentData = await fetch(url);
//     const studentJson = await dataJson();
//     setAllStudents(dataJson.className);
//     setDisplayedStudents(dataJson.cohort);
//   }
//  }

// function App() {
  
//   return (
//     <div>
//       <Student data={jsonData} />

//     </div>
//   );
// }

// const [students, setNewStudents] = useState();

// const User = () => <UserList />;
// const App = () => <StudentList />;


// function App(){

// useEffect(() => {
//   alert("Please Try Again!")
//   getNewStudents()
// })

// const Student  = () => {

// console.log(data[0].cohort.cohortStartDate);
// console.log(data[3]);

 
//     return (
//       <div className="cohort">
//         <p>
//           All Students By: {data.filter("cohortCode")};
//           <User />
//         </p>

//       </div>
//     );
// }
// }
  
// };

// const UserList = () => {
//   return (
//     <Student />
//   )
// }


// const StudentList = () => {
 
  
//   const url = "https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48";
//   return ( 
//   <><div className="student">
//       <p> Cohort: {data[0].cohort.cohortCode} </p>
//       <img src={url} atl="" />
//       <div>
//         <h4>Name: {data[0].names.preferredName}
//         </h4>
//         <h4>Email: {data[0].username}</h4>
//         <h4>Birthday: {data[0].dob}</h4>
//       </div>
//     </div><div className="student">
//         <p> Cohort: {data[1].cohort.cohortCode} </p>
//         <img src={url} atl="" />
//         <div>
//           <h4>Name: {data[1].names.preferredName}
//           </h4>
//           <h4>Email: {data[1].username}</h4>
//           <h4>Birthday: {data[1].dob}</h4>
//         </div>
//       </div><div className="student">
//         <p> Cohort: {data[2].cohort.cohortCode} </p>
//         <img src={url} atl="" />
//         <div>
//           <h4>Name: {data[2].names.preferredName}
//           </h4>
//           <h4>Email: {data[2].username}</h4>
//           <h4>Birthday: {data[2].dob}</h4>
//         </div>
//       </div><div className="student">
//         <p> Cohort: {data[3].cohort.cohortCode} </p>
//         <img src={url} atl="" />
//         <div>
//           <h4>Name: {data[3].names.preferredName}
//           </h4>
//           <h4>Email: {data[3].username}</h4>
//           <h4>Birthday: {data[3].dob}</h4>
//         </div>
//       </div><div className="student">
//         <p> Cohort: {data[4].cohort.cohortCode} </p>
//         <img src={url} atl="" />
//         <div>
//           <h4>Name: {data[4].names.preferredName}
//           </h4>
//           <h4>Email: {data[4].username}</h4>
//           <h4>Birthday: {data[4].dob}</h4>
//         </div>
//       </div></>
//   );
    
// };

/* 
// class UserList extends React.Component {
//   render(UserList) {
//     const users = data.users.map(user => (
//       <li key={user.id}>
//         {user.name}, {user.age}
//       </li>
//     ));

//     return <ul>{users}</ul>;
//   }
// } */





// export default App;
