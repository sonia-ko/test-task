import React, { ChangeEvent } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { selectEmployee } from "../../store/reducers/employeesThunk";
import Employee from "../../interfaces/EmployeeModel";
import classes from "./RadioButtonsContainer.module.css";

interface RadioButtonsContainerProps {
  employee: Employee;
  handleChange: () => void;
}

const RadioButtonsContainer: React.FC<RadioButtonsContainerProps> = ({
  employee,
  handleChange,
}) => {
  const dispatch = useDispatch();

  const selectedEmployees = useSelector(
    (state: RootState) => state.employees.selectedEmployees
  );

  const [active, setActive] = useState(false);

  const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setActive(!active);
    dispatch(selectEmployee(employee));
  };

  console.log(active);

  return (
    <form className={classes.container}>
      <h5 className={active ? classes.active : ""}>
        {employee.firstName} {employee.lastName}
      </h5>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="false"
            checked={!active}
            onChange={onValueChange}
          />
          not active
        </label>
      </div>

      <div className="radio">
        <label>
          <input
            type="radio"
            value="true"
            checked={active}
            onChange={onValueChange}
          />
          active
        </label>
      </div>
    </form>
  );
};

export default RadioButtonsContainer;
