import { BrowserRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import { App } from './App.jsx';

export function render() {
  const html = ReactDOMServer.renderToString(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  return { html };
}
