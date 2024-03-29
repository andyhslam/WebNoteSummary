module.exports = function (aliasConf, jsContent) {
  let lastContent;
  Object.entries(aliasConf).forEach(([alia, path]) => {
    // vite官方会做path的相对路径的处理，我们这里是简化处理。
    const srcIndex = path.indexOf('src');
    const realPath = path.slice(srcIndex, path.length);
    // 使用字符串替换的方式来实现alias别名
    lastContent = jsContent.replace(alia, '/' + realPath);
  });
  return lastContent;
};
