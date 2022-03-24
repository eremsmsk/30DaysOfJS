let name = "Erem";
let surname = "Şimşek";
let age = 23;

console.log(name + surname + age); // EremŞimşek23


let hobbies = ['software', 'football', 'music']

let count1 = "123";
let count2 = "456";

let totalCount = count1 + count2;
console.log(totalCount); // 123456

let count3 = Number('123');
let count4 = Number('456.3');

let totalCount2 = count3 + count4;
console.log(totalCount2); // 579.3

let count5 = parseInt('100.5');
let count6 = parseInt('218.8');
let totalCount3 = count5 + count6;
console.log(totalCount3); //318

let lang = "english";
console.log(lang.length); // 7

const yearOfBirth = 1998;
console.log(new Date().getFullYear() - yearOfBirth); // 24