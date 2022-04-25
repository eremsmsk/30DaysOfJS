/* 
    DOM: Document Object Model (DOM) dokümandaki nesnelere erişmek ve içeriğini, stilini, yapısını değiştirmek için kullanılır.
    DOM Yapısını bir ağaç olarak düşünebilirsiniz. En tepede yani kökte HTML etiketi, 
    onun altında ise içerisine yazılmış diğer etiketler bulunur.
    Örneğin, HTML sayfalarını indiren ve bunları işleyen sunucu tarafı komut dosyaları da DOM kullanabilir. 
    Yine de spesifikasyonun yalnızca bir bölümünü destekleyebilirler.
*/

/**
 * let val;
 * val = window.document; // document nesnesi
 * val = document;
 * val = window.head; // head nesnesi
 * val = document.body; // body nesnesi
 * val = document.URL; // URL
 * val = document.title; // title
 * val = document.all; // tüm etiketler
 * val = document.domain; // domain
 * val = document.images; // tüm resimler
 * val = document.forms; // tüm formlar
 * val = document.links; // tüm linkler
 * val = document.scripts; // tüm scriptler
 * val = document.scripts[0]; // scriptlerin ilk elemanı
 * val = document.scripts[0].getAttribute("src"); // scriptlerin ilk elemanının src özelliği
 * val = document.location; // location
 * val = document.forms[0]; // formların ilk elemanı
 * val = document.forms[0].id; // formların ilk elemanının id'si
 * val = document.forms[0].method; // formların ilk elemanının methodu
 * val = document.forms[0].action; // formların ilk elemanının action'u
 * console.log(val);
 */

// Arama özelliği: getElement*(), querySelector*()
// getElementById() -> id'ye göre bir etiketi getirir.

// task-title id'li etiketi al ve daha sonra background özelliğini değiştir.
let val = document.getElementById("task-title");
val.style.background = "red";

// querySelectorAll() -> CSS sorgusu ile tüm etiketleri getirir.
let val2 = document.querySelectorAll("li");
for (let i = 0; i < val2.length; i++) {
    val2[i].style.color = "red";
}

// querySelector() -> CSS sorgusu ile bir etiketi getirir.
for(let elem of document.body.children) {
    if(elem.matches("a[href$='.com']")) {
        console.log("Referans " + elem.href); // Referans https://www.google.com
    }
}

/*
    document.getElementById(id): id niteliği ile eşleşen ilk kaydı getirir.
    document.getElementsByName(name): name niteliği ile eşleşen tüm kayıtları dizi olarak  getirir.
    document.getElementsByTagName(etiketadı):etiket adı ile eşleşen tüm kayıtları dizi olarak getirir.
    document.getElementsByClassName(classAdı):class niteliği ile eşleşen tüm kayıtları dizi olarak getirir.
    document.querySelector(seçici): seçici ile eşleşen ilk kaydı getirir.
    document.querySelectorAll(seçici): seçici ile eşleşen tüm kayıtları dizi olarak getir.
*/