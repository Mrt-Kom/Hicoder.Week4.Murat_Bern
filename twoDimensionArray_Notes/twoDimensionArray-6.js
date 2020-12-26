/**
 * önce her dersin maximum notlarini buldum
 * sonra bulunan bu notlarla ayni satirda olan ögrencinin ismini buldum  
 */

function findStudentsOverAverageEachSubject(notes, subjects){
    let bestStudentsNotes=[];
    for (let column=1;column<subjects.length+1;column++){
        let maximumNot = notes[0][column];
        for (let row=0;row<notes.length;row++){
            if (notes[row][column] > maximumNot){
                maximumNot = notes[row][column];
            }
        }
        bestStudentsNotes.push(maximumNot);
    }

    let bestStudentsEachLesson=[];
    for (let column=1;column<subjects.length+1;column++){
        for (let row=0;row<notes.length;row++){
            if (notes[row][column] == bestStudentsNotes[column-1]){
                bestStudentsEachLesson.push(notes[row][0]);
            }
        }
    }
    console.log(`Her Dersin En iyi ögrencilerinin Notlari : ${bestStudentsNotes} `);
    return `Her Dersin En iyi ögrencileri Listesi Sirasiyla : ${bestStudentsEachLesson}`;
}

let bests = findStudentsOverAverageEachSubject([
    ["Hans", 80, 90, 10, 50], 
    ["Ulrich", 94, 36, 76, 74], 
    ["Olaf", 30, 60, 34, 78], 
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62]
],["Math", "German", "English", "Geography"]);

console.log(bests);