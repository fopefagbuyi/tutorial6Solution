
let nextPlayer = 'X';

// Step 1: Initialize next player
document.getElementById('next-lbl').innerText = nextPlayer;

createGameBoard();

function createGameBoard()
{
    // Step 2: Create 9 buttons
    for (let i = 1; i <= 9; i++)
    {
        let cell = document.getElementById('c' + i);
        let button = document.createElement('button');

        button.innerText = '[ ]';
        cell.appendChild(button);
    }

    // Step 3: Add event listeners
    let btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++)
    {
        btns[i].addEventListener('click', takeCell);
    }
}

function takeCell(event)
{
    // Step 4: Fill clicked cell
    let button = event.target;

    button.innerText = '[' + nextPlayer + ']';
    button.disabled = true;

    // Switch players
    if (nextPlayer === 'X')
    {
        nextPlayer = 'O';
    }
    else
    {
        nextPlayer = 'X';
    }

    // Update label
    document.getElementById('next-lbl').innerText = nextPlayer;

    // Step 6: Check if game is over
    if (isGameOver())
    {
        document.getElementById('game-over-lbl').innerHTML =
            '<h1>Game Over</h1>';
    }
}

function isGameOver()
{
    // Step 5: Check all buttons
    let btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++)
    {
        if (!btns[i].disabled)
        {
            return false;
        }
    }

    return true;
}
