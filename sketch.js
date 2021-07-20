var box

var ar1=["Arun", "Amit", "Bharat",25];
console.log(ar1);
console.log(ar1[0]);
console.log(ar1[3]);
ar1.push("Samarth");
ar1.push(95);
console.log(ar1);
ar1.pop();
console.log(ar1);

var ar2=[[1,2],[4,5],[8,6],[2,5]];
console.log(ar2);
console.log(ar2[1][0])
console.log(ar2[2][1])

var marks=[78,89,82,91,95];
//var sum=marks[0]+marks[1]+marks[2]+marks[3]+marks[4];
var sum=0;
for(i=0;i<5;i++){
  sum=sum+marks[i];
}

console.log("Sum= ",sum);
var avg=sum/marks.length;

console.log("Average= ",avg);
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW))
{
  box.x=box.x+5;

}


  drawSprites();


}




