var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Game } from "./Game.js";
import { ImageStore } from "./utils/rendering/ImageStore.js";
// Initialize and load, then start the main loop 
document.addEventListener('DOMContentLoaded', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield loadImages();
        let game = new Game();
        window.requestAnimationFrame(() => game.mainLoop());
    });
});
function loadImages() {
    return __awaiter(this, void 0, void 0, function* () {
        ImageStore.loadImage('./../assets/images/cobblestone.png', 'cobble');
    });
}
;
//# sourceMappingURL=main.js.map