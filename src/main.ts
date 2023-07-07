import { Game } from "./Game";

// Initialize and load, then start the main loop 
document.addEventListener('DOMContentLoaded', function () {    
    

    let game = new Game();

    window.requestAnimationFrame(() => game.mainLoop());
});


