document.addEventListener("keydown", keyDownHandler, false);// Обработчик событий
document.addEventListener("keyup", keyUpHandler, false);
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var shotPressed = false;
var collision = false;

//------------------------------------------------------------------------------------
var intro = document.getElementById('intro');
var games = document.getElementById('games'); // Игровое поле
var width = 800,// размеры игрового поля
  height = 500;
games.width = width;
games.height = height;
var hero = document.getElementById('hero');
var ex2Left = 20;
var ex2Top = 367;

//-------------------------------------------------------------------------------------
//Переменные времени
var startTime;
var stopTime;
var recordTime;

//-------------------------------------------------------------------------------------
// Переменные для игорвого поля
var brick = new Image();
var stairsLeft = new Image();
var stairsRight = new Image();
var vykl = new Image();
var doorClose1 = new Image();
var doorClose2 = new Image();
var doorClose3 = new Image();
var doorClose4 = new Image();
var doorOpen1 = new Image();
var doorOpen2 = new Image();
var doorOpen3 = new Image();
var doorOpen4 = new Image();
var vykl1 = new Image();
var vykl2 = new Image();
var vykl3 = new Image();
var vkl3 = new Image();

brick.src = 'img/block.png';
stairsLeft.src = 'img/stairsLeft.png';
stairsRight.src = 'img/stairsRight.png';
vykl.src = 'img/vykl.png';
doorClose1.src ='img/doorClose1.png';
doorClose2.src ='img/doorClose2.png';
doorClose3.src ='img/doorClose3.png';
doorClose4.src ='img/doorClose4.png';
doorOpen1.src ='img/doorOpen1.png';
doorOpen2.src ='img/doorOpen2.png';
doorOpen3.src ='img/doorOpen3.png';
doorOpen4.src ='img/doorOpen4.png';
vykl1.src ='img/vykl1.png';
vykl2.src ='img/vykl2.png';
vykl3.src ='img/vykl3.png';
vkl3.src ='img/vkl3.png';

var ctx = games.getContext("2d");

var map = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0],
  [0,14,0,0,0,0,0,0,0,0,0,0,0,6,0,0],
  [0,13,0,0,0,0,0,0,0,0,0,0,0,5,0,0],
  [0,12,0,0,0,0,0,0,0,0,0,0,0,4,0,0],
  [1,1,3,2,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,3,2,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,3,2,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,3,2,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,14,3,2,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,13,3,2,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,12,3,2,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,3,2,1,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,14],
  [0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,13],
  [0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,12],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

//-------------------------------------------------------------------------------------------------
//Отрисовка игрового поля.

var x = 50;
var y = 25;

  function draw() {
    clear();
    //console.log(ex2Left);

    if (ex2Left >= 700 && ex2Top >= 365){
      map[16][15] = 15;
    }

    if (ex2Left < 50 && ex2Top > 190 && ex2Top<192){
      map[9][1] = 15;
    }

    if (ex2Left < 50 && ex2Top < 16 && ex2Top > 14){
      map[2][1] = 15;
    }

    if (map[16][15] === 15 && map[9][1] === 15 && map[2][1] === 15) {
      map[4][13] = 8;
      map[3][13] = 9;
      map[2][13] = 10;
      map[1][13] = 11;
    }

    for (var j = 0; j < height / 25; j++) {
      for (var i = 0; i < width / 50; i++) {
        if (map[j][i] === 1) {
          ctx.drawImage(brick, i * x, j * y)
        }
        if (map[j][i] === 2) {
          ctx.drawImage(stairsRight, i * x, j * y)
        }
        if (map[j][i] === 3) {
          ctx.drawImage(stairsLeft, i * x, j * y)
        }
        if (map[j][i] === 4) {
          ctx.drawImage(doorClose1, i * x, j * y)
        }
        if (map[j][i] === 5) {
          ctx.drawImage(doorClose2, i * x, j * y)
        }
        if (map[j][i] === 6) {
          ctx.drawImage(doorClose3, i * x, j * y)
        }
        if (map[j][i] === 7) {
          ctx.drawImage(doorClose4, i * x, j * y)
        }
        if (map[j][i] === 8) {
          ctx.drawImage(doorOpen1, i * x, j * y)
        }
        if (map[j][i] === 9) {
          ctx.drawImage(doorOpen2, i * x, j * y)
        }
        if (map[j][i] === 10) {
          ctx.drawImage(doorOpen3, i * x, j * y)
        }
        if (map[j][i] === 11) {
          ctx.drawImage(doorOpen4, i * x, j * y)
        }
        if (map[j][i] === 12) {
          ctx.drawImage(vykl1, i * x, j * y)
        }
        if (map[j][i] === 13) {
          ctx.drawImage(vykl2, i * x, j * y)
        }
        if (map[j][i] === 14) {
          ctx.drawImage(vykl3, i * x, j * y)
        }
        if (map[j][i] === 15) {
          ctx.drawImage(vkl3, i * x, j * y)
        }
      }
    }
  }

  function clear() {
    ctx.clearRect(0, 0, width, height)
  }

  vkl3.onload = function () {
    var int = setInterval(draw, 100)
  };

  //--------------------------------------------------------------------------------------------------------------------------
  // Отрисовка и управление героем

