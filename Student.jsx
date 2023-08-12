import React from 'react';
import data from './src/data/data.json';

const Student = () => {

    console.log(data)
    const url = "https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48";
    
    return ( 
  <><div className="student">
      <p> Cohort: {data[0].cohort.cohortCode} </p>
      <img src={url} atl="" />
      <div>
        <h4>Name: {data[0].names.preferredName}
        </h4>
        <h4>Email: {data[0].username}</h4>
        <h4>Birthday: {data[0].dob}</h4>
      </div>
    </div><div className="student">
        <p> Cohort: {data[1].cohort.cohortCode} </p>
        <img src={url} atl="" />
        <div>
          <h4>Name: {data[1].names.preferredName}
          </h4>
          <h4>Email: {data[1].username}</h4>
          <h4>Birthday: {data[1].dob}</h4>
        </div>
      </div><div className="student">
        <p> Cohort: {data[2].cohort.cohortCode} </p>
        <img src={url} atl="" />
        <div>
          <h4>Name: {data[2].names.preferredName}
          </h4>
          <h4>Email: {data[2].username}</h4>
          <h4>Birthday: {data[2].dob}</h4>
        </div>
      </div><div className="student">
        <p> Cohort: {data[3].cohort.cohortCode} </p>
        <img src={url} atl="" />
        <div>
          <h4>Name: {data[3].names.preferredName}
          </h4>
          <h4>Email: {data[3].username}</h4>
          <h4>Birthday: {data[3].dob}</h4>
        </div>
      </div><div className="student">
        <p> Cohort: {data[4].cohort.cohortCode} </p>
        <img src={url} atl="" />
        <div>
          <h4>Name: {data[4].names.preferredName}
          </h4>
          <h4>Email: {data[4].username}</h4>
          <h4>Birthday: {data[4].dob}</h4>
        </div>
      </div></>
  );

}

export default Student;

// const useStudentList = () => {
//     const url = "https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48";
//     const [allStudents, setAllStudents] = useState([]);
//     const [displayedStudents, setDisplayedStudents] = useState([]);
  
//     const getNewStudents = async () => {
//       const studentData = await fetch(url);
//       const studentJson = await dataJson();
//       setAllStudents(dataJson.className);
//       setDisplayedStudents(dataJson.cohort);
//     }
//    }