// JavaScript Document

function randomDialog()
{
	var randomnumber=Math.floor(Math.random()*18)
	
	switch (randomnumber)
	{
		case 0:
			document.getElementById('sprytooltip1').innerHTML = "This Kitten wants to go BOOM!";
			break;
		case 1:
			document.getElementById('sprytooltip1').innerHTML = "CLICK ME IF YOU DARE!! (meow)";
			break;
		case 2:
			document.getElementById('sprytooltip1').innerHTML = "meow meow meow...";
			break;
		case 3:
			document.getElementById('sprytooltip1').innerHTML = "ALL OR NOTHING!";
			break;
		case 4:
			document.getElementById('sprytooltip1').innerHTML = "MEOWWWWWWWWW!!!";
			break;
		case 5:
			document.getElementById('sprytooltip1').innerHTML = "CLICK ME!";
			break;
		case 6:
			document.getElementById('sprytooltip1').innerHTML = "I am going to kitty hell";
			break;
		case 7:
			document.getElementById('sprytooltip1').innerHTML = "^_^";
			break;
		case 8:
			document.getElementById('sprytooltip1').innerHTML = "For mother Russia!";
			break;
		case 9:
			document.getElementById('sprytooltip1').innerHTML = "Is there fish in heaven?";
			break;
		case 10:
			document.getElementById('sprytooltip1').innerHTML = "I am going to explode";
			break;
		case 11:
			document.getElementById('sprytooltip1').innerHTML = "FOR PEACE AND PROSPERITY!!";
			break;
		case 12:
			document.getElementById('sprytooltip1').innerHTML = "DIE HUMANSSS!";
			break;
		case 13:
			document.getElementById('sprytooltip1').innerHTML = "I refuse to speak!";
			break;
		case 14:
			document.getElementById('sprytooltip1').innerHTML = "Catch me if you can!";
			break;
		case 15:
			document.getElementById('sprytooltip1').innerHTML = "FOR HONOR!!!";
			break;
		case 16:
			document.getElementById('sprytooltip1').innerHTML = "Kitten of war reporting";
			break;
		case 17:
			document.getElementById('sprytooltip1').innerHTML = "Ready for action";
			break;
	}
}

//*************START BOOM!!!!!***********
var left = 42;
var ison = false;
var terroCat = false;
var timer = null;

function startBoom()
{
	window.setTimeout(createbomb,1900);

	//var snd = new Audio("catterro.wav"); // FAST SOUND EFFECT!!!!!
	//snd.play();
	playMP3();

	
	if (ison == false)
	{
		 timer = setInterval(fly, 20);
	}
	ison = true;
}

function fly()
{	
	var terroCat = document.getElementById("terroCat");
	
	
	terroCat.style.left =  left + "%";	
	if (left == 2500)
	{

		clearInterval(timer);
	}
	left++;

}


function createbomb()
{
	document.body.style.backgroundColor="black";
	clearInterval(timer);
	document.getElementById("killcat").innerHTML ="";
	document.getElementById("bombgif").innerHTML ="<img src=\"bomb.gif\" width=\"344\" height=\"183\" alt=\"gif\" />";
	window.setTimeout(deletegif,7500);
}

function deletegif()
{

	document.getElementById("bombgif").innerHTML ="^_^";
	document.getElementById("anotherKitten").innerHTML ="<input name=\"anotherKitten\" onClick=\"anotherKitten()\" value=\"Send in Another kitteh\" type=\"button\" >  <br/> &nbsp;&nbsp;.....or refresh your browser. <br/><br/><br/><br/> <br/>  ";
	document.getElementById("text0").style.color = "white";
}


function anotherKitten()
{
	location.reload(); 
}


function playMP3(){

	document.getElementById("mp3").play();

}




