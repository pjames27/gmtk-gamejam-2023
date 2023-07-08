import { IComponent } from "./components/IComponent.h.js";

type constr<T> = { new(...args: unknown[]): T }

export class Entity {
    private components: IComponent[] = [];

    constructor() { }

    public addComponent(newComponent: IComponent) {
        this.components.push(newComponent);
    }

    public getComponent<C extends IComponent>(constr: constr<C>): C[] {
        let componentsOfType: C[];

        for (const component of this.components) {
            if (component instanceof constr) {
                componentsOfType.push(component);
            }
        }

        if (componentsOfType.length == 0) {
            console.warn('Component ${constr.name} not found on Entity ${this.constructor.name}');
        }

        return componentsOfType;
    }
}