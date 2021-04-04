import React from "react";
import styles from "./Quadrant.module.css";
import cx from "classnames";
function Quadrant() {
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<div className={styles.row1}>
					<div className={styles.dummyBox}></div>
					<div className={cx(styles.heading, styles.horiHeading)}>
						<h4>Urgent</h4>
					</div>
					<div className={cx(styles.heading, styles.horiHeading)}>
						<h4>Urgent</h4>
					</div>
				</div>
				<div className={styles.row2}>
					<div className={cx(styles.heading, styles.verHeading)}>
						<h4>Important</h4>
					</div>
					<div className={styles.quad}></div>
					<div className={styles.quad}></div>
				</div>
				<div className={styles.row3}>
					<div className={cx(styles.heading, styles.verHeading)}>
						<h4>Not Important</h4>
					</div>
					<div className={styles.quad}></div>
					<div className={styles.quad}></div>
				</div>
			</div>
		</div>
	);
}

export default Quadrant;
