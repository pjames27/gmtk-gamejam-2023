//import { MAIN_CANVAS_ID } from "./gameconstants";
//import { MS_PER_GAME_UPDATE } from "./gameconstants";
var Game = /** @class */ (function () {
    function Game() {
        this.msPreviousTime = performance.now();
        this.msLagTime = 0;
        this.quit = false;
        this.updatedThisFrame = false;
        this.ctx = null;
        var canvas = document.getElementById(MAIN_CANVAS_ID);
        this.ctx = canvas.getContext("2d");
    }
    //Callback version of deWiTTERS Game Loop
    // Called by browser whenever it wants to render another frame
    Game.prototype.mainLoop = function () {
        //let self = this;
        var _this = this;
        while (!this.quit) {
            this.updatedThisFrame = false;
            var msCurrentTime = performance.now();
            var msElapsed = msCurrentTime - this.msPreviousTime;
            this.msPreviousTime = msCurrentTime;
            this.msLagTime += msElapsed;
            //Line below is optional, depending on rest of architecture
            // gameInputHandler->processInput(quit);
            // Don't update until enough time has elapsed
            while (this.msLagTime >= MS_PER_GAME_UPDATE) {
                // NOTE: Should be set to true in updateGame, but the latter isn't implemented right now
                this.updatedThisFrame = true;
                //updateGame();
                this.msLagTime -= MS_PER_GAME_UPDATE;
            }
            //Don't clear the screen if textures haven't been redrawn to the renderer via GraphicsSystem->update()
            // Once enough time has elapsed, 
            if (this.updatedThisFrame) {
                //gameGraphicsSystem->update();
                //The amount by which to interpolate the positions of rendered objects
                //float interpCoeff = (float)msLagTime / MS_PER_GAME_UPDATE;
                console.log(this.msLagTime);
                console.log("new frame");
                this.render();
                window.requestAnimationFrame(function () {
                    _this.mainLoop();
                });
                return;
            }
        }
    };
    Game.prototype.render = function () {
        this.ctx.clearRect(0, 0, 1920, 1080);
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fillRect(0, 0, 100, 200);
    };
    return Game;
}());
//# sourceMappingURL=Game.js.map