// mockjs官网：https://github.com/nuysoft/Mock/wiki/Mock.Random
const mockJS = require('mockjs');

const userList = mockJS.mock({
  // 属性 list 的值是一个数组，其中含有1到100个元素
  'list|100': [
    {
      'id|+1': 1, // 属性id 是一个自增数，起始值为1，每次增1
      name: '@cname', // 表示生成不同的中文名
      ename: mockJS.Random.name(), // 表示生成不同的英文名
      time: '@time',
      date: '@date',
      avatar: mockJS.Random.image(),
    },
  ],
});

module.exports = [
  {
    method: 'post',
    url: '/api/users',
    response: ({ body }) => {
      // body表示请求体
      return {
        code: 200,
        msg: 'success',
        data: {
          list: userList.list,
          count: userList.list.length,
        },
      };
    },
  },
];
