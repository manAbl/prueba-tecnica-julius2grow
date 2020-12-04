import React from 'react';
import ICard from '../components/Card';
import EmployeeForm from '../components/EmployeeForm';
import '../assets/containers/employee-styles.scss';
import Title from '../components/Title';

const Employee = () => {
  let title = 'Create employee';
  const handleSendRequest = e => {
    console.log(e);
  };
  return (
    <div className="employee-wrapper">
      <Title title={title} variant="h5" />
      <ICard>
        <EmployeeForm sendRequest={handleSendRequest} />
      </ICard>
    </div>
  );
};

export default Employee;
