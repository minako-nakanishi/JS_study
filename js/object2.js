/** 複数行で宣言 */
const John = {
    name: 'John',
    age: 4,
};
console.log(John); // { name: 'John', age: 4 }

/** 1行で宣言 */
const John2 = { name: 'John', age: 4 };
console.log(John2); //{ name: 'John', age: 4 }

console.log(John.name === John2.name); // true
console.log(John.age === John2.age); // true
console.log(John === John2); // false

const John3 = {
    name: 'John',
    classification: {
        kingdom: 'Animalia', //動物界
        phylum: 'Chordata', //脊索動物
        class: 'Mamalia', //哺乳類
        order: 'Carnivora', //食肉類
    }
}