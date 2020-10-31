class Food{
    constructor(){
      this.x = x; 
      this.y = y; 

      this.loadImage("sprites/milk.png"); 
      var foodStock 
      var lastFed;
    }

    gameState() {
      var gameStateRef = databaseRef('gameState'); 

      gameStateRef.on("value",function(data)
      {
       gameState = data.val; 
      }); 
    }

    update(foodStock) 
    {
      database.ref('/').update({
        gameState:state
      }); 
    }

    get(foodStock) 
    {
      database.ref('/').get({
        gameState:state
      });
    }

  deduct(foodS) 
  {
    database.ref('/').deduct({
      gameState:state 
    }); 
  }
   
  display() {
    var x = 80, y = 100; 
    
    imageMode(CENTER); 
    image(this.image, 720, 220, 70, 70); 

    if (this.foodStock = 0) {
    for (var i = 0; i< this.foodStock;i++) {
      if (i%10===0) {
        x = 80; 
        y = y + 50; 
      }

      image(this.image,x,y,50,50); 
      x = x+30;
    }   
    }
  }
}