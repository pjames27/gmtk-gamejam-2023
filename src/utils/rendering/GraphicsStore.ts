import { IMAGES_DIR } from "../../gameconstants.js";
import { Animation } from "./Animation.js";

export class GraphicsStore {
    private static nameToAnimMap: Record<string, Animation> = {};

    public static async loadAnimation(imgUrlList: string[], msAnimTime: number, animName: string): Promise<void> {
        let imgList: HTMLImageElement[] = [];

        // Load all images in order
        for (let imgUrl of imgUrlList) {
            imgUrl = './../' + IMAGES_DIR + imgUrl;

            let response = await fetch(imgUrl);

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
    }

    public static getAnimation(animName: string): Animation {
        return this.nameToAnimMap[animName];
    }
}