import React from 'react';
import './index.css';
import data from "./data/data.json";

// function App() {
  
//   return (
//     <div>
//       <Student data={jsonData} />

//     </div>
//   );
// }
const User = () => <UserList />;
const App = () => <StudentList />;



const StudentList  = () => {

// console.log(data[0].cohort.cohortStartDate);
// console.log(data[3]);

 
    return (
      <div className="cohort">
        <p>
          All Students By: {data.filter(cohortCode)}
          <User />
        </p>

      </div>
    );
  
};

const UserList = () => {
  return (
    <Student />
  )
}

const Student = () => {
 
  
  const url = "https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48";
  return ( 
  <div className="student">
    <p> Cohort: {data[0].cohort.cohortCode} </p>
    <img src={url} atl=""/>
    <div>
      <h4>Name: {data[0].names.preferredName}
      </h4>
      <h4>Email: {data[0].username}</h4>
      <h4>Birthday: {data[0].dob}</h4>
    </div>
    </div>
  )
    
};

// class UserList extends React.Component {
//   render(UserList) {
//     const users = data.users.map(user => (
//       <li key={user.id}>
//         {user.name}, {user.age}
//       </li>
//     ));

//     return <ul>{users}</ul>;
//   }
// }





export default App;
