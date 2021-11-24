import classes from "./EmployeesBlockContainer.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEmployees } from "../../store/actions/employeesThunk";
import { useSelector } from "react-redux";
import EmployeesListBlock from "../employeesListBlock/EmployeesListBlock";
import { RootState } from "../../store/store";

const EmployeesBlockContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  const employees = useSelector(
    (state: RootState) => state.employees.allEmployees
  );

  return (
    <div className={classes.container}>
      {alphabet.map((letter) => (
        <EmployeesListBlock
          key={"letter" + letter}
          letter={letter}
          employees={employees
            .filter((employee) => employee.firstName.trim().startsWith(letter))
            .sort((a, b) => a.firstName.localeCompare(b.firstName))}
        />
      ))}
    </div>
  );
};

export default EmployeesBlockContainer;
