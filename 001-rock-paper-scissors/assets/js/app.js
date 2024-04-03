const choices = document.querySelectorAll('.choice');
const playerChoiceWrap = document.querySelector('.playerChoice');
const aiChoiceWrap = document.querySelector('.aiChoice');

const playerWinsWrap = document.querySelector('.playerWins');
const aiWinsWrap = document.querySelector('.aiWins');
const drawsWrap = document.querySelector('.draws');
const winnerWrap = document.querySelector('.gameResult');

choices.forEach(choice => {
    choice.addEventListener('click', () => startGame(choice));
});

const getAiChoice = () => {
    return choices[getRandomNumber()];
};

const getRandomNumber = () => {
    return Math.floor(Math.random() * choices.length);
};

const getType = (choice) => {
    return choice.dataset.type;
};

const getBeats = (choice) => {
    return choice.dataset.beats.trim().split(' ');
};

const startGame = (playerChoice) => {
    roundResult(playerChoice, getAiChoice());
};

const addWinnerPoint = (target) => {
    target.textContent = +target.textContent + 1;
};

const changeImage = (wrapper, choice) => {
    wrapper.querySelector('img').src = choice.querySelector('img').src;
};

const roundResult = (playerChoice, aiChoice) => {
    const playerType = getType(playerChoice);
    const playerBeats = getBeats(playerChoice);

    const aiType = getType(aiChoice);
    const aiBeats = getBeats(aiChoice);

    changeImage(playerChoiceWrap, playerChoice);
    changeImage(aiChoiceWrap, aiChoice);

    if (playerBeats.includes(aiType)) {
        winnerWrap.textContent = `You won`;
        addWinnerPoint(playerWinsWrap);
    } else if (aiBeats.includes(playerType)) {
        winnerWrap.textContent = `You lost`;
        addWinnerPoint(aiWinsWrap);
    } else {
        winnerWrap.textContent = `It's a draw`;
        addWinnerPoint(drawsWrap);
    }
};