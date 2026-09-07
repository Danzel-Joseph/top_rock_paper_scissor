# Console Rock Paper Scissors

Hey there! This is a simple Rock, Paper, Scissors game I built using vanilla JavaScript. It runs entirely inside your browser's developer console. 

I wrote this project to practice writing functions, handling conditional loops (`if/else` statements), and managing game states over multiple rounds.

## How it works
The game runs for exactly 5 rounds. Each round:
1. A prompt pops up asking you to type "rock", "paper", or "scissor".
2. The computer randomly generates its own move.
3. The script compares the two choices, prints who won the round to the console, and adds up the score.
4. After 5 rounds, it compares the scores and prints the final winner.

## How to run it
1. Open up your web browser (Chrome, Firefox, Safari, etc.).
2. Open the developer tools console (usually `F12`, or right-click the page, click **Inspect**, and switch to the **Console** tab).
3. Copy all the code from the script file, paste it right into the console, and hit **Enter**.
4. Play the game using the pop-ups!

## Things I accounted for
* **Case sensitivity:** It doesn't matter if you type "ROCK", "rock", or "RoCk"—the script converts your input to lowercase automatically.
* **Crashes:** If you hit "Cancel" or leave the prompt empty, the game handles it smoothly instead of crashing.
