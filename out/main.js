// Initialize and load, then start the main loop 
document.addEventListener('DOMContentLoaded', function () {
    var game = new Game();
    window.requestAnimationFrame(function () { return game.mainLoop(); });
});
//# sourceMappingURL=main.js.map