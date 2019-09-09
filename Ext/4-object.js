const obj1 = { name: 'object1'};
let obj2 = { name: 'object2'};
const obj3 = { name: 'object3'}
console.log(obj1);
console.log(obj2);

//

obj1.name = 'change1'
obj2.name = 'change2'

console.log(obj1);
console.log(obj2);

//

obj1.name = obj3.name;
console.log(obj1);

obj2.name = obj3.name;
console.log(obj2);

const createUser = (name, city) => ({
    name,
    city
});


console.log(createUser('Marcus Aurelius', 'Roma'));