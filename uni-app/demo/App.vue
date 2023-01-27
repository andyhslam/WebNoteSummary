<script>
	/*
	生命周期回调：
	1. 应用的生命周期(App.vue文件)
	2. 页面的生命周期(pages目录)
	3. 组件的生命周期(components目录)
	*/
	export default {
		// 监听应用初始化：应用初始化完成时触发，全局只触发一次。
		onLaunch: function() {
			// 登录或者全局变量的处理
			console.log('App Launch')
		},
		// 监听应用显示：应用启动，或从后台进入前台显示时触发。
		onShow: function() {
			console.log('App Show')
		},
		// 监听应用隐藏：应用从前台进入后台时触发。
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
