const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses" ]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}
adventurer.roll();

class Character {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll();
class Adventurer extends Character {
    constructor (name, role, stamina) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
        this.stamina = stamina;
    }
    scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    attack () {
        console.log(`${this.name} is attacking for ${super.roll()}`)
    }
}
class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type; 
    }
    attack() {
        console.log(`${this.name} is attacking for ${super.roll()}.`);
    }
}
const robin = new Adventurer("Robin", "Warrior", 10);
robin.inventory.push("sword", "potion", "artifact");
robin.companion = new Companion("Leo", "Cat");
robin.companion.companion = new Companion("Frank", "Flea");
robin.companion.companion.inventory.push("small hat", "sunglasses");