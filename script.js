function miniMaxSum(arr) {
    
    let sum = 0;
    let min = 0;
    let max = 0;
    for(let i=0; i<arr.length; i++){
       sum += arr[i]
       min = sum - Math.max(...arr);
       max = sum - Math.min(...arr);
    }


    console.log(min, max);

}

miniMaxSum([1,3,5,7,9])