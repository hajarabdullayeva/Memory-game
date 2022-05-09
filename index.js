let score = 0;
let attempt = 5;

const getData = () => {
    const data = [
        {id: 1, src: 'images/car1.jpg', name: 'car1'},
        {id: 2, src: 'images/car2.avif', name: 'car2'},
        {id: 3, src: 'images/car3.avif', name: 'car3'},
        {id: 4, src: 'images/car4.jpg', name: 'car4'},
        {id: 5, src: 'images/car5.jpg', name: 'car5'},
        {id: 6, src: 'images/car6.jpg', name: 'car6'},
        {id: 7, src: 'images/car7.avif', name: 'car7'},
        {id: 8, src: 'images/car8.avif', name: 'car8'},
        {id: 9, src: 'images/car1.jpg', name: 'car1'},
        {id: 10, src: 'images/car2.avif', name: 'car2'},
        {id: 11, src: 'images/car3.avif', name: 'car3'},
        {id: 12, src: 'images/car4.jpg', name: 'car4'},
        {id: 13, src: 'images/car5.jpg', name: 'car5'},
        {id: 14, src: 'images/car6.jpg', name: 'car6'},
        {id: 15, src: 'images/car7.avif', name: 'car7'},
        {id: 16, src: 'images/car8.avif', name: 'car8'}
    ];
    return data;
}


const shuffleData = () => {
    const data = getData();
    const shuffledArray = data.sort((a, b) => 0.5 - Math.random());
    return shuffledArray;
}

const renderCards = () => {
    let allin = document.querySelector(".allin");
    const data = shuffleData();

    data.forEach(obj => {
        const html = `
            <div name=${obj.name} class="flip-card ">
                <div class="flip-card-inner ">
                    <div class="flip-card-front">
                        <img src="${obj.src}" style="width:150px;height:150px;">
                    </div>
                    <div class="flip-card-back">
                </div>
            </div>
        </div>
    `

        allin.insertAdjacentHTML('afterbegin', html);

        // let image = document.createElement("img");
        // image.setAttribute("src", obj.src);
        // image.setAttribute("name", obj.name);
        // allin.appendChild(image);
    })
}
renderCards();

const flipCard = function () {
    const container = document.querySelector('.allin');
    container.addEventListener('click', function (e) {
        const target = e.target.closest('.flip-card');
        target.classList.add('card-flipped')
        const clickedCards = document.querySelectorAll(".card-flipped");
        if (clickedCards.length === 2) {

            if (clickedCards[0].getAttribute("name") != clickedCards[1].getAttribute("name")) {
                attempt--;
                updateAttempt(attempt)

                setTimeout(() => {
                    clickedCards[0].classList.remove('card-flipped');
                    clickedCards[1].classList.remove('card-flipped');
                    if (attempt === 0) {
                        alert("Try again");
                        let allin = document.querySelector(".allin");
                        allin.innerHTML = ""
                        renderCards();
                        attempt = 5;
                        updateAttempt(attempt);
                        score = 0;
                        updateScore(score)
                    }
                }, 1000);
            } else {

                clickedCards[0].style.pointerEvents = "none";
                clickedCards[1].style.pointerEvents = "none";
                //add new class
                clickedCards[0].classList.add('active');
                clickedCards[1].classList.add('active');
                //    remove old class
                clickedCards[0].classList.remove('card-flipped');
                clickedCards[1].classList.remove('card-flipped');

                score++;
                updateScore(score);
                if (score * 2 === getData().length) {
                    alert("Play again");
                    let allin = document.querySelector(".allin");
                    allin.innerHTML = ""
                    renderCards();
                    attempt = 5;
                    updateAttempt(attempt);
                    score = 0;
                    updateScore(score)
                }
            }
        }
    })
}
flipCard()

function updateScore(score) {
    const scoreBox = document.querySelector('.scoreBox');
    scoreBox.innerHTML = score;
}

updateScore(score);

function updateAttempt(attempt) {
    const attemptBox = document.querySelector('.attemptBox');
    attemptBox.innerHTML = attempt;
}

updateAttempt(attempt);