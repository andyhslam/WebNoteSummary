navigator.serviceWorker.onmessage = ({ data, source }) => {
  console.log('client heard:', data);
  source.postMessage('bar');
};
navigator.serviceWorker.register('./serviceWorker.js');

// client heard: foo
// service worker heard: bar
