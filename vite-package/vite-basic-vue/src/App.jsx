import { defineComponent } from 'vue';
import '@styles/index.css';
// import '@styles/sass-test.scss';
// import '@styles/less-test.less';
import '@styles/stylus-test.styl';
import { titleSize } from '@styles/example.module.css';

// import logo from './assets/vue.svg?url';
// import main from './main.js?raw';
const imgUrl = new URL('./assets/vue.svg', import.meta.url).href;

console.log(imgUrl);
// console.log(main);

export const Test = defineComponent({
  render() {
    return (
      <div className={`title ${titleSize}`}>
        hello vite jsx component
        <span>!!!</span>
        <img src={imgUrl} alt="" />
      </div>
    );
  },
});
