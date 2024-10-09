import {Button, TextField} from "@mui/material";
import classes from "./Auth.module.scss"
import {Link, useNavigate} from "react-router-dom";

const RegisterUser = () => {
    const navigate = useNavigate();

    return (
        <div className={classes.loginPage}>
            <div className={classes.container}>
                <h2 className={classes.title}>Register User</h2>
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
                    <TextField
                        label="Repeat Password"
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
                        Register
                    </Button>
                </form>
                <p className={classes.text}>
                    <span>Already have an account? </span>
                    <Link to="/login" className={classes.link}>
                         Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};


export default RegisterUser;