import { useSearchParams, useParams } from "react-router-dom"
function About() {
	// const [params] = useSearchParams()
	const params = useParams()
	console.log("params", params)
	// params对象里面有一个get方法，用来获取对应的参数
	// 把参数的名称作为get方法的实参传过来
	// const id = params.get("id")
	return (
		<div>
			About得到的参数值为{params.id}-{params.name}
		</div>
	)
}

export default About
