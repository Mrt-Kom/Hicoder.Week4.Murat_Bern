// Parca isimlerinin miktari
let solution2= numberOfTools([{name:'Arac tavani', num:1}, {name:'kapi', num:4}, {name:'bagaj kapagi', num:2}, {name:'motor', num:2}, {name:'ön camurluklar', num:2}, {name:'ön camurluklar', num:2}]);

function numberOfTools(tools){
    let toolNumbers = tools.map(el => el.num);
    return toolNumbers;
}
console.log(solution2);
