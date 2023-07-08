export class Animation {

    private frames: HTMLImageElement[] = [];
    // total animation time
    private msAnimTime: number;

    constructor(frames: HTMLImageElement[], msAnimTime: number) {
        this.frames = frames;
        this.msAnimTime = msAnimTime;
    }

    public numFrames(): number {
        return this.frames.length;
    }

    public getMsAnimTime() : number {
        return this.msAnimTime;
    }

    public getAllFrames(): HTMLImageElement[] {
        return this.frames;
    }

    public getFrameAtIndex(index: number): HTMLImageElement {
        if (index < 0 || index >= this.numFrames()) {
            console.error("Tried to get frame at index that doesn't exist: " + index);
            return null;
        }

        return this.frames[index];
    }

};