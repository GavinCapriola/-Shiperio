class Form {

  constructor() {
    this.logoImage = "Shiperio/Title.GIF"
    this.logo = createImg(this.logoImage);

    this.CreateGame = createButton("Create Game");
    this.Login = createButton("Login");

    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.close = createButton('Close');
    this.text = createElement('h3');
  }
  hideElements() {
    this.CreateGame.hide();
    this.Login.hide();
   
    // this.close.hide();
    this.greeting.hide();
    this.text.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  setElementPosition() {
    this.logo.position(displayWidth/2 - 150, 10);
    this.CreateGame.position(displayWidth/2 - 50, height / 2 - 100);
    this.Login.position(displayWidth/2 - 30, height / 2);
    this.reset.position(displayWidth-100,20);
  }

  setElementStyle() {
    this.CreateGame.class("customButton");
    this.Login.class("customButton");
  }

  handleOnpress() {
    this.CreateGame.mousePressed(() => {
      this.hideElements();
      creategame.display();
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });
      
    this.Login.mousePressed(() => {
      this.hideElements();
      login.display();
    });
      
    // this.close.mousePressed(()=>{
    //   this.text.hide();
    //   this.close.hide();
    // });
  }

  display() {
    this.setElementStyle();
    this.setElementPosition();
    this.handleOnpress();
    if (gameState === 1){
      this.CreateGame.hide();
      this.Login.hide();
      this.greeting.hide();
      this.text.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.logo.hide();
      this.reset.hide();
    }
  }
}

// this.text.html("Instructions");
// this.text.position(displayWidth/2 - 45, displayHeight/3);


//   display(){
//     // this.title.html("Shiperio");
//     // this.title.position(displayWidth/2 - 50, 0);
//     this.logo.position(displayWidth/2 - 150, 10);

//     this.input.position(displayWidth/2 - 80 , displayHeight/2 - 80);
//     this.button.position(displayWidth/2 - 20, displayHeight/2);
//     this.reset.position(displayWidth-100,20);

//     this.button.mousePressed(()=>{
//       this.input.hide();
//       this.button.hide();
//       // this.text.hide();

//       this.InstructionImg1 = "Shiperio/Instructions_1.jpg"
//       this.Instruction1 = createImg(this.InstructionImg1);
//       this.Instruction1.position(displayWidth/2 - 600, 310);

//       this.InstructionImg2 = "Shiperio/Instructions_2.jpg"
//       this.Instruction2 = createImg(this.InstructionImg2);
//       this.Instruction2.position(displayWidth/2 - 300, 310);

//       this.InstructionImg3 = "Shiperio/Instructions_3.jpg"
//       this.Instruction3 = createImg(this.InstructionImg3)
//       this.Instruction3.position(displayWidth/2 - 0, 310);

//       this.InstructionImg4 = "Shiperio/Instructions_4.jpg"
//       this.Instruction4 = createImg(this.InstructionImg4)
//       this.Instruction4.position(displayWidth/2 - -300, 310);

//       player.name = this.input.value();
//       playerCount+=1;
//       player.index = playerCount;
//       player.update();
//       player.updateCount(playerCount);
//       this.greeting.html("Hello " + player.name)
//       this.greeting.position(displayWidth/2 - 50, displayHeight/4);
//       this.text.html("Instructions");
//       this.text.position(displayWidth/2 - 45, displayHeight/3);
//       this.close.position(displayWidth/2 -100, displayHeight/2 + 280);
//     });

//     this.reset.mousePressed(()=>{
//       player.updateCount(0);
//       game.update(0);
//     });

//     this.close.mousePressed(()=>{
//       this.text.hide();
//       this.close.hide();
//     });

//   }


// class Welcome {
//   constructor() {
    // this.logoImage = "Shiperio/Title.GIF"
    // this.logo = createImg(this.logoImage);

    // this.CreateGame = createButton("Create Game");
    // this.Login = createButton("Login");
//     this.reset = createButton('Reset');
//     this.close = createButton('Close');
//     this.text = createElement('h3');
//   }

  // hideElements() {
  //   this.CreateGame.hide();
  //   this.Login.hide();
  //   this.close.hide();
  //   this.text.hide();
  // }

  // setElementPosition() {
  //   this.logo.position(displayWidth/2 - 150, 10);
  //   this.CreateGame.position(displayWidth/2 - 50, height / 2 - 100);
  //   this.Login.position(displayWidth/2 - 30, height / 2);
  //   this.reset.position(displayWidth-100,20);
  //   this.text.position(displayWidth/2 - 45, displayHeight/3);
  // }

  // setElementStyle() {
  //   this.CreateGame.class("customButton");
  //   this.Login.class("customButton");
  // }

  // handleOnpress() {
  //   this.CreateGame.mousePressed(() => {
  //     this.hideElements();
  //     creategame.display();
  //   });

//     this.reset.mousePressed(()=>{
//       player.updateCount(0);
//       game.update(0);
//     });

//     this.Login.mousePressed(() => {
//       this.hideElements();
//       login.display();
//     });

//     this.close.mousePressed(()=>{
//       this.text.hide();
//       this.close.hide();
//     });
//   }

//   display() {
//     this.setElementStyle();
//     this.setElementPosition();
//     this.handleOnpress();
//   }
// }