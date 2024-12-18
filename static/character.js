
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
class Artifact{
    //Based on: https://genshin-impact.fandom.com/wiki/Artifact/Distribution
    constructor(name,rarity,ExpList,type){
        this.name=name;
        this.MainStat;
        this.SubStats=[];
        this.rarity=rarity;
        this.expRequirements=ExpList;
        this.level=0;
        this.exp=0;
        if(this.rarity==5){
            this.maxLevel=20;
        }else if(this.rarity==4){
            this.maxLevel=16;
        }else if(this.rarity==3){
            this.maxLevel=12;
        }else if(this.rarity==2){
            this.maxLevel=4;
        }else if(this.rarity==1){
            this.maxLevel=4;
        }
        this.possibleStats=$.getJson()
        this.type=type;
        switch (this.type){
            case "flower":
                this.MainStat="HP"
            case "goblet":
                this.MainStat=this.possibleStats["goblet"][Math.floor(math.Random()*this.possibleStats.length)]
            case "sands":
                this.MainStat=this.possibleStats["sands"][Math.floor(Math.Random()*this.possibleStats.length)]
            case "circlet":
                this.MainStat=this.possibleStats["circlet"][Math.floor(Math.random()*this.possibleStats.length)]
            case "plume":
                this.MainStat="ATK"
            default:
                console.error(this.type+" does not exist.");
                
        }
    }
    addExp(expValue){
        this.exp+=expValue;
        while(this.exp>this.expRequirements[this.level]){
            levelUp();
        }
    }
    levelUp(){
        if (this.level!=this.maxLevel){
            this.level+=1;
        }
        if (this.level==4||this.level==4||this.level==8||this.level==12||this.level==16||this.level==20){
            this.SubStats.append(this.possibleStats[Math.floor(Math.random()*this.possibleStats.length)])
        }
    }
}