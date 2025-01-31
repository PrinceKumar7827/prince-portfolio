let hands = document.querySelectorAll('img');
let board = document.querySelector('.board');
let userScore = document.querySelector('.userscore')
let computerScore = document.querySelector('.computerscore');
let btn = document.querySelector('.btn');
let arr = ['Rock', 'Paper', 'Scissors'];
let plusOne1 = document.querySelector('.plusone1')
let plusOne2 = document.querySelector('.plusone2')

hands.forEach((hand, index) => {
    hand.addEventListener('click', () => {
        
        function ani() {
            hand.style.animation = 'none'; // Reset animation
            hand.offsetHeight; // Force reflow (triggers a repaint)
            hand.style.animationName = 'shake';
            hand.style.animationTimingFunction = 'ease';
            hand.style.animationDuration = '0.15s';
        }
        
        
        let num = compGuess();
        if(index == 0) {
            board.innerText = `Rock VS. ${num}`;
            if(num == 'Scissors') {
                board.style.color = '#00b43f';
                userScore.innerText++;
                animation1()
                ani()
            } else if (num == 'Paper') {
                board.style.color = 'red';
                computerScore.innerText++;
                animation2()
                ani()
            } else {
                board.innerText = 'Rock VS. Rock';
                board.style.color = '#0095ff';
                ani()
            }
        } else if (index == 1) {
            ani()
            board.innerText = `Paper VS. ${num}`
            if(num == 'Rock') {
                board.style.color = '#00b43f';
                userScore.innerText++;
                animation1()
                ani()
            } else if (num == 'Scissors') {
                board.style.color = 'red';
                computerScore.innerText++;
                animation2()
                ani() 
            } else {
                board.innerText = 'Paper VS. Paper';
                board.style.color = '#0095ff';
                ani()
            }
        } else {
            ani()
            board.innerText = `Scissors VS. ${num}`
            if(num == 'Paper') {
                board.style.color = '#00b43f';
                userScore.innerText++;
                animation1()
                ani()
            } else if (num == 'Rock') {
                board.style.color = 'red';
                computerScore.innerText++;
                animation2()
                ani() 
            } else {
                board.innerText = 'Scissors VS. Scissors';
                board.style.color = '#0095ff';
                ani()
            } 
        }
        winner()
    });
    // hand.addEventListener('onmouseout', () => {
    //     hand.style.transform = 'scale(1)';
    // })
});


function animation1() {
    plusOne1.style.display = 'block';
    setTimeout(() => {
        plusOne1.style.display = 'none';
    }, 700);
    
}
function animation2() {
    plusOne2.style.display = 'block';
    setTimeout(() => {
        plusOne2.style.display = 'none';
    }, 700);
    
}   

function compGuess() {
    let i = Math.floor(Math.random() * 3);
    return arr[i];
}

function winner() {
    if(userScore.innerText == '10') {
        // board.innerText = 'You win !'
        setTimeout(() => {
            board.innerText = 'You Win !'
        }, 1200);
        board.style.color = '#00b43f'
        hands.forEach(hand => {
            hand.style.pointerEvents = 'none';
        });
    } else if (computerScore.innerText == '10') {
        // board.innerText = 'You loose !'
        setTimeout(() => {
            board.innerText = 'You Loose !'
        }, 1200);
        board.style.color = 'red'
        hands.forEach(hand => {
            hand.style.pointerEvents = 'none';
        });
    }
}

btn.addEventListener('click', () => {
    computerScore.innerText = '0'
    userScore.innerText = '0';
    board.innerText = 'Reset Successful !'
    board.style.color = 'white';
    hands.forEach(hand => {
        hand.style.pointerEvents = 'none';
    })
    setTimeout(() => {
        board.innerText = 'Increase your Score from 0 to 10 !';
        hands.forEach(hand => {
            hand.style.pointerEvents = 'auto';
        })
    }, 1000)
 
})