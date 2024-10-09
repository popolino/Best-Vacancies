import {Button, TextField} from "@mui/material";
import classes from "./Auth.module.scss"
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className={classes.loginPage}>
            <div className={classes.container}>
                <h2 className={classes.title}>Sign In</h2>
                <form className={classes.form}>
                    <TextField
                        label="Login"
                        variant="outlined"
                        className={classes.input}
                        fullWidth
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        className={classes.input}
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        fullWidth
                        onClick={() => navigate("/dashboard")}
                    >
                        Sign In
                    </Button>
                </form>
                <p className={classes.text}>
                    <dpan>New to BestVacancies?</dpan>
                    <Link to="/register/user" className={classes.link}>
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
};


export default Login;