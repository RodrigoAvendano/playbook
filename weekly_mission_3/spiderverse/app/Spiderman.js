class Spiderman{
    constructor(name,age,actor,movieNumbers,studio){
        this.name=name
        this.age=age
        this.actor=actor
        this.movieNumbers=movieNumbers
        this.studio=studio
    }

    getInfo () {
        return `Hey, I'm ${this.actor} from ${this.studio} studios`
    }
}

module.exports = Spiderman
