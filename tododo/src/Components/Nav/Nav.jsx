import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
function Nav() {
	return (
		<div className={styles.navbar}>
			<div className={styles.navbarLink}>
				<NavLink to="/" exact activeClassName={styles.active}>
					Time Quadrants
				</NavLink>
			</div>
			<div className={styles.navbarLink}>
				<NavLink to="/pomo" activeClassName={styles.active}>
					Pomodoro
				</NavLink>
			</div>
		</div>
	);
}

export default Nav;
