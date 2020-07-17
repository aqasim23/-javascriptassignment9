// Chapter 21 - 25


// task 1

// var fname = prompt("Enter First Name");
// var lname = prompt("Enter Last Name");
// alert ("Welcome " + fname + " " + lname); 


// task 2

// var favmobile = prompt("Enter your favourite mobile name");
// document.write("My Favourite Mobile Phone is " + favmobile + "<br>");
// document.write("Length of String: " + favmobile.length);


// task 3

// document.write ("String: Pakistani<br>");
// document.write("Index of 'n': " + "Pakistani".indexOf("n"));


// task 4

// document.write ("String: Hello World<br>");
// document.write("Last Index of 'l': " + "Hello World".lastIndexOf("l"));


// task 5

// document.write ("String: Pakistani<br>");
// document.write("Chraracter at index 3: " + "Pakistani"[3]);


// task 6

// var fname = prompt("Enter First Name");
// var lname = prompt("Enter Last Name");
// var fullname = fname.concat(" ",lname);
// alert ("Welcome " + fullname); 


// task 7

// var nam = "Hyderabad";
// document.write("City: " + nam + "<br>");
// nam = nam.replace("Hyder","Islam");
// document.write("After Replacement: " + nam)


// task 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write (message + "<br>");
// var str = "";
// message = message.split("and").join("&");
// document.write(message);


// task 9

// var str = "472";
// document.write("Value: " + str);
// document.write("<br>");
// document.write("Type: " + typeof(str));
// document.write("<br>");
// var num = parseInt(str);
// document.write("Value: " + num);
// document.write("<br>");
// document.write("Type: " + typeof(num));


// task 10

// var inp = prompt("Enter input");
// document.write("User Input: " + inp);
// document.write("<br>Upper Case: " + inp.toUpperCase());


// task 11

// var inp = prompt("Enter input");
// document.write("User Input: " + inp);
// var firstChar = inp.slice(0, 1);
// var otherChars = inp.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// inp = firstChar + otherChars;
// document.write("<br>Title Case: " + inp);


// task 12

// var num = 35.36;
// document.write("Number: " + num);
// var str = String(num);
// document.write("<br>");
// var ind = str.indexOf(".");
// str = str.slice(0,ind) + str.slice(ind+1);
// document.write("Result: " + str);


// task 13

// var inp = prompt("Enter username");
// for (var i = 0; i < inp.length; i++) {
//     switch (inp.charCodeAt(i)) {
//         case 33:
//         case 44:
//         case 46:
//         case 64:
//             alert("Please enter a valid username");
//             exit();
//     }
// }


// task 14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var inp = prompt("Enter search item");
// inp2 = inp.toLowerCase();
// if (A.indexOf(inp2) >=0 ) {
//     alert(inp + " is available at index " + A.indexOf(inp2) + " in our bakery");
// } else {
//     alert("We are sorry, " + inp + " is not available in our bakery");
// }


// task 15

// var pass = prompt("Enter password");
// var correct = false;
// if (pass.length < 6) {
//     alert("Password must be atleast 6 characters long");
//     exit();
// }
// if (pass.charCodeAt(0) >= 48 && pass.charCodeAt(0) <= 57) {
//     alert("First character cannot be a number")
//     exit();
// }
// var hasnumber = false;
// var hasalphabet = false;

// for (var i = 0; i < pass.length; i++) {
//     if ((pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90) || (pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122)) {
//         hasalphabet = true;
//     }
//     if (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57) {
//         hasnumber = true;
//     }
//     if (hasalphabet && hasnumber) {
//         correct = true;
//     }
// }

// if (!correct) {
//     alert("Must contain alphabets and numbers both");
// }


// task 16

// var university = "University of Karachi";
// var uni = university.split("");
// for (var i = 0; i < university.length; i++) {
//     document.write("index: " + i + " - " + uni[i] + "<br>");
// }


// task 17

// var inp = prompt("Enter input");
// document.write("User Input: " + inp + "<br>" + "Last Character of input: " + inp.slice(inp.length-1));


// task 18

// var str = "The quick brown fox jumps over the lazy dog";
// var occur = 0;
// for (var i = 0; i < str.length-2; i++) {
//     var the = str.slice(i,i+3);
//     if (the.toLowerCase() == "the") {
//         occur += 1;
//     }
// }
// document.write ("Text: " + str);
// document.write("<br>There are " + occur + " occurence(s) of the word \"the\"")


//Chapter 26 - 30


// task 1

// var num = +prompt("Enter a number");
// document.write("number: " + num + "<br>");
// document.write("round off value: " + Math.round(num) + "<br>");
// document.write("floor value: " + Math.floor(num) + "<br>");
// document.write("ceil value: " + Math.ceil(num) + "<br>");


