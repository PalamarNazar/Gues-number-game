const button = document.querySelector('.button')

const punctSpan = document.querySelector('#count-num')
let punctCount = Number(punctSpan.textContent);

const gameSlide = document.querySelector('.game-slide')
const gameSlideEnd = document.querySelector('.game__slide-end')
const gameInput = document.querySelector('.game-input')

const gameNext = document.querySelector('.game__btn-next')
const gameExit = document.querySelector('.game__btn-exit')

const overlay = document.querySelector('.overlay')

const attemps = document.querySelector('#attemps')
let attempsCount = attemps.textContent

const errorMassege = document.querySelector('.game-error-message')
const helperMassege = document.querySelector('.game-helper')
let number = 0

 button.addEventListener('click', function (even) {
    attempsCount = 0

    number = parseInt((Math.random() * 100));

    gameSlide.classList.add('game__slide-active');
    overlay.classList.add('overlay-active')

    console.log(number)
})
gameExit.addEventListener('click', function () {
        gameSlide.classList.remove('game__slide-active');
        overlay.classList.remove('overlay-active')
        resetSlideField()
        return;
})

function resetGame() {
                gameSlide.classList.remove('game__slide-active');
                gameSlideEnd.classList.add('game__slide-end--active');

                if (attempsCount === 1 || attempsCount === 2) {
                    punctCount = punctCount + 5
                } else if (attempsCount >= 3 && attempsCount < 5) {
                    punctCount = punctCount + 3
                } else if (attempsCount > 5 && attempsCount < 10) {
                    punctCount = punctCount + 2
                } else {
                    punctCount++
                }

                setTimeout(() => {
                    overlay.classList.remove('overlay-active');
                    gameSlideEnd.classList.remove('game__slide-end--active');
                }, 3000)
                resetSlideField()
                punctSpan.textContent = punctCount                
                return;
}
gameNext.addEventListener('click', () => {
    if (gameInput.value === '') {
        errorMassege.innerHTML = `This field must be fielled in.`
        helperMassege.innerHTML = '';
        gameInput.focus();
        return;
    } else {
        errorMassege.innerHTML = '';
        attempsCount++
            attemps.textContent = attempsCount
            let numberActive = gameInput.value;
                if (numberActive > number) {
                    renderHelpedMessage('My number is less :)')
                } else if (numberActive < number) {
                    renderHelpedMessage('My number is higher :)')
                } else {
                    resetGame()
                }
    }
});
function resetSlideField() {
    gameInput.value = '';
    errorMassege.innerHTML = '';
}
function renderHelpedMessage(str) {
    helperMassege.innerHTML = str
    gameInput.focus()
    gameInput.value = '';
}