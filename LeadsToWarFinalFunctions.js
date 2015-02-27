var checkCash = function(cost) {
    if (turn === 1) {   
        var whatCash = cash1;
    } else {
        var whatCash = cash2;
    }
    if (cost > whatCash) {
        return false
    }
    else {
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
        alert("Not Enough Money!");
    }
}

    var attackUnit = function(unitId) {
        var unitId = unitId.substr(7, 7);
        if (turn===1) player2UnitArray[0].defense = player2UnitArray[0].defense - player1UnitArray[unitId-1].attack;
        else if (turn===-1) player1UnitArray[0].defense =  player1UnitArray[0].defense - player2UnitArray[(switchFromP2(parseInt(unitId)) - 1) ].attack; 
        
        if (player2UnitArray[0].defense <= 0) {
            alert(player2UnitArray[0].name + " is dead!");
            removeImage(player2UnitArray[0].riflemanNumber);
            player2UnitArray.splice(0, 1); 
            
        } 

        if (player1UnitArray[0].defense <= 0) {
            alert(player1UnitArray[0].name + " is dead!");
            removeImage(player1UnitArray[0].riflemanNumber);
            player1UnitArray.splice(0, 1); 
        } 
        turn = turn * -1;
        cash1 = cash1 + 12.5;
        cash2 = cash2 + 12.5;
         if (turn===1) {
            $('#turnDisplay').html("Player One's Turn!");
        } else {
            $('#turnDisplay').html("Player Two's Turn!");
        }
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

