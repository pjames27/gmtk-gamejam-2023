var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { IMAGES_DIR } from "../../gameconstants.js";
import { Animation } from "./Animation.js";
export class GraphicsStore {
    static loadAnimation(imgUrlList, msAnimTime, animName) {
        return __awaiter(this, void 0, void 0, function* () {
            let imgList = [];
            // Load all images in order
            for (let imgUrl of imgUrlList) {
                imgUrl = './../' + IMAGES_DIR + imgUrl;
                let response = yield fetch(imgUrl);
                if (!response.ok) {
                    console.error("Failed to load image from url " + imgUrl + " for animation " + animName);
                    return;
                }
                let loadedImage = new Image();
                loadedImage.src = imgUrl;
                imgList.push(loadedImage);
            }
            this.nameToAnimMap[animName] = new Animation(imgList, msAnimTime);
            console.log("Loaded animation " + animName);
        });
    }
    static getAnimation(animName) {
        return this.nameToAnimMap[animName];
    }
}
GraphicsStore.nameToAnimMap = {};
//# sourceMappingURL=GraphicsStore.js.map