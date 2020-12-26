/**
 * Ortalama ve totali iki defa yazdim,
 * Babam sifirlamaktan anlasaydi banada ögretirdi (!!)
 * kolay bir yolu vardir mutlaka 
 */

function findStudentsOverAverageEachSubject(notes, subjects){
    let averageList=[];
    let total = 0;
    let average = 0.0;
    for (let column=1;column<subjects.length+1;column++){
        for (let row=0;row<notes.length;row++){
            total += notes[row][column];
        }
        average = total / notes.length;
        averageList.push(average); 
        total = 0; // !!
        average = 0.0;
    }
    return [`Ortalamasi en yüksek olan ders ${subjects[averageList.indexOf(Math.max(...averageList))]}`,
            `Ortalamasi en düsük olan ders ${subjects[averageList.indexOf(Math.min(...averageList))]}`];
}

let maxAndMinAverageSubject = findStudentsOverAverageEachSubject([
    ["Hans", 80, 90, 10, 50], 
    ["Ulrich", 94, 36, 76, 74], 
    ["Olaf", 30, 60, 34, 78], 
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62]
],["Math", "German", "English", "Geography"]);

console.log(maxAndMinAverageSubject);