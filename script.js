let stopCountdown = 0; // счётчик

function countdown(dateEnd) {
  var timer, days, hours, minutes, seconds;

  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();

  if (isNaN(dateEnd)) {
    return;
  }

  timer = setInterval(calculate, 1000);

  if (stopCountdown > 1) { // если счётчик больше 1, то таймер остановится
    clearInterval(timer);
  }

  function calculate() {
    var dateStart = new Date();
    var dateStart = new Date(dateStart.getUTCFullYear(),
      dateStart.getUTCMonth(),
      dateStart.getUTCDate(),
      dateStart.getUTCHours(),
      dateStart.getUTCMinutes(),
      dateStart.getUTCSeconds());
    var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);
      seconds = parseInt(timeRemaining);


      document.getElementById("days").innerHTML = parseInt(days, 10);
      document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }

  function display(days, hours, minutes, seconds) {}
}

// Попытка в хоть что-то. При смене даты старая функция countdown всё ещё работает, то есть надо заставить функцию
// каким-то образом прекратить работу, а после запустить следующую функцию countdown. В принципе можно попробовать
// огроменное условие, но это наверняка не сработает. :^(

// Дополнение:
// Я пытался нормально функции сделать, но с таймером остались проблемы. Если результат удоволетворитерен, то когда
// будешь отправлять Кульченко, то скажи, что пытался сделать нормально, но у тебя навыков не хватило (ну или что 
// мне навыков не хватило), а менять всё слишком лень.

function changeDateWinter() { // функции изменения фона, текста и т.д. при нажатии на кнопку. она возвращает функцию таймера с неким параметром.
  stopCountdown += 1;
  document.getElementById("countdownName").innerHTML = "Зимние каникулы через:";
  $('body').css('background-image', 'url(winter.jpg)');
  return countdown('12/24/2023 08:00:00 AM GMT+2');
}
function changeDateSpring() {
  stopCountdown += 1;
  document.getElementById("countdownName").innerHTML = "Весенние каникулы через:";
  $('body').css('background-image', 'url(spring.jpg)');
  return countdown('3/24/2024 08:00:00 AM GMT+2');
}
function changeDateSummer() {
  stopCountdown += 1;
  document.getElementById("countdownName").innerHTML = "Летние каникулы через:";
  $('body').css('background-image', 'url(summer.jpg)');
  return countdown('5/28/2023 08:00:00 AM GMT+2');
}
function changeDateAutumn() {
  stopCountdown += 1;
  document.getElementById("countdownName").innerHTML = "Осенние каникулы через:";
  $('body').css('background-image', 'url(autumn.jpg)');
  return countdown('10/29/2023 08:00:00 AM GMT+2');
}

// Провальная попытка именения даты. Оставил на всякий пожарный, вдруг что-то захочешь изменить.
// window.onload = function() {
//   let dmy;
//   if (changeDateWinter()) {
//     dmy = '1/1/2024 08:00:00 AM GMT+2';
//   }
//   if (changeDateSpring()) {
//     dmy = '5/5/2024 08:00:00 AM GMT+2';
//   }
//   if (changeDateSummer()) {
//     dmy = '5/28/2023 08:00:00 AM GMT+2';
//   }
//   if (changeDateAutumn()) {
//     dmy = '10/10/2023 08:00:00 AM GMT+2';
//   }
//   countdown(dmy)
// }

// Старый код (лучше удалить функции и блоки в html-файле и удалить классы в css-файле).
//     |
//     V

// let day = prompt("Введите день");
// let month = prompt("Введите месяц");
// let year = prompt("Введите год");
// let dmy = month + "/" + day + "/" + year + " 08:00:00 AM GMT+2"
// window.onload = function() {
//   if (month === "1" || month === "2" || month === "12") {
//     document.getElementById("countdownName").innerHTML = "Зимние каникулы через:";
//     $('body').css('background-image', 'url(winter.jpg)');
//   }
//   else if (month >=3 && month <= 5) {
//     document.getElementById("countdownName").innerHTML = "Весение каникулы через:";
//     $('body').css('background-image', 'url(spring.jpg)');
//   }
//   else if (month >= 6 &&  month <=8) {
//     document.getElementById("countdownName").innerHTML = "Летние каникулы через:";
//     $('body').css('background-image', 'url(summer.jpg)');
//   }
//   else {
//     document.getElementById("countdownName").innerHTML = "Осение каникулы через:";
//     $('body').css('background-image', 'url(autumn.jpg)');
//   }
// }
// countdown(dmy)

// Короче Влад, я сделал то что ты изначально хотел, а именно кнопки, однако я столкнулся с проблемой. Чёртов таймер повторно вызывается при смене даты. Надо бы задаться вопросом, 
// а почему бы не вынести вызов таймера за функции смены даты, дату сделать глобальной переменной и изменять её внутри функций? Я же отвечу, что пытался так сделать, ведь это было
// самым очевидным решением, однако эта зараза просто не хочет тогда работать (скорее всего потому что именяется параметр, хотя кто его знает). Этот чёртов js меня с ума сводит.
// Уже два часа ночи, а я сижу и вожусь с проектом, который даже не является моим. Блин, я обожаю свою жизнь... <-- проблема осталась, лучше обратиться к А. Константиновичу, а так
// функция и кнопки работают нормально. Только даты надо поменять и всё. 