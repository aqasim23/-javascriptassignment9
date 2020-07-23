// Chapter 38 to 42

// Task 1

// function pow(a,b) {
//     return (a**b);
// }
// var a = +prompt("Enter number");
// var b = +prompt("Enter power");
// document.write(pow(a,b));


// Task 2

// function isLeap(year){
//     if ((year%4) == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// var yr = +prompt("Enter Year");
// if (isLeap(yr)) {
//     document.write(yr + " is a leap year");
// } else {
//     document.write(yr + " is not a leap year");
// }


// Taks 3

// function area(a,b,c){
//     function S(a,b,c) {
//         return ((a+b+c)/2);
//     }
//     var s2 = S(a,b,c);
//     return (s2*(s2-a)*(s2-b)*(s2-c))**(0.5);
// }
// var inpA = +prompt("Enter value for side a");
// var inpB = +prompt("Enter value for side b");
// var inpC = +prompt("Enter value for side c");
// document.write("Area for the given triangle is " + area(inpA,inpB,inpC));


// Task 4

// function marks(s1,s2,s3){
//     function aver(s1,s2,s3) {
//         return (s1+s2+s3)/3;
//     }
//     function perc(s1,s2,s3) {
//         return ((s1+s2+s3)/300*100);
//     }
//     document.write("sub1 = " + s1);
//     document.write("<br>sub2 = " + s2);
//     document.write("<br>sub3 = " + s3);
//     document.write("<br>Average marks = " + aver(s1,s2,s3));
//     document.write("<br>Percentage = " + perc(s1,s2,s3) + "%");
// }
// var s1 = +prompt("Enter subject 1 marks");
// var s2 = +prompt("Enter subject 2 marks");
// var s3 = +prompt("Enter subject 3 marks");
// marks(s1,s2,s3);


//Task 5

// function myIndexOf(tex,ch){
//     var ans = -1;
//     for (var i = 0; i < tex.length; i++) {
//         var cher = tex.slice(i,i+1);
//         if (cher == ch) {
//             ans = i;
//             break;
//         }
//     }
//     if (ans == -1) {
//         document.write("character " + ch + " not found in ");
//     } else {
//         document.write("character " + ch + " found at index " + ans);
//     }
// }
// var tex = prompt("Enter text");
// var ch = prompt("Enter character");
// myIndexOf(tex,ch);


// Task 6

// function removeVowels(tex) {
//     for (var i = 0; i < tex.length; i++) {
//         var chr = tex.slice(i, i + 1);
//         if (chr.toLowerCase() == "a" || chr.toLowerCase() == "e" || chr.toLowerCase() == "i" || chr.toLowerCase() == "o" || chr.toLowerCase() == "u") {
//             tex = removeletter(tex, i);
//             i = i - 1;
//         }
//     }
//     document.write(tex);
// }
// function removeletter(tex, i) {
//     return (tex.slice(0, i) + tex.slice(i + 1, tex.length))
// }
// var tex = prompt("Enter sentence");
// removeVowels(tex);


// Task 7

// function findV(tex) {
//     var FL = "";
//     var OC = [];
//     function isVowel(chr) {
//         switch (chr.toLowerCase()) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//                 return true;
//             default:
//                 return false;
//         }
//     }
//     for (var i = 0; i < tex.length; i++) {
//         if (isVowel(tex.slice(i, i + 1))) {
//             if (FL == "") {
//                 FL = tex.slice(i, i + 1);
//             } else {
//                 OC.push(FL + tex.slice(i, i + 1))
//                 FL = tex.slice(i, i + 1);
//             }
//         } else {
//             FL = "";
//         }
//     }
//     document.write("Consecutive vowels: " + OC);
// }
// var sent = prompt("Enter sentence");
// findV(sent);


// Task 8

// function disInMeter(dist) {
//     var ans = dist * 1000;
//     document.write("Distanch in Meters is " + ans + "<br>");
// }
// function disInFeet(dist) {
//     var ans = dist * 3280.84;
//     document.write("Distanch in Meters is " + ans + "<br>");
// }
// function disInInch(dist) {
//     var ans = dist * 39370.1;
//     document.write("Distanch in Meters is " + ans + "<br>");
// }
// function disInCM(dist) {
//     var ans = dist * 100000;
//     document.write("Distanch in Meters is " + ans + "<br>");
// }
// var dist = +prompt("Enter distance in km");
// disInMeter(dist);
// disInFeet(dist);
// disInInch(dist);
// disInCM(dist);



// Task 9

// function overtime(hours) {
//     var OH = hours - 40;
//     var OT = OH * 12;
//     if (OT < 0) {
//         OT = 0;
//     }
//     document.write("Overtime is " + OT + " PKR")
// }
// var hours = +prompt("Enter number of hours");
// overtime(hours);



// Task 10

// function answer(numb) {
//     var remainder = numb%100;
//     var hund = (numb - remainder)/100;
//     document.write("Hundered note = " + hund);
//     var remainder2 = remainder%50;
//     var fifty = (remainder - remainder2)/50;
//     document.write("<br>Fifty notes = " + fifty);
//     var remainder3 = remainder2%10;
//     var tens = (remainder2 - remainder3)/10;
//     document.write("<br>Ten notes = " + tens);
// }
// var amount = +prompt("Enter amount of money");
// answer(amount);