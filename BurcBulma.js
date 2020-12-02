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