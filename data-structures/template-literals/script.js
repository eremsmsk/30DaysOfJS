const fullName = 'John Doe';
const yearOfBirth = 1990;
const job = 'Web Developer';

let val;
val = 'Merhaba benim adım ' + fullName + ' ve ' + (2022 - yearOfBirth) + ' yaşındayım. ' + job + ' olarak çalışıyorum.';
console.log(val); // Merhaba benim adım John Doe ve 22 yaşındayım. Web Developer olarak çalışıyorum.

// Template literals ile değişkenleri kullanabiliriz.

val = `Merhaba benim adım ${fullName} ve ${(2022 - yearOfBirth)} yaşındayım. ${job} olarak çalışıyorum.`;
console.log(val); // Merhaba benim adım John Doe ve 22 yaşındayım. Web Developer olarak çalışıyorum.

//Tempalte Literals Nedir?
/* 
    Template Literal string oluşturmak için kullanılan yeni bir standarttır. 
    Örneklerle de göreceğimiz gibi bu özellik oldukça kullanışlıdır. 
    Template Literal JavaScript’te stringlerimizi daha güzel ve dinamik bir şekilde biçimlendirmemizi sağlar. 
    Kullanımı oldukça basittir. Bilindiği üzere, JavaScript’te tek tırnak (‘’) veya çift tırnak (“”) ile string oluşturabiliyoruz. 
    ES6 ile bunların yanı sıra backtick (``) karakteri (grave accent) ile de string oluşturabiliyoruz.
*/