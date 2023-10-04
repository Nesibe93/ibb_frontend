//window.alert("Deneme")
//alert("merhaba");

// console.log("I am console.log");
// console.warn("i am console.warn");
// console.info("i am console.info");
// console.error("i am console.error");

// document.write("merhabalar");
// document.writeln("merhabalar</br>");
// document.writeln("merhabalar");

// console.log(typeof nu10mber1);
//SAF : Shift + Alt + F => Kodu düzenliyor. Bunları hep kullan.
// ECMA Script 5
//Kullanıcı tarafından alınan iki sayıyı toplayan js algoritmasını yazınız

// function twoNumberSum() {
//     let number1,number2;
//     number1 = Number(prompt("Lütfen 1. sayıyı giriniz"));
//     number2 = Number(prompt("Lütfen 2. sayıyı giriniz"));
//     const number3 = number1 + number2;
//     console.log(number3);
// }
// //twoNumberSum()

// //Anonymous function(FC)
//  let twoNumberSum2 =function() {
//     let number1,number2;
//     number1 = Number(prompt("Lütfen 1. sayıyı giriniz"));
//     number2 = Number(prompt("Lütfen 2. sayıyı giriniz"));
//     const number3 = number1 + number2;
//     console.log(number3);
// }
// //twoNumberSum2()
// //Arrow function(FC)
// let twoNumberSum3 =() =>{
//     let number1,number2;
//     number1 = Number(prompt("Lütfen 1. sayıyı giriniz"));
//     number2 = Number(prompt("Lütfen 2. sayıyı giriniz"));
//     const number3 = number1 + number2;
//     console.log(number3);
// }
// //twoNumberSum3()
// //Arrow function(FC)
// let twoNumberSum4 = (number1,number2) =>{
//     return number1+number2;
// }
// let number5 = twoNumberSum4(4,5)
// console.log(number5);

// 2 tane sayının küçük olanın karekökünü hesaplayan programı yazınız
// let twoNumberSum5 = () => {
// let number1,number2;
// number1 = Number(prompt("Lütfen 1. sayıyı giriniz"));
// number2 = Number(prompt("Lütfen 2. sayıyı giriniz"));

// let data = Math.abs(Math.round(Math.sqrt(Math.min(number1,number2))));
// console.log(data);
// }
// //twoNumberSum5();

// //Not a Number = Nan
// let data1=12/"asd";
// console.log(data1);

// //infinity : sonsuzluk
// try {
//     let data2=0/0;
// console.log(data2);
// } catch (error) {
//     console.log(error);
//     console.log(error.message);
// }
// finally{
//     console.log("db.close");
// }

// let twoNumberSum7 = () => {
//   let number1, number2;
//   number1 = Number(prompt("Lütfen sayı giriniz"));

//   if (number1 === 1) {
//     console.log("1");
//   } else if (number1 === 2) {
//     console.log("2");
//   } else if (number1 === 3) {
//     console.log("3");
//   } else if (number1 === 4) {
//     console.log("4");
//   } else if (number1 === 5) {
//     console.log("5");
//   } else {console.log("1<=X<=5 dışındadır");
// };
// }
// twoNumberSum7();

// let twoNumberSum8 = () => {
//     let number1;
//     number1 = Number(prompt("Lütfen sayı giriniz"));

// let data = (number1 < 0) ? "negatif" : "pozitif";
// console.log(data);
// }
// twoNumberSum7();

let twoNumberSum9 = () => {
console.log((Number(prompt("Lütfen sayı giriniz")) < 0 ? "negatif" : "pozitif"));
}
twoNumberSum9();
    