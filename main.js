var power = 0;
var StoryCount = 0;
var StoryText = ["You find yourself in a  dark room with a broken electrical box...", "You open the electrical box to find disconnected wires...", "You connect one set of wires, then you wait...", "The light in the room starts to flicker...", "The light has sablized, u can see now!", "After looking around for a while u find a shelf standing in the far corner of the room, it is dimly lit...", "You find some useless scrap and spare parts, you decide to go look somewhere else...", "Just before you leave you spot a battery on the top self...", "You pick the battery, it looks a lot bigger now that you've gotten a better look at it...","The room has a heavy metal door, you hope it will lead you home...","The door doesn't budge however u see cables running to what looks like mag locks...","You follow the cable to find a power box, could probably hook up the battery...","You need to power the battery first, you might be able to connect it to one of those wires..."];
var wire = {cap: 0, amnt: 0};
var Battery = {total:0,charging:0, object:[]};
function BatteryObject(){
    this.capacity = 10;
    this.power = 0;
    this.charge = false;
}

function Story() {
    document.getElementById("StoryBtn").onclick = function () {
        if (StoryCount == 4 || StoryCount == 5) {
            if (StoryCount == 5) StoryCount++;
            setTimeout(function () {
                StoryCount++;
            }, 2000)
        } else if(StoryCount==7){
            StoryCount++;
                  setTimeout(function () {
                StoryCount++;
            }, 2000)
                  }else if(StoryCount == 8){
                      Battery.object[0] = new BatteryObject();
                      Battery.total++;
                           for(i=0;i<2;i++){
                             setTimeout(function(){
                             StoryCount++;
                             },3000);  
                            }
                           }else StoryCount++;
        if (StoryCount == 1) wire.cap = 4;
    }

    if (StoryCount == 2 && power >= 5) StoryCount++;
    if (StoryCount == 3 && power >= 10) StoryCount++;
    if (StoryCount == 4) document.getElementById("StoryText").innerHTML = "Look Around";
    if (StoryCount == 5) document.getElementById("StoryText").innerHTML = "Search the Shelf";
    if (StoryCount == 7) document.getElementById("StoryText").innerHTML = "Grab the Battery";
    if (StoryCount == 9) document.getElementById("StoryText").innerHTML = "Investigate Door";
    if (StoryCount == 10) document.getElementById("StoryText").innerHTML = "Follow Cables";
    document.getElementById("StoryLog").innerHTML = StoryText[StoryCount];
}

function UpdateWires() {
    document.getElementById("ConnectBtn").onclick = function () {
			if (wire.amnt < wire.cap) setTimeout(function () {
            wire.amnt++;
            if (wire.amnt == 1 && StoryCount == 1) StoryCount++;
        }, 3000);
    }
}
function UpdateBattery(){
    document.getElementById("ConnectBtn").onclick = function () {
        if (wire < wireTotal) setTimeout(function () {
            wire++;
            if (wire == 1 && StoryCount == 1) StoryCount++;
        }, 3000);
}
}
function UpdatePower() {
    if (power < 25) {
        power += (wire.amnt-Battery.charging) / 10;
    }
    if (power > 0) {
        power -= 0.01;
    }
}

window.setInterval(function () {
    if (StoryCount === 0) {
        document.getElementById("wireDisplay").style.display = "none";
        document.getElementById("ConnectBtn").style.display = "none";
        document.getElementById("BatteryBtn").style.display = "none";
    } else {
        if(StoryCount>10) document.getElementById("BatteryBtn").style.display = "inline";
        else document.getElementById("BatteryBtn").style.display = "none";
        document.getElementById("wireDisplay").style.display = "block";
        document.getElementById("ConnectBtn").style.display = "inline";
        if (StoryCount < 4) document.getElementById("StoryBtn").style.display = "none"; else document.getElementById("StoryBtn").style.display = "inline";
    }
    document.getElementById("wireCount").innerHTML = wire.amnt + "/" + wire.cap;
    Story();
    UpdatePower();
    UpdateWires();
}, 100)
