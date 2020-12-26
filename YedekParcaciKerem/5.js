//Her parcanin sonuna parcanin sisteme girildigi tarih

let solution5= addDateAndTime([{name:'Arac tavani', num:1}, {name:'kapi', num:4}, {name:'bagaj kapagi', num:2}, {name:'motor', num:2}, {name:'ön camurluklar', num:2}, {name:'ön camurluklar', num:2}]);

function addDateAndTime(tools){
   let min = 2000,
       max = 2020,
       list=[],
       str='KEREMAG_';
   let toolNames = tools.map(el => el.name);
   for(let i = 0; i < toolNames.length; i++){
      list.push(str.concat(toolNames[i]+" "
      +Math.ceil(Math.random() * 12)+"/"
      +Math.ceil(Math.random() * 28)+"/"
      +Math.floor(Math.random() * (max - min) + min))+" saat "
      +Math.round(Math.random() * 24)+":"
      +Math.round(Math.random() * 60)+" sisteme eklendi");
   }
   return list;
}
console.log(solution5);








