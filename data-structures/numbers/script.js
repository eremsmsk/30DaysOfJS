// Math.floor -> Aşağı yuvarlama işlemi yapar.
// Math.ceil -> Yukarı yuvarlama işlemi yapar.
// Math.round -> En yakın tam sayıya yuvarlama işlemi yapar. (Örnek: 5.5 -> 6, 5.6 -> 6, 5.4 -> 5)
// Math.random -> 0 ile 1 arasında rasgele bir sayı döndürür.
// Math.max -> En büyük sayıyı döndürür.
// Math.min -> En küçük sayıyı döndürür.
// Math.abs -> Sayıların mutlak değerini döndürür.
// Math.pow -> Sayıların üsünü döndürür.
// Math.sqrt -> Sayıların karekökünü döndürür.
// Math.PI -> Pi değerini döndürür.
// Math.E -> E değerini döndürür.
// Math.trunc -> Sayıların tam sayılarını döndürür. (Örnek: 5.5 -> 5, 5.6 -> 5, 5.4 -> 5)
// Math.log -> Sayıların logaritmasını döndürür.

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.SQRT1_2); // 0.7071067811865476
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046
console.log(Math.LOG2E); // 1.4426950408889634
console.log(Math.LOG10E); // 0.4342944819032518
console.log(Math.abs(-10)); // 10
console.log(Math.ceil(10.1)); // 11
console.log(Math.floor(10.9)); // 10
console.log(Math.round(10.5)); // 11
console.log(Math.random()); // 0.96739086
console.log(Math.random() * 10); // 9.96739086
console.log(math.floor(Math.random() * 10 + 1)); // 10
console.log(Math.max(10, 20, 30, 40, 50)); // 50
console.log(Math.min(10, 20, 30, 40, 50)); // 10
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(9)); // 3
console.log(Math.log(10)); // 2.302585092994046
console.log(Math.log10(10)); // 1
console.log(Math.log2(10)); // 3
console.log(Math.sin(0)); // 0
console.log(Math.cos(0)); // 1
console.log(Math.tan(0)); // 0
console.log(Math.asin(0)); // 0
console.log(Math.acos(0)); // 1.5707963267948966
console.log(Math.atan(0)); // 0
console.log(Math.atan2(0, 0)); // 0
console.log(Math.exp(0)); // 1
console.log(Math.pow(10, 2)); // 100
console.log(Math.pow(2, 10)); // 1024


// isNaN -> Sayısal değilse true döndürür. (Örnek: "1" -> false, "1a" -> true)
// NaN -> Bir hata oluşturduğunda döndürür.
console.log(isNaN(10)); // false
console.log(isNaN("string")); // true

// ParseInt -> String değerini sayısal değere çevirir. (Örnek: "1" -> 1, "1a" -> 1)
// ParseFloat -> String değerini sayısal değere çevirir. (Örnek: "1" -> 1, "1a" -> 1.0)
console.log(parseInt("10px")); // 10
console.log(parseFloat("12.5rem")); // 12.5
console.log(parseFloat("12.3.4")); // 12.3