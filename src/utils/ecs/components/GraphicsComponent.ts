import { IComponent } from "./IComponent.h";

export class GraphicsComponent implements IComponent {
    private imgName: string;
    private visible: boolean;

    private drawLayer: number;
}