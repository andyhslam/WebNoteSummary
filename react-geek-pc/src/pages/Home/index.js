import Bar from "@/components/bar/index.js"

const Home = () => {
	return (
		<div>
			{/* 渲染Bar组件 */}
			<Bar
				title="三大框架满意度"
				xData={["react", "vue", "angular"]}
				yData={[50, 40, 30]}
				style={{ width: 500, height: 400 }}
			/>
			<Bar
				title="三大框架使用度"
				xData={["react", "vue", "angular"]}
				yData={[80, 70, 60]}
				style={{ width: 300, height: 200 }}
			/>
		</div>
	)
}
export default Home
