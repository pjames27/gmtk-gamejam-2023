import { Game } from "./Game.js";
import { ImageStore } from "./utils/rendering/ImageStore.js";

// Initialize and load, then start the main loop 
document.addEventListener('DOMContentLoaded', async function () {    
    await loadImages();

    let game = new Game();

    window.requestAnimationFrame(() => game.mainLoop());
});


async function loadImages() {

    ImageStore.loadImage('./../assets/images/cobblestone.png', 'cobble');

};

