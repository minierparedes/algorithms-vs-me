// func that return only the unique values pass to it from an array

function uniqValues(arr) {
    let i = 0;
    const result = [];

    for (let j = 1; j <= arr.length; j++) {
        if (arr[i] !== arr[j]) {
            result.push(arr[i])
            i++;
        }else {
            i++;
        }
    };
    return result;
}


console.log(uniqValues([1, 2, 3, 4, 4, 4, 5, 5, 6, 7, 7, 7, 7, 7, 8, 9]));