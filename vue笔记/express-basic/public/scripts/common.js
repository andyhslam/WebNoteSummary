$.ajax({
	url: "/api/list", // 此js文件与index.html是同源的
	success(result) {
		let templateStr = `
      <ul>
        {{each target}}
          <li>{{$index}} {{$value}}</li>
        {{/each}}
      </ul>
      <p>{{msg}}</p>
    `

		const html = template.render(templateStr, {
			target: result.data,
			msg: "hello",
		})

		$("#list").html(html)
	},
})
