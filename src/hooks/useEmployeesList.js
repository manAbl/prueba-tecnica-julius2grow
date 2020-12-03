import { useEffect, useState } from 'react';

export default function useEmployeesList(apiMethod) {
  const [{ employees }, setEmployees] = useState({
    employees: [],
  });

  useEffect(async () => {
    const data = await apiMethod();
    setEmployees({
      employees: [...data],
    });

    return {
      employees,
    };
  });
}
