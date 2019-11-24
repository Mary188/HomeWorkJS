
// 1. Дана строка, изображающая целое число. Вывести сумму цифр этого числа.

 let str = '1121231';
 let sum = 0;
 for (let i = 0; i < str.length; i++) {
     // console.log(str[i]);
     sum += +str[i];
 }
 console.log('Сумма цифр: ' + sum);




// 2. Дана строка и символ. Удвоить каждое вхождение заданного символа в строку.

let result = '';
let str = 'Java Script!&&';
for (let i = 0; i < str.length; i++) {
   
    result += str[i].repeat(2);
}
str = result;
console.log(str);
