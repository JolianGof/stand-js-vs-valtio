import { proxy, useSnapshot } from 'valtio';
import { proxySet } from 'valtio/utils';

type Employee = {
  firstName: string;
  lastName: string;
};

type Department = {
  employees: {
    [key: string]: Employee;
  };
};
type Status = 'pending' | 'completed'

type Todo = {
  description: string
  status: Status
  id: number
}
type CompanyState = {
  company: {
    name: string;
    departments: {
      [key: string]: Department;
    };
  };
  todos:Todo[],
};

export const store = proxy<CompanyState>({
  company: {
    name: 'Acme Corporation',
    departments: {
      sales: {
        employees: {
          employee1: {
            firstName: 'Alice',
            lastName: 'Smith'
          },
          employee2: {
            firstName: 'Bob',
            lastName: 'Johnson'
          }
        }
      },
      engineering: {
        employees: {
          employee1: {
            firstName: 'Eve',
            lastName: 'Wong'
          },
          employee2: {
            firstName: 'Chris',
            lastName: 'Davis'
          }
        }
      }
    }
  },
  todos:[]
});


export const addTodo = (description: string) => {
  store.todos.push({
    description,
    status: 'pending',
    id: Date.now(),
  })
}


// Add Function
const addEmployee = (department: string, employee: Employee) => {
//   store.company.departments[department].employees[newEmployeeKey] = employee;
};
export const addEngineering = ({firstName,lastName}:{firstName:string,lastName:string}) => {
  const engineeringEmployees = store?.company?.departments?.engineering?.employees || {};
  const objLength = Object.keys(engineeringEmployees).length + 1;
  const newEmployeeKey = `employee${objLength}`;

  const newDepartment = {
    ...engineeringEmployees,
    [newEmployeeKey]: { firstName, lastName }
  };

  // Update the engineering department's employees
  if (store && store.company && store.company.departments && store.company.departments.engineering) {
    store.company.departments.engineering.employees = newDepartment;
  } else {
    // Handle the case where the store or its properties are undefined
    console.error('Failed to update engineering department employees. The store or its properties are undefined.');
  }
};

const addEmployeeToSales = (employee: { firstName: string; lastName: string }) => {
    const snap = store;
    const newEmployeeKey = `employee${Object.keys(snap.company.departments['sales'].employees).length + 1}` as keyof typeof snap.company.departments['sales']['employees'];
    store.company.departments['sales'].employees[newEmployeeKey] = employee;
  };
// Remove Function
const removeEmployee = (department: string, employeeKey: string) => {
  delete store.company.departments[department].employees[employeeKey as keyof Department['employees']];
};

// Update Function
const updateEmployee = (department: string, employeeKey: string, updatedEmployee: Employee) => {
  store.company.departments[department].employees[employeeKey as keyof Department['employees']] = updatedEmployee;
};

export { addEmployee,addEmployeeToSales, removeEmployee, updateEmployee };
