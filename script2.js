// 1. Дан номер месяца (1 — январь, 2 — февраль, ...). Вывести название соответствующего времени года ("зима", "весна" и т.д.).




// let number = +prompt('Введите число между от 1 до 12', '');
// switch (number) 
// {
//     case 1:
//     case 2:
//     case 12:
//      alert('Зима! Этот месяц зимний!');
//     break;

//     case 3:
//     case 4:
//     case 5:
//      alert('Весна! Этот месяц весенний!');
//     break;

//     case 6:
//     case 7:
//     case 8:
//      alert('Лето! Этот месяц летний!');
//     break;

//     case 9:
//     case 10:
//     case 11:
//      alert('Осень! Этот месяц осенний!');
//     break;
// }






// 2. Единицы длины пронумерованы следующим образом: 1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр. Дан номер единицы длины и длина отрезка L в этих единицах (вещественное число). Вывести длину данного отрезка в метрах.



// let number = +prompt('Введите номер единицы длины: 1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр', '');
// let L = +prompt('Введите длину отрезка', '');
// switch (number) 
// {
//     case 1:   
//         alert('Длина отрезка: ' + L/10 + ' метров');
//     break;

//     case 2:   
//         alert('Длина отрезка: ' + L*1000 + ' метров');
//     break;

//     case 3:   
//         alert('Длина отрезка: ' + L + ' метров');
//     break;

//     case 4:   
//         alert('Длина отрезка: ' + L/1000 + ' метров');
//     break;

//     case 5:   
//         alert('Длина отрезка: ' + L/100 + ' метров');
//     break;

//     default:
//         alert("Очень жаль. Так я считать не умею:(");
// }





// 3. Дано целое число, лежащее в диапазоне от -999 до 999. Вывести строку - словесное описание данного числа вида "отрицательное двузначное число", "нулевое число", "положительное однозначное число" и т.д.


// let number = +prompt('Введите число, лежащее в диапазоне от -999 до 999', '');
// if (number === 0)
// {
//     alert(number + ' Нулевое число');
// }
// else if (-999 <= number && number < -99) 
// {
//     alert(number + ' Отрицательное трехзначное число');
// }
// else if (-99 <= number && number < -9)
// {
//     alert(number + ' Отрицательное двухзначное число');
// }
// else if (-9 <= number && number < 0)
// {
//     alert(number + ' Отрицательное однозначное число');
// }
// else if (0 < number && number <= 9)
// {
//     alert(number + ' Положительное однозначное  число');
// }
// else if (9 < number && number <= 99)
// {
//     alert(number + ' Положительное двузначное  число');
// }
// else if (99 < number && number <= 999)
// {
//     alert(number + ' Положительное двузначное  число');
// }
// else
// {
//     alert('Нет данных');
// }




