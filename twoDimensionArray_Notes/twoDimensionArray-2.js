/**
 * Herhangi bir derste 70 uzeri alan ögrencilerin listesi
 * satir satir veya sütun sütun bakilabilirdi
 */

function findEachSubjectAverage(notes, subjects){
    let hardworkingStudents=[];
    for (let row=0;row<notes.length;row++){
        for (let column=1;column<subjects.length+1;column++){
            if (notes[row][column] > 70){
                hardworkingStudents.push(notes[row][0]);
                break;
            }
        }
    }
    return hardworkingStudents;
}

let bests = findEachSubjectAverage([
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