function keyDownHandler(e) { // События
  if(e.keyCode === 39 || e.keyCode === 68 ) {
    rightPressed = true;
//    console.log(rightPressed)
  }
  if(e.keyCode === 37 || e.keyCode === 65) {
    leftPressed = true;
 //   console.log(leftPressed)
  }
  if(e.keyCode === 38 || e.keyCode === 87) {
    upPressed = true;
 //   console.log(upPressed)
  }
  if(e.keyCode === 40 || e.keyCode === 83) {
    downPressed = true;
    // console.log(downPressed)
  }
  if(e.keyCode === 32) {
    shotPressed = true;
    // console.log(downPressed)
  }
}

function keyUpHandler(e) {
  if(e.keyCode === 39 || e.keyCode === 68 ) {
    rightPressed = false;
  //  console.log(rightPressed)
  }
  if(e.keyCode === 37 || e.keyCode === 65) {
    leftPressed = false;
   // console.log(leftPressed)
  }
  if(e.keyCode === 38 || e.keyCode === 87) {
    upPressed = false;
   // console.log(upPressed)
  }
  if(e.keyCode === 40 || e.keyCode === 83) {
    downPressed = false;
   // console.log(downPressed)
  }
  if(e.keyCode === 32) {
    shotPressed = false;
    // console.log(downPressed)
  }
}

function moove() {
  if (leftPressed === false || rightPressed === false
    || upPressed === false || downPressed === false || shotPressed === true){
    hero.style.animation = "heroAnimation 800ms steps(9) infinite";
    hero.style.width = 60 + 'px';
    hero.style.height = 110 + 'px';
    if (ex2Left < 0) ex2Left += 2;
    if (ex2Left > games.width-88) ex2Left -= 2;
  }

  if (rightPressed === true && ex2Left < games.width-88 && ex2Top === 367
    || rightPressed === true && ex2Left < games.width-88 &&  ex2Top > 190 && ex2Top<192
    || rightPressed === true && ex2Left < games.width-88 && ex2Top < 16 && ex2Top > 14){
    ex2Left +=2;
    hero.style.left = ex2Left +'px';
    hero.style.animation = "heroAnimationRight 800ms steps(9) infinite";
    hero.style.width = 88 + 'px';
    hero.style.height = 110 + 'px';
  }

  if (leftPressed === true && ex2Left > -1 && ex2Top === 367
    || leftPressed === true && ex2Left > -1 &&  ex2Top > 190 && ex2Top<192
    || leftPressed === true && ex2Left >= -1 && ex2Top < 16 && ex2Top > 14){
    ex2Left -=2;
    hero.style.left = ex2Left +'px';
    hero.style.animation = "heroAnimationLeft 800ms steps(9) infinite";
    hero.style.width = 88 + 'px';
    hero.style.height = 110 + 'px';
  }

  if (upPressed === true && ex2Left < 640 && ex2Left > 600 && ex2Top >= 192
    || upPressed === true && ex2Left < 140 && ex2Left > 100 && ex2Top > 15 && ex2Top < 192){
    ex2Top -= 1;
    hero.style.top = ex2Top + 'px';
    hero.style.animation = "heroAnimationUpDown 800ms steps(9) infinite";
    hero.style.width = 69 + 'px';
    hero.style.height = 110 + 'px';
  }

  if (downPressed === true && ex2Left < 640 && ex2Left > 600 && ex2Top < 367 && ex2Top > 190
    ||downPressed === true && ex2Left < 140 && ex2Left > 100 && ex2Top < 191){
    ex2Top += 1;
    hero.style.top = ex2Top + 'px';
    hero.style.animation = "heroAnimationUpDown 800ms steps(9) infinite";
    hero.style.width = 69 + 'px';
    hero.style.height = 110 + 'px';
  }

  if (shotPressed === true && rightPressed === true ){
    hero.style.animation = "heroAnimationShotRight 800ms steps(9) 1";
    ex2Left -=2;
    hero.style.width = 93 + 'px';
    hero.style.height = 110 + 'px';
  }

  if (shotPressed === true && leftPressed === true ){
    hero.style.animation = "heroAnimationShotLeft 800ms steps(9) 1";
    ex2Left +=2;
    hero.style.width = 93 + 'px';
    hero.style.height = 110 + 'px';
  }

  if (collision === true){
    hero.style.animation = "heroAnimationDead 800ms steps(9) 1";
    hero.style.width = 106 + 'px';
    hero.style.height = 110 + 'px';
    clearInterval(setHero)
  }
}

var setHero = setInterval(moove, 1000/60);




/*function shot(direction){   //выстрел
  swordX = ex2Left + 60;
  console.log(swordX);
  if (direction === 'right' ){
    sword.src = 'img/hero/swordRight.png';
    flyRight();
    console.log(swordX);
  }
  if (direction === 'left' ){
    sword.src = 'img/hero/swordLeft.png';
    flyLeft();
  }
}

function flyRight (){
  sword.style.top = (ex2Top + 50) + 'px';
  offset += 3;
  swordX += offset;
  sword.style.left = swordX + 'px';
}

function flyLeft (){
  sword.style.top = (ex2Top + 50) + 'px';
  offset -= 3;
  swordX -= offset;
  sword.style.left = swordX + 'px';
}
*/

