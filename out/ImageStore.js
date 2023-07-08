var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class ImageStore {
    static loadImage(imgUrl, imageKey = imgUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch(imgUrl);
            if (!response.ok) {
                console.error("Failed to load image from url " + imgUrl);
                return;
            }
            let loadedImage = new Image();
            loadedImage.src = imgUrl;
            this.srcToImgMap[imageKey] = loadedImage;
        });
    }
    ;
    static getImage(imageKey) {
        return this.srcToImgMap[imageKey];
    }
}
ImageStore.srcToImgMap = {};
//# sourceMappingURL=ImageStore.js.map