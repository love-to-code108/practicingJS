function squareDigits(num) {

    // initializing all the variables below;

    let numFinal = "", digits = 0, square = 0;
    var ans = "";
    
    // making a copy of num ; 

    let copyNum = num;


    // converting copyNum to string;
    copyNum = copyNum.toString();



    // converting num (Number) to string;
    num = num.toString();



    // reversing the string 
    for (let i = num.length - 1; i >= 0; i--) {
        numFinal = numFinal + num[i];
    }


    // printing the final string to make sure the process worked;
    console.log(numFinal);


    // converting numFinal to type of Number;
    num = Number(numFinal);



    /*  this loop is being used to take in 
        num then 
        1st:- taking num and plucking out indivisual numbers  ;
        2nd:- finding the square of the indivisual numbers ;
        3rd:- concatinating all the squares to create the final string ;
    */ 
    while (num > 0) {
        square = Number(square);

        // plucking out the last interger from num
        digits = num % 10;

        // squaring the last integer
        square = Math.pow(digits, 2);

        // converting the squared result to a string for concatination
        square = square.toString();

        // concatinating the string
        ans = ans + square;

        // deleting the last number
        num = Math.trunc(num / 10);


    }



    // lets say the last number or the last 2 numbers are 0 then the above loop fails to add them to the final string so we use this loop to add those 0's

    for (let i = copyNum.length - 1; i >= 0; i--) {
        if (copyNum[i] == "0") {
            ans = ans + "0";
        } else {
            break;
        }
    }


    // here we return the final result
    return Number(ans);
}