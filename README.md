# Rock Paper Scissors

A simple browser-based Rock, Paper, Scissors game built with vanilla HTML, CSS, and JavaScript. Click a button to make your move — the computer picks its move at random and the result shows right on the page.

I wrote this project to practice DOM manipulation: creating elements dynamically, attaching event listeners, and comparing values to work out a game outcome.

## How it works
1. Open the page — you'll see three buttons, each showing an image: rock, paper, and scissor.
2. Click one to make your move.
3. The computer randomly picks rock, paper, or scissor.
4. The page rebuilds the result area to show your choice, the computer's choice, and the outcome ("YOU WIN", "YOU LOSE", or "IT'S A DRAW").
5. Click any button again to play another round — the old result is cleared out first.

## Files
- `index.html` — page structure and styling
- `script.js` — game l# Rock Paper Scissors

A simple browser-based Rock, Paper, Scissors game built with vanilla HTML, CSS, and JavaScript. Click a button to make your move — the computer picks its move at random and the result shows right on the page.

I wrote this project to practice DOM manipulation: creating elements dynamically, attaching event listeners, and comparing values to work out a game outcome.

## How it works
1. Open the page — you'll see three buttons, each showing an image: rock, paper, and scissor.
2. Click one to make your move.
3. The computer randomly picks rock, paper, or scissor.
4. The page rebuilds the result area to show your choice, the computer's choice, and the outcome ("YOU WIN", "YOU LOSE", or "IT'S A DRAW").
5. Click any button again to play another round — the old result is cleared out first.

## Files
- `index.html` — page structure and styling
- `script.js` — game logic: generates the computer's move, compares it to yours, and builds the result display
- `rock.png`, `paper.png`, `scissor.png` — images used on the buttons and in the result display

## How to run it
1. Make sure `index.html`, `script.js`, and the three image files are all in the same folder.
2. Open `index.html` in your browser (double-click it, or serve it with something like the VS Code Live Server extension).
3. Click rock, paper, or scissor to play.

## Things I accounted for
- Every button has its own click handler covering all three possible computer responses, so every matchup (win, lose, draw) is handled.
- The result area is fully cleared and rebuilt on each click, so results from previous rounds don't stack up on the page.

## Possible next steps
- Track a running score across rounds instead of only showing the latest one
- Pull the repeated result-rendering code out of the nine `if/else` branches into one reusable functionogic: generates the computer's move, compares it to yours, and builds the result display
- `rock.png`, `paper.png`, `scissor.png` — images used on the buttons and in the result display

## How to run it
1. Make sure `index.html`, `script.js`, and the three image files are all in the same folder.
2. Open `index.html` in your browser (double-click it, or serve it with something like the VS Code Live Server extension).
3. Click rock, paper, or scissor to play.

## Things I accounted for
- Every button has its own click handler covering all three possible computer responses, so every matchup (win, lose, draw) is handled.
- The result area is fully cleared and rebuilt on each click, so results from previous rounds don't stack up on the page.

## Possible next steps
- Track a running score across rounds instead of only showing the latest one
- Pull the repeated result-rendering code out of the nine `if/else` branches into one reusable function