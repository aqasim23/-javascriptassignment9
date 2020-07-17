// Chapter 1

// task 1

// alert ("Hello Visitor!");

//task 2

// alert ("Error! Please enter a valid password.");

// task 3

// alert ('Welcome to JS Land... \nHappy Coding!');

// task 4

// alert('Welcome to JS Land...');
// alert('Happy Coding');

// task 5

// alert('Hello... I can run JS through my web browser\'s console');

// task 6

//already using alerts here

// task 7

// <script> tag runs ok in head as well as in body tag and after body as well









// Chapter 2

// task 1

// var username;

// task 2

// var myName = "Arsalan Qasim";

// task 3

// var message;
// message = "Hello World";
// alert (message);

// task 4

// var name = prompt('Enter your name');
// var age = prompt('Enter your age');
// var course = prompt('Enter course name');
// alert(name);
// alert(age + " years old");
// alert(course);

// task 5

// var msg = "PIZZA";
// for (var i = msg.length; i > 0; i--) {
//     msg +=  "\n" + msg.slice(0,i-1);
// }
// alert(msg);

// task 6

// var email = "arsalan.qasim@gmail.com";
// alert ("My email address is " + email);

// task 7

// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);

// task 8

// document.write("Yah! I can write HTML content through JavaScript");

// task 9

// var msg = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
// alert (msg);









// Chapter 3

// task 1

// var age = "31";
// alert ("I am " + age + " years old");

// task 2

// var a = 0;
// a +=1;
// alert ("You have visited this site " + a + " times");
// I cannot keep count of user visits after he refreshes the page

// task 3

// var birthYear = 1989;
// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data type of my ddeclared variable is " + typeof(birthYear));

// task 4

// var name = prompt("Enter you name");
// var title = prompt("Enter product title");
// var quantity = prompt("Enter the quantity of products you want to order");
// alert(name + " ordered " + quantity + " " + title + "(s) on XYZ Clothing Store");









// Chapter 4

// task 1

// var a = 1, b = 2, c = 3;

// task 2

// var legal1;
// var legal2;
// var legal3;
// var legal4;
// var legal5;
// var 1illegal;
// var 2illegal;
// var 3illegal;
// var 4illegal;
// var 5illegal;

// task 3

// document.write ("<h1> Rules for naming JS variables</h1><br><br>");
// document.write ("Variable names can only contain letters, numbers, dollar signs and underscores.\nFor example <strong>$my_1stVariable</strong><br>");
// document.write ("Variables must begin with a dollar sign, letter or underscore. For example <strong>$name, _name</strong> or <strong>name</strong><br>");
// document.write ("Variable names are case sensitive<br>");
// document.write ("Varianble names must not be JS keywords");









// Chapter 5

// task 1

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// num3 = num1 + num2;
// document.write ("Sum of " + num1 + " and " + num2 + " is " + num3); 

// task 2

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// num3 = num1 - num2;
// num4 = num1 * num2;
// num5 = num1 / num2;
// num6 = num1 % num2;
// document.write ("Difference of " + num1 + " and " + num2 + " is " + num3 + "<br>"); 
// document.write ("Product of " + num1 + " and " + num2 + " is " + num4 + "<br>");
// document.write ("Division of " + num1 + " and " + num2 + " is " + num5 + "<br>");
// document.write ("Modulus of " + num1 + " and " + num2 + " is " + num6 + "<br>");

// task 3

// var a;
// document.write ("Value after variable declaration is: " + a + "<br>");
// a = 5;
// document.write ("Initial value: " + a + "<br>");
// a += 1;
// document.write ("Value after increment: " + a + "<br>");
// a = a + 7;
// document.write ("Value after addition: " + a + "<br>");
// a -= 1;
// document.write ("Value after decrement: " + a + "<br>");
// a = a % 3;
// document.write ("The remainder is: " + a + "<br>");

// task 4

// var price = 600;
// var costof5 = price * 5;
// document.write ("Total cost to buy 5 tickets to a movie is " + costof5 + "PKR");

// task 5

// var num = 18;
// document.write ("Table of " + num +"<br><br>");
// for (var i = 1; i <= 10; i++) {
//     ans = num * i;
//     document.write (num + " x " + i + " = " + ans + "<br>");
// }

// task 6

