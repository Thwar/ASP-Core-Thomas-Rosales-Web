
//Fable - Temple of Light 
var song0 = '<iframe width="560" height="0" src="http://www.youtube.com/v/dMSjvBILQRU?version=3&loop=1&playlist=dMSjvBILQRU&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//Donkey Kong Country - Aquatic Ambiance 
var song1 = '<iframe width="560" height="0" src="http://www.youtube.com/v/LDvKwSVuUGA?version=3&loop=1&playlist=LDvKwSVuUGA&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//Ghost in the Shell - Floating Museum 
var song2 = '<iframe width="560" height="0" src="http://www.youtube.com/v/f0Uu7wwPOps?version=3&loop=1&playlist=f0Uu7wwPOps&autoplay=1" frameborder="0" allowfullscreen></iframe>';


var myMusic=new Array(song0,song1,song2);

function playMusic(){
    var randomnumber=Math.floor(Math.random()*3)
	
    document.getElementById('music').innerHTML= myMusic[randomnumber];
	
	
    switch(randomnumber)
    {
        case 0: 
            document.getElementById('nowPlaying').innerHTML= "\tNow Playing: Fable - Temple of Light  ";
            break; 
        case 1:
            document.getElementById('nowPlaying').innerHTML = "\tNow Playing: Donkey Kong Country - Aquatic Ambiance ";
            break;
        case 2:
            document.getElementById('nowPlaying').innerHTML = "\tNow Playing: Ghost in the Shell - Floating Museum  ";
            break;
        default:
 
    } 
	
}

