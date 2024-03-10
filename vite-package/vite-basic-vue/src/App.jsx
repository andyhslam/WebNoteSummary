import { defineComponent } from 'vue';
import '@styles/index.css';
// import '@styles/sass-test.scss';
// import '@styles/less-test.less';
import '@styles/stylus-test.styl';
import { titleSize } from '@styles/example.module.css';

export const Test = defineComponent({
  render() {
    return (
      <div className={`title ${titleSize}`}>
        hello vite jsx component
        <span>!!!</span>
      </div>
    );
  },
});
