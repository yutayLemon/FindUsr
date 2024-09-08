(async function(){
    
var locationTable = await fetch("locatTable.json");
locationTable = await locationTable.json();
var Table = await fetch("table.json");
Table = await Table.json();

var h = 3508/4;
var w = 2480/4;
var mousePos = {};
//var edgePoints= {};
mousePos.x =0;
mousePos.y = 0;
const canvas =document.querySelector("canvas");
canvas.width =w;
canvas.height = h;
const ctx = canvas.getContext("2d",{willReadFrequently:true});
var instances = [];



document.querySelector(".info").textContent = "hover";
document.querySelector(".idFind").addEventListener("click",()=>{
   var Index =  locationTable[sdbm(document.querySelector(".idInput").value)];
    if(Index == undefined){
        console.log("invalid");    
    }else{
    instances = Table[locationTable[sdbm(document.querySelector(".idInput").value)]];
   
    ctx.clearRect(0,0,w,h);
   drawInstances();
    }
    });
    

document.querySelector("canvas").addEventListener("mousemove",(e)=>{
    ctx.clearRect(0,0,w,h);
    
    drawInstances();
    ctx.beginPath();
    ctx.fillStyle = "grey";
    ctx.setLineDash([2,2]);
    ctx.moveTo(0,e.offsetY);
    ctx.lineTo(w,e.offsetY);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillStyle = "grey";
    ctx.setLineDash([2,2]);
    ctx.moveTo(e.offsetX,0);
    ctx.lineTo(e.offsetX,h);
    ctx.stroke();
    
    document.querySelector(".info").textContent = "x:" + Math.floor(100*e.offsetX*(21/w))/100 + "cm, y:"+Math.floor(100*e.offsetY*(29.7/h))/100 + "cm,        " + instances.length + " instances";
});


    
function drawInstances(){
    for(var i = 0;i<instances.length;i++){
        ctx.fillStyle = "red";
        ctx.fillRect(instances[i][0]/4,instances[i][1]/4,1,1);
       
    }
}
})();
