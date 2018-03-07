//######################################################################################
// Author: ricocheting.com
// Version: v2.0
// Date: 2011-03-31
// Description: displays the amount of time until the "dateFuture" entered below.

// NOTE: the month entered must be one less than current month. ie; 0=January, 11=December
// NOTE: the hour is in 24 hour format. 0=12am, 15=3pm etc
// format: dateFuture1 = new Date(year,month-1,day,hour,min,sec)
// example: dateFuture1 = new Date(2003,03,26,14,15,00) = April 26, 2003 - 2:15:00 pm

dateFuture1 = new Date(2012,11,2,15,0,0);

// TESTING: comment out the line below to print out the "dateFuture" for testing purposes
//document.write(dateNow.getTime());



//###################################
//nothing beyond this point
dateNow = new Date();	//grab current date
var miliseconds = dateNow.getTime();
var timeOfFuture = miliseconds + 60000 ; //***********ADD MILISECONDS FOR COUNTDOWN*************

function GetCount(ddate,iid){

	dateNow = new Date();	//grab current date

	amount = timeOfFuture - dateNow.getTime();	//calc milliseconds between dates
	delete dateNow;

	// if time is already past
	if(amount < 0){
		document.getElementById(iid).innerHTML="Now!";
	}
	// else date is still good
	else{
		days=0;hours=0;mins=0;secs=0;out="";

		ms = (""+((amount%1000)+1000)).substr(1,3);		amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs



		hours=Math.floor(amount/3600); //hours
		amount=amount%3600;

		mins=Math.floor(amount/60); //minutes
		amount=amount%60;

		secs=Math.floor(amount);//seconds

	
		
		out += mins +""+((mins==1)?"":"")+":";
		out += secs +(":"+ms)+" "+((secs==1)?"":"")+": ";
		out = out.substr(0,out.length-2);
		document.getElementById(iid).innerHTML=out;

		setTimeout(function(){GetCount(ddate,iid)}, 25);
	}
}

window.onload=function(){
	GetCount(dateFuture1, 'countbox1');
	document.getElementById("mp3").play();
	//you can add additional countdowns here (just make sure you create dateFuture2 and countbox2 etc for each)
};


function playMP3(){

	document.getElementById("mp3").play();

}



