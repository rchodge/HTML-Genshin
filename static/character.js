class Character {
    constructor(firstName, element, weapon, attributes) {
        this.firstName = firstName;
        this.element = element;   // e.g., Pyro, Anemo
        this.weapon = weapon;     // e.g., Sword, Bow
        this.attributes = attributes; // Object with character's stats
        this.artifacts=[];
    }

    // Example method to get full name
    getFullName() {
        return `${this.firstName}`;
    }
    setArtifact(artifactToAdd){
        this.artifact.push(artifactToAdd);
    }
    // Example method to display character's stats
    displayStats() {
        return `
        Name: ${this.getFullName()} <br>
        Element: ${this.element} <br>
        Weapon: ${this.weapon} <br>
        HP: ${this.attributes.hp} <br>
        Attack: ${this.attributes.attack} <br>
        Defense: ${this.attributes.defense}
        `;
    }

    // Example method to calculate total damage
    calculateDamage() {
        return this.attributes.attack * 1.5;  // Example formula for damage calculation
    }
}
