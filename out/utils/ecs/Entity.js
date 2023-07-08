export class Entity {
    constructor() {
        this.components = [];
    }
    addComponent(newComponent) {
        this.components.push(newComponent);
    }
    getComponent(constr) {
        let componentsOfType;
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
//# sourceMappingURL=Entity.js.map