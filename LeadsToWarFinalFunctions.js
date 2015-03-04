var checkCash = function(cost) {
    if (turn === 1) {   
        var whatCash = cash1;
    } else {
        var whatCash = cash2;
    }

    if (cost > whatCash) {
        return false
    } else {
        return true
    }
}

var createRifleman = function(turn) {
    if(checkCash(25)) {
        if (turn === 1) {
            cash1 = cash1 - 25;
        } else {
            cash2 = cash2 - 25;
        }
        var name = prompt("Whats the name?")
        var unitArraySize = unitArray.length;
        var riflemanArraySize = riflemanArray.length;
        window["Rifleman" + unitArraySize] = new Rifleman(name);
        unitArray.push(window["Rifleman" + unitArraySize]);
        riflemanArray.push(window["Rifleman" + riflemanArraySize]);
        if (turn===1) player1UnitArray.push(window["Rifleman" + unitArraySize]);
        else if (turn===-1) player2UnitArray.push(window["Rifleman" + unitArraySize]);
        addImage(Rifleman);
    } else {
        alert("Not Enough Money!");  
    }
}


var createTank = function(turn) {
    if(checkCash(100)) {
        if (turn === 1) {
            cash1 = cash1 - 100;
        } else {
            cash2 = cash2 - 100;
        }
        var name = prompt("Whats the name?")
        var unitArraySize = unitArray.length;
        var tankArraySize = tankArray.length;
        window["Tank" + unitArraySize] = new Tank(name);
        unitArray.push(window["Tank" + unitArraySize]);
        tankArray.push(window["Tank" + tankArraySize]);
        if (turn===1) player1UnitArray.push(window["Tank" + unitArraySize]);
        else if (turn===-1) player2UnitArray.push(window["Tank" + unitArraySize]);
        addImage(Tank);
    } else {
        $('#activityFeed').html ("Not Enough Money!");
    }
}

    var attackUnit = function(unitId) {
        var unitId = unitId.substr(7, 7);
        if (turn===1) {
            var critChance = _.random(0, 100);
            if (player2UnitArray.length == 0) {
                tower2health -= player1UnitArray[unitId-1].attack;
            }
            else if (critChance < 74) {
                if (player2UnitArray.length !== 0) {
                    player2UnitArray[0].defense = player2UnitArray[0].defense - player1UnitArray[unitId-1].attack;
                }
                if (player2UnitArray.length == 0) {
                    tower1health -= player1UnitArray[unitID-1].attack;
                }
            }
            else if (critChance >= 75) {
                if (player2UnitArray.length !== 0) {
                    player2UnitArray[0].defense = player2UnitArray[0].defense - (2 * (player1UnitArray[unitId-1].attack));
                }
                if (player2UnitArray.length == 0) {
                    tower1health -= (2 * (player1UnitArray[unitID-1].attack));
                }
            }
        }
        else if (turn===-1) {
            var critChance = _.random(0, 100);
            if (player1UnitArray.length == 0) {
                tower1health -= player2UnitArray[unitId-1].attack;
            }
            else if (critChance < 74) {                
                if (player1UnitArray.length !== 0) {
                    player1UnitArray[0].defense =  player1UnitArray[0].defense - player2UnitArray[(switchFromP2(parseInt(unitId)) - 1) ].attack;
                }
                if (player1UnitArray.length == 0) {
                    tower2health -= player2UnitArray[unitId-1].attack;
                }
            }
            else if (critChance >= 75) {
                alert("Critical Hit!");
                if (player1UnitArray.length !== 0) {
                    player1UnitArray[0].defense =  player1UnitArray[0].defense - (2 * (player2UnitArray[(switchFromP2(parseInt(unitId)) - 1) ].attack));
                }
                if (player1UnitArray.length == 0) {
                    tower2health -= (2 * (player2UnitArray[unitId-1].attack));
                }
            }
        }
        if (player2UnitArray.length !== 0) {
            if (player2UnitArray[0].defense <= 0) {
                if (player2UnitArray[0].name === "") $('#activityFeed').html("Unnamed unit is dead!");   
                else $('#activityFeed').html(player2UnitArray[0].name + " is dead!");
                removeImage(player2UnitArray[0].riflemanNumber);
                player2UnitArray.splice(0, 1); 
            }
        } 

        if (player1UnitArray.length !== 0) {
            if (player1UnitArray.length == 0 && player1UnitArray[0].defense <= 0) {
                if (player1UnitArray[0].name === "") $('#activityFeed').html("Unnamed unit is dead!");   
                else $('#activityFeed').html(player1UnitArray[0].name + " is dead!");
                removeImage(player1UnitArray[0].riflemanNumber);
                player1UnitArray.splice(0, 1); 
            }
        }
        if (tower2health == 0) {
            alert("Player 1 Wins!");
        }
        if (tower1health == 0) {
            alert("Player 2 Wins!");
        }
        

        updateStats();

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

    var updateStats = function() {
        turn = turn * -1;
         if (turn===1) {
            $('#turnDisplay').html("Player One's Turn!");
            if(notFirstRound) cash2 = cash2 + 25;
        } else {
            $('#turnDisplay').html("Player Two's Turn!");
            cash1 = cash1 + 25
        }
         $('#cashDisplay1').html("Player One Has " + cash1 + " Dank")
         $('#cashDisplay2').html("Player Two Has " + cash2 + " Dank")
         if(player1UnitArray.length > 0) {
            $('#defenseDisplay1').html("Front Line Soldier Has " + player1UnitArray[0].defense + " Health");
        } else {
            $('#defenseDisplay1').html("No Front Line Soldier");
        }
         if(player2UnitArray.length > 0) {
            $('#defenseDisplay2').html("Front Line Soldier Has " + player2UnitArray[0].defense + " Health");
        } else {
            $('#defenseDisplay2').html("No Front Line Soldier");
        }
    }
   
