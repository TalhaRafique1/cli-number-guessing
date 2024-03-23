#! /usr/bin/env node
import inquirer from "inquirer"

const randomNunber = Math.floor(Math.random() * 6 + 1);

console.log("Welcome to number Guessing Game");


const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },
]);

if(answers.userGuessedNumber === randomNunber){
    console.log("Congratulation! you guessed a right number.");
}else{
    console.log("You guessed wrong number");
    
}
