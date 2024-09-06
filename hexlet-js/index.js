import _ from 'lodash';

// импорт модиф. функции last из библ. lodash
import getlastNum from './src/index.js';

// Пересечение массивов
_.intersection([2, 1], [2, 3]); // => [2]

// capitalize делает первую букву заглавной
_.capitalize('hello'); // Hello

console.log('Hello, Hexlet!');

console.log('Какой последний символ массива?');
const answer = getlastNum();
console.log(`Последний символ массива: ${answer}`);

let a = 5;
a++;
