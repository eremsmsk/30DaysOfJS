// Geri çağırılan fonksiyon(rekürsif)
function ask(question, yes, no) { // question, yes ve no değişkenleri alır.
    if (confirm(question)) { // confirm kullanıcıya soru sorar ve true veya false değerini döndürür.
        yes(); // evet ise yes() fonksiyonunu çalıştır
    }
    else {
        no(); // hayır ise no() fonksiyonunu çalıştır
    }
}

function showOk() {
    alert("Ok");
}

function showCancel() {
    alert("Cancel");
}

ask("Do you agree?", showOk, showCancel); // Do you agree? sorunu sorar ve evet veya hayır seçeneğiyle cevap alır.
// Eğer evet seçilirse showOk() fonksiyonunu çalıştırır.
// Eğer hayır seçilirse showCancel() fonksiyonunu çalıştırır.
