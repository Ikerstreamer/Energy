var power = 0;
var StoryCount = 0;
var StoryText = ["You find yourself in a  dark room with a broken electrical box...", "You open the electrical box to find disconnected wires...", "You connect one set of wires, then you wait...","The light in the room starts to flicker...","The light has sablized, u can see now!","After looking around for a while u find a shelf standing in the far corner of the room, it is dimly lit...","You find some useless scrap and spare parts, you decide to go look somewhere else...","Just before you leave you spot a battery on the top self...","You pick the battery, it looks a lot bigger now that you've gotten a better look at it..."];
var wireTotal = 0;
var wire = 0;

function Story()
{
	document.getElementById("StoryBtn").onclick=function()
		{
		if(StoryCount==4 || StoryCount==5){
			if(StoryCount==5)StoryCount++;
			setTimeout(function(){
					StoryCount++;
			},2000)
		}else StoryCount++;
		if(StoryCount==1)wireTotal=4;
		}
	
	if(StoryCount==2 && power>=5)StoryCount++;
	if(StoryCount==3 && power>=10)StoryCount++;
	if(StoryCount==4)document.getElementById("StoryText").innerHTML="Look Around";
	if(StoryCount==5)document.getElementById("StoryText").innerHTML="Search the Shelf";
	if(StoryCount==7)document.getElementById("StoryText").innerHTML="Grab the Battery";
	document.getElementById("StoryLog").innerHTML = StoryText[StoryCount];
}

function UpdateWires()
{
	document.getElementById("ConnectBtn").onclick=if(wire<wireTotal) setTimeout(function(){
					wire++;
			if(wire==1 && StoryCount==1)StoryCount++;
		},3000)
}

function UpdatePower()
{
	if(power<25)
		{
	power+=wire/10;
		}
	if(power>0)
		{
	power-=0.01;
		}
}

window.setInterval(function() {
	if(StoryCount===0)
	{
		document.getElementById("wireDisplay").style.display = "none";
		document.getElementById("ConnectBtn").style.display = "none";
	}else
	{
		document.getElementById("wireDisplay").style.display = "block";
		document.getElementById("ConnectBtn").style.display = "inline";
		if(StoryCount<4)document.getElementById("StoryBtn").style.display = "none";else document.getElementById("StoryBtn").style.display = "inline";
	}
	document.getElementById("wireCount").innerHTML = wire+"/"+wireTotal;
	Story();
	UpdatePower();
	UpdateWires();
}, 100)
