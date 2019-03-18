"use strict";
// если написать просто a = 6, а потом console.log(a), То выбьет ошибку
// let a = 6;
// console.log(a);
// Означает использование директивы согласно стандарту ecScript 6

// let persone = {
//     name:'Dima',
//     age:27,
//     isMarried:false
// };
// console.log(persone["name"]);
// let arr = ['plum.png','orange.jpg','apple.bmp'];
// console.log(arr[0]);

// let answer = confirm("Are you here?");
// console.log(answer); 

// let answer = prompt("Вам уже исполнилось 18?","да");
// Чтобы не было ошибок в Internet Explore, после вопроса хотя бы ковычки оставлять ""
// Вся информация полученная от пользователя будет в виде строк, в не зависимости от того, как я ёё получил.

// console.log(typeof(answer)); 
// console.log(4 + 4);
// console.log(typeof(4 + 4));
// console.log(typeof("dimos" + "dima"));
// console.log(typeof("dimos" + +"dima"));
// console.log(typeof(+"dimos" + +"dima"));

// let number1 = 10,
//     number2 = 10;
// console.log(number1++);
// console.log(number2++);
// console.log(number1);
// console.log(number2);

// console.log(25 % 4);
// 25 делить на 4 это 4 умножить на 6 и остаётся 1

// console.log(4 == "4");
// Получается true, так как сравнивает по значениям
// console.log(4 == "5");
// Выбивает false
// console.log(4 === "4");
// ТОже false, потому что сравнивает по типу данных
// console.log(4 === 4);
// console.log("4" === "4");
// ДВа последних естественно true

// let isCheked = true;
    // isClose = true;
// console.log(isCheked && isClose);
// ЭТо амперсанд и означает "или"
// isClose = false;
// console.log(isCheked && isClose);
// Уже false потому что оба значения должны быть true 
// console.log(isCheked || isClosed);
// Этот оператор называется "или", для него главное, чтоббы хоть один был true
// isCheked = false;
// console.log(isCheked || isClose);
// Возращает false
// IsCheked = 45;
// console.log(IsCheked);
// isCheked = 1024;
// console.log(isCheked);
// console.log(IsCheked);
// JavaScript придирается к реестру, называешь по-разному переменные и разные значения выходят


// let one = true,
//     two = false;
// console.log(one || two);
// console.log(one && two);
// console.log(one && !two);
// Здесь я перевел two со значением false в true Оператором !

// Условия
// if (2*4 == 7) {
//     console.log("true");
// } else {
//     console.log("false")
// }

// let num = 50;
// let num = prompt("Угадай число!");
// if (num < 49) {
//     console.log("неверно!");
// } else if (num > 100) {
//     console.log("Много!");
// } else {
//     console.log("Верно!");
// }
// Ладно эту запись можно сократить
// (num == 50) ? console.log("Верно!") : console.log("Неверно!");
// Этот оператор называется тернарным, так как в его работе участвуют 3

// Бывают случаи что неудобно использовать if, тогда можно попробовать switch
// switch (num) {
//     case num < 49:
//         console.log("неверно!");
//         break;
//     case num > 100:
//         console.log("Много!");
//         break;
//     case num > 80:
//         console.log("Всё еще много");
//         break;
//     case 50:   //Очень важно запомнить, что тут ставиться само значение, а не название переменной
//         console.log("Вот теперь верно!");
//         break;
//     default:  // Это не обязателая команда, но если ничего не подойдёт выскачит default
//         console.log("Что-то пошло не так");
//         break;
// }
// Здесь начинаются циклы
let num = 50;
// while (num < 55){
//     console.log(num);
//     num++;
// }
console.log([ ] + false - null + true);
let y = 1; let x = y = 2;console.log(x); // Здесь ответ 2, так как переменной х присвоили 2 раз другое значение
console.log(+[ ] + +1 + +2);   //Если я уберу хоть один плюс, то оно приведет его к тексту и будет 12 значение,а так 3







