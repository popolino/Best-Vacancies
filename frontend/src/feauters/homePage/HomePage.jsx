import { useNavigate } from "react-router-dom";
import classes from "./HomePage.module.scss";
import { Button } from "@mui/material"; // Подключаем SCSS стили

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.homepage}>
      <h1 className={classes.title}>Welcome!</h1>
      <div className={classes.buttons}>
        <Button onClick={() => navigate("/login")} variant="outlined">
          Login
        </Button>
        <Button
          onClick={() => navigate("/register/company")}
          variant="contained"
        >
          Register Company
        </Button>
        <Button onClick={() => navigate("/register/user")} variant="contained">
          Register User
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
