self.onmessage = ({ data }) => {
  console.log('service worker heard:', data);
};
self.onactivate = () => {
  self.clients
    .matchAll({ includeUncontrolled: true })
    .then((clientMatches) => clientMatches[0].postMessage('foo'));
};
