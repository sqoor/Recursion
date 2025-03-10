// All the exercises should use while loop:

// Please be sure to conect this file to another HTML file
// to seprate it from the recursion file

// Dont serach on the internet except if it is written in the question

// You should solve all the question by what you understand from the lecture
// and with your pair not solo

// And dont look or use a code that you wrote before 

console.log('Here is : While')

/*
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/

function subtract(number) {
    var result = number;

    while(number > 0) {
        result = result - (number -1);
        number--;
    }

    return result;
}

/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 6
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/

function factorial(number) {
    var result = 1;
    
    while(number > 1) {
        result = result * number;
        number--; 
    }

    return result;
}


/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the stop condition should be [somthing=== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/

function repeatStr(str, counter) {
    var result = '';

    while(counter > 0) {
        result = result + ' ' + str;
        counter--;
    }

    return result;
}


/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/

function sum2(num1, num2) {
    var sum = num2;

    while(num1 < num2) {
        sum = sum + num1;
        num1++;
    }

    return sum;
}


/*
5
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
** Important: the stop condition should be [somthing=== 0]
** Important: You should dint have extra space at the end
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/


function repeatStr2(str1, str2) {
    var result = str1;
    var counter = str2.length;

    while(counter > 1) {
        result = result + ' ' + str1;
        counter--;
    }

    return result;
}




/*
6
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/


function multiOf(num1, num2, num3) {
    var result = num2;
    
    while (num3 > 1) {
        result *= num2;
        num3--;
    }

    return result * num1;
}


/*
7
Create a function called muti2
that take two parameter
and will return the multiplication from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/

function muti2(num1,num2) {
    var result = num2;
    
    while (num1 < num2) {
        result = result * num1 ;
        num1++
    }
    
    return result 
}


function muti22(num1, num2){
    var result = 1
    
    while (num1 <= num2) {
        result = result * num2;
        num2--;  
    }

 return result
}

/*
8
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should dint have extra space at the end or comma
** Important: the stop condition should [num1===num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/

function numberBetweenUs(num1, num2) {
    num1++;
    var result = num1++;

    while(num1 < num2) {
        result = result + ', ' + num1;
        num1++;
    }

    return result;
}


/*
9
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 need to ahve "done"
between each number a comma and space
** you need to use recursion
** Important: You should dint have extra space at the end or comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/

function countDown(number) {
    var result = number;
    number--;

    while(number > 0) { 
        result = result + ', ' + number;
        number--;
    }

    result += ', done';

    return result;
}


/*
10
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/


function multiplication2(number1, number2) {
    var result = 0;

    while(number2 > 0) {
        result += number1;
        number2--;
    }

    return result;
}





/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
*/

function mod2(num1, num2) {
    while(num1 >= num2) {
        num1 = num1 - num2;
    }

    return num1;
}


/*
12
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*/


function repeatChar(str, char) {
    var length = str.length -1;
    var count = 0;
    char = char.toLowerCase();

    while(length >= 0) {
        if(str[length].toLowerCase() === char)
            count++;

        length--;
    }

    return count;
}











// Advanced Part {for your benefits}

// Dont solve any question here if you didnt finish all the question a bove with your pair

// This part you can try it and solve solo not with your pair

// This part is extra (and there is no help from the trainer) it is good to try it


/*
1
Create a function called fibon
that takes 1 parameter a number,
and return the fibonacci for this number
Ex: fibon(7); => 21
Ex: fibon(2); => 2
Ex: fibon(1); => 1
Ex: fibon(0); => 1
fib(n)=fin(n-1)+fib(n-2)
fibon(n): 1 1 2 3 5 8 13 21
          | | | | | |  |  |
n:        0 1 2 3 4 5  6  7
*/

function fibon(number) {
    var previousFibon = 0;
    var secondPreviousFibon = 0;
    var fibon = 1;
    var counter = 1;

    while(counter <= number) {
        secondPreviousFibon = previousFibon;
        previousFibon = fibon;
        fibon = previousFibon + secondPreviousFibon;

        counter++;
    }

    return fibon;
}





/*
2
Write a function called mirror
that takes one parameter a string
and return the reversed string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
** Important: You should dint have extra space at the end
mirror("school") => "loohcs"
mirror("car") => "rac"
mirror("maDrasa") => "asarDam"
*/

function mirror(str) {
    var reversedStr = '';
    var length = str.length - 1;

    while(length >= 0) {
        reversedStr += str[length];
        length--;
    }

    return reversedStr;
}



/*
3
Write a function called mirrorCaseAlso
that takes one parameter a string
and return the reversed string order
and the lower case to upper case
and the upper case to lower case
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
** Important: You should dint have extra space at the end
mirrorCaseAlso("sChOol") => "LOoHcS"
mirrorCaseAlso("THOR") => "roht"
mirrorCaseAlso("BaBa") => "AbAb"
*/


function mirrorCaseAlso(str) {
    var reversedStr = '';
    var length = str.length - 1;

    while(length >= 0) {
        var char = str[length];
        char = /[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase();

        reversedStr += char;
        length--;
    }

    return reversedStr;
}




/*
4
Write a function called repeatChar2
that takes two parameters
and return the times that this char
wit case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
repeatChar2("schOol","o") => 1
repeatChar2("school","a") => 0
repeatChar2("School","S") => 1
try more case by yourself
*/


function repeatChar2(str, keyChar) {
    var length = str.length - 1;
    var counter = 0;

    while(length >= 0) {
        var tempChar = str[length];
        tempChar = /[a-z]/.test(keyChar) ? tempChar.toLowerCase() : tempChar.toUpperCase();

        if(tempChar === keyChar)
            counter++;

        length--;
    }

    return counter;
}


/*
5
Create a function called HiSayHelloTo
that takes 1 parameter a number that represent
the nubmer of people come to an event,
and say hi to each person sepretadly
+ let him/her say hello to each one that comes before him/her
Ex: welcomeSayHello(3);
=>
hi 1
hi 2 Now Pleas Say Hello To 1
hi 3 Now Pleas Say Hello To 1 and 2
Ex: welcomeSayHello(7); => 2
hi 1
hi 2 Now Pleas Say Hello To 1
hi 3 Now Pleas Say Hello To 1 and 2
hi 4 Now Pleas Say Hello To 1, 2 and 3
hi 5 Now Pleas Say Hello To 1, 2, 3 and 4
hi 6 Now Pleas Say Hello To 1, 2, 3, 4 and 5
hi 7 Now Pleas Say Hello To 1, 2, 3, 4, 5 and 6
*/


function HISayHelloTo(number) {
    var counter = 1;
    var messages = '\n';

    while(counter <= number) {
        var message = 'hi ' + counter;

        if(counter > 1) {
            var perviousPersons = 1;
            message += ' Now Pleas Say Hello To ';
                
            while(perviousPersons < counter - 2) {
                message += perviousPersons + ', ';
                perviousPersons++;
            }

            if (counter === 1 || counter === 2)
                message += perviousPersons;
            else 
                message += perviousPersons + ' and ' + (perviousPersons + 1);
        }
        
        messages += message + '\n';
        counter++;
    }

    return messages;
}