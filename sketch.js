var dog;;
var happyDog ;
var database;;
var foodS;
var foodStock;

function preload()
{
  dog=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  PetDog=createSprite(200,100,50,50);
  PetDog.addImage("dog",dog);
}
//Function to read values from DB
function readStock(data){
  foodS=data.val();
}
//Fuction to write value in DB
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here

}



