let now = new Date();

console.log(now);

// Parantez içine "0" yazarsak 01.01.1970 UTC+0 olur.

let date = new Date(0);
console.log(date);

// new Date(year, month, day, hours, minutes, seconds, milliseconds)

new Date(2020, 0, 1, 10, 10, 10, 10); // Wed Jan 01 2020

let date2 = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log(date2); // Sat Jan 01 2011 02:03:04 GMT+0200 (GMT+02:00)

/* 
Metodlar
    getfullyear() : Yılı döndürür.
    getmonth() : Ayı döndürür.
    getdate() : Günü döndürür. 
    gethours() : Saati döndürür.
    getday() : Günü döndürür. Pazar = 0, Pazartesi = 1, Salı = 2, Çarşamba = 3, Perşembe = 4, Cuma = 5, Cumartesi = 6.
    getminutes() : Dakikayı döndürür.
    getseconds() : Saniyeyi döndürür.
    getmilliseconds() : Milisaniyeyi döndürür.
    gettime() : Zamanı döndürür.
    gettimezoneoffset() : Zaman dilimini döndürür.
*/

let date3 = new Date();

console.log(date3.getFullYear()); // 2020
console.log(date3.getMonth()); // Ocak
console.log(date3.getDate()); // 1
console.log(date3.getHours()); // 10
console.log(date3.getDay()); // Çarşamba
console.log(date3.getMinutes()); // 10
console.log(date3.getSeconds()); // 10
console.log(date3.getMilliseconds()); // 10
console.log(date3.getTime()); // 1578014400000
console.log(date3.getTimezoneOffset()); // 240
