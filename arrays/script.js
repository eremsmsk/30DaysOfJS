// Boş bir diziyi 2 şekilde oluşturabiliriz.
// let years = [];
// let years = new Array();
// Dizi elemanları her zaman 0. indisinde başlar.

let years = [1990, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018];

console.log(years[0]); // 1990
console.log(years[1]); // 1992

// Dizi içerisindeki istediğimiz elemanı değiştirebiliriz.
years[0] = 2022; // Yeni dizimiz içerisindeki 0. elemanın değeri 2022 olarak değiştirildi.
console.log(years); // [2022, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018]
console.log(years.length); // 15

// Diziye yeni eleman ekleyebiliriz.
years[years.length] = 2020; // Dizi içerisindeki son elemanının sonuna 2020 elemanı eklendi.
console.log(years); // [2022, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, 2020]

// Push pop methodları hızlı çalışır fakat shift unshift methodları ise yavaştır
// pop() metodu ile dizi içerisindeki son elemanı sileriz.
years.pop(); // Dizi içerisindeki son elemanı siler.
console.log(years); // [2022, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018]

// push() metodu ile dizi içerisindeki son elemanı ekleriz.
years.push(2030); // Dizi içerisindeki son elemanının sonuna 2030 elemanı eklendi.
console.log(years); // [2022, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, 2030]

// shift() metodu ile dizi içerisindeki ilk elemanı sileriz.
years.shift(); // Dizi içerisindeki ilk elemanı siler.
console.log(years); // [1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, 2030]

// unshift() metodu ile dizi içerisindeki ilk elemanı ekleriz.
years.unshift(1980); // Dizi içerisindeki ilk elemanının başına 1980 elemanı eklendi.
console.log(years); // [1980, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, 2030]

// splice() metodu ile dizi içerisindeki elemanları değiştirebiliriz.
years.splice(1, 2); // Dizi içerisindeki 1. elemanının 2. elemanından sonraki elemanları siler.
console.log(years); // [1980, 1992, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, 2030]

// Loops
// For Loop - Birçok işlemi tekrarlayan bir döngüdür. Eski bir yöntemdir.

for (let i = 0; i < years.length; i++) {
    console.log(years[i]); // 1980, 1992, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, 2030
}

// Yeni yöntem ise ES6 ile gelen for of loop.
for (let year of years) {
    console.log(year); // 1980, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, 2030
}

// Diziler aynı zamanda dizi olan öğelere sahip olabilirler Bunu çok boyutlu diziler için kullanılır. Örneğin: matrix.

let matrix = [ 
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][0]); // 1

// Not: length özelliği dizinin son sayısal değerinin bir fazlasını verir. Örneğin: [1, 2, 3].length = 3