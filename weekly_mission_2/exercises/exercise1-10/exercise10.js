UberTravel = {
    origin : 'Forum Buneavista',
    destiny : 'Zócalo',
    typeOfTravel : 'UberX',
    payment : 'Credit Card',
    timeout : '16:30',
    Arrival : '16:45',
    getTravelInfo : function () {
        return `${this.origin} - ${this.destiny} - ${this.typeOfTravel}\n ${this.timeout} - ${this.Arrival}`
    }
}

console.log(UberTravel.getTravelInfo())