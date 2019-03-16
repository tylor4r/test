'use strict';
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
