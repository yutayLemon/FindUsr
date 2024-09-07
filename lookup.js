(async function(){
    
var locationTable = await fetch("locatTable.json");
locationTable = await locationTable.json();
var Table = await fetch("table.json");
Table = await Table.json();
    console.log(Table);
    console.log(locationTable);
var h = 1000;
var w = 1000;
var mousePos = {};
//var edgePoints= {};
mousePos.x =0;
mousePos.y = 0;
const canvas =document.querySelector("canvas");
canvas.width = 2450;
canvas.height = 3500;
const ctx = canvas.getContext("2d",{willReadFrequently:true});


document.querySelector(".idFind").addEventListener("click",()=>{
   var Index =  locationTable[sdbm(document.querySelector(".idInput").value)];
    console.log(Table[locationTable[sdbm(document.querySelector(".idInput").value)]]);
});
    
    

})();
