const renk=["kirmizi", "siyah"];
const marka = ["BMW", "Audi", "VW"];
let aracRenk = prompt("Aracin rengini giriniz");
let aracMarka = prompt("Aracin markasini giriniz");
let aracCikisYili=prompt("Aracin piyasaya cikis yili kactir","");
let musteriYil=prompt("Kac yillik müsterisiniz","");
if (musteriYil >= 5 && (aracMarka == marka[0] || aracMarka == marka[1] ||aracMarka == marka[2])){
    console.log("Eski Musterisiniz,Cabbar Usta her türlü sizin arabanizi tamir eder ");
}else if ((aracMarka == marka[0] && ( aracCikisYili <= 2019 && aracCikisYili >= 2010) && aracRenk == renk[0] ) || (aracMarka == marka[0] && aracCikisYili == 2020 && aracRenk == renk[1])){
    console.log("Cabbar Usta sizin BMW'nizi tamir eder");
}
else if (aracMarka == marka[1] && (( aracCikisYili <= 2010 && aracCikisYili >= 2005) || ( aracCikisYili <= 2020 && aracCikisYili >= 2014))) {
    console.log("Cabbar Usta sizin Audi'nizi tamir eder");
}
else if (aracMarka == marka[2] && aracRenk == renk[1] && ( aracCikisYili <= 2018 && aracCikisYili >= 2001)) {
    console.log("Cabbar Usta sizin VW'nizi tamir eder");
}
else {
    console.log("Cabbar Usta sizin arabanizi tamir etmez");
}