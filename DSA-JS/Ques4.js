//Return an array showing the cumulative sum at each index of an array of integers

let arr = [1, 9, 5, 1];

const cumulativeSum = list => {
    let result = [list[0]];
    for (let i = 1; i <  list.length; i++) {
        result.push(list[i] + result[i - 1]);

    }
    return result;
} 
console.log(cumulativeSum(arr));