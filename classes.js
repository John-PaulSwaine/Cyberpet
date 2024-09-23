class animal {
    constructor(name) {
        this.name = name
        this.hunger = 50
        this.thirst = 50
        this.tiredness = 50
        this.health = 50
    }
    drinks () {
        this.thirst -= 5
        this.health += 5
        return this
    }
    eats () {
        this.thirst += 5
        this.hunger -=5
        this.health +=5
        return this
    }
    sleeps () {
        this.tiredness -=5
        this.hunger +=5
        return this
    }
    stats() {
        console.log(`Your ${this.name} stats are: `)
        return console.table({
        name: this.name,
        health: this.health,
        hunger: this.hunger,
        thirst: this.thirst,
        tiredness: this.tiredness
    })
    }
}
class wolf extends animal {
    constructor(name) {    
        super(name)
    }
    howl () {
        this.tiredness += 5
    }
}
class polarBear extends animal{
    constructor(name) {    
        super(name)
    }
    fish() {
        this.tiredness +=5
        this.hunger += 5
    }
}
class snowLeopard extends animal {
    constructor(name) {    
        super(name)
    }
    hunt() {
        this.tiredness += 5
        this.hunger += 5
        this.thirst += 5
    }
}