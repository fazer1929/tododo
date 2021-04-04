import React, { useEffect, useState } from "react";
import styles from "./Quadrant.module.css";
import cx from "classnames";
import { RiAddCircleLine } from "react-icons/ri";
import { AiFillRightCircle } from "react-icons/ai";
import Todo from "../../Components/Todo/Todo";
function Quadrant() {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");
	const [inpVisible, setInpVisible] = useState(0);
	useEffect(() => {
		setTodos(JSON.parse(localStorage.getItem("todos")) || []);
		console.log(localStorage.getItem("todos"));
	}, []);
	const addItem = (quad) => {
		if (todo.length > 0) {
			const newTodos = [
				...todos,
				{
					task: todo,
					quad: quad,
					completed: false,
				},
			];
			setTodos(newTodos);
			setTodo("");
			setInpVisible(0);
			localStorage.setItem("todos", JSON.stringify(newTodos));
		}
	};
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<div className={styles.row1}>
					<div className={styles.dummyBox}></div>
					<div className={cx(styles.heading, styles.horiHeading)}>
						<h4>Urgent</h4>
					</div>
					<div className={cx(styles.heading, styles.horiHeading)}>
						<h4>Not Urgent</h4>
					</div>
				</div>
				<div className={styles.row2}>
					<div className={cx(styles.heading, styles.verHeading)}>
						<h4>Important</h4>
					</div>
					<div className={styles.quad}>
						<div className={styles.addElems}>
							<button onClick={() => setInpVisible(1)}>
								<RiAddCircleLine size={30} />
							</button>

							{inpVisible == 1 ? (
								<div className={styles.todoInputContainer}>
									<input
										value={todo}
										onChange={(e) => setTodo(e.target.value)}
										className={styles.todoInput}
										type="text"
										placeholder="Enter You Task"
									/>
									<button type="submit" onClick={() => addItem(1)}>
										<AiFillRightCircle size={25} />
									</button>
								</div>
							) : (
								""
							)}
						</div>
						<div className={styles.todos}>
							{todos.map((elem, i) => {
								if (elem["quad"] == 1)
									return (
										<Todo
											task={elem["task"]}
											key={i}
											completed={elem["completed"]}
										/>
									);
							})}
						</div>
					</div>
					<div className={styles.quad}>
						<div className={styles.addElems}>
							<button onClick={() => setInpVisible(2)}>
								<RiAddCircleLine size={30} />
							</button>

							{inpVisible == 2 ? (
								<div className={styles.todoInputContainer}>
									<input
										value={todo}
										onChange={(e) => setTodo(e.target.value)}
										className={styles.todoInput}
										type="text"
										placeholder="Enter You Task"
									/>
									<button type="submit" onClick={() => addItem(2)}>
										<AiFillRightCircle size={25} />
									</button>
								</div>
							) : (
								""
							)}
						</div>
						<div className={styles.todos}>
							{todos.map((elem, i) => {
								if (elem["quad"] == 2)
									return (
										<Todo
											task={elem["task"]}
											key={i}
											completed={elem["completed"]}
										/>
									);
							})}
						</div>
					</div>
				</div>
				<div className={styles.row3}>
					<div className={cx(styles.heading, styles.verHeading)}>
						<h4>Not Important</h4>
					</div>
					<div className={styles.quad}>
						<div className={styles.addElems}>
							<button onClick={() => setInpVisible(3)}>
								<RiAddCircleLine size={30} />
							</button>

							{inpVisible == 3 ? (
								<div className={styles.todoInputContainer}>
									<input
										className={styles.todoInput}
										value={todo}
										onChange={(e) => setTodo(e.target.value)}
										type="text"
										placeholder="Enter You Task"
									/>
									<button type="submit" onClick={() => addItem(3)}>
										<AiFillRightCircle size={25} />
									</button>
								</div>
							) : (
								""
							)}
						</div>
						<div className={styles.todos}>
							{todos.map((elem, i) => {
								if (elem["quad"] == 3)
									return (
										<Todo
											task={elem["task"]}
											key={i}
											completed={elem["completed"]}
										/>
									);
							})}
						</div>
					</div>
					<div className={styles.quad}>
						<div className={styles.addElems}>
							<button onClick={() => setInpVisible(4)}>
								<RiAddCircleLine size={30} />
							</button>

							{inpVisible == 4 ? (
								<div className={styles.todoInputContainer}>
									<input
										className={styles.todoInput}
										value={todo}
										onChange={(e) => setTodo(e.target.value)}
										type="text"
										placeholder="Enter You Task"
									/>
									<button type="submit" onClick={() => addItem(4)}>
										<AiFillRightCircle size={25} />
									</button>
								</div>
							) : (
								""
							)}
						</div>
						<div className={styles.todos}>
							{todos.map((elem, i) => {
								if (elem["quad"] == 4)
									return (
										<Todo
											task={elem["task"]}
											key={i}
											completed={elem["completed"]}
										/>
									);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Quadrant;
