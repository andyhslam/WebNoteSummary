// 封装图表Bar组件
import { useEffect, useRef } from "react"
import * as echarts from "echarts"

function Bar({ title, xData, yData, style }) {
	const domRef = useRef()
	const chartInit = () => {
		// 基于准备好的dom，初始化echarts实例
		const myChart = echarts.init(domRef.current)
		// 绘制图表
		myChart.setOption({
			title: {
				text: title,
			},
			tooltip: {},
			xAxis: {
				data: xData,
			},
			yAxis: {},
			series: [
				{
					name: "销量",
					type: "bar",
					data: yData,
				},
			],
		})
	}
	// 执行初始化函数chartInit
	useEffect(() => {
		chartInit()
	}, []) // eslint-disable-line
	return (
		<div>
			{/* 准备一个挂载节点 */}
			<div ref={domRef} style={style}></div>
		</div>
	)
}

export default Bar
