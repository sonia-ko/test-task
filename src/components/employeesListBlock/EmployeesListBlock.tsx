import Employee from "../../interfaces/EmployeeModel";
import RadioButtonsContainer from "../radiobuttonsContainer/RadioButtonsContainer";
import classes from "./EmployeesListBlock.module.css";

interface EmployeesListBlock {
  letter: string;
  employees: Employee[];
}
const EmployeesListBlock: React.FC<EmployeesListBlock> = ({
  letter,
  employees,
}) => {
  return (
    <div className={classes.container}>
      <h4>{letter.toUpperCase()}</h4>
      {employees.length > 0
        ? employees.map((employee) => (
            <RadioButtonsContainer
              key={employee.id + "radioButtonContainer"}
              handleChange={() => console.log("do sth")}
              employee={employee}
            />
          ))
        : "No employees"}
    </div>
  );
};

export default EmployeesListBlock;
