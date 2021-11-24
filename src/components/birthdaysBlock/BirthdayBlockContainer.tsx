import classes from "./BirthdayBlockContainer.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import BirthdayBlockItem from "../BirthdayBlockItem/BirthdayBlockItem";
import { months } from "../../helpers/month";

const BirthdayBlockContainer: React.FC = () => {
  const selectedEmployees = useSelector(
    (state: RootState) => state.employees.selectedEmployees
  );

  const currentMonthIndex = 10;

  const monthsSorted = [
    ...months.slice(currentMonthIndex),
    ...months.slice(0, currentMonthIndex),
  ];

  return (
    <div className={classes.container}>
      {selectedEmployees.length !== 0 ? (
        monthsSorted.map((month, i) => (
          <div key={"month" + month}>
            <h6>{month}</h6>
            <BirthdayBlockItem
              employees={selectedEmployees.filter(
                (employee) =>
                  months[new Date(employee.dob).getMonth()] === month
              )}
            />
          </div>
        ))
      ) : (
        <div className={classes.empty}> Employees List is empty </div>
      )}
    </div>
  );
};

export default BirthdayBlockContainer;
