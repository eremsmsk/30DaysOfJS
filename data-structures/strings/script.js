console.log('erem'.length); // length bir fonksiyon değildir. Sayısal bir bir özelliktir.

//toLowerCase() ve toUpperCase() ve Kullanımı
console.log('Erem'.toLowerCase()); // erem
console.log('Erem'.toUpperCase()); // EREM

//Tek bir karakteri küçük harfe çevirmek için toLowerCase() kullanılır.
console.log('Erem', [0].toLowerCase()); // e


//indexOf() karakterinin kaçıncı indexte olduğunu bulur.
//indexOf() karakterinin bulunmadığında -1 döndürür.
//lastIndexOf() fonksiyonu indexOf() gibi çalışır fakat sondan başlayarak arama yapar.
//repeat() fonksiyonu bir stringi belli bir sayıda tekrarlar.
//startsWith() fonksiyonu bir stringin başına belli bir karakter var mı diye bakar.
//endsWith() fonksiyonu bir stringin sonuna belli bir karakter var mı diye bakar.
//includes() fonksiyonu bir stringin içinde belli bir karakter var mı diye bakar.
//trim() fonksiyonu bir stringin başı ve sonundaki boşlukları siler.
//replace() fonksiyonu bir stringi belli bir karakteri bir stringe değiştirir.
//split() fonksiyonu bir stringi bir stringe bölüp bir diziye atar.
let str = "Erem Şimşek";
console.log(str.indexOf('ş')); // 5
console.log(str.indexOf('ş', 6)); // -1
console.log(str.lastIndexOf('ş')); // 10
console.log(str.lastIndexOf('ş', 6)); // 5
console.log(str.includes('ş')); // true
console.log(str.includes('ş', 6)); // false
console.log(str.startsWith('E')); // true
console.log(str.startsWith('E', 1)); // false
console.log(str.endsWith('ş')); // true
console.log(str.endsWith('ş', 1)); // false
console.log(str.repeat(3)); // Erem Şimşek Erem Şimşek Erem Şimşek
console.log(str.replace('Şimşek', 'Software')); // Erem Software
console.log(str.split(' ')); // ["Erem", "Şimşek"]