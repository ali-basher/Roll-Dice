let palyer1 = document.querySelector('.player--0');
let palyer2 = document.querySelector('.player--1');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let imagDice = document.querySelector('.dice');
let currentScor0 = Number(document.querySelector('#current--0').textContent);
let currentScor1 = Number(document.querySelector('#current--1').textContent);
let score0 = Number(document.querySelector('#score--0').textContent);
let score1 = Number(document.querySelector('#score--1').textContent);


btnNew.addEventListener('click', function () {
    location.reload();
});

btnRoll.addEventListener('click', rollDice);

btnHold.addEventListener('click', holdDice);

function rollDice() {
    let randomNumber = Math.floor((Math.random() * 6) + 1);

    imagDice.setAttribute('src', "dice-" + randomNumber + ".png");

    if (palyer1.classList.contains('player--active')) {
        if (randomNumber > 1) {
            currentScor0 += randomNumber;
            document.querySelector('#current--0').textContent = currentScor0;
        } else {
            palyer1.classList.remove('player--active');
            palyer2.classList.add('player--active');
            currentScor1 += randomNumber + currentScor0;
            currentScor0 = 0;
            document.querySelector('#current--0').textContent = currentScor0;
            document.querySelector('#current--1').textContent = currentScor1;
        }
    } else {
        if (randomNumber > 1) {
            currentScor1 += randomNumber;
            document.querySelector('#current--1').textContent = currentScor1;
        } else {
            palyer2.classList.remove('player--active');
            palyer1.classList.add('player--active');
            currentScor0 += randomNumber + currentScor1;
            currentScor1 = 0;
            document.querySelector('#current--1').textContent = currentScor1;
            document.querySelector('#current--0').textContent = currentScor0;
        }
    }
}

function holdDice() {
    if (palyer1.classList.contains('player--active')) {
        score0 += currentScor0;
        document.querySelector('#score--0').textContent = score0;
        currentScor0 = 0;
        document.querySelector('#current--0').textContent = currentScor0;

        setTimeout(() => {
            if (score0 >= 100) {
                alert('Player 1 Wins');
                location.reload();
            }
        }, 1000);

    } else {
        score1 += currentScor1;
        document.querySelector('#score--1').textContent = score1;
        currentScor1 = 0;
        document.querySelector('#current--1').textContent = currentScor1;

        setTimeout(() => {
            if (score1 >= 100) {
                alert('Player 2 Wins');
                location.reload();
            }
        }, 1000);
    }
}