// task 2

// var num = +prompt("Enter a negative floating point number");
// document.write("number: " + num + "<br>");
// document.write("round off value: " + Math.round(num) + "<br>");
// document.write("floor value: " + Math.floor(num) + "<br>");
// document.write("ceil value: " + Math.ceil(num) + "<br>");


// task 3

// var num = +prompt("Enter number");
// document.write("The absolute value of " + num + " is " + Math.abs(num));


// task 4

// var num = Math.ceil(Math.random()*6);
// document.write("Random dice value: " + num);


// task 5

// var num = Math.ceil(Math.random()*2);
// document.write(num);
// (num == 1) ? document.write("<br>random coin value: Heads"):document.write("<br>random coin value: Tails");


// task 6

// var num = Math.ceil(Math.random()*100);
// document.write("Random number between 1 and 100: " + num);


// task 7

// var inp = prompt("Enter your weight");
// if (inp.length > 3) {
//     if (inp.slice(inp.length-3,inp.length).toLowerCase() == "kgs") {
//         inp = inp.slice(0,inp.length-3);
//     } else if (inp.length > 9) {
//         if (inp.slice(inp.length-9,inp.length).toLowerCase() == "kilograms") {
//             inp = inp.slice(0,inp.length-9);
//         }
//     }
// }
// document.write("The weight of user is " + inp + " kilograms");


// task 8

// var num = Math.ceil(Math.random()*10);
// var guess = prompt("Enter your guess between 1 & 10");
// if (guess == num) {
//     alert("Congratulations");
// } else {
//     alert("Sorry, try again. The number was " + num);
// }


// Chapter 31-34


// task 1

// document.write(new Date);


// task 2

// var d = new Date;
// mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// alert("Current Month: " + mlist[d.getMonth()]);


// task 3

// mlist = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var d = new Date;
// alert("Today is " + mlist[d.getDay()].slice(0,3));


// task 4

// mlist = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var d = new Date;
// if (d.getDay() == 0 || d.getDay() == 6) {
//     alert("It's Fun Day");
// }


// task 5

// var d = new Date;
// if (d.getDate() <= 15) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }


// task 6

// var d = new Date;
// min = d.getTime();
// document.write("Current Date: " + d);
// document.write("<br>Elapsed milliseconds since January 1 1970: " + min);
// document.write("<br>Elapsed minutes since January 1 1970: " + (min/1000/60));


// task 7

// var d = new Date;
// tim = d.getHours();
// ampm = (tim < 12)?"AM":"PM";
// alert("its " + ampm);


// task 8

// laterDate = new Date("December 31, 2020");
// document.write("Later Date: " + laterDate);


// task 9

// today = new Date;
// laterDate = new Date("June 18, 2015");
// var diff = today - laterDate;
// alert(Math.floor(diff/1000/60/60/24) + " Days have passed since 1st Ramzan 2015");


// task 10

// today = new Date;
// laterDate = new Date("January 1, 2015");
// var diff = today - laterDate;
// document.write("On Reference Day " + today + ",<br>" + Math.floor(diff/1000) + " Seconds have passed since beginning of 2015");


// task 11

// var d = new Date;
// document.write("current date: " + d);
// d.setHours(d.getHours()-1);
// document.write("<br>one hour ago, it was: " + d);


// task 12

// var d = new Date;
// alert("current date: " + d);
// d.setFullYear(d.getFullYear()-100);
// alert("100 years back, it was: " + d);


// task 13

// var age = prompt("Enter your age");
// document.write("Your age is " + age);
// var d = new Date;
// birthyear = d.getFullYear()-age;
// document.write("<br>Your birth year is " + birthyear);


// task 14

// document.write("<h1>K-Electric Bill</h1><br>");
// cname = prompt("Enter name");
// units = +prompt("Enter units");
// document.write("Customer Name: " + cname);
// var d = new Date;
// mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// document.write("<br>Month: " + mlist[d.getMonth()]);
// document.write("<br>Number of units: " + Math.round(units,2));
// document.write("<br>Charges per units: 16<br>");
// document.write("<br>Net amount payable (within due date): " + Math.round(units*16,2));
// document.write("<br>Late Payment surcharge: 350");
// document.write("<br>Gross amount payable (After due date): " + Number(Math.round(units*16,2) + 350));


// Chapter 35-38


// task 1

// function displayDateAndTime() {
//     var d = new Date;
//     document.write(d);
// }
// displayDateAndTime();


// task 2

// function greet() {
//     var fname = prompt("Enter First Name");
//     var lname = prompt("Enter Last Name");
//     alert("Welcome " + fname + " " + lname);
// }
// greet();


