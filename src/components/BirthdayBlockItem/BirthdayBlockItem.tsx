import Employee from "../../interfaces/EmployeeModel";
import { convertDates } from "../../helpers/converter";
import classes from "./BirthdayBlockItem.module.css";

interface BirthdayBlockItemProps {
  employees: Employee[];
}

const BirthdayBlockItem: React.FC<BirthdayBlockItemProps> = ({ employees }) => {
  return (
    <ul className={classes.container}>
      {employees.map((employee) => (
        <li key={employee.id + "selected"}>
          {employee.firstName} {employee.lastName} -{" "}
          {convertDates(employee.dob)}
        </li>
      ))}
    </ul>
  );
};

export default BirthdayBlockItem;
