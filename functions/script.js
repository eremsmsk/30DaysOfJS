// Fonksiyonlar, kodların tekrarını önlemek için kullanılır.

// Örnek: 
// function sum(a, b) {
//     return a + b;
// }

// local değişkenler: Fonksiyonun içinde tanımlanan değişkenlerdir.
// global değişkenler: Fonksiyonun dışında tanımlanan değişkenlerdir.

function showMessage() {
    let c = "Erem Şimşek"; // local değişken
    console.log(c); // Erem Şimşek
}

showMessage(); // Erem Şimşek
console.log(c); // undefined değerini verir çünkü c değişkeni local değişkendir.

// global değişken
let d = "Erem Şimşek"; // global değişken
function getFullName() {
    console.log("Merhaba "+d); // Merhaba Erem Şimşek
}
getFullName(); // Merhaba Erem Şimşek