// var cel = 25;
// var frh = 70;
// var cel2frh = (cel*9/5)+32;
// var frh2cel = (frh-32)*5/9;
// document.write (cel + "0".sup() + "C is " + cel2frh + "0".sup() + "F<br>");
// document.write (frh + "0".sup() + "F is " + frh2cel + "0".sup() + "C<br>");

// task 7

// var pr1 = prompt("Enter price of item 1");
// var pr2 = prompt("Enter price of item 2");
// var qt1 = prompt("Enter qty of item 1");
// var qt2 = prompt("Enter qty of item 2");
// var ship = 100;
// document.write ("Price of item 1 is " + pr1 + "<br>");
// document.write ("Quantity of item 1 is " + qt1 + "<br>");
// document.write ("Price of item 2 is " + pr2 + "<br>");
// document.write ("Quantity of item 2 is " + qt2 + "<br>");
// document.write ("Shipping Charges " + ship + "<br><br>");
// total = (pr1*qt1) + (pr2*qt2) + ship;
// document.write ("Total cost of you order is " + total);

// task 8

// var total = prompt("Enter total marks");
// var marks = prompt("Enter obtained marks");
// per = marks/total*100;
// document.write ("<h1>Marks Sheet<br><br></h1>");
// document.write ("Total marks: " + total + "<br>");
// document.write ("Marks obtained: " + marks + "<br>");
// document.write ("Percentage: " + per + "%<br>");

// task 9

// var usd = 10;
// var sar = 25;
// var pkr = (usd * 104.8) + (sar * 28);
// document.write ("<h1>Currency in PKR<br><br></h1>");
// document.write ("Total Currency in PKR: " + pkr);

// task 10

// var a = 5;
// a = (a + 5) * 10 / 2;

// task 11

// var curYear = 2020;
// var birthYear = +prompt("Enter birth year");
// var curAge = curYear - birthYear;
// document.write ("<h1>Age Calculator<br><br></h1>");
// document.write ("Current Year: " + curYear);
// document.write ("<br>Birth Year: " + birthYear);
// document.write ("<br>Your Age is: " + curAge + " OR " + --curAge);

// task 12

// var rad = +prompt("Enter Radius");
// var circum = 2 * 3.14 * rad;
// var area = 3.14 * (rad ** 2);
// document.write ("<h1>The Geometrizer<br><br></h1>");
// document.write ("Radius of a circle: " + rad);
// document.write ("<br>The circumference is: " + circum);
// document.write ("<br>The area is: " + area);

// task 13

// var snack = "kitkat";
// var age = 31;
// var maxAge = 99;
// var apd = 5;
// var total = (maxAge-age)*365*apd;
// document.write ("<h1>The Lifetime Supply Calculator<br><br></h1>");
// document.write ("Favourite Snack: " + snack + "<br>");
// document.write ("Current Age: " + age + "<br>");
// document.write ("Estimated Max Age: " + maxAge + "<br>");
// document.write ("Amount of snacks per day: " + apd + "<br>");
// document.write ("You will need " + total + " " + snack + " to last you until the ripe old age of " + maxAge);









// Chapter 6-9

// task 1

// var a = prompt("Enter a number");
// document.write("Result:<br>");
// document.write("The value of a is: " + a);
// document.write("<br>....................................<br><br>");
// document.write("The value of ++a is: " + ++a);
// document.write("<br>Now the value of a is: " + a + "<br><br>");
// document.write("The value of a++ is: " + a++);
// document.write("<br>Now the value of a is: " + a + "<br><br>");
// document.write("The value of --a is: " + --a);
// document.write("<br>Now the value of a is: " + a + "<br><br>");
// document.write("The value of a-- is: " + a--);
// document.write("<br>Now the value of a is: " + a + "<br><br>");

// task 2

// var a = 2, b = 1;
// document.write ("a is " + a);
// document.write ("<br>b is " + b);
// var result = --a - --b + ++b + b--; 
// //            1  - 0   +  1  +  1 (after this b becomes 0) = 3 result
// document.write ("<br>result is " + result);

// task 3

// var name = prompt("Enter your name");
// alert ("Hello " + name);

// task 4 is missing in question file

// task 5

// var num = +prompt("Enter a number");
// if (num === 0) {
//     num = 5;
// }
// for (var i = 1; i <=10;i++) {
//     document.write (num + " x " + i + " = " + num*i + "<br>");
// }

