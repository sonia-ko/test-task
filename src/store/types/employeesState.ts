import Employee from "../../interfaces/EmployeeModel";

export interface EmployeesState {
  allEmployees: Employee[];
  selectedEmployees: Employee[];
}
