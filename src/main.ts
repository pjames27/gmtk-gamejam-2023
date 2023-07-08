import { Game } from "./Game.js";
import { MAIN_CANVAS_ID, PX_MAIN_CANVAS_HEIGHT, PX_MAIN_CANVAS_WIDTH } from "./gameconstants.js";
import { AllAnimations } from "./graphicsconfig.js";
import { GraphicsStore } from "./utils/rendering/GraphicsStore.js";

// Initialize and load, then start the main loop 
document.addEventListener('DOMContentLoaded', async function () {    
    // Initialization
    initCanvas();
    initInputHandlers();

    await loadGraphics();

    // Run the game
    let game = new Game();
    window.requestAnimationFrame(() => game.mainLoop());
});


function initCanvas() {
    let canvas = document.createElement("canvas");

    canvas.id = MAIN_CANVAS_ID

    canvas.width = PX_MAIN_CANVAS_WIDTH;
    canvas.height = PX_MAIN_CANVAS_HEIGHT;

    canvas.tabIndex = 0;

    document.body.appendChild(canvas);
};

function initInputHandlers() {
    // Init mouse handler
        // Debugging handler from: https://www.geeksforgeeks.org/how-to-get-the-coordinates-of-a-mouse-click-on-a-canvas-element/
    function getMousePosition(canvas, event) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        console.log("Coordinate x: " + x, 
                    "Coordinate y: " + y);
    }
  
    let canvasElem = document.getElementById(MAIN_CANVAS_ID);
      
    canvasElem.addEventListener("mousedown", function(e)
    {
        getMousePosition(canvasElem, e);
    });
};

async function loadGraphics() {

    // Load all animations for all objects
    for (const animation of AllAnimations.animationList) {
        await GraphicsStore.loadAnimation(animation.imgUrls, animation.msAnimTime, animation.name);
    }
};

