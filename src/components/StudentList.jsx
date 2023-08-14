import React from "react";
import StudentCard from "./StudentCard";
import { useState } from "react";





export default function StudentList({ data, showStudents }) {
  const [selectedStudent, setSelectedStudent] = useState(-1);
  return (
    <ul>
      {showStudents.map((student, index) => {
        return (
          <StudentCard
            index={index}
            setSelectedStudent={setSelectedStudent}
            student={student}
          />
        );
      })}
    </ul>
  );
}