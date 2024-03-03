import HomeList from './HomeList';

// 拼接的资源路径
import('nav/Header').then((Header) => {
  const body = document.createElement('div');
  body.appendChild(Header.default());
  document.body.appendChild(body);
  document.body.innerHTML += HomeList(5);
});
