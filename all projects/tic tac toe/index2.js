let playerX = true;
let playerO = false;

let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let item5 = document.getElementById('item5');
let item6 = document.getElementById('item6');
let item7 = document.getElementById('item7');
let item8 = document.getElementById('item8');
let item9 = document.getElementById('item9');


let arrX = [];
let arrO = [];
let winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

item1.addEventListener('click', () => {
    if(playerX == true && playerO == false) {
        item1.innerHTML = 'X';
        playerX = false;
        playerO = true;
        arrX.push(0);
        arrX.sort();
    } else if(playerX == false && playerO == true) {
        arrX.sort();
        item1.innerHTML = "O";
        playerX = true;
        playerO = false;
        arrO.push(0);
        arrO.sort();
    } 
})
item2.addEventListener('click', () => {
    if(playerX == true && playerO == false) {
        item2.innerHTML = 'X';
        playerX = false;
        playerO = true;
        arrX.push(1);
        arrX.sort();
        for(let i = 0; i < winningPattern.length; i++) {
            if(winningPattern[i] == arrX) {
                console.log('X is winner');
            } else {
                console.log('failed');
            }
        }
    } else if(playerX == false && playerO == true) {
        item2.innerHTML = "O";
        playerX = true;
        playerO = false;
        arrO.push(1);
        arrO.sort();
    }
})
item3.addEventListener('click', () => {
    if(playerX == true && playerO == false) {
        item3.innerHTML = 'X';
        playerX = false;
        playerO = true;
        arrX.push(2);
        arrX.sort();
        for(let i = 0; i < winningPattern.length; i++) {
            if(winningPattern[i] == arrX) {
                console.log('X is winner');
            } else {
                console.log('failed');
            }
        }
    } else if(playerX == false && playerO == true) {
        item3.innerHTML = "O";
        playerX = true;
        playerO = false;
        arrO.push(2);
        arrO.sort();
    }
})
item4.addEventListener('click', () => {
    if(playerX == true && playerO == false) {
        item4.innerHTML = 'X';
        playerX = false;
        playerO = true;
        arrX.push(3);
        arrX.sort();
    } else if(playerX == false && playerO == true) {
        item4.innerHTML = "O";
        playerX = true;
        playerO = false;
        arrO.push(3);
        arrO.sort();
    }
})
item5.addEventListener('click', () => {
    if(playerX == true && playerO == false) {
        item5.innerHTML = 'X';
        playerX = false;
        playerO = true;
        arrX.push(4);
        arrX.sort();

    } else if(playerX == false && playerO == true) {
        item5.innerHTML = "O";
        playerX = true;
        playerO = false;
        arrO.push(4);
        arrO.sort();
    }
})
item6.addEventListener('click', () => {
    if(playerX == true && playerO == false) {
        item6.innerHTML = 'X';
        playerX = false;
        playerO = true;
        arrX.push(5);
        arrX.sort();

    } else if(playerX == false && playerO == true) {
        item6.innerHTML = "O";
        playerX = true;
        playerO = false;
        arrO.push(5);
        arrO.sort();
    }
})
item7.addEventListener('click', () => {
    if(playerX == true && playerO == false) {
        item7.innerHTML = 'X';
        playerX = false;
        playerO = true;
        arrX.push(6);
        arrX.sort();

    } else if(playerX == false && playerO == true) {
        item7.innerHTML = "O";
        playerX = true;
        playerO = false;
        arrO.push(6);
        arrO.sort();
    }
})
item8.addEventListener('click', () => {
    if(playerX == true && playerO == false) {
        item8.innerHTML = 'X';
        playerX = false;
        playerO = true;
        arrX.push(7);
        arrX.sort();

    } else if(playerX == false && playerO == true) {
        item8.innerHTML = "O";
        playerX = true;
        playerO = false;
        arrO.push(7);
        arrO.sort();
    }
})
item9.addEventListener('click', () => {
    if(playerX == true && playerO == false) {
        item9.innerHTML = 'X';
        playerX = false;
        playerO = true;
        arrX.push(8);
        arrX.sort();

    } else if(playerX == false && playerO == true) {
        item9.innerHTML = "O";
        playerX = true;
        playerO = false;
        arrO.push(8);
        arrO.sort();
    }
})


// for(let i = 0; i < arrX.length; i++) {
//     for(let j = 0; j < arrX.length - i - 1; j++) {
//         if(arrX[j] > arrX[j + 1]) {
//             let temp = arrX[j];
//             arrX[j] = arrX[j + 1];
//             arrX[j + 1] = temp;
//         }
//     }
// }
// console.log(arrX);

for(let i = 0; i < winningPattern.length; i++) {
    if(arrO == winningPattern[i]) {
        console.log('O is winner');
    }
}