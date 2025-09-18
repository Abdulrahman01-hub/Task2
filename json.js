// task 1
// let num = 6;

// if (num < 10 || num > 99) {
//     console.log("xahis olunur ikireqemli eded daxil edin");
// } else {
//     while (num < 100) {
//         num = num + 7;
//     }
//     console.log("son deyer: " + num);
// }

//task 2
// let a = 5;
// let b = 0;

// while (b < a) {
//     console.log("I know how to use cycles");
//     b++;
// }

// task 3
// let i = 100;
// while (i <= 999) {
//     if (i % 10 === 0) {
//         console.log(i);
//     }
//     i++;
// }

//task 4
// let i = 10;
// let sum = 0;
// while (i <= 99) {
//     if (i % 2 !== 0) {
//         sum += i;
//     }
//     i++;
// }
// console.log("butun ikireqemli tek ededlerin cemi", sum);

// task 5
// let n = +process.argv[2];
// if (!n) {
//     console.log("zehmet olmasa bir eded daxil edin node program.js 5");
//     process.exit(1);
// }
// let i = 100;
// let sum = 0;
// while (i <= 999) {
//     if (i % n === 0) {
//         sum += i;
//     }
//     i++;
// }
// console.log(`butun ucreqemli ededlerin cemi ${n}-e bolunen`, sum);

// task 7
// let hasil = 1;

// for (let i = 1; i <= 10; i++) {
//     hasil *= i;
// }
// console.log("1 den 10 a qeder butun ededlerin hasili", hasil);

// task 8
// İstifadəçidən mətn daxil etməsini tələb edirik
// let text = "abdul";

// if (text) {
//     let reversedText = "";
//     for (let i = text.length - 1; i >= 0; i--) {
//         reversedText += text[i];
//     }
//     console.log("ters metni " + reversedText);
// } else {
//     console.log("zehmet olmasa, metni daxil edin");
// }

// task 9
// let text = "abdul."
// let text2 = -1;
// for (let i = 0; i < text.length; i++) {
//     if (text[i] === ".") {
//         text2 = i;
//         break;
//     }
// }
// if (text2 !== -1) {
//     console.log(`"." simvolu ilk defe ${text2} indeksinde yerlesir`);
// } else {
//     console.log('metnde "." simvolu yoxdur');
// }

// task 10
// let text = "abdul45"; 
// let text2 = false;

// for (let i = 0; i < text.length; i++) {
//     if (text[i] >= '0' && text[i] <= '9') {
//         text2 = true;
//         break;
//     }
// }

// if (text2) {
//     console.log("metnde reqemler var");
// } else {
//     console.log("metnde reqem yoxdur");
// }