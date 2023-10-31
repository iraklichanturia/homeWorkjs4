

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
