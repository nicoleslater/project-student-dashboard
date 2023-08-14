import React from "react";

const CohortCodeList = ({ title, studentsList, setShowStudents }) => {
  const handleCohortSelection = () => {
    setShowStudents(studentsList);
  };

  return (
    <div className="cohort" onClick={handleCohortSelection}>
      <ul>{title}</ul>
    </div>
  );
};

export default CohortCodeList;