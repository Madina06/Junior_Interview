function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  if (arr1.length !== arr2.length) return false;
    for (var i = 0, len = arr1.length; i < len; i++){
        if (arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true; 


  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  return arr.filter(item => item > 0 && item % 3 == 0).map(item => item *10);

  return resultArr; // array
}
