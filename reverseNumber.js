
let number = 324535;

function reverseNumber(number) {
    if(number < 10){
        console.log(number);
        return;
    }
    const rem = parseInt(number%10);
    console.log(rem);
    number = parseInt(number/10);
    reverseNumber(number);
}

reverseNumber(number);