export class ImageStore {
    private static nameToImgMap: Record<string, HTMLImageElement> = {};

    // By default, the key is the imgUrl
    public static async loadImage(imgUrl: string, imageKey: string = imgUrl): Promise<void> {

        let response = await fetch(imgUrl);

        if (!response.ok) {
            console.error("Failed to load image from url " + imgUrl);
            return;
        }

        let loadedImage = new Image();
        loadedImage.src = imgUrl;

        this.nameToImgMap[imageKey] = loadedImage;
    };

    public static getImage(imageKey: string): HTMLImageElement {
        return this.nameToImgMap[imageKey];
    }
}