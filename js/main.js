var start1 = document.getElementById('aIntro');//элементы стартовой страницы
var start2 = document.getElementById('aIntro1');//элементы стартовой страницы
var start3 = document.getElementById('aIntro2');//элементы стартовой страницы
var start4 = document.getElementById('ex2');//элементы стартовой страницы
var record = document.getElementById('record');//таблица рекордов
var recTop = -600;
var win;


function buttonClick(){//по нажатию старт чистим окно, рисуем игровое поле и начинаем игру
  start1.remove();
  start2.remove();
  start3.remove();
  start4.remove();
  drawEnemy();
  setInterval(mathCollision, 1000/10);
  timeGames();
  timerWin();
  setInterval(monitorShot, 1000/10);
}
var timerOn;
var timerOff;
function tableOn() {
  timerOn = setInterval(tabRecord, 1000 / 40);
}
function tableOff() {
  timerOff = setInterval(tabRecordOff, 1000 / 40);
}
function tabRecord() {
  recTop += 5;
record.style.top = recTop + 'px';
  if (recTop >= -5) {
    clearInterval(timerOn);
  }
}

function tabRecordOff() {
  recTop -= 5;
  record.style.top = recTop + 'px';
  if (recTop <= -600) {
    clearInterval(timerOff);
  }
}

//----------------------------------------------------------------------------------------------------------------------
// Отсчет времени

function timeGames() {
  startTime = new Date();
  return startTime;
}
function tick() {
  stopTime = new Date();
  recordTime = (stopTime - startTime) / 1000;
  return recordTime;
}
function timerWin() {
  win = setInterval(winPos, 1000/10)
}

function winPos() {
  if (map[4][13] === 8 && ex2Left > 650 && ex2Top > 14 && ex2Top < 16) {
    tick();
    console.log(recordTime);
    clearInterval(win);
  }
}
