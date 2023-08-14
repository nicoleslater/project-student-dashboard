import React, { useState } from "react";
import StudentInfo from "./StudentInfo";

const StudentCard = ({
  student,
  setSelectedStudent,
  index,
  toggleStudentInfo,
  handleSubmit,
}) => {
  const firstName = student.names.preferredName;
  const middleInitial = student.names.middleName.charAt(0);
  const lastName = student.names.surname;
  const username = student.username;
  const birthday = student.dob.toString();
  const profilePhoto = student.profilePhoto;
  const [showStudentInfo, setShowStudentInfo] = useState(false);

  function toggleStudentInfo() {
    setShowStudentInfo(!showStudentInfo);
  }

  return (
    <div className="student-card">
      <div className="image">
        <img className="profile-img" src={profilePhoto} alt="" />
      </div>
      <div className="text">
        <h3>{firstName + " " + middleInitial + ". " + lastName}</h3>
        <p>{username}</p>
        <p> Birthday: {birthday} </p>
      </div>
      <div>
        <button className="toggle-button" onClick={toggleStudentDetails}>
          {showStudentInfo ? "Show Less..." : "Show More..."}
        </button>
        {showStudentInfo ? (
          <StudentInfo details={student} handleSubmit={handleSubmit} />
        ) : null}
      </div>
    </div>
  );
}; 

export default StudentCard;
