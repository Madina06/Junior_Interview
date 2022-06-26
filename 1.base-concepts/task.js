function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  
  let d = Math.pow(b, 2) - (4 * a * c);
  let x1 = (-b + Math.sqrt(d)) / (2 * a);
  let x2 = (-b - Math.sqrt(d)) / (2 * a);

  if (d < 0) {
    arr = [];
  } else if (d == 0) {
    let x = -b / (2 * a)
    arr = [x];
  } else {
    
    arr = [x1, x2];
  }

  

  return arr; // array
}
