import amc from '../style/A.module.css';
import iml from '../style/index.module.less';
console.log('amc', amc);
console.log('iml', iml);

const div = document.createElement('div');
div.className = amc.footerContent;
document.body.appendChild(div);
