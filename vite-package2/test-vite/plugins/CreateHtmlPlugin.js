export default (options) => {
  return {
    transformIndexHtml: {
      // 控制当前钩子的执行时机：将插件的执行时机提前。
      order: 'pre',
      handler: (html, ctx) => {
        // html表示之前的html；ctx表示当前请求的一个执行上下文
        return html.replace(/<%= title %>/g, options.inject.data.title);
      },
    },
  };
};