// task 6

// var sub1 = prompt("Enter name for subject 1");
// var sub2 = prompt("Enter name for subject 2");
// var sub3 = prompt("Enter name for subject 3");
// var totalMarks = 100;
// var marks1 = +prompt("Enter marks obtained in subject 1");
// var marks2 = +prompt("Enter marks obtained in subject 2");
// var marks3 = +prompt("Enter marks obtained in subject 3");
// var per1 = marks1 / totalMarks * 100;
// var per2 = marks2 / totalMarks * 100;
// var per3 = marks3 / totalMarks * 100;
// var sum = marks1 + marks2 + marks3;
// var per = sum / (totalMarks * 3) * 100;
// document.write("<table><thead><tr><th>Subject</th><th>Total Marks</th><th>Obatined Marks</th><th>Percentage</th></tr></thead><tbody><tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td><td>" + per1 + "%</td></tr><tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td><td>" + per2 + "%</td></tr><tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td><td>" + per3 + "%</td></tr><tr><td></td><td><strong>" + totalMarks * 3 + "</strong></td><td><strong>" + sum + "</strong></td><td><strong>" + per + "%</strong></td></tr></tbody></table>");

// task 7 is missing in question file









// Chapter 9 - 11

// task 1

// var city = prompt("Enter name of city");
// if (city.toLowerCase() === "karachi") {
//     alert("Welcome to city of lights");
// }

// task 2

// var gen = prompt("Enter your gender");
// if (gen.toLowerCase() === "male") {
//     alert ("Good Morning Sir");
// } else if (gen.toLowerCase() === "female") {
//     alert ("Good Morning Ma’am");
// }

// task 3

// var gen = prompt("Enter signal color");
// if (gen.toLowerCase() === "red") {
//     alert ("Must Stop");
// } else if (gen.toLowerCase() === "yellow") {
//     alert ("Ready to move");
// } else if (gen.toLowerCase() === "green") {
//     alert ("Move now");
// }

// task 4

// var fuel = prompt("Enter remaining fuel amount in liters");
// fuel = Number(fuel);
// if (fuel < 0.25) {
//     alert ("Please refill the fuel in your car");
// }

// task 5

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// //alert is displayed
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// //alert is not displayed
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// //alert is not displayed
// if (c === 13) {
//     alert("condition 2 is true");
// }
// //alert is displayed
// if (++c < 14) { 
//     alert("condition 3 is true"); 
// } 
// //alert is not displayed
// if (c === 14) { 
//     alert("condition 4 is true"); 
// }
// //alert is displayed
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost) { 
//     alert("The cost equals"); 
// }
// //alert is displayed
// if (true) { 
//     alert("True"); 
// } if (false) { 
//     alert("False"); 
// }
// //true is displayed
// if ("car" < "cat") { 
//     alert("car is smaller than cat"); 
// }
// //alert is displayed

// task 6

// var marks1 = +prompt("Enter marks obtained in subject 1");
// var marks2 = +prompt("Enter marks obtained in subject 2");
// var marks3 = +prompt("Enter marks obtained in subject 3");
// var sum = marks1 + marks2 + marks3;
// var totalMarks = +prompt("Enter total marks");
// var per = sum / (totalMarks) * 100;
// document.write("<h1>Marks Sheet<br><br></h1>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + sum + "<br>");
// document.write("Percentage: " + per + "%<br>");
// var grade;
// var remarks;
// switch (true) {
//     case (per >= 80):
//         grade = "A-one";
//         remarks = "Excellent";
//         break;
//     case (per >= 70):
//         grade = "A";
//         remarks = "Good";
//         break;
//     case (per >= 60):
//         grade = "B";
//         remarks = "You need to improve";
//         break;
//     case (per < 60):
//         grade = "Fail";
//         remarks = "Sorry";
//         break;
// }
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks + "<br>");

// task 7

// var num = Math.ceil(Math.random()*10);
// var guess = +prompt("Enter your guess");
// if (guess == num) {
//     alert ("Bingo! Correct answer");
// } else if (num - guess == 1) {
//     alert ("Close enough to the correct answer");
// }

// task 8

// var num = prompt ("Enter number");
// if (num % 3 == 0) {
//     alert ("Yes this number is divisible by 3");
// } else {
//     alert ("Not divisible by 3");
// }

