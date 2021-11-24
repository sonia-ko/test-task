import classes from "./Header.module.css";

const Header: React.FC = () => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  return (
    <div className={classes.container}>
      <h2>Employees</h2>
      <h2>Employees birthday</h2>
    </div>
  );
};

export default Header;
