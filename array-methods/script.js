// splice -> dizi içerisindeki elemanları değiştirmek ve silmek için kullanılır.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.splice(1, 2); // Dizi içerisindeki 1. indisten 2. indiste olan elemanları siler.
console.log(array); // [1, 4, 5, 6, 7, 8, 9, 10]

// slice -> dizi içerisindeki elemanların bir kısmını alıp yeni bir dizi olarak döndürür.

console.log(array.slice(1, 3)); // [4, 5]
console.log(array.slice(-4, -2)); // [7, 8]

// concat -> dizi içerisindeki elemanlarının birbirine eklenmesini sağlar.

let array2 = [11, 12, 13, 14, 15];
console.log(array.concat(array2)); // [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// indexOf -> dizi içerisinde aranan elemanın indeksini bulur.
console.log(array.indexOf(4)); // 3
console.log(array.indexOf(100)); // -1

// lastIndexOf -> dizi içerisinde aranan elemanın son indeksini bulur. (Tersi indexOf)
console.log(array.lastIndexOf(4)); // 3

// includes -> dizi içerisinde aranan elemanın varlığını kontrol eder. var ise true, yok ise false döner.
console.log(array.includes(4)); // true
console.log(array.includes(100)); // false

// find -> dizi içerisinde aranan elemanı bulur. findIndex ile aynı işi yapar. tek farkı aranan elemanı bulurken, bulunan elemanın indeksini döndürür.
/*
    find(function(element, index, array))
*/
let result = array.find(function(element){
    return element > 5;
});
console.log(result); // 6

// filter -> find ile benzer fakat filtre eşleşen tüm elemanları döndürür.

// map -> dizinin her elemanı için bir fonksiyonu çalıştırır. ve yeni bir dizi oluşturur.
array = ["Erem", "Şimşek", "Frontend Developer"].map(item => item.length);
console.log(array); // [4, 6, 18]
array = ["Erem", "Şimşek", "Frontend Developer"].map(item => item.toUpperCase());
console.log(array); // ["EREM", "ŞIMŞEK", "FRONTEND DEVELOPER"]
array = ["Erem", "Şimşek", "Frontend Developer"].map(item => item.toLowerCase());
console.log(array); // ["erem", "şimşek", "frontend developer"]
array = ["Erem", "Şimşek", "Frontend Developer"].map(item => item.charAt(0).toUpperCase());
console.log(array); // ["E", "Ş", "F"]
array = ["Erem", "Şimşek", "Frontend Developer"].map(item => item.charAt(0).toUpperCase() + item.slice(1));
console.log(array); // ["Erem", "Şimşek", "Frontend Developer"]

// reverse -> dizi içerisindeki elemanların tersten sıralanmasını sağlar.

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.reverse()); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// isArray -> Eğer bir değişken bir dizi ise true, değilse false döner.

console.log(Array.isArray(array)); // true
console.log(Array.isArray(array2)); // true
console.log(Array.isArray(person)); // false