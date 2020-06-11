let chatMessages = [{
  name: "ms1",
  msg: "Ну и зачем ты добавил этот чат?",
  delay: 100,
  align: "right",
  showTime: true,
  time: "19:58"
},
{
  name: "ms2",
  msg: "Потому что могу",
  delay: 100,
  align: "left",
  showTime: true,
  time: "19:59"
},
{
  name: "ms3",
  msg: "Красава! А серьезно? Задача была другая",
  delay: 200,
  align: "right",
  showTime: true,
  time: "19:58"
},
{
  name: "ms4",
  msg: "Так получилось что данный пример чата, который экземплом я нашел в инете - поднастроил и он ушел в продакшн на реальный сайт",
  delay: 500,
  align: "left",
  showTime: true,
  time: "20:01"
},
{
  name: "ms5",
  msg: "Да ладно, и зачем добавлять фейк-чат на сайт?",
  delay: 500,
  align: "right",
  showTime: true,
  time: "20:01"
},
{
  name: "ms6",
  msg: "Таким образом пользователю отвечают на самые распространенные вопросы, как решение для е-коммерс",
  delay: 300,
  align: "left",
  showTime: false,
  time: "20:01"
},
{
  name: "ms7",
  msg: "Ясно, ты хоть что то понял из того, что здесь написано?",
  delay: 300,
  align: "right",
  showTime: false,
  time: "20:02"
},
{
  name: "ms8",
  msg: "То, что если рабоатешь с jquery - его надо подключать",
  delay: 300,
  align: "left",
  showTime: true,
  time: "20:02"
},
{
  name: "ms9",
  msg: "Молодец. Айтишник. На все паблики с айтишным юмором уже подписался?",
  delay: 300,
  align: "right",
  showTime: true,
  time: "20:02"
},
{
  name: "ms10",
  msg: "Да, давно, с первого урока.",
  delay: 300,
  align: "left",
  showTime: false,
  time: "20:02"
},
{
  name: "ms11",
  msg: "Так, ты говоришь, шо вотЭтоВотВсе в продакшн ушло, шо за сайт?",
  delay: 300,
  align: "right",
  showTime: true,
  time: "20:03"
},
{
  name: "ms12",
  msg: "https://giftcard.com.ua/",
  delay: 300,
  align: "left",
  showTime: true,
  time: "20:03"
},
{
  name: "ms13",
  msg: "Можно еще один вопрос?",
  delay: 700,
  align: "right",
  showTime: true,
  time: "20:03"
},
{
  name: "ms14",
  msg: "Личный",
  delay: 300,
  align: "right",
  showTime: true,
  time: "20:03"
},
{
  name: "ms15",
  msg: "Зачем столько ярких цветов?",
  delay: 300,
  align: "right",
  showTime: true,
  time: "20:03"
},
{
  name: "ms15",
  msg: "Внутреннее состояние, сорян шо не хожу как унылое гэ.",
  delay: 300,
  align: "left",
  showTime: true,
  time: "20:04"
},
{
  name: "ms15",
  msg: "Лан, лан, все. Не заводись",
  delay: 300,
  align: "right",
  showTime: true,
  time: "20:05"
},
{
  name: "ms16",
  msg: "Надеюсь, фононое изображение облегчил для быстрой загрузки, а? Девелопер!",
  delay: 300,
  align: "right",
  showTime: true,
  time: "20:03"
},
{
  name: "ms17",
  msg: "Собо самой, оптимизилла решает!",
  delay: 300,
  align: "left",
  showTime: true,
  time: "20:04"
}
                    
                   ];
let chatDelay = 0;
function onRowAdded() {
  $('.chat-container').animate({
    scrollTop: $('.chat-container').prop('scrollHeight')
  });
};
$.each(chatMessages, function(index, obj) {
  chatDelay = chatDelay + 4000;
  chatDelay2 = chatDelay + obj.delay;
  chatDelay3 = chatDelay2 + 10;
  scrollDelay = chatDelay;
  chatTimeString = " ";
  msgname = "." + obj.name;
  msginner = ".messageinner-" + obj.name;
  spinner = ".sp-" + obj.name;
  /*if (obj.showTime == true) {
    chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
  }*/
  $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
  $(msgname).delay(chatDelay).fadeIn();
  $(spinner).delay(chatDelay2).hide(1);
  $(msginner).delay(chatDelay3).fadeIn();
  setTimeout(onRowAdded, chatDelay);
  setTimeout(onRowAdded, chatDelay3);
  chatDelay = chatDelay3;
});
