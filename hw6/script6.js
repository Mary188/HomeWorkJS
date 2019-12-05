// 1. Реализовать функцию foo:
// let a = {
//     name: 'static',
//     count: 0
// }
// console.log(foo(a, 'count', 10)); /* В консоль выведет: [{name:'static', count:0},
//  {name:'static', count:1}, ..., {name:'static', count:9}] */

// let a = {
//   name: 'static',
//   count: 0
// }

// function foo(obj, prop, count) 
// {
//   let arr = [];

//   for (let i = 0; i < count; i++) 
//   {
//       let newObj = {...obj};
//       if (prop in newObj)
//           newObj[prop] += i;
//       arr.push(newObj);
//   }
//   return arr;
// }

// console.log(foo(a, 'count', 10)); 

// 2. Сделайте функцию, каждый вызов который будет генерировать одно случайное число 
// от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все 
// числа из этого промежутка. Решите задачу через замыкания - в замыкании должен 
// хранится массив чисел, которые уже были сгенерированы функцией.







// 3. Построить объект студент:
// - свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
// - метод объекта выводящий в консоль биографическую справку в виде, например: 
// «Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО.


let student = 
{
  name: "Иван",
  surname: "Иванов",
  age: "55",
  interests: ["программирование", "музыка", "аниме"],
  university: "ИТМО",
  getInfo() 
  {
    console.log(`${this.name}. ${this.surname}. ${this.age} лет. Интересы: ${this.interests.join(", ")}. Учится в ${this.university}.`);
  }
}
student.getInfo();





// 4. Написать функцию вычисляющую факториал числа с использованием рекурсии.
// Факториал числа - это число, умноженное на себя минус один, затем на себя 
// минус два и так далее, до единицы. Обозначается n!
// Определение факториала можно записать как: n! = n * (n - 1) * (n - 2) * ...*1


// let n = prompt('Введите число: ', '');
// function factorial(n) 
// {
//   return (n != 1) ? n * factorial(n - 1) : 1;
// }
// alert( "Факториал числа " + n + " равен: " + factorial(n) );




// 5. Отсортировать массив по полю 'price' используя метод sort и передаваемую ей функцию, 
// определяющую порядок сортировки. Массив для тестирования: 
// let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, 
// { 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];

let arr = [ 
  { 'price' : 10, 'count' : 2 }, 
  { 'price' : 5, 'count' : 5 }, 
  { 'price' : 8, 'count' : 5 }, 
  { 'price' : 12, 'count' : 4 }, 
  { 'price' : 8, 'count' : 4} ,
];

arr.sort(function(a,b){
  if(a.price > b.price){
    return 1;
  }
  if(a.price < b.price){
    return -1;
  }
  return 0;
});
console.log(arr);