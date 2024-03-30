// vite的插件必须返回给vite一个配置对象
const fs = require('fs');
const path = require('path');

function diffDirAndFile(dirFileArr = [], basePath = '') {
  const result = {
    dirs: [],
    files: [],
  };
  dirFileArr.forEach((name) => {
    const curFileStat = fs.statSync(
      path.resolve(__dirname, basePath + '/' + name),
    );
    if (curFileStat.isDirectory()) {
      result.dirs.push(name);
    } else {
      result.files.push(name);
    }
  });
  return result;
}

function getTotalSrcDir(keyName) {
  const result = fs.readdirSync(path.resolve(__dirname, '../src'));
  const diffResult = diffDirAndFile(result, '../src');
  const resolveAliasesObj = {};
  diffResult.dirs.forEach((dirName) => {
    const key = `${keyName}/${dirName}`;
    const absPath = path.resolve(__dirname, '../src/' + dirName);
    resolveAliasesObj[key] = absPath;
  });
  return resolveAliasesObj;
}

module.exports = ({ keyName = '@' } = {}) => {
  return {
    name: 'custom-vite-aliases',
    // config函数可以返回对象，这个对象是部分的viteconfig配置【就是用户想改的那部分】
    // config: UserConfig, env: { mode: string, command: string }
    config(config, env) {
      // getTotalSrcDir方法读取src下面的所有目录，对目录下的所有文件进行别名控制
      const resolveAliasesObj = getTotalSrcDir(keyName);
      return {
        resolve: {
          alias: resolveAliasesObj,
        },
      };
    },
  };
};
