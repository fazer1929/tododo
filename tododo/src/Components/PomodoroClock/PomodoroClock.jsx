import React from "react";
import styles from "./PomodoroClock.module.css";
import Countdown from "react-countdown";
function PomodoroClock() {
	return (
		<div>
			<Countdown date={Date.now() + 1500000} />,
		</div>
	);
}

export default PomodoroClock;
