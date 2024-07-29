import { createStore } from 'stan-js'

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

export const { useStore,batchUpdates,actions,getState } = createStore<CompanyState>({  company: {
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
actions.setTodos([...getState().todos,{
  description,
  status: 'pending',
  id: Date.now(),
}])
  console.log(batchUpdates)
 
}



export const addEngineering = ({firstName,lastName}:{firstName:string,lastName:string}) => {
  const engineeringEmployees = getState()?.company?.departments?.engineering?.employees;
  const objLength = Object.keys(engineeringEmployees).length + 1;
  const newEmployeeKey = `employee${objLength}`;
  actions.setCompany({...getState().company,departments:{
      ...getState().company.departments,
      engineering:{...getState().company.departments.engineering,
        employees:{...getState().company.departments.engineering.employees,
          [newEmployeeKey]:{firstName,lastName}}},
  }})
};


