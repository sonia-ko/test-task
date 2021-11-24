import BirthdayBlockContainer from "../../components/birthdaysBlock/BirthdayBlockContainer";
import EmployeesBlockContainer from "../../components/employeesBlock/EmployeesBlockContainer";
import classes from "./EmployeesPage.module.css";
import Header from "../../components/pageHeader/Header";

const EmployeesPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className={classes.main}>
        <EmployeesBlockContainer />
        <BirthdayBlockContainer />
      </div>
    </>
  );
};

export default EmployeesPage;
