var dog;;
var happyDog ;
var database;;
var foodS;
var foodStock;

function preload()
{
  dog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  PetDog=createSprite(300,300,10,10);
  PetDog.addImage(dog);
  PetDog.scale=0.2;
}
//Function to read values from DB
function readStock(data){
  foodS=data.val();
}
//Fuction to write value in DB
function writeStock(x){
  if (x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  PetDog.addImage(happyDog);
}
  drawSprites();
  fill("White");
  textSize(20);
  text("NOTE:press UP ARROW key to feed Drago milk",50,30);
  text("food remaining:"+foodS,200,200);
}