// task 9

// var num = prompt ("Enter number");
// if (num % 2 == 0) {
//     alert ("This number is Even");
// } else {
//     alert ("This number is odd");
// }

// task 10

// var temp = +prompt("Enter temperature");
// if (temp > 40) {
//     alert ("It is too hot outside.");
// } else if (temp > 30) {
//     alert ("The Weather today is Normal.");
// } else if (temp > 20) {
//     alert ("Today’s Weather is cool.");
// } else if (temp > 10) {
//     alert ("OMG! Today's weather is so Cool.");
// }

// task 11

// var num1 = +prompt("Enter 1st number");
// var num2 = +prompt("Enter 2nd number");
// var oper = prompt("Enter operation + - * / %");
// var ans;
// switch (oper) {
//     case "+":
//         ans = num1 + num2;
//         break;
//     case "-":
//         ans = num1 - num2;
//         break;
//     case "*":
//         ans = num1 * num2;
//         break;
//     case "/":
//         ans = num1 / num2;
//         break;
//     case "%":
//         ans = num1 % num2;
//         break;
// }
// document.write (num1 + " " + oper + " " + num2 + " = " + ans);









// Chapter 12 - 13

// task 1

// var str = prompt("Enter character");
// switch (true) {
//     case (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90):
//         document.write(str[0] + " is Upper Case");
//         break;
//     case (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122):
//         document.write(str[0] + " is Lower Case");
//         break;
//     case (str.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 57):
//         document.write(str[0] + " is a number");
//         break;
// }

// task 2

// var num1 = +prompt("Enter 1st number");
// var num2 = +prompt("Enter 2nd number");
// if (num1 == num2) {
//     alert ("Both numbers are equal");
// } else if (num1 > num2) {
//     alert (num1 + " is larger");
// } else {
//     alert (num2 + " is larger");
// }

// task 3

// var num = +prompt("Enter number");
// if (num === 0) {
//     alert ("number is 0");
// } else if (num > 0) {
//     alert ("number is positive");
// } else {
//     alert ("number is negative");
// }

// task 4

// var vowels = ["a","e","i","o","u"]
// var inp = prompt("Enter character");
// inp = inp[0].toLowerCase();
// if (vowels.indexOf(inp) >= 0) {
//     alert ("its a vowel");
// } else {
//     alert ("not a vowel");
// }

// task 5

// var pass = "Hello";
// var userp = prompt("Enter password");
// if (userp == "") {
//     alert ("Please enter your password");
// }else if (userp == pass) {
//     alert ("Correct! The password you entered matches the original password");
// } else {
//     alert ("Incorrect password");
// }

// task 6

// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
//     greeting = "Good day"; 
// } else {
//     greeting = "Good evening";
// }
// //fixed

// task 7

// var t = +prompt("Enter time in 24 hour mode eg 1900 for 7pm");
// var msg;
// if (t >= 0000 && t < 1200) {
//     msg = "Good morning";
// } else if (t >= 1200 && t < 1700) {
//     msg = "Good afternoon";
// } else if (t >= 1700 && t < 2100) {
//     msg = "Good evening";
// } else if (t >= 2100 && t < 2359) {
//     msg = "Good night";
// }
// alert (msg);









// Chapter 14 - 16

// task 1

// var names = [];

// task 2

// var names = new Array();

// task 3

// var names = ["aasd","basd"];

// task 4

// var numbers = [123,44];

// task 5

// var booleanArray = [true,false];

// task 6

// var mixed = [123,"Arsalan",44,true];

// task 7

// var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("Qualifications:<br><br>");
// for (var i = 0; i < qual.length; i++) {
//     document.write(i + 1 + ") " + qual[i] + "<br>");
// }

// task 8

// var names = [];
// var scores = [];
// var totalMarks = 500;
// var per = [];
// for (var i = 0; i < 3; i++) {
//     var n = i+1;
//     names[i] = prompt("Enter name of Student #" + n);
//     scores[i] = prompt("Enter score of Student #" + n);
//     per[i] = scores[i]/totalMarks*100;
// }
// for (var i = 0; i < 3; i++) {
// document.write ("Score of " + names[i] + " is " + scores[i] + ". Percentage: " + per[i] + "%<br>");
// }

// task 9

