function search2Darray(matrix, k) {
    let row = 0;
    let col = matrix[0].length - 1;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j <=i; j++) {
            if (matrix[i][j] === k) return true;
            console.log(matrix[i][j]);
        }
    }
    return false;
}


console.log(search2Darray([
    [ 1,  2,  3,  4,  5],
    [ 1,  2,  3,  4,  5]
  ], 5));