// task 3

//  function addNumbers() {
//     var num1 = +prompt("Enter First Number");
//     var num2 = +prompt("Enter Second Number");
//     var num3 = num1 + num2;
//     return num3;
//  }

// document.write(addNumbers());


// task 4

// function calcTwoNumbers() {
//     var num1 = +prompt("Enter First Number");
//     var num2 = +prompt("Enter Second Number");
//     var oper = prompt("Enter Operator (+,-,*,/)");
//     var num3;
//     switch (oper) {
//         case "+":
//             num3 = num1 + num2;
//             break;
//         case "-":
//             num3 = num1 - num2;
//             break;
//         case "*":
//             num3 = num1 * num2;
//             break;
//         case "/":
//             num3 = num1 / num2;
//             break;
//         default:
//             alert("incorrect operator")
//             exit();
//             break;
//     }
//     return num3;
// }
// document.write(calcTwoNumbers());


// task 5

// function sqr(i) {
//     return (i**2);
// }
// document.write(sqr(+prompt("Enter a number")));


// task 6

// function fact(i) {
//     var ans = 1;
//     for (var j = i; j > 0; j--) {
//         ans *= j;
//     }
//     return ans;
// }
// document.write(fact(+prompt("Enter a number")));


// task 7

// function series(start,end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + " ");
//     }
// }
// var a = +prompt("Enter start number");
// var b = +prompt("Enter end number");
// series(a,b);


// task 8

// function hyp (base,perp) {
//     function sqrCalc (num) {
//         return (num ** 2);
//     }
//     function rootCalc (num) {
//         return (num ** 0.5)
//     }
//     document.write(rootCalc(sqrCalc(base) + sqrCalc(perp)));
// }
// var a = +prompt("Enter base number");
// var b = +prompt("Enter perpendicular number");
// hyp(a,b);


// task 9

// function calcArea(width,height) {
//     return (width * height);
// }
// var w = +prompt("Enter width");
// var h = +prompt("Enter Height");
// document.write(calcArea(w,h));


// task 10

// function palin(wrd) {
//     var newWord = "";
//     wrd = wrd.toLowerCase();
//     for (var i = 0; i < wrd.length; i++) {
//         newWord = wrd.slice(i,i+1) + newWord;
//     }
//     return (newWord === wrd);
// }
// var a = prompt("Enter a word");
// if (palin(a)) {
//     document.write(a + " is a palindrome");
// } else {
//     document.write(a + " is not a palindrome");
// }


// task 11

// var a = prompt("Enter a sentence");
// function toTitleCase(sentenc) {
//     var res = "";
//     for (var i = 0; i < sentenc.length; i++) {
//         if (i == 0) {
//             if (!(sentenc.slice(0,1) === " ")) {
//                 res += sentenc.slice(0,1).toUpperCase();
//             } else {
//                 res += " ";
//             }
//         } else {
//             if (sentenc.slice(i-1,i) === " ") {
//                 res += sentenc.slice(i,i+1).toUpperCase();
//             } else {
//                 res += sentenc.slice(i,i+1);
//             }
//         }
//     }
//     return res;
// }
// document.write(toTitleCase(a));


// task 12

// var a = prompt("Enter a sentence");
// function longestWord(sentenc) {
//     var startIndex = 0;
//     var endIndex = 0;
//     var longestLength = 0;
//     var SI = 0;
//     var EI = 0;
//     var LL = 0;
//     for (var i = 0; i < sentenc.length; i++) {
//         if (sentenc.slice(i,i+1) === " ") {
//             EI = i;
//             LL = EI - SI-1;
//             if (LL > longestLength) {
//                 startIndex = SI + 1;
//                 endIndex = EI;
//                 longestLength = LL;
//             }
//             SI = i;
//         }
//     }
//     var res = sentenc.slice(startIndex,endIndex);
//     return res;
// }
// document.write(longestWord(a));


// task 13

// var a = prompt("Enter a sentence");
// var b = prompt("Enter letter to find");
// function findLetter(sentenc,ltr) {
//     var res = 0;
//     for (var i = 0; i < sentenc.length; i++) {
//         if (sentenc.slice(i,i+1) === ltr) {
//             res += 1;
//         }
//     }
//     return res;
// }
// document.write(findLetter(a,b));


// task 14

// function calcCircumference(rad) {
//     return ("The circumference is " + (rad*2*22/7));
// }
// function calcArea(rad) {
//     return ("The area is " + (rad**2*22/7));
// }
// var r = +prompt("Enter radius");
// document.write(calcCircumference(r) + "<br>");
// document.write(calcArea(r));