//use two pointer pattern
//left pointer / end pointer and a temp variable to be to swap values in place
// return string arr


function reverseString(s) {
    let leftIndex = 0;
    let rightIndex = s.length - 1;
    
    while (leftIndex <= rightIndex) {
        let temp = s[leftIndex];
        s[leftIndex] = s[rightIndex];
        s[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
    return s
}


console.log(reverseString(["H","a","n","n","a","h"]));