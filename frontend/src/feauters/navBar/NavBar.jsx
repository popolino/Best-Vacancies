import classes from "./navBar.module.scss";
import SvgSelector from "../../components/SvgSelector";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";

const NavBar = () => {
  const path = useLocation();
  const navList = [
    {
      title: "Vacancies",
      path: "/allVacancies",
      img: "allVacancies",
    },
    { title: "My Vacancies", path: "/myVacancies", img: "myVacancies" },

    {
      title: "Logout",
      path: "/",
      img: "logout",
    },
  ];
  const [active, setActive] = useState("Game");
  // const click = (item) => {
  //   if (item.title === "Online Game" && currentRoomId) {
  //     navigate(`/rooms/${currentRoomId}`);
  //     setActive(item.path);
  //     return;
  //   }
  //   navigate(item.path);
  //   setActive(item.path);
  //
  //   if (item.title === "Logout") {
  //     handleDeleteGame(currentGameId);
  //     handleDeleteRoom(currentRoomId);
  //     logoutUser();
  //     navigate("/signin");
  //   }
  // };
  useEffect(() => {
    if (path.pathname.startsWith("/rooms") || path.pathname === "/") {
      setActive("/rooms");
    } else {
      const currentNavItem = navList.find(
        (item) => item.path === path.pathname,
      );
      if (currentNavItem) {
        setActive(currentNavItem.path);
      }
    }
  }, [path]);
  return (
    <div className={classes.navbar}>
      <h1>Best Vacancies</h1>
      <ul>
        {navList.map((item, i) => (
          <li
            key={i}
            className={clsx(
              classes.list,
              item.path === active && classes.active,
            )}
            onClick={() => {
              // click(item);
            }}
          >
            <SvgSelector id={item.img} />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
