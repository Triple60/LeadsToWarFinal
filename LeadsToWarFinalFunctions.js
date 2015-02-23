//This code was written by Elusch21//

function checkCash(cost) {
    if (turn == 1) {
        if (cost > cash1) {
            return false; //FIX CASH PROBLEM. ADD TWO CASH SYSTEMS
        }
        else {
            return true;
        }
    }
    else {
        if (cost > cash2) {
            return false; //FIX CASH PROBLEM. ADD TWO CASH SYSTEMS
        }
        else {
            return true;
        }
    }  
}

var createRifleman = function(turn) {
    if(checkCash(25) == true) {
		if (turn == 1) {
            cash1 -= 25;
        }
        else if (turn == -1) {
            cash2 -= 25;
        }
    	var name = prompt("What's its name?")
    	var unitArraySize = unitArray.length;
    	var riflemanArraySize = riflemanArray.length;
    	window["Rifleman" + unitArraySize] = new Rifleman(name);
    	unitArray.push(window["Rifleman" + unitArraySize]);
    	riflemanArray.push(window["Rifleman" + riflemanArraySize]);
    	if (turn === 1) {
           player1UnitArray.push(window["Rifleman" + unitArraySize]);
           addImage(Rifleman);
        }
    	else if (turn === -1) {
           player2UnitArray.push(window["Rifleman" + unitArraySize]);
    	   addImage(Rifleman);
        }
    }
    else {
    	alert("Not Enough Money!");
    }
}

var createTank = function(turn) {
	if(checkCash(100) == true) {
		if (turn == 1) {
            cash1 -= 100;
        }
        else if (turn == -1) {
            cash2 -= 100;
        }
    	var name = prompt("Whats the name?")
    	var unitArraySize = unitArray.length;
    	var tankArraySize = tankArray.length;
    	window["Tank" + unitArraySize] = new Tank(name);
    	unitArray.push(window["Tank" + unitArraySize]);
    	tankArray.push(window["Tank" + tankArraySize]);
    	if (turn === 1) {
            player1UnitArray.push(window["Tank" + unitArraySize]);
            addImage(Tank);
        }
    	else if (turn === -1) {
           player2UnitArray.push(window["Tank" + unitArraySize]);
    	   addImage(Tank);
        }
    }
    else {
    	alert("Not Enough Money!")
    }
}


	Unit.prototype.levelUp = function() {
		if(checkCash(this.cost)) this.level ++;
		else alert("Not Enough Money");
	};

	var attackUnit = function(unitId) {
		var unitId = unitId.substr(7, 7);
		if (turn===1) player2UnitArray[0].defense = player2UnitArray[0].defense - player1UnitArray[unitId-1].attack;
		else if (turn===-1) player1UnitArray[0].defense =  player1UnitArray[0].defense - player2UnitArray[(switchFromP2(parseInt(unitId)) - 1) ].attack; 
		
		if (player2UnitArray[0].defense <= 0) {
        	console.log(player2UnitArray[0].name + " is dead!");
            removeImage(player2UnitArray[0].riflemanNumber);
            player2UnitArray.splice(1, player2UnitArray.length); 
            
        } 

        if (player1UnitArray[0].defense <= 0) {
            console.log(player1UnitArray[0].name + " is dead!");
            removeImage(player1UnitArray[0].riflemanNumber);
            player1UnitArray.splice(1, player1UnitArray.length); 
        } 

        turn = turn * -1;
	}


    var switchFromP1 = function(unitId) {
        if (unitId===1) return 8;
        else if (unitId===2) return 7;
        else if (unitId===3) return 6;
        else if (unitId===4) return 5;
        else if (unitId===5) return 4;  
    }




    var switchFromP2 = function(unitId) {
        if (unitId===8) return 1;
        else if (unitId===7) return 2;
        else if (unitId===6) return 3;
        else if (unitId===5) return 4;
        else if (unitId===4) return 5;  
    }


	/*this.attackUnit = function() {
        var i = true;
        while (i == true) {
            var toAttack = Math.floor(Math.random() * Units.length);
            if (Units[toAttack].name !== this.name) {
                i = false;
            }
        }
        Units[toAttack].defense -= this.attack;
        if (Units[toAttack].defense == 0) {
            Units.splice(toAttack, 1);
            removeImage(toAttack)
        }
    }*/