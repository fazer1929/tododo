import React from "react";
import styles from "./Todo.module.css";
import cx from "classnames";
function Todo({ task, completed }) {
	return (
		<div className={styles.container}>
			<p className={cx(styles.task, { [styles.done]: completed })}>{task}</p>
		</div>
	);
}

export default Todo;
