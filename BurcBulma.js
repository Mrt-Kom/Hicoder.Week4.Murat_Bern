let ay = prompt("Dogdugunuz Ayi Giriniz");
let gun = prompt("Dogdugunuz Günü Giriniz");
if ((ay==12 && gun>=21) || (ay==1 && gun<=20)){
    console.log("Oglak Burcusunuz");
}
else if ((ay==1 && gun>=21) || (ay==2 && gun<=19)){
    console.log("Kova Burcusunuz");
}
else if ((ay==2 && gun>=20) || (ay==3 && gun<=20)){
    console.log("Balik Burcusunuz");
}
else if ((ay==3 && gun>=21) || (ay==4 && gun<=20)){
    console.log("Koc Burcusunuz");
}
else if ((ay==4 && gun>=21) || (ay==5 && gun<=20)){
    console.log("Boga Burcusunuz");
}
else if ((ay==5 && gun>=21) || (ay==6 && gun<=21)){
    console.log("Ikizler Burcusunuz");
}
else if ((ay==6 && gun>=22) || (ay==7 && gun<=22)){
    console.log("Yengec Burcusunuz");
}
else if ((ay==7 && gun>=23) || (ay==8 && gun<=23)){
    console.log("Aslan Burcusunuz");
}
else if ((ay==8 && gun>=24) || (ay==9 && gun<=23)){
    console.log("Basak Burcusunuz");
}
else if ((ay==9 && gun>=24) || (ay==10 && gun<=23)){
    console.log("Terazi Burcusunuz");
}
else if ((ay==10 && gun>=24) || (ay==11 && gun<=22)){
    console.log("Akrep Burcusunuz");
}
else {
    console.log("Yay Burcusunuz");
}

alert( 1 || 0 ); // 1 (1 doğru)
alert( true || 'önemsiz' ); // (true doğru)

alert( null || 1 ); // 1 (1 tek doğru veri)
alert( null || 0 || 1 ); // 1 (1 tek doğru veri)
alert( undefined || null || 0 ); // 0 (Hepsi yanlış sonuncusunu döner)

// Eğer ilk opedan doğru ise her halükarda ikincinin değeri dönecek.
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5


// İlk operand yanlış ise ilk operandı döner ikinci operand pas geçilir.

alert( null && 5 ); // null
alert( 0 && "önemi yok" ); // 0


2
3
4

3
4
var sayi1 = 60;
var sayi2 = 15;
var sonuc = sayi1 % sayi2;
document.write(sonuc);
let array = [1,2,3];
console.log(array[0]);
console.log(array[2]);
console.log(array[array.length/2])