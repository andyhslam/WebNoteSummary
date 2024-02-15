// 此文件用于放置专门线程运行的代码

// 可以接收主线程发送过来的消息
self.onmessage = ({ data: { question } }) => {
  console.log('question：', question);
  // 把信息做一个处理，再返回给主线程
  self.postMessage({
    answer: 10,
  });
};
