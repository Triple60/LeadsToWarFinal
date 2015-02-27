var cash1 = 100;
var cash2 = 100;

var Unit = function(cost, attack, defense, speed, range, accuracy) {
        this.cost = cost;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.range = range;
        this.accuracy = accuracy;
        Unit.instances = 0;
}

function Rifleman(name) {
    this.name = name;
    this.riflemanNumber = "Rifleman" + riflemanArray.length
    Unit.call(this, 25, 10, 10, 10, 10, 10);    
}

function Tank(name) {
    this.name = name;
    this.tankNumber = "Tank" + tankArray.length
    Unit.call(this, 100, 20, 20, 5, 10, 5);
}

var unitArray = [];
var player1UnitArray = [];
var player2UnitArray = [];
var riflemanArray = [];
var tankArray = [];



Rifleman.prototype = Object.create(Unit.prototype);
Rifleman.prototype.constructor = Rifleman;
Tank.prototype = Object.create(Unit.prototype);
Tank.prototype.constructor = Tank;