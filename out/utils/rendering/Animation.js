export class Animation {
    constructor(frames, msAnimTime) {
        this.frames = [];
        this.frames = frames;
        this.msAnimTime = msAnimTime;
    }
    numFrames() {
        return this.frames.length;
    }
    getMsAnimTime() {
        return this.msAnimTime;
    }
    getAllFrames() {
        return this.frames;
    }
    getFrameAtIndex(index) {
        if (index < 0 || index >= this.numFrames()) {
            console.error("Tried to get frame at index that doesn't exist: " + index);
            return null;
        }
        return this.frames[index];
    }
}
;
//# sourceMappingURL=Animation.js.map