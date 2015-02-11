    //This code was worked on primarily by Ayush Sharma.

var cash = 1000;

var Unit = function(cost, level, attack, defense, speed, range, accuracy) {
        this.cost = cost;
        this.level = level;
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
    Unit.call(this, 25, 1, 10, 10, 10, 10, 10);    
}

function Tank(name) {
    this.name = name;
    this.tankNumber = "Tank" + tankArray.length
    Unit.call(this, 100, 1, 25, 50, 5, 10, 5);
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







    /*this.levelUp = function() {
        var toLevel = checkCash(Rifleman.cost);
        this.level++;
    };
    






















/*var Unit = function(price, health, power) {
    this.price = price;
    cash -= this.price;
    this.fullHealth = health;
    this.health = health;
    this.power = power;
    this.attack = function(prey) {
        prey.health = prey.health - this.power;
    };
    this.healthPack = function() {
        this.health = this.health + 50;
        if (this.health > this.fullHealth) {
            this.health = this.fullHealth;
        }
    };
};

var Infantry = function(price, health, power) {
    this.price = price;
    cash -= this.price;
    this.fullHealth = health;
    this.health = health;
    this.power = power;
    this.attack = function(prey) {
        prey.health = prey.health - this.power;
    };
    this.healthPack = function() {
        this.health = this.health + 50;
        if (this.health > this.fullHealth) {
            this.health = this.fullHealth;
        }
    };
};

var Vehicle = function(price, health, power) {
    this.price = price;
    cash -= this.price;
    this.fullHealth = health;
    this.health = health;
    this.power = power;
    this.attack = function(prey) {
        prey.health = prey.health - this.power;
    };
    this.healthPack = function() {
        this.health = this.health + 50;
        if (this.health > this.fullHealth) {
            this.health = this.fullHealth;
        }
    };
};

var Aircraft = function (price, health, power) {
    this.price = price
    cash -= this.price;
    this.fullHealth = health;
    this.health = health;
    this.power = power;
    this.attack = function(prey) {
        prey.health = prey.health - this.power;
        if (prey.health < 0) {
            prey.health = 0;
        }
    };
    this.healthPack = function() {
        this.health = this.health + 50;
        if (this.health > this.fullHealth) {
            this.health = this.fullHealth;
        }
    };
};*/

/*var John = new Infantry(100, 50, 100);
var Bob = new Vehicle(200, 100, 100);
var Sam = new Aircraft(500, 150, 100);*/