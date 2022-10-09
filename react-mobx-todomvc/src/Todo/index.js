import "./index.css"
import { useStore } from "../store"
function Task() {
	const { taskStore } = useStore()
	return (
		<section className="todoapp">
			<header className="header">
				<h1>todos</h1>
				<input
					className="new-todo"
					autoFocus
					autoComplete="off"
					placeholder="What needs to be done?"
				/>
			</header>
			<section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all"></label>
				<ul className="todo-list">
					{taskStore.list.map((item) => (
						<li
							key={item.id}
							className={item.isDone ? "todo completed" : "todo"}
						>
							<div className="view">
								<input
									className="toggle"
									type="checkbox"
									defaultChecked={true}
								/>
								<label>{item.name}</label>
								<button className="destroy"></button>
							</div>
						</li>
					))}
				</ul>
			</section>
		</section>
	)
}

export default Task
