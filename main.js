const userName = 'Eddie'

userName ? console.log(`Hello ${userName}!`) : console.log("Hello!") 


let userQuestion = " Will I become a Software Engineer?"

console.log(`${userName} asks - ${userQuestion}`)


let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '' ;

randomNumber === 0 ? eightBall ='It is certain':
randomNumber === 1 ?  eightBall ='It is decidedly so':
randomNumber === 2 ?  eightBall ='Reply hazy try again':
randomNumber === 3 ?  eightBall ='Cannot predict now':
randomNumber === 4 ?  eightBall ='Do not count on it':
randomNumber === 5 ?  eightBall ='My sources say no':
randomNumber === 6 ?  eightBall ='Outlook not so good':
eightBall='Signs point to yes';

console.log(eightBall)


