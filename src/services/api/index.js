import apiConfig from '../../config/apiConfig';
let url;

export const getEmployees = async () => {
  url = `${apiConfig.baseUrl}/employees`;
  const data = await fetch(url, { method: 'GET' });
  return data.json();
};

export const viewEmployee = async (id) => {
  url = `${apiConfig.baseUrl}/employee/${id}`;
  const data = await fetch(url, { method: 'GET' });
  return data.json();
};

export const createEmployee = async (employee) => {
  if (!employee) {
    return new Error(errorsHandler(employee));
  }
  url = `${apiConfig.baseUrl}/create`;
  const data = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(employee),
  });
  return data.json();
};

export const updateEmployee = async (id, employeeUpdated) => {
  url = `${apiConfig.baseUrl}/update/${id}`;
  const data = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(employeeUpdated),
  });
  return data.json();
};

export const removeEmployee = async (id) => {
  url = `${apiConfig.baseUrl}/delete/${id}`;
  const data = await fetch(url, { method: 'DELETE' });
  return data.json();
};
