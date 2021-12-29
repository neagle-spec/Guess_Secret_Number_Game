'use strict';
/*
    This file holds javascript for guessing game
    Author: Aaron Neagle
    File: data.js
    Date: 11/22/2021
*/

let secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //no input
    if (!guess){
        displayMessage('No Number Entered!');
    //player wins
    }else if (guess === secretNumber){
        displayMessage('Correct Number! You Won!');
        //change page styles and display secret number
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        //update high score if changed
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    //when guess is wrong
    }else if (guess !== secretNumber){
        if(score>1){
            displayMessage(guess > secretNumber ? 'too high': 'too low');
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'You Lost the Game';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function (){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) +1;
    displayMessage('start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
})