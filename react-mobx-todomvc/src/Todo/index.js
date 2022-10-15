import "./index.css"
import { useStore } from "../store"
import { observer } from "mobx-react-lite"
import { useState } from "react"
import uuid from "react-uuid"

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
	// 删除
	function delTask(id) {
		taskStore.delTask(id)
	}
	// 新增
	const [taskValue, setTaskValue] = useState("")
	function addTask(e) {
		if (e.keyCode === 13) {
			taskStore.addTask({
				id: uuid(),
				name: taskValue,
				isDone: false,
			})
			setTaskValue("")
		}
	}
	return (
		<section className="todoapp">
			<header className="header">
				<h1>todos</h1>
				{/* 新增输入框 */}
				<input
					className="new-todo"
					autoFocus
					autoComplete="off"
					value={taskValue}
					onChange={(e) => setTaskValue(e.target.value)}
					onKeyUp={addTask}
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
								{/* 删除 */}
								<button
									className="destroy"
									onClick={() => delTask(item.id)}
								></button>
							</div>
						</li>
					))}
				</ul>
			</section>
			<footer className="footer">
				<span className="todo-count">
					任务总数：{taskStore.list.length}
					已完成：{taskStore.isFinishedLength}
				</span>
			</footer>
		</section>
	)
}

export default observer(Task)
