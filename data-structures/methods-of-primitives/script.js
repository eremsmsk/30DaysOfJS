/* 
    Veri Tipleri:
    1- Primitive veri tipleri
    - String
    - Number
    - Boolean
    - Null
    - Undefined
    - Symbol
    - BigInt
    2- Reference - Object veri tipleri
    - Object
    - Array
    - Function
    - Date
    - RegExp
    - Error
    - Map
    - Set
    - WeakMap
    - WeakSet
*/

let person = {
    name : 'Erem',
    age : 23,
    job : 'Web Developer',
    sayHello : function(){
        console.log(`Merhaba benim adım ${this.name} ve ${this.age} yaşındayım. ${this.job} olarak çalışıyorum.`);
    }
};

person.sayHello(); // Merhaba benim adım Erem ve 23 yaşındayım. Web Developer olarak çalışıyorum.