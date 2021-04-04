import React from "react";
import PomodoroClock from "../../Components/PomodoroClock/PomodoroClock";
import styles from "./Pomodoro.module.css";

function Pomodoro() {
	return (
		<div className={styles.container}>
			<div className={styles.clock}>
				<PomodoroClock time={5000} />
			</div>
		</div>
	);
}

export default Pomodoro;
