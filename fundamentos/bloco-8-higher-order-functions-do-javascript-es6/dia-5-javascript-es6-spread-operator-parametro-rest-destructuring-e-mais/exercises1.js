// 1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2, 15 e 54.

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

const rectangleArea = (width, height) => width * height;

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangles) // altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
});

console.log(...rectangles)