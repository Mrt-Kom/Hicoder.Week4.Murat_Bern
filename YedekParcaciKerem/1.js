// Parca isimleri büyük harflere
let solution1= reverseToolNames([{name:'Arac tavani', num:1}, {name:'kapi', num:4}, {name:'bagaj kapagi', num:2}, {name:'motor', num:2}, {name:'ön camurluklar', num:2}, {name:'ön camurluklar', num:2}]);

function reverseToolNames(tools){
    let toolNames = tools.map(el => el.name);
    for(let i = 0; i < toolNames.length; i++){
        toolNames[i] = toolNames[i].toUpperCase();
    }
    return toolNames;
}
console.log(solution1);