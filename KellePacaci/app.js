let age = prompt("Kelle Pacaci Necip Usta et aldigi ciftlikte kac hayvan bacagi var diyor mu? 'evet' veya baska birsey yazin.");
if (age == "evet") {
    let totalleg;
    const animals = ['inek', 'inek', 'tavuk', 'tavuk', 'domuz', 'koyun', 'inek', 'inek', 'tavuk', 'tavuk', 'domuz', 'koyun', 'inek', 'inek', 'tavuk', 'tavuk', 'domuz', 'koyun'];
    x = animals.filter(leg => leg === 'inek');
    y = animals.filter(leg => leg === 'tavuk');
    z = animals.filter(leg => leg === 'domuz');
    t = animals.filter(leg => leg === 'koyun');
    totalleg = ((x.length + z.length + t.length) * 4) + (y.length * 2);
    alert("toplam hayvan bacagi sayisi : " + (totalleg));
}
else {
    alert("Amacin ne Necip Usta")
}