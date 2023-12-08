let A = +prompt("Введите число A");
let C = +prompt("Введите модуль C");

if (A == 0) {
  alert("Ошибка! Число A не может быть равно нулю.");
  return;
}

if (C == 0 || C == 1) {
  alert("Ошибка! Модуль C не может быть равен нулю или 1.");
  return;
}

let B = ReverseMOD(A, C);
    alert(`Обратное число для числа A по модулю C равно ${B}.`);

function ReverseMOD(A, C) {
    let ggg = ggg(A, C);
    if (ggg !== 1) {
        alert("Числа A и C должны быть взаимно просты.");
        return;
    }
        B = (A ** -1) % C;
    if (B < 0) B += C;
        return B;
}   

function ggg(a, b) {
    if (b === 0) return a;
    else return ggg(b, a % b);
}