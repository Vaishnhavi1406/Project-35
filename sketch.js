var gameState = 0;  
var dog; 
var happydog; 
var foodS, foodstock;
var fedTime, lastFed, addFood; 
var foodObj;  
var database;

function preload()
{
  dog = loadImage("sprites/dogImg.png"); 
  
  happy = loadImage("sprites/dogImg1/png"); 
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(330,200,30,40); 
  dog.addImage(dog);

  foodObj = new Food(330,190,30,40); 

  foodstock = database.ref('Food'); 

  foodstock.on("value",readStock);
  
  feedTime = createButton("Feed the dog"); 
  feedTime.position(700,95);
  feedTime.mousePressed(feedDog); 

  addFood = createButton("Add food"); 
  addFood.position(800,95); 
  addFood.mousePressed(addFood);
}


function draw() {  
  background(46, 139, 87); 

  feedTime = database.ref('Feed Time');
  feedTime.on("value",function(data){
    lastFed = data.val();
  }); 

  drawSprites();

  database.text ("Press the UP_ARROW key to feed the dragon milk"); 
  fill(255,255,254); 
  textSize(15);
  
  if(lastFed>=12) {
    text("Last Feed:" + lastFed%12 + "PM",350,30); 
  }else if (lastFed == 0) {
    text("Last Feed : 12 AM")
  }else{
    text("Last Feed :" + lastFed + "AM", 350,30);
  }
}

function readStock(data) {
  foodS = data.val(0); 
}

function writeStock(x) {
  if (x<=0) {
    x = 0; 
  }else {
    x = x-1; 
  }
  database.ref('/').update({
    Food:x
  })
}


function feedDog() {
  dog.addImage(happyDog); 

  foodObj.updateFoodStock(foodObj.getFoofStock()-1); 
  database.ref('/').update({
  Food:foodObj.getFoofStock(), 
  feedTime:hour()   
  })
}

function addFood() {
  foodS++; 
  database.ref('/').update({
    Food:foodS
  })
}