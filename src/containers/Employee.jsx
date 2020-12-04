import React from 'react';
import ICard from '../components/Card';
import EmployeeForm from '../components/EmployeeForm';
import '../assets/containers/employee-styles.scss';
import Title from '../components/Title';
import { connect } from 'react-redux';
import useComponentMode from '../hooks/useComponentMode';
import { handleCreateEmployee, handleUpdateEmployee } from '../thunks';

const Employee = ({ create, history: router, update }) => {
  let title = 'Create employee';
  const { mode } = useComponentMode();
  const handleSendRequest = data => {
    let method = mode == 'create' ? create : update;
    method(data).then(() => router.push('/')).catch(_ => {
      // Ignore, this is being handled from the store with notifications
    });
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

const mapDispatchToProps = {
  create: handleCreateEmployee,
  update: handleUpdateEmployee,
};

export default connect(null, mapDispatchToProps)(Employee);