class shot{
  constructor(){    
    
    this.shot = function(direction){
     var sword = document.createElement('img');
     sword.style.width = '75px';
     sword.style.height = '15px';
     sword.style.position = 'absolute';
     sword.style.zIndex = '4';
      if (direction === 'left') {
        sword.src = 'img/hero/swordLeft.png';
        sword.style.left = ex2Left + 'px'
      }
      if (direction === 'right') {
        sword.src = 'img/hero/swordRight.png';
        sword.style.left = (ex2Left + 50) + 'px';
      }
      intro.appendChild(sword)
      sword.style.top = (ex2Top + 50) + 'px';      
    }
    var speed = 3;
    
    this.moove = function(direction){
      var swordLeft = ex2Left;
      if(direction === 'left')
      swordLeft -= speed;
      sword.style.left = swordLeft;
      console.log (swordLeft);
      if(direction === 'right')
      swordLeft += speed;
      sword.style.left = swordLeft;
      console.log (swordLeft);
    }

    this.remove = function(){
      sword.remove;
    }
  }
}
var mech = new shot()
function monitorShot() {
  if (shotPressed === true && leftPressed === true) {
    mech.shot('left');
   setInterval (mech.moove('left'), 1000/60);
  }

  if (shotPressed === true && rightPressed === true) {
    mech.shot('right')
    setInterval (mech.moove('right'), 1000/60);
  }
}
//---------------------------------------------------------------------------------------------------------------------------
//Класс Врагов
class Enemy {
  constructor() {
    var enemyWidth = 90;
    var enemyHeight = 100;
    function enemyGo(enemy, enLeft, speedy, extremeRight, extremeLeft) {
      setInterval(run, 1000 / 60);
      function run() {
        enLeft += speedy;
        enemy.style.left = enLeft + 'px';
        //console.log(enLeft);
        if (collision === true) {
          enemy.style.width = 91 + 'px';
          enemy.style.animation = 'enemyAttackRight 800ms steps(9) infinite';
          enLeft -= speedy;
        }
        /* if (collision === true && enemy.style.animation === 'enemyAnimationRight 800ms steps(9) infinite'){
           enemy.style.animation = 'enemyAttackRight 800ms steps(7) infinite'
         }*/
        if (enLeft > extremeRight) {
          speedy = -speedy;
          enemy.style.animation = 'enemyAnimationLeft 800ms steps(9) infinite';
        }
        if (enLeft < extremeLeft) {
          speedy = -speedy;
          enemy.style.animation = 'enemyAnimationRight 800ms steps(9) infinite';
        }
      }
    }
    this.drawEnemy = function (enemy, speedy, leftEn, topEn, extremeRight, extremeLeft) {
      enemy.style.position = 'absolute';
      enemy.style.top = topEn + 'px';
      enemy.style.width = enemyWidth + 'px';
      enemy.style.height = enemyHeight + 'px';
      enemy.style.animation = 'enemyAnimationRight 800ms steps(9) infinite';
      enemyGo(enemy, leftEn, speedy, extremeRight, extremeLeft);
    };
  }
}
var enemyGirl = new Enemy(1,2,3);
  var enemyArr = [
    {leftEnemy: 250, topEnemy: 202, speed:1, rightX:500, leftX:200},
    {leftEnemy: 350, topEnemy: 27,  speed:1, rightX:700, leftX:300}
];
var id = 1;
function drawEnemy() {
  for (var i = 0; i < enemyArr.length ; i++){
    var enemy = document.createElement('div');
    enemy.setAttribute('class', 'enemy');
    enemy.setAttribute('id', 'enemy'+ id);
    id++;
    intro.appendChild(enemy);
    var speedy = enemyArr[i].speed;
    var leftEn = enemyArr[i].leftEnemy;
    var topEn = enemyArr[i].topEnemy;
    var extremeRight = enemyArr[i].rightX;
    var extremeLeft = enemyArr[i].leftX;
     enemyGirl.drawEnemy(enemy , speedy , leftEn , topEn , extremeRight , extremeLeft)
}
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------
//Столкновения

function mathCollision() {
  var enemy1 = document.getElementById('enemy1');
  var enemy2 = document.getElementById('enemy2');
  if (hero.style.top <= 195 + 'px' && hero.style.top >= 191 + 'px') {
    functionCollision(hero, enemy1);
  }
  if (hero.style.top <= 16  + 'px' && hero.style.top >= 14 + 'px' ) {
    functionCollision(hero, enemy2);
  }
}

function functionCollision(obj1, obj2) {
  if ((parseInt(obj1.style.left) + parseInt(obj1.style.width) >= parseInt(obj2.style.left)) 
  && (parseInt(obj1.style.left) <= parseInt(obj2.style.left) + parseInt(obj2.style.width))) {
    collision = true;
    }

  else collision = false;
  console.log(collision);
  return collision;
}





