let str = 'hello world';

console.log('str', str);

console.log('meta', import.meta.env.VITE_PROXY_TARGET);

interface PersonField {
  name: string;
  age: number;
}

function demo(params: PersonField) {
  console.log(params.age);
}

console.log(demo({ name: 'adv', age: 18 }));
