// 1. Написать функцию сравнения двух массивов. Функция принимает на вход два массива, сравнивает их и возвращает true, если массивы равны и false, если не равны.

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

function compare(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(compare(arr1, arr2));



// 2. Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива. Функция возвращает массив, который содержит все числа из него, включая начальное и конечное. Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].

function range(start, end, step = 1)
{
    let result = [];
    for(let i = start; i <= end; i += step)
    {
        result.push(i);
    }
    return result;
}
console.log(range(3, 33))




// 3. Построить объект студент со свойствами: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения. Написать отдельную функцию, которой передается объект студент, а она выводит его содержимое.

let student = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 47,
    interests: ['books', ' paint', ' music'],
    university: 'ITMO',
}

function info(student) {
  for (let i in student) {
    console.log(`${i}: ${student[i]}`);
  }
}
info(student);