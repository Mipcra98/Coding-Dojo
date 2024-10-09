var sum = 0;
function iterArr(arr){
    sum = 0
  for (var i = 0; i<arr.length;i++){
        sum += arr[i];
  }
  return sum;
}

console.log(iterArr([0]))
console.log(iterArr([1,2,5]))
console.log(iterArr([-5,2,5,12]))