const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));

app.get('/sum', (request, response) => {
    const a = Number(request.query.a);
    const b = Number(request.query.b);

    const total = a + b;
    response.send(`The sum of ${a} and ${b} is equal to ${total}.`);
})

app.get('/cipher', (request, response) => {
    const { text } = request.query;
    const shift = Number(request.query.shift);


    // convert text into an array
    const encryption = text.split('').map((char, i ) => {
        let letter;
        // if letter z, convert it to letter a
        if (char === 'z'){
            return letter = 'a';
        } else {
            // else run encryption like normal
            // convert our text input characters into a number
            const blah = char.charCodeAt(0);
            // shift that number based on shift
            const newBlah = shift + blah;
            // convert the new number back to a letter
            letter = String.fromCharCode(newBlah);
        }  return letter;
    })
    response.send(`${text} turns into ${encryption}`);
})

app.get('/lotto', (request, response) => {
    const number = request.query.number;
    const randomArr = [];
    const score = 0;

    const getRandomInt = ((min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    })

    for (let i = 0; i < 6 ; i++){
        const randomNumber = Math.floor(Math.random() * (20 - 1) + 1);
        randomArr.push(randomNumber);
    }


    number.map(num => {
        console.log('num:', num)
        randomArr.map(numR => {
        console.log('numR:', numR)
            if (num == numR) {
                score++
                console.log('score:', score);
            } 
        })
    })

    console.log('final score:', score);    
    response.send(`${number}`);
})




app.listen(3000);