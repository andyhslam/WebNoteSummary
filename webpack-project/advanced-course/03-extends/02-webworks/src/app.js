const worker = new Worker(new URL('./work.js', import.meta.url));

// 给worker发送消息
worker.postMessage({
  question: 'hi，那边的worker线程，请告诉我今天的幸运数字是多少？',
});

// 接收worker返回的消息
worker.onmessage = ({ data: { answer } }) => {
  console.log('answer：', answer);
};
