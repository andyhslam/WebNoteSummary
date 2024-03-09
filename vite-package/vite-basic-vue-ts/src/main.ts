import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { person } from './test';

console.log(person.age);

createApp(App).mount('#app');
