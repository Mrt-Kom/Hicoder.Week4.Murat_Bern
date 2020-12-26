//Her parcanin basina KEREMAG_

let solution4= reverseToolNames([{name:'Arac tavani', num:1}, {name:'kapi', num:4}, {name:'bagaj kapagi', num:2}, {name:'motor', num:2}, {name:'ön camurluklar', num:2}, {name:'ön camurluklar', num:2}]);

function reverseToolNames(tools){
    let toolNames = tools.map(el => el.name),
    list=[],
    str='KEREMAG_';
    for(let i = 0; i < toolNames.length; i++){
        list.push(str.concat(toolNames[i]));
    }
    return list;
}
console.log(solution4);