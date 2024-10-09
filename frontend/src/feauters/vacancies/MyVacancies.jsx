import classes from "./Vacancies.module.scss";
import { Button } from "@mui/material";

const MyVacancies = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.item}>
          <div className={classes["item-top"]}>
            <h1 className={classes.title}>Title</h1>
            <p className={classes.status}>Responsed ✔</p>
          </div>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>
        <div className={classes.item}>
          <div className={classes["item-top"]}>
            <h1 className={classes.title}>Title</h1>
            <p className={classes.status}>Responsed ✔</p>
          </div>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>
        <div className={classes.item}>
          <div className={classes["item-top"]}>
            <h1 className={classes.title}>Title</h1>
            <p className={classes.status}>Responsed ✔</p>
          </div>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>
        <div className={classes.item}>
          <div className={classes["item-top"]}>
            <h1 className={classes.title}>Title</h1>
            <p className={classes.status}>Responsed ✔</p>
          </div>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>
        <div className={classes.item}>
          <div className={classes["item-top"]}>
            <h1 className={classes.title}>Title</h1>
            <p className={classes.status}>Responsed ✔</p>
          </div>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>
        <div className={classes.item}>
          <div className={classes["item-top"]}>
            <h1 className={classes.title}>Title</h1>
            <p className={classes.status}>Responsed ✔</p>
          </div>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>
        <div className={classes.item}>
          <div className={classes["item-top"]}>
            <h1 className={classes.title}>Title</h1>
            <p className={classes.status}>Responsed ✔</p>
          </div>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes["right-top"]}>
          <h2 className={classes["vacancy-title"]}>Title</h2>
          <div className={classes.eng}>
            <p className={classes.border}>English level</p>
            <p className={classes.border}>Grade</p>
          </div>
        </div>
        <p className={classes["full-description"]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          dignissimos esse expedita incidunt laborum nobis obcaecati odio omnis
          optio tempore. Ea harum nemo nesciunt quam. Lorem ipsum. Lorem ipsum.
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
          adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quis, sed.
        </p>
        <div className={classes["right-bottom"]}>
          <p className={classes.contacts}>Contacts</p>
          <div className={classes.tags}>
            <p className={classes.border}>#teg</p>
            <p className={classes.border}>#teg</p>
            <p className={classes.border}>#teg</p>
            <p className={classes.border}>#teg</p>
            <p className={classes.border}>#teg</p>
          </div>
        </div>
        <div className={classes.button}>
          <Button variant="contained">Cancel response</Button>
        </div>
      </div>
    </div>
  );
};

export default MyVacancies;
