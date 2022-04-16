// if -> parantez içindeki ifadeyi kontrol eder. eğer ifade true ise işlemi yapar. eğer false ise işlemi yapmaz.
// else -> ifade false ise işlemi yapar.
let year = prompt("Please enter the year", "");
if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log("Leap year");
} else {
    console.log("Not leap year");
}

let year2 = prompt("Please enter the year", "");
if(year2 < 2000) {
    console.log("year is less than 2000");
} else if(year2 > 2000 && year2 < 2100) {
    console.log("year is between 2000 and 2100");
} else {
    console.log("year is greater than 2100");
}

// switch -> switch case içerisinde bulunan değerleri kontrol eder. eğer bulunan değer switch case içerisinde bulunan değerlere eşit ise işlemi yapar.
let day = prompt("Please enter the day", "");
switch(day) {
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    case "Wednesday":
        console.log("Wednesday");
        break;
    case "Thursday":
        console.log("Thursday");
        break;
    case "Friday":
        console.log("Friday");
        break;
    case "Saturday":
        console.log("Saturday");
        break;
    case "Sunday":
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}