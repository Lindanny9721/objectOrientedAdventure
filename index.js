class Character {
    constructor (name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
    static MAX_HEALTH = 100;
}
class Adventurer extends Character {
    constructor (name, role, stamina) {
        if(!Adventurer.ROLES.includes(role))
        {
            console.log("Error Role");
        }
        super(name);
        this.role = role;
        this.inventory.push(...Adventurer.INVENTORY);
        this.stamina = stamina;
    }
    scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    attack () {
        console.log(`${this.name} is attacking`)
        super.roll();
    }
    static INVENTORY = ["bedroll", "50 gold coins"];
    static ROLES = ["Fighter", "Healer", "Wizard", "Rogue", "Paladin"];
}
class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type; 
    }
    attack() {
        console.log(`${this.name} is attacking`);
        super.roll();
    }
}
const robin = new Adventurer("Robin", "Fighter", 10);
robin.inventory.push("sword", "potion", "artifact");
robin.companion = new Companion("Leo", "Cat");
robin.companion.companion = new Companion("Frank", "Flea");
robin.companion.companion.inventory.push("small hat", "sunglasses");
robin.attack();
console.log(robin);