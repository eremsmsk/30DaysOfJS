// Döngüler, aynı işlemleri tekrarlayan kodların yazılması için kullanılır.
// While Döngüsü: Koşul sağlanana kadar döngüyü devam ettirir.
// Do While Döngüsü: Döngüyü önce döngüyü çalıştırır, sonra koşul sağlanana kadar devam eder.

let i = 0;
while (i < 10) {
    console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    i++;
}

let j = 0;
do {
    console.log(j); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    j++;
} while (j < 10);

// For Döngüsü: Döngüyü önce başlatır, sonra koşul sağlanana kadar devam eder.
// for(başlangıç; koşul; artış)
for (let k = 0; k < 10; k++) {
    console.log(k); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}

// Break ve Continue: Döngülerde kullanılan iki komutun çalıştırılmasını durdurur.
// Break döngüyü tamamlar ve döngünün sonuna atlar. 
// Continue döngüyü devam eder.

while (true) {
    let r = Math.floor(Math.random() * 10); // 0 ile 9 arasında rastgele sayı üretir.
    if (r === 5) { 
        break; // 5'e eşitse döngüden çık
    }
    console.log(r); 
}

// For döngüsü için continue kullanımı
for (let l = 0; l < 10; l++) {
    if (l === 5) {
        continue; // 5'e eşitse döngüyü devam et
    }
    console.log(l);  // 0, 1, 2, 3, 4, 6, 7, 8, 9
}