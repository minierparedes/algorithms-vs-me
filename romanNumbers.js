function romanNumbers(nums) {
    const basicUnits = {
        "1": "I",
        "2": "II",
        "3": "III",
        "4": "IV",
        "5": "V",
        "6": "VI",
        "7": "VII",
        "8": "VIII",
        "9": "IX",
    };
    const unitTens = {
        "10": "X",
        "20": "XX",
        "30": "XXX",
        "40": "XL",
        "50": "L",
        "60": "LX",
        "70": "LXX",
        "80": "LXXX",
        "90": "XC"
    };
    const unitHundreds = {
        "100": "C",
        "200": "CC",
        "300": "CCC",
        "400": "CD",
        "500": "D",
        "600": "DC",
        "700": "DCC",
        "800": "DCCC",
        "900": "CM"
    };
    const unitThousands = {
        "1000": "M",
        "2000": "MM",
        "3000": "MMM",
    };

    //single units / tens / hundreds / thousands
    if (nums <= 9) {
        return basicUnits[nums];
    }
    if (nums % 10 === 0) {
        return unitTens[nums] 
    }else { 
        return unitTens[Math.floor(nums / 10) * 10] + basicUnits[nums % 10];
    }
    if (nums >= 100 && nums <= 109) {
        return unitHundreds[Math.floor(nums / 100) * 100] + basicUnits[nums % 10];
    }else  return unitHundreds[Math.floor(nums / 100) * 100] + unitTens[Math.floor((nums % 100) / 10) * 10] + basicUnits[nums % 10];
        
    


}

console.log(romanNumbers());

// let x = 65;
// console.log(x);
// console.log(Math.floor(x / 10) * 10);

//console.log(111%100);

