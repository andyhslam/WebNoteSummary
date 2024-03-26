import { footer } from '../style/A.module.css';
import iml from '../style/index.module.less';
console.log('footer', footer);
console.log('iml', iml);

const div = document.createElement('div');
div.className = footer;
document.body.appendChild(div);
