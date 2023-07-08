export interface AnimationSpec {
    imgUrls: string[];
    msAnimTime: number;
    name: string;
};


export const AllAnimations: { animationList: AnimationSpec[] } = {
    animationList: [
        {
            imgUrls: ['cobblestone.png', 'carrots_stage_3.png'],
            msAnimTime: 1000,
            name: "testAnim"
        }
    ]
};