class Character {
    constructor (name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        return result;
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
    duel(opponent) {
        while (this.health > 50 && opponent.health > 50) {
            const myRoll = this.roll();
            const opponentRoll = opponent.roll();
            if (myRoll > opponentRoll) {
                opponent.health -= 1;
                console.log(`${this.name} won the round`)
            } else if (opponentRoll > myRoll) {
                this.health -= 1;
                console.log(`${opponent.name} won the round`)
            }
            else {
                console.log("Tie round");
            }
            console.log(`Results: ${this.health} and ${opponent.health}`)
        }
        if(this.health > 50)
            console.log(`${this.name} is the winner`);
        else
            console.log(`${opponent.name} is the winner`);
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
class AdventurerFactory {  
    constructor (role) {
        this.role = role;
        this.adventurers = [];
    }
    generate (name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
        return this.adventurers[index];
    }
    findByName (name) {
        return this.adventurers.find((a) => a.name === name);
    }
}
const healers = new AdventurerFactory("Healer");
const robert = healers.generate("Robert");
const robin = new Adventurer("Robin", "Fighter", 10);
const evilrobin = new Adventurer("Evil Robin", "Fighter", 10);
evilrobin.inventory.push("sword", "potion", "artifact");
robin.inventory.push("sword", "potion", "artifact");
robin.companion = new Companion("Leo", "Cat");
evilrobin.companion = new Companion("Evil Leo", "Evil Cat");
robin.companion.companion = new Companion("Frank", "Flea");
robin.companion.companion.inventory.push("small hat", "sunglasses");
robin.attack();
robin.duel(evilrobin);