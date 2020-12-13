//create function that takes an input of any size string and returns a reverse string.


function reverseString(str) {
    let startIndex = 0;
    let endIndex = str.length - 1;
    const result = [];

    for (let i = 0; i < str.length; i++) {
        result.push(str[i])
    }

    while (startIndex <= endIndex) {
        let temp = result[startIndex];
        result[startIndex] = result[endIndex];
        result[endIndex] = temp;
        startIndex++;
        endIndex--;
    };

    return result.join("");
}





  


console.log(reverseString("Jake is a monster"));