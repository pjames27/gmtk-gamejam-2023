//import { MAIN_CANVAS_ID } from "./gameconstants";
//import { MS_PER_GAME_UPDATE } from "./gameconstants";

export class Game {
    private msPreviousTime: number = performance.now();
    private msLagTime: number = 0;
    private quit: boolean = false;

    private updatedThisFrame: boolean = false;
    private ctx: CanvasRenderingContext2D = null;

    private counter: number = 0;

    public constructor() {
        const canvas = <HTMLCanvasElement> document.getElementById(MAIN_CANVAS_ID);
        this.ctx = canvas.getContext("2d");
    }

    
    //Callback version of deWiTTERS Game Loop
    // Called by browser whenever it wants to render another frame
    public mainLoop(): void {
        //let self = this;

        
        while (!this.quit) {
            this.updatedThisFrame = false;
            let msCurrentTime: number = performance.now();
            let msElapsed: number = msCurrentTime - this.msPreviousTime;
            
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
                console.log("new frame");
                this.render();
                window.requestAnimationFrame(() => {
                    this.mainLoop();
                });
                return;
            }
        }
    }

    private render(): void {
        this.ctx.clearRect(0, 0, 1920, 1080);

        this.ctx.fillStyle = "#FF0000";

        this.ctx.fillRect(0,0,100,200);
    }
}