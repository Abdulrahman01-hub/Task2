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

// let n = 10;
// let num = 1, num2 = 2;

// for (let i = 1; i <= n; i++) {
//   console.log(num);
//   let cem = num + num2;
//   num = num2;
//   num2 = cem;
// }

// for (let username = 56; username > 1; username--) {
//     let num = username;
//     let cnt = 0;

//     for (let i = num; i > 0; i--) {
//         if (num % i === 0) {
//             cnt++;
//         }
//     }
//     if (cnt === 2) {
//         console.log(num);
//     }
// }

// task 11
// function Palindrom(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }
// console.log(Palindrom("ata"));
// console.log(Palindrom("level"));
// console.log(Palindrom("schol"));

// task 12
// for (let i = 100; i <= 500; i++) {
//   if (i % 5 === 2) {
//     console.log(i);
//   }
// }

// task 13
// let num = "15";
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//     sum += Number(num[i]);
// }
// console.log("reqemlerin cemi " + sum);

// task 14
// let n = 12;

// for (let i = n; i >= 1; i--) {
//   if (n % i === 0) {
//     console.log(i);
//   }
// }

// ! task 15
// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
// }

// task 16
// let text = "hello world";
// console.log(text.split("").join("-"));

// task 17
// let text = "python";
// let say = 0;

// for (let i = 0; i < text.length; i++) {
//     if (text[i] === " ") {
//         say++;
//     }
// }
// console.log("bosluqlarin sayi", say);

// task 18
let a = 5;
let b = 3;
let start = Math.min(a, b);
let end = Math.max(a, b);

for (let i = start; i <= end; i++) {
    console.log(i * i);
}