// var colors = ["red","blue"];
// document.write (colors + "<br>");
// var userc = prompt("Which color to add to the start?");
// colors.unshift(userc);
// document.write (colors + "<br>");
// userc = prompt("Which color to add to the end of array?");
// colors.push(userc);
// document.write (colors + "<br>");
// colors.unshift("grey","crimson");
// document.write (colors + "<br>");
// colors.shift();
// document.write (colors + "<br>");
// colors.pop();
// document.write (colors + "<br>");
// var useri = prompt("Which index to add new color?");
// userc = prompt("Which color to add?");
// colors.splice(useri,0,userc);
// document.write (colors + "<br>");
// useri = prompt("Which index to start removing new color?");
// userc = prompt("how many colors to remove?");
// colors.splice(useri,userc);
// document.write (colors + "<br>");

// task 10

// var scores = [123,424,423,321];
// document.write("Scores of Students : " + scores);
// scores.sort();
// document.write("<br>Ordered Scores of Students : " + scores);

// task 11

// var cityNames = ["Karachi","Lahore","Islamabad","Peshawar"];
// var copied = cityNames.slice(0,3);
// document.write("Cities List:<br>"+cityNames+"<br><br>Selected Cities List:<br>"+copied);

// task 12

// var arr = ["This ", " is ", " my ", " cat"];
// var str = arr.join("");
// document.write("Array:<br>"+arr+"<br><br>String:<br>"+str);

// task 13

// var newarr = [];
// for (var i = 0; i <= 3; i++) {
//     newarr[i] = prompt("Enter value");
// }
// document.write("Devices:<br>" + newarr + "<br><br>");
// for (var i = 0; i <= 3; i++) {
//     document.write("Out:<br>" + newarr[i] + "<br>");
// }

// task 14

// var newarr = [];
// for (var i = 0; i <= 3; i++) {
//     newarr[i] = prompt("Enter value");
// }
// document.write("Devices:<br>" + newarr + "<br><br>");
// for (var i = 3; i >= 0; i--) {
//     document.write("Out:<br>" + newarr[i] + "<br>");
// }

// task 15 is not clear, dropdown/select menu??? following?? maybe question is incomplete?









// Chapter 17-20

// task 1

// var mularr = [["11","12","13"],["21","22","23"],["31","32","33"]];

// task 2

// var mularr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// task 3

// for (var i = 1; i <=10; i++) {
//     document.write (i + "<br>");
// }

// task 4

// var num = +prompt("Enter number");
// var lng = +prompt("Enter length of table");
// for (var i = 1; i <= lng; i++) {
//     document.write(num + " x " + i + " = " + num*i + "<br>");
// }

// task 5

// fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i <= fruits.length - 1; i++) {
//     document.write(fruits[i] + "<br>");
// }
// document.write("<br>");
// for (var i = 0; i <= fruits.length - 1; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

// task 6

// document.write("<h3>Counting:</h3>")
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ",");
// }
// document.write("<br>");
// document.write("<h3>Reverse Counting:</h3>")
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ",");
// }
// document.write("<br>");
// document.write("<h3>Even:</h3>")
// for (var i = 0; i <= 20; i=i+2) {
//     document.write(i + ",");
// }
// document.write("<br>");
// document.write("<h3>Odd:</h3>")
// for (var i = 1; i <= 20; i=i+2) {
//     document.write(i + ",");
// }
// document.write("<br>");
// document.write("<h3>Series:</h3>")
// for (var i = 2; i <= 20; i=i+2) {
//     document.write(i + "k, ");
// }
// document.write("<br>");

// task 7

// A = ["cake", "apple pie", "cookie", "chips", "patties"];
// srch = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am?");
// if (A.indexOf(srch) == -1) {
//     alert("We are sorry, " + srch + " is not available in our bakery");
// } else {
//     alert(srch + " is available at index " + A.indexOf(srch) + " in our bakery");
// }

// task 8

// A = [24, 53, 78, 91, 12];
// document.write("Array items: " + A);
// A.sort();
// document.write("<br>The largest number is " + A[A.length-1]);

// task 9

// A = [24, 53, 78, 91, 12];
// document.write("Array items: " + A);
// A.sort();
// document.write("<br>The largest number is " + A[0]);

// task 10

// for (var i = 5; i <= 100; i = i + 5) {
//     document.write(i + ", ");
// }