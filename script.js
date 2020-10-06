// //Створити сторінку на якій будемо відображати базовий текст в span("Очікую на ввід даних"). При натисканні alt + A, 
// // замість спана зявиться інпут з аналогічним текстом, який тепер ви зможете відредагувати. 
// // Далі коли ви натисните shift + S дані збережуться і знов будуть відображатись як span. 
// let inputContent = document.getElementById("input-content");
// let content = document.getElementById("content");
// document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyA' && event.altKey) {
//       inputContent.style.display = "inline" ;
//     }
//   });
//   document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyS' && event.shiftKey) {
//       content.innerText = inputContent.value;
//       inputContent.style.display = "none" ;
//     }
//   });

//  // Повісити івент лісенер на ресайз сторінки, коли розмір сторінки буде менше 600px , виводити лог ми векористовуємо мобільну версію,
//  // при більшому розмірі сторінки - що ми використовуємо десктоп версію.
//  window.addEventListener('resize', function(event) {
//    if (event.target.innerWidth < 600) {
//      console.log("Ми користовуємо мобільну версію!");
//    } else {
//     console.log("Ми використовуємо десктоп версію!");
//    }
//  })

// // Повісити івент на інпут, при зміні стану інпута - виводити повідомленням зі значенням яке зараз є введено.
// let inputContentTask3 = document.getElementById("input-task3");
// inputContentTask3.style.display = "inline" ;
// inputContentTask3.addEventListener('keyup', function() {
//   content.innerText = inputContentTask3.value;
// })

// // При натисканні на кнопку альт+ о виводити модальне вікно на екран, альт + с - закривати.
// let modal = document.getElementById('my-modal');
// document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyO' && event.altKey) {
//       modal.style.display = "block";
//     };
// });
// document.addEventListener('keydown', function(event) {
//   if (event.code == 'KeyC' && event.altKey) {
//     console.log("OOO");
//     modal.style.display = "none";
//   };
// });

// Створити модальне відкно аналог Алерта але з гарним дизайном. по кліку на кнопку зявляється модальне вікно по центрі екрану(центрування елемента). 
// В модальному вікні має бути текст та кнопка закрити.
// let modal = document.getElementById('mymy-modal');
// let btn = document.getElementById('btn');
// document.addEventListener('DOMContentLoaded', function(event) {
//       console.log("OOO");
//       modal.style.display = "block";
//   });
// btn.addEventListener('click', function(event) {
//     modal.style.display = "none";
// });
