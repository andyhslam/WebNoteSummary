import "./index.css"
import { useStore } from "../store"
import { observer } from "mobx-react-lite"
function Task() {
	const { taskStore } = useStore()
	// 单选框的受控方式
	function changeSingleCheck(e, id) {
		taskStore.singleCheck(id, e.target.checked)
	}
	// 全选
	function allChange(e) {
		taskStore.allCheck(e.target.checked)
	}
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
				{/* 全选框 */}
				<input
					id="toggle-all"
					className="toggle-all"
					type="checkbox"
					checked={taskStore.isAll}
					onChange={allChange}
				/>
				<label htmlFor="toggle-all"></label>
				<ul className="todo-list">
					{taskStore.list.map((item) => (
						<li
							key={item.id}
							className={item.isDone ? "todo completed" : "todo"}
						>
							<div className="view">
								{/* 单选框，使用受控组件的方式 */}
								<input
									className="toggle"
									type="checkbox"
									onChange={(e) =>
										changeSingleCheck(e, item.id)
									}
									checked={item.isDone}
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

export default observer(Task)
