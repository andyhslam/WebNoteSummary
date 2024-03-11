let i = 0
function timedCount() {
  i++
  // postMessage可以把信息传递给主线程
  postMessage(i)
  setTimeout(timedCount, 1000)
}
timedCount()
