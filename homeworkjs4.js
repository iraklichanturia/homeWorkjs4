//1. Create an algorithm that logs the multiplication table in the console

var i;
var j;
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {
        console.log(`${i}×${j}=${i * j}`);
    }
}

//Create an algorithm that prints all even numbers from range 0 - 20 in console
for(let num=1;num<=20;num++){
    if(num%2===0){
        console.log(num)
    }
}

//შექმენით ალგორითმი რომელიც დაითვლის თუ რამდენი 4 ის ჯეrადი რიცხვია
//მოთავსებული 0 დან 120 მდე

let count = 0;
for(let num = 1; num <= 120; num++){
    if(num % 4 == 0){
        console.log(num);
        count++
    }
}
console.log(count)

//4. შექმენით ალგორითმი რომელიც დაითვლის თუ რამდენი გამყოფი აქვს
//მომხმარებლის მიერ შემოტანილ რიცხვს

//1. ვთხოვოთ მომხმარებელს შემოიტანოს რიცხვითი მნიშვნელობა
//2.შევქმნათ ლუპი რომელიც გამოიტანს კონსოლში მომხმარებლის მიერ შემოტანილი რიცხვის გამყოფებს

let number = Number(prompt("Enter a number"));
while(isNaN(number)){
    number = Number(prompt("Enter a correct number"));
}

let count = 0;
for(let i = 1; i <= number; i++){
    if(number % i == 0){
        console.log(i)
        count++
}
}
console.log(count);

//5. შექმენით ალგორითმი რომელიც დაბეჭდავს რიცხვებს მომხმარებლის მიერ
//შემოყვანილ რიცხვებს შორის

//1.თხოვეთ მომხმარებელს შემოიტანოს ორი რიცხვი num1, num2
//2. შევქმნათ ლუპი რომელიც შემოიტანს რიცხვებს num1 - num2 რეინჯში

//prompt userNumbers
let num1 = Number(prompt('Enter the first number'));
let num2 = Number(prompt('Enter the second number'));

//check num numbers is numbers or not and if not make prompt again
while (isNaN(num1) || isNaN(num2)){
    num1 = Number(prompt('Enter the correct first number'));
    num2 = Number(prompt('Enter the correct second number'));
};

//check if num1 is less or greater than num2, num1 must be less than num2
if(num1 > num2){
    console.log('num2 must be greater than num1');
} else{
    for(let i = num1 + 1; i < num2; i++){
        console.log(i);
    }
}
