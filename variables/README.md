# Var - Let - Const

<h3> VAR </h3>

<p> var ile tanımlanan değişkenlerin kapsamı diğerlerinden daha fazladır. </p>
    <li> var ile tanımlanan değişkenler daha sonra değiştirilebilir </li>
    <li> Var ile tanımlanan değişlenler kodun herhangi bir yerinde ve birden fazla kez kullanılabilir . Ya da tekrar tanımlanabilir. </li>
    <li> Var ile tanımlanan değişkenler fonksiyonların kapsamı içerisindedir (function scope) yani fonksiyon içerisinde Var kullanılarak tanımlanmış değişkenlere fonksiyon dışından erişim sağlanamaz. </li>


<h3> LET </h3>

<p> let ile tanımlanmış değişkenler sadece tanımlandığı kapsamda ulaşılabilir. Block scope'dan kasıt her bir süslü parantezin içerisidir. Sonradan tekrar değiştirilebilir aynı kapsam(scope) içerisinde sadece bir sefer tanımlanabilir. Tekrar tanımlanmaya çalıştığında hata verr ve çalışmayı durdurur</p>

<h3> CONST </h3>

<p> const ile tanımlanmış bir değişken let kullanımında olduğu gibi tanımlandığı kapsam(block scope) içerisinden erişilebilir ve bunun dışından erişimler sağlanmaz. const kelimesi aslında Constant yani sabit anlamını taşımaktadır. Kullanıldığı kapsam içerisinde sabittir ve değiştirilemez </p>

<hr>

<h5> Özetlemek gerekirse </h5>

   <li> let - modern bir değişken birimidir. </li>
   <li> var - eski usul bir değişken birimidir. Normal şartlarda hiç kullanılmaz ancak ihtiyaç duyulduğu takdirde kullanılmaktadır. </li>
   <li> const - let gibi ancak değişken değeri değiştirilemez. </li>
