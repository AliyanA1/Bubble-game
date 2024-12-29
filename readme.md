# Bubble Game

This is a simple bubble game where the player needs to click on the bubbles with the correct number to score points. The game has a timer and displays the score, hit number, and remaining time.

## How to Play
link:https://spontaneous-malasada-50de15.netlify.app/
1. Open the `index.html` file in a web browser.
2. The game will start automatically with a 60-second timer.
3. A random number between 0 and 9 will be displayed in the "Hit" box.
4. Click on the bubbles with the matching number to score points.
5. Each correct click will increase the score by 10 points and generate a new set of bubbles and a new hit number.
6. The game ends when the timer reaches 0, and the final score will be displayed.

## Files

- `index.html`: The main HTML file that contains the structure of the game.
- `index.css`: The CSS file that styles the game.
- `index.js`: The JavaScript file that contains the game logic.

## Game Logic

- The `bubblefun` function generates 176 bubbles with random numbers between 0 and 9.
- The `letsCount` function starts a 60-second timer and updates the timer display every second.
- The `scorefun` function increments the score by 10 points.
- The `hitfun` function generates a random hit number between 0 and 9.
- An event listener on the `.downSection` div checks if the clicked bubble matches the hit number and updates the score, hit number, and bubbles accordingly.

## Styling

The game is styled using CSS to center the game elements and provide a visually appealing interface. The bubbles change color when hovered over to indicate they are clickable.

## License

This project is open-source and available under the MIT License.