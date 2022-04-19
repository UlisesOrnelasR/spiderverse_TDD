class superHero {
    constructor(name,actor,age,studio){
        this.name = name,
        this.actor = actor,
        this.age = age,
        this.studio = studio
    }
    getInfo(){
        return `Hola soy ${this.actor} y soy de los studios "${this.studio}"`
    }
}


module.exports = superHero