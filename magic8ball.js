const answer = document.getElementById('answer');
const button = document.querySelector('button');
const ball = document.querySelector('.container');



button.addEventListener('click', function() {
ball.classList.toggle('shake');
    let value = Math.floor(Math.random() * 8);
    switch(value) {
        case 0:
            answer.textContent = 'As I see it, yes.'
            break;
        case 1:
            answer.textContent = 'Ask again later.'
            break;
        case 2:
            answer.textContent = 'Better not tell you now.'
            break;
        case 3:
            answer.textContent = 'Cannot predict now.'
            break;
        case 4:
            answer.textContent = 'Concentrate and ask again.'
            break;
        case 5:
            answer.textContent = "Don't count on it."
            break;
        case 6:
            answer.textContent = 'It is certain.'
            break;
        case 7:
            answer.textContent = 'It is decidedly so.'
            break;
    }
});