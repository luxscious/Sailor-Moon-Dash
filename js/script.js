

var users = [];
var wallets = [];
var bets = [];
var betAmount = [];
var toAdd;

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
$(document).ready(function(){

/*
	$('#sailorMoon').animateSprite({
		fps: 12,
   
   		 loop: true,
	   
	});

	$('#mars').animateSprite({
		fps: 12,
   
   		 loop: true,
	   
	});
*/

	$('#characters').animateSprite({
		fps: 3,
   
   		 loop: true,
	   
	});

	$('#characters2').animateSprite({
		fps: 2,
   
   		 loop: true,
	   
	});
	$('.continue').click(function(){

		$('#intro').hide();
		$('#greyedOut').hide();

	});

	$('#introShow').click(function(){

		$('#intro').show();
		$('#greyedOut').show();

	});

	$('#stop').click(function(){

		$('audio').remove();

	});

	$('#play').click(function(){

		$('header').append('<audio autoplay loop>'+
		'<source src="music/ost.mp3" type="audio/mpeg">'+
		
		'Your browser does not support the audio tag.'+
		'</audio>')
	})


	$('.continue').hover(function(){
		$(this).toggleClass('highlightMe');
	});





	$('input[name=username]').on('input', function() {
	    $('input[name=username]').removeClass('error');
	});




	$('input[name=username]').keypress(function(e){


		
		if(e.keyCode === 13){

			toAdd = $('input[name=username]').val();
			toAdd = toAdd.toUpperCase();

		 if(toAdd.length !== 0 && !blanksCheck(toAdd)){

			if(users.indexOf(toAdd) == -1){


					users.push(toAdd);
					wallets.push(1000);
					bets.push("none");
					betAmount.push(0);
					updatePlayers();
			}
			else{
				alert('Player already Registered');
				$('input[name=username]').addClass('error');
				document.getElementById('user').value = '';
			}


			document.getElementById('user').value = '';

			e.preventDefault();



		}else{

				$('input[name=username]').addClass('error');
				document.getElementById('user').value = '';

				e.preventDefault();
			}
		}


	});


	$('#addMe').click(function(){
		 toAdd = $('input[name=username]').val();
		 toAdd = toAdd.toUpperCase();




		 if(toAdd.length != 0 && !blanksCheck(toAdd)){

		 	if(users.indexOf(toAdd) == -1){


					users.push(toAdd);
					wallets.push(1000);
					bets.push("none");
					betAmount.push(0);
					updatePlayers();
			}
			else{
				alert('Player already Registered');
				$('input[name=username]').addClass('error');
				document.getElementById('user').value = '';
			}


			//$('input[name=username]').removeClass('error');
			document.getElementById('user').value = '';


			}else{

				$('input[name=username]').addClass('error');
				document.getElementById('user').value = '';

			}		
	});




function blanksCheck(checkMe){

	for(var i = 0; i<checkMe.length;i++){

		if(checkMe.substring(i,i+1) != " "){
			return false;
		}

	}
	return true;
}

function updatePlayers(){

	$('.table').append('<tr><td>' + users[users.length-1] + '</td>' + 
		'<td>' + "$" + wallets[wallets.length-1] + '</td>'
		 +'<td>' + bets[bets.length-1] + '</td>'+' <td>' + "$" +betAmount[betAmount.length-1] + '</td>'
		 + '</tr>');


}
function refreshTable(){
	$('.table').remove();
	$('#players input').remove();
	$('#players').append('	<table class = "table"><tr><th>Player</th><th>Wallet</th><th>Bet on</th><th>Bet amount</th></tr>');


	for(var i = 0; i<users.length;i++){

	$('.table').append('<tr><td>' + users[i] + '</td>' + 
		'<td>' + "$" + wallets[i] + '</td>'
		 +'<td>' + bets[i] + '</td>'+' <td>' + "$" +betAmount[i] + '</td>'
		 + '</tr>');
	}

	$('#players').append('<input type="button" name="showProfiles" id = "showButton" value="Bet on Characters" class="betButton" style="margin-bottom:0px!important; margin-top: 20px;">');
	

	$('#showButton').click(function(){

	if(users.length !== 0){
		$('#profiles').show();
		$('#greyedOut').show();
	}else{
		alert('You must Register a player before betting');
	}
	
});
}

$('#profiles').hide();

$('#showButton').click(function(){

	if(users.length !== 0){
		$('#profiles').show();
		$('#greyedOut').show();
	}else{
		alert('You must Register a player before betting');
	}
	
});


$('input[name=exitProfiles]').click(function(){
	$('#profiles').hide();
	$('#greyedOut').hide();
	$('#race').show();
	$('.audio').remove();
});



var moonPlayable = 1;
var marsPlayable = 1;
var mercPlayable = 1;
var jupiterPlayable = 1;
var venusPlayable = 1;



//MOON PROFILE
	$('#moon2').hide();

	$('#moon1').mouseenter(function(){

		if(moonPlayable > 0){
		$('.audio').remove();
		$('#moonProfile').append('<audio autoplay class = "audio">'+
			'<source src="music/sailor_scouts_saying/moon.mp3" type="audio/mpeg">'+
			
			'Your browser does not support the audio tag.'+
			'</audio>')
			moonPlayable = -6;
		}else{
			
			moonPlayable++;
		}

		//	$('#moon1').toggleClass('hereIAm');
			$('#moon2').show();
			$('#moon1').hide();
			 	
	});

	$('#moon2').mouseleave(function(){

			//$('#moon2').toggleClass('hereIAm');
			
			$('#moon1').show();
			$('#moon2').hide();
		
	});


//MARS PROFILE

	$('#mars2').hide();

	$('#mars1').mouseenter(function(){

		if(marsPlayable > 0){
				$('.audio').remove();
		$('#marsProfile').append('<audio autoplay class = "audio">'+
			'<source src="music/sailor_scouts_saying/mars.mp3" type="audio/mpeg">'+
			
			'Your browser does not support the audio tag.'+
			'</audio>')
			marsPlayable = -3;
		}else{
			
			marsPlayable++;
		}
		$('#mars2').show();
		$('#mars1').hide();
	});

	$('#mars2').mouseleave(function(){

		//$('#moon2').toggleClass('hereIAm');
		$('#mars1').show();
		$('#mars2').hide();
	});


//JUPITER PROFILE

	$('#jupiter2').hide();

	$('#jupiter1').mouseenter(function(){


		if(jupiterPlayable > 0){
				$('.audio').remove();
		$('#jupiterProfile').append('<audio autoplay class = "audio">'+
			'<source src="music/sailor_scouts_saying/jupiter.mp3" type="audio/mpeg">'+
			
			'Your browser does not support the audio tag.'+
			'</audio>')
			jupiterPlayable = -3;
		}else{
			
			jupiterPlayable++;
		}
		$('#jupiter2').show();
		$('#jupiter1').hide();
	});

	$('#jupiter2').mouseleave(function(){

		//$('#moon2').toggleClass('hereIAm');
		$('#jupiter1').show();
		$('#jupiter2').hide();
	});


//VENUS PROFILE

	$('#venus2').hide();

	$('#venus1').mouseenter(function(){

			
		if(venusPlayable > 0){
				$('.audio').remove();
		$('#venusProfile').append('<audio autoplay class = "audio">'+
			'<source src="music/sailor_scouts_saying/venus.mp3" type="audio/mpeg">'+
			
			'Your browser does not support the audio tag.'+
			'</audio>')
			venusPlayable = -3;
		}else{
			
			venusPlayable++;
		}
		$('#venus2').show();
		$('#venus1').hide();
	});

	$('#venus2').mouseleave(function(){

		//$('#moon2').toggleClass('hereIAm');
		$('#venus1').show();
		$('#venus2').hide();
	});


//MARS PROFILE

	$('#mercury2').hide();

	$('#mercury1').mouseenter(function(){


		if(mercPlayable > 0){
				$('.audio').remove();
		$('#mercuryProfile').append('<audio autoplay class = "audio">'+
			'<source src="music/sailor_scouts_saying/mercury.mp3" type="audio/mpeg">'+
			
			'Your browser does not support the audio tag.'+
			'</audio>')
			mercPlayable = -3;
		}else{
			
			marsPlayable++;
		}
		$('#mercury2').show();
		$('#mercury1').hide();
	});

	$('#mercury2').mouseleave(function(){

		//$('#moon2').toggleClass('hereIAm');
		$('#mercury1').show();
		$('#mercury2').hide();
	});


var playerBetting;
var amountBetting;
$('#betMoon').hide();
$('#betMars').hide();
$('#betJupiter').hide();
$('#betVenus').hide();
$('#betMercury').hide();
$('#myCanvas').hide();	



//BETTTTING
//moon

	$('input[name=moonPick').click(function(){

		$('#betMoon').show();
		$('#marsProfile').hide();
		$('#jupiterProfile').hide();
		$('#venusProfile').hide();
		$('#mercuryProfile').hide();
		$('#exitProfiles').hide();
		$('#moonProfile').addClass('profileBet');
		$('#players').addClass('showTable');
		$('input[name=showProfiles').hide();
	

	});

	$('input[name=nevermind').click(function(){

		$('#betMoon').hide();
		$('#marsProfile').show();
		$('#jupiterProfile').show();
		$('#venusProfile').show();
		$('#mercuryProfile').show();
		$('#exitProfiles').show();
		$('#moonProfile').removeClass('profileBet');
		$('#players').removeClass('showTable');
		$('input[name=showProfiles').show();
		

	});


	$('input[name=moonplayerBetting]').on('input', function() {
		    $(this).removeClass('error');
		});


	$('input[name=moonamount]').on('input', function() {
		    $(this).removeClass('error');
		});

	$('input[name=submitBetMoon]').click(function(){

		playerBetting =  $('input[name=moonplayerBetting]').val();
		playerBetting = playerBetting.toUpperCase();
		amountBetting = $('input[name=moonamount]').val()
		var pushMoney=-1;
		var pushBet; 

		if(!checkPlayer(playerBetting)){
			alert("Please enter a valid username");
			
			 $('input[name=moonplayerBetting]').addClass('error');
			
			

		}else{
			pushBet = playerBetting;
		}

		 if(!checkAmount(amountBetting)){
			alert("Please Enter a valid number");
			
			 $('input[name=moonamount]').addClass('error');
			
			 

		}else{
			pushMoney = amountBetting;
		}


		if(pushMoney != -1 && pushBet != undefined){ //if both input fields are good check if player has that amount

			var indexPlayer = users.indexOf(playerBetting);
			var amountPlayerHas = wallets[indexPlayer];

			if(pushMoney > amountPlayerHas){
				alert('You don\'t have that amount');
			}else{
				betAmount[indexPlayer] = pushMoney;
				bets[indexPlayer] = 'SAILOR MOON';
				alert(playerBetting + ' bet $' + pushMoney + ' on Sailor Moon');
				refreshTable();
				$('input[name=moonamount]').val("");
				$('input[name=moonplayerBetting]').val("");


				$('#betMoon').hide();
				$('#marsProfile').show();
				$('#jupiterProfile').show();
				$('#venusProfile').show();
				$('#mercuryProfile').show();
				$('#exitProfiles').show();
				$('#moonProfile').removeClass('profileBet');
				$('#players').removeClass('showTable');
				$('input[name=showProfiles').show();



			}



		}


	});
//Mars
	$('input[name=marsPick').click(function(){

		$('#betMars').show();
		$('#moonProfile').hide();
		$('#jupiterProfile').hide();
		$('#venusProfile').hide();
		$('#mercuryProfile').hide();
		$('#exitProfiles').hide();
		$('#marsProfile').addClass('profileBet');
		$('#players').addClass('showTable');
		$('input[name=showProfiles').hide();
		

	});

	$('input[name=nevermind').click(function(){

		$('#betMars').hide();
		$('#moonProfile').show();
		$('#jupiterProfile').show();
		$('#venusProfile').show();
		$('#mercuryProfile').show();
		$('#exitProfiles').show();
		$('#marsProfile').removeClass('profileBet');
		$('#players').removeClass('showTable');
		$('input[name=showProfiles').show();
		

	});
	$('input[name=marsplayerBetting]').on('input', function() {
		    $(this).removeClass('error');
		});


	$('input[name=marsamount]').on('input', function() {
		    $(this).removeClass('error');
		});

	$('input[name=submitBetMars]').click(function(){

		playerBetting =  $('input[name=marsplayerBetting]').val();
		playerBetting = playerBetting.toUpperCase();
		amountBetting = $('input[name=marsamount]').val()
		var pushMoney=-1;
		var pushBet; 

		if(!checkPlayer(playerBetting)){
			alert("Please enter a valid username");
			
			 $('input[name=marsplayerBetting]').addClass('error');
			
			

		}else{
			pushBet = playerBetting;
		}

		 if(!checkAmount(amountBetting)){
			alert("Please Enter a valid number");
			
			 $('input[name=marsamount]').addClass('error');
			
			 

		}else{
			pushMoney = amountBetting;
		}


		if(pushMoney != -1 && pushBet != undefined){ //if both input fields are good check if player has that amount

			var indexPlayer = users.indexOf(playerBetting);
			var amountPlayerHas = wallets[indexPlayer];

			if(pushMoney > amountPlayerHas){
				alert('You don\'t have that amount');
			}else{
				betAmount[indexPlayer] = pushMoney;
				bets[indexPlayer] = 'SAILOR MARS';
				alert(playerBetting + ' bet $' + pushMoney + ' on Sailor Mars');
				refreshTable();
				$('input[name=marsamount]').val("");
				$('input[name=marsplayerBetting]').val("");

				$('#betMars').hide();
				$('#moonProfile').show();
				$('#jupiterProfile').show();
				$('#venusProfile').show();
				$('#mercuryProfile').show();
				$('#exitProfiles').show();
				$('#marsProfile').removeClass('profileBet');
				$('#players').removeClass('showTable');
				$('input[name=showProfiles').show();
				

			}



		}


	});
//jupiter

	$('input[name=jupiterPick').click(function(){

			$('#betJupiter').show();
			$('#marsProfile').hide();
			$('#moonProfile').hide();
			$('#venusProfile').hide();
			$('#mercuryProfile').hide();
			$('#exitProfiles').hide();
			$('#jupiterProfile').addClass('profileBet');
			$('#players').addClass('showTable');
			$('input[name=showProfiles').hide();
			

		});

		$('input[name=nevermind').click(function(){

			$('#betJupiter').hide();
			$('#marsProfile').show();
			$('#moonProfile').show();
			$('#venusProfile').show();
			$('#mercuryProfile').show();
			$('#exitProfiles').show();
			$('#jupiterProfile').removeClass('profileBet');
			$('#players').removeClass('showTable');
			$('input[name=showProfiles').show();
			
		});

	$('input[name=jupiterplayerBetting]').on('input', function() {
		    $(this).removeClass('error');
		});


	$('input[name=jupiteramount]').on('input', function() {
		    $(this).removeClass('error');
		});

	$('input[name=submitBetJupiter]').click(function(){

		playerBetting =  $('input[name=jupiterplayerBetting]').val();
		playerBetting = playerBetting.toUpperCase();
		amountBetting = $('input[name=jupiteramount]').val()
		var pushMoney=-1;
		var pushBet; 

		if(!checkPlayer(playerBetting)){
			alert("Please enter a valid username");
			
			 $('input[name=jupiterplayerBetting]').addClass('error');
			
			

		}else{
			pushBet = playerBetting;
		}

		 if(!checkAmount(amountBetting)){
			alert("Please Enter a valid number");
			
			 $('input[name=jupiteramount]').addClass('error');
			
			 

		}else{
			pushMoney = amountBetting;
		}


		if(pushMoney != -1 && pushBet != undefined){ //if both input fields are good check if player has that amount

			var indexPlayer = users.indexOf(playerBetting);
			var amountPlayerHas = wallets[indexPlayer];

			if(pushMoney > amountPlayerHas){
				alert('You don\'t have that amount');
			}else{
				betAmount[indexPlayer] = pushMoney;
				bets[indexPlayer] = 'SAILOR JUPITER';
				alert(playerBetting + ' bet $' + pushMoney + ' on Sailor Jupiter');
				refreshTable();

				$('input[name=jupiteramount]').val("");
				$('input[name=jupiterplayerBetting]').val("");

				$('#betJupiter').hide();
				$('#marsProfile').show();
				$('#moonProfile').show();
				$('#venusProfile').show();
				$('#mercuryProfile').show();
				$('#exitProfiles').show();
				$('#jupiterProfile').removeClass('profileBet');
				$('#players').removeClass('showTable');
				$('input[name=showProfiles').show();
				

			}



		}


	});
//venus
	$('input[name=venusPick').click(function(){

		$('#betVenus').show();
		$('#marsProfile').hide();
		$('#jupiterProfile').hide();
		$('#moonProfile').hide();
		$('#mercuryProfile').hide();
		$('#exitProfiles').hide();
		$('#venusProfile').removeClass('scoot');
		$('#venusProfile').addClass('profileBet');
		$('#players').addClass('showTable');
		$('input[name=showProfiles').hide();
		

	});

	$('input[name=nevermind').click(function(){

		$('#betVenus').hide();
		$('#marsProfile').show();
		$('#jupiterProfile').show();
		$('#moonProfile').show();
		$('#mercuryProfile').show();
		$('#exitProfiles').show();
		$('#venusProfile').removeClass('profileBet');
		$('#venusProfile').addClass('scoot');
		$('#players').removeClass('showTable');
		$('input[name=showProfiles').show();
		

	});


	$('input[name=venusplayerBetting]').on('input', function() {
		    $(this).removeClass('error');
		});


	$('input[name=venusamount]').on('input', function() {
		    $(this).removeClass('error');
		});

	$('input[name=submitBetVenus]').click(function(){

		playerBetting =  $('input[name=venusplayerBetting]').val();
		playerBetting = playerBetting.toUpperCase();
		amountBetting = $('input[name=venusamount]').val()
		var pushMoney=-1;
		var pushBet; 

		if(!checkPlayer(playerBetting)){
			alert("Please enter a valid username");
			
			 $('input[name=venusplayerBetting]').addClass('error');
			
			

		}else{
			pushBet = playerBetting;
		}

		 if(!checkAmount(amountBetting)){
			alert("Please Enter a valid number");
			
			 $('input[name=venusamount]').addClass('error');
			
			 

		}else{
			pushMoney = amountBetting;
		}


		if(pushMoney != -1 && pushBet != undefined){ //if both input fields are good check if player has that amount

			var indexPlayer = users.indexOf(playerBetting);
			var amountPlayerHas = wallets[indexPlayer];

			if(pushMoney > amountPlayerHas){
				alert('You don\'t have that amount');
			}else{
				betAmount[indexPlayer] = pushMoney;
				bets[indexPlayer] = 'SAILOR VENUS';
				alert(playerBetting + ' bet $' + pushMoney + ' on Sailor Venus');
				refreshTable();
				$('input[name=venusamount]').val("");
				$('input[name=venusplayerBetting]').val("");
				$('#betVenus').hide();
				$('#marsProfile').show();
				$('#jupiterProfile').show();
				$('#moonProfile').show();
				$('#mercuryProfile').show();
				$('#exitProfiles').show();
				$('#venusProfile').removeClass('profileBet');
				$('#venusProfile').addClass('scoot');
				$('#players').removeClass('showTable');
				$('input[name=showProfiles').show();
				

			}



		}


	});
//mercury
	$('input[name=mercuryPick').click(function(){

		$('#betMercury').show();
		$('#marsProfile').hide();
		$('#jupiterProfile').hide();
		$('#venusProfile').hide();
		$('#moonProfile').hide();
		$('#exitProfiles').hide();
		$('#mercuryProfile').addClass('profileBet');
		$('#players').addClass('showTable');
		$('input[name=showProfiles').hide();
		

	});

	$('input[name=nevermind').click(function(){

		$('#betMercury').hide();
		$('#marsProfile').show();
		$('#jupiterProfile').show();
		$('#venusProfile').show();
		$('#moonProfile').show();
		$('#exitProfiles').show();
		$('#mercuryProfile').removeClass('profileBet');
		$('#players').removeClass('showTable');
		$('input[name=showProfiles').show();
	

	});

	$('input[name=mercuryplayerBetting]').on('input', function() {
		    $(this).removeClass('error');
		});


	$('input[name=mercuryamount]').on('input', function() {
		    $(this).removeClass('error');
		});

	$('input[name=submitBetMercury]').click(function(){

		playerBetting =  $('input[name=mercuryplayerBetting]').val();
		playerBetting = playerBetting.toUpperCase();
		amountBetting = $('input[name=mercuryamount]').val()
		var pushMoney=-1;
		var pushBet; 

		if(!checkPlayer(playerBetting)){
			alert("Please enter a valid username");
			
			 $('input[name=mercuryplayerBetting]').addClass('error');
			
			

		}else{
			pushBet = playerBetting;
		}

		 if(!checkAmount(amountBetting)){
			alert("Please Enter a valid number");
			
			 $('input[name=mercuryamount]').addClass('error');
			
			 

		}else{
			pushMoney = amountBetting;
		}


		if(pushMoney != -1 && pushBet != undefined){ //if both input fields are good check if player has that amount

			var indexPlayer = users.indexOf(playerBetting);
			var amountPlayerHas = wallets[indexPlayer];

			if(pushMoney > amountPlayerHas){
				alert('You don\'t have that amount');
			}else{
				betAmount[indexPlayer] = pushMoney;
				bets[indexPlayer] = 'SAILOR MERCURY';
				alert(playerBetting + ' bet $' + pushMoney + ' on Sailor Mercury');
				refreshTable();
				$('input[name=mercuryamount]').val("");
				$('input[name=mercuryplayerBetting]').val("");
				$('#betMercury').hide();
				$('#marsProfile').show();
				$('#jupiterProfile').show();
				$('#venusProfile').show();
				$('#moonProfile').show();
				$('#exitProfiles').show();
				$('#mercuryProfile').removeClass('profileBet');
				$('#players').removeClass('showTable');
				$('input[name=showProfiles').show();
				

			}



		}


	});

function checkPlayer(lookForMe){

	for(var i = 0; i<users.length;i++){
		if(lookForMe == users[i]){
			return true;
		}
	}
	return false;
}

function checkAmount(checkMe){
	
	if(blanksCheck(checkMe)){
		return false;
	}
	var numbers = '0123456789';
	for(var i = 0; i < checkMe.length; i ++){

		if(numbers.indexOf(checkMe.substring(i,i+1)) == -1){
			return false;
		
		}

	}
	return true;
}

var moonX = 0;
var moonY = 0;
var marsX = 10;
var marsY = 135;
var jupiterX = 10;
var jupiterY = 270;
var venusX = 10;
var venusY = 375;
var mercuryX = 0;
var mercuryY = 510;
var stop = false;
var winner;
var racing = false;
var frameCount = 0;
var winningLength = 750;
var reset = false;
var waitingMerc;
var waitingJup;
var waitingVenus;
var waitingMars;
var waitingMoon;
var runningMerc;
var runningJup;
var runningVenus;
var runningMars;
var runningMoon;
var victoryMerc;
var victoryJup;
var victoryVenus;
var victoryMars;
var victoryMoon;

$('#race').hide();
$('#moonWin').hide();
$('#mercuryWin').hide();
$('#marsWin').hide();
$('#jupiterWin').hide();
$('#venusWin').hide();
$('#emptyWin').hide();



$('input[name=startRace]').click(function(){
	$('audio').remove();
	$('html').append('<audio autoplay loop><source src="music/battle.mp3" type="audio/mpeg">Your browser does not support the audio tag.></audio>');
	$('#race').hide();
	$('#register').hide();
	$('#players').hide();
	$('#greyedOut').show();
	$('#raceShow').show();
	$('#myCanvas').show();
	$('#emptyWin').show();
	$('#moonWin').hide();
	resetCanvas();
	
	startRace();



});

function displayResults(winner){

	for(var i = 0; i<users.length;i++){

		if(bets[i] === "SAILOR MOON" && winner == 'sailormoon' ){

			$('.results').append('<tr><td>' + users[i] + '</td>' +'<td> $' + wallets[i] + ' </td> <td style = color:green;> + $' + betAmount[i]);
			wallets[i] += parseInt(betAmount[i]);
			$('.results').append('<td> = $' + wallets[i] +'</td></tr>');
			bets[i]= 'none';
			betAmount[i]='0';

		}else if(bets[i] == "SAILOR MARS" && winner == 'sailormars' ){

			$('.results').append('<tr><td>' + users[i] + '</td>' +'<td> $' + wallets[i] + ' </td> <td style = color:green;> + $' + betAmount[i]);
				wallets[i] += parseInt(betAmount[i]);
			$('.results').append('<td> = $' + wallets[i] +'</td></tr>');
			bets[i]= 'none';
			betAmount[i]='0';

		}else if(bets[i] == "SAILOR VENUS" && winner == 'sailorvenus' ){

			$('.results').append('<tr><td>' + users[i] + '</td>' +'<td> $' + wallets[i] + ' </td> <td style = color:green;> + $' + betAmount[i]);
				wallets[i] += parseInt(betAmount[i]);
			$('.results').append('<td> = $' + wallets[i] +'</td></tr>');
			bets[i]= 'none';
			betAmount[i]='0';

		} else if(bets[i] == "SAILOR MERCURY" && winner == 'sailormercury' ){

			$('.results').append('<tr><td>' + users[i] + '</td>' +'<td> $' + wallets[i] + ' </td> <td style = color:green;> + $' + betAmount[i]);
			wallets[i] += betAmount[i];
			$('.results').append('<td> = $' + wallets[i] +'</td></tr>');
			bets[i]= 'none';
			betAmount[i]='0';

		} else if(bets[i] == "SAILOR JUPITER" && winner == 'sailorjupiter' ){

			$('.results').append('<tr><td>' + users[i] + '</td>' +'<td> $' + wallets[i] + ' </td> <td style = color:green;> + $' + betAmount[i]);
				wallets[i] += parseInt(betAmount[i]);
			$('.results').append('<td> = $' + wallets[i] +'</td></tr>');
			bets[i]= 'none';
			betAmount[i]='0';

		}else{

			$('.results').append('<tr><td>' + users[i] + '</td>' +'<td> $' + wallets[i] + ' </td><td style = color:red;> - $' + betAmount[i]);
				wallets[i] -= parseInt(betAmount[i]);
			$('.results').append('<td> = $' + wallets[i] +'</td></tr>');
			bets[i]= 'none';
			betAmount[i]='0';

		}
		}

}

$('input[name=home]').click(function(){
	resetCanvas();
	$('#myCanvas').hide();
	$('#raceShow').hide();
	$('#greyedOut').hide();
	$('.results').empty();
	$('#register').show();
	$('#moonWin').hide();
	$('#mercuryWin').hide();
	$('#marsWin').hide();
	$('#jupiterWin').hide();
	$('#venusWin').hide();
	$('#race').hide();
	refreshTable();
	$('#players').show();
	$('audio').remove();
	$('html').append('<audio autoplay loop><source src="music/ost.mp3" type="audio/mpeg">Your browser does not support the audio tag.</audio>');


});


function resetCanvas(){
	 $('#myCanvas').remove();
			$('#canvas').append('<canvas id = "myCanvas" width="900" height="625"></canvas>');
			 canvas = document.getElementById('myCanvas');
			 ctx = canvas.getContext('2d');

			 clearInterval(waitingMerc);
			 clearInterval(waitingJup);
			 clearInterval(waitingVenus);
			 clearInterval(waitingMars);
			 clearInterval(waitingMoon);
			 clearInterval(runningMerc);
			 clearInterval(runningJup);
			 clearInterval(runningVenus);
			 clearInterval(runningMars);
			 clearInterval(runningMoon);
			 clearInterval(victoryMerc);
			 clearInterval(victoryJup);
			 clearInterval(victoryVenus);
			 clearInterval(victoryMars);
			 clearInterval(victoryMoon);

	}


function startRace(){
		moonX = 0;
		 moonY = 0;
		 marsX = 10;
		 marsY = 135;
		 jupiterX = 10;
		 jupiterY = 270;
		 venusX = 10;
		 venusY = 375;
		 mercuryX = 0;
		 mercuryY = 510;
		 stop = false;
		 winner = undefined;
		 racing = false;
		 frameCount = 0;
		 winningLength = 750;



			drawWaitingMercury(0);
			drawWaitingVenus();
			drawWaitingMoon();
			drawWaitingMars();
			drawWaitingJupiter();


}
function displayVictor(){
		

	
		if(winner == "sailormercury"){
			$('#mercuryWin').show();
			displayResults(winner);
		}
		else if(winner == "sailormoon"){
			$('#moonWin').show();
			displayResults(winner);
		}
		else if(winner == "sailormars"){
			$('#marsWin').show();
			displayResults(winner);
		}
		else if(winner == "sailorjupiter"){
			$('#jupiterWin').show();
			displayResults(winner);
		}
		else {
			$('#venusWin').show();
			displayResults(winner);
		}


	
}

function drawVictoryMercury(){
	


	frameCount = 0;
	var mercuryWidths =[];

	var srcX ;
	var picWidth = 744;
	var picHeight = 106;
	var nummercury = 9;
	//	var moonWidth =picWidth/numMoons;
	//moonWidth = moonWidth|0;
	var currentmercury = 0;
	mercuryWidths[0]=picWidth/nummercury-23;
	mercuryWidths[1] = picWidth/nummercury - 18;
	mercuryWidths[2] = picWidth/nummercury-15;
	mercuryWidths[3] = picWidth/nummercury-13;
	mercuryWidths[4] = picWidth/nummercury-5;
	mercuryWidths[5] = picWidth/nummercury;
	mercuryWidths[6] = picWidth/nummercury+2;
	mercuryWidths[7] = picWidth/nummercury+5;
	mercuryWidths[8] = picWidth/nummercury+7;
	var mercury= new Image();
	mercury.src = 'images/victory/mercury_victory.png';

	
	function updateFrame(){
	
	 //Updating the frame index 
	 currentmercury = ++currentmercury % nummercury; 
	 
	 //Calculating the x coordinate for spritesheet 
	 srcX = currentmercury * mercuryWidths[currentmercury]; 
	 	
	 	if(currentmercury == 6){
	 		srcX +=5;
	 	}

	 	
	 		
	 		
			
	 	

				ctx.clearRect(mercuryX,mercuryY,mercuryWidths[currentmercury]+25,picHeight);
			}
	


				function draw(){
					if(frameCount == 0){
						displayVictor();
						frameCount++;
					}else{

					updateFrame();
					ctx.drawImage(mercury,srcX-15,0,mercuryWidths[currentmercury]+10,picHeight,mercuryX,mercuryY,mercuryWidths[currentmercury],picHeight);
					}
				}
				
				victoryMerc = setInterval(draw,150);

}

function drawRunningMercury(){
	var srcX ;
	var picWidth = 420;
	var picHeight = 98;
	var nummercury= 6;
	var mercuryWidth =picWidth/nummercury +4 ;
	mercuryWidth = mercuryWidth|0;
	var currentmercury = 0;

	var mercury = new Image();
	mercury.src = 'images/running/merc_running.png';


	function updateFrame(){
	 //Updating the frame index 
	 currentmercury = ++currentmercury % nummercury; 
	 
	 //Calculating the x coordinate for spritesheet 
	 srcX = currentmercury * mercuryWidth; 

	ctx.clearRect(mercuryX,mercuryY,mercuryWidth+25,picHeight+2);
	
	if(mercuryX < winningLength){
	mercuryX += (Math.random() * 12 ) + 1;
	}else{
		winner = "sailormercury";
		stop = true;
		racing = false;
		
	}
	
	}

	function draw(){

		if(!stop){
		updateFrame();
		ctx.drawImage(mercury,srcX-22,0,mercuryWidth,picHeight,mercuryX,mercuryY,mercuryWidth,picHeight);
		}else{
			clearInterval(runningMerc);
			ctx.clearRect(mercuryX,mercuryY,mercuryWidth+25,picHeight+2);
			if(winner == 'sailormercury'){
				drawVictoryMercury();
			}else{
				drawWaitingMercury(40);
			}
			
		}
	}
	
	
	 runningMerc = setInterval(draw,100);
	

	 

}


function drawWaitingMercury(frameCount){
	var srcX ;
	var picWidth = 384;
	var picHeight = 106;
	var nummercury = 6;
	var mercuryWidth =picWidth/nummercury ;
	mercuryWidth = mercuryWidth|0;
	var currentmercury = 0;

	var mercury = new Image();
	mercury.src = 'images/waiting/merc_waiting.png';



	function updateFrame(){
	 //Updating the frame index 
	 currentmercury = ++currentmercury % nummercury; 
	 
	 //Calculating the x coordinate for spritesheet 
	 srcX = currentmercury * mercuryWidth; 
	 frameCount += 1;
	ctx.clearRect(mercuryX,mercuryY,mercuryWidth,picHeight);
	ctx.clearRect(canvas.width/2,canvas.height/2-30,30,30);

	

	if(frameCount >=1 && frameCount <= 8){
		ctx.font =('30px Arial');
		ctx.fillText(' 3 ',canvas.width/2,canvas.height/2);

	}if(frameCount >=9 && frameCount <=16 ){
		ctx.font =('30px Arial');
		ctx.fillText(' 2 ',canvas.width/2,canvas.height/2);
	}if(frameCount >=17 && frameCount <=24 ){
		ctx.font =('30px Arial');
		ctx.fillText(' 1 ',canvas.width/2,canvas.height/2);
	}if(frameCount >=25 && frameCount <=32){
		ctx.font =('30px Arial');
		ctx.fillText(' 0 ',canvas.width/2,canvas.height/2);
	}if(frameCount == 33){
		racing = true;
	}
	
	
	}

	function draw(){
		if(!racing){
		updateFrame();
		ctx.drawImage(mercury,srcX,0,mercuryWidth,picHeight,mercuryX,mercuryY,mercuryWidth,picHeight);
		}else{
			clearInterval(waitingMerc);
			ctx.clearRect(mercuryX,mercuryY,mercuryWidth,picHeight);
			drawRunningMercury();
		}
	}

	waitingMerc = setInterval(draw,150);

}


function drawVictoryVenus(){
	



	var venusWidths =[];

	var srcX ;
	var picWidth = 792;
	var picHeight = 120;
	var numvenus = 8;
	//	var moonWidth =picWidth/numMoons;
	//moonWidth = moonWidth|0;
	var currentvenus = 0;
	venusWidths[0]=picWidth/numvenus-23;
	venusWidths[1] = picWidth/numvenus - 18;
	venusWidths[2] = picWidth/numvenus-8;
	venusWidths[3] = picWidth/numvenus;
	venusWidths[4] = picWidth/numvenus+5;
	venusWidths[5] = picWidth/numvenus+5;
	venusWidths[6] = picWidth/numvenus +6;
	venusWidths[7] = picWidth/numvenus +6;
	var venus= new Image();
	venus.src = 'images/victory/venus_victory.png';

 frameCount = 0;
	function updateFrame(){
	
	 //Updating the frame index 
	 currentvenus = ++currentvenus % numvenus; 
	 
	 //Calculating the x coordinate for spritesheet 
	 srcX = currentvenus * venusWidths[currentvenus]; 
	 	
	 	if(currentvenus == 2){
	 		srcX -= 10;
	 	}
				ctx.clearRect(venusX,venusY,venusWidths[currentvenus]+25,picHeight);
			}

				function draw(){
					if(frameCount == 0){
						displayVictor();
						frameCount++;
					}else{
					updateFrame();
					ctx.drawImage(venus,srcX-20,0,venusWidths[currentvenus]+10,picHeight,venusX,venusY,venusWidths[currentvenus],picHeight);
				}
				}

				victoryVenus = setInterval(draw,150);

}


function drawRunningVenus(){
	var srcX ;
	var picWidth = 632;
	var picHeight = 134;
	var numvenus = 7;
	var venusWidth =picWidth/numvenus +5  ;
	venusWidth = venusWidth|0;
	var currentvenus = 0;

	var venus = new Image();
	venus.src = 'images/running/venus_running.png';


	function updateFrame(){
	 //Updating the frame index 
	 currentvenus = ++currentvenus % numvenus; 
	 
	 //Calculating the x coordinate for spritesheet 
	 srcX = currentvenus * venusWidth; 

	ctx.clearRect(venusX,venusY,venusWidth,picHeight);
	
	if(venusX < winningLength){
	venusX +=(Math.random() * 12 ) + 1;
	}else{
		winner = "sailorvenus";
		stop = true;
		racing = false;
	}
	
	}

	function draw(){
		if(!stop){
		updateFrame();
		ctx.drawImage(venus,srcX-9,0,venusWidth,picHeight,venusX,venusY,venusWidth,picHeight);
		}else{
			clearInterval(runningVenus);
			ctx.clearRect(venusX,venusY,venusWidth,picHeight);
			if(winner == 'sailorvenus'){
				drawVictoryVenus();
			}else{
				drawWaitingVenus();
			}
		}

	}

	runningVenus = setInterval(draw,100);

}


function drawWaitingVenus(){
	
	

	var srcX ;
	var picWidth = 386;
	var picHeight = 108;
	var numvenus = 6;
	var venusWidth =picWidth/numvenus +9;
	venusWidth = venusWidth|0;
	var currentvenus = 0;

	var venus = new Image();
	venus.src = 'images/waiting/venus_waiting.png';


	function updateFrame(){
	 //Updating the frame index 
	 currentvenus = ++currentvenus % numvenus; 
	 
	 //Calculating the x coordinate for spritesheet 
	 srcX = currentvenus * venusWidth; 

	ctx.clearRect(venusX,venusY,venusWidth,picHeight);
	
	
	
	}

	function draw(){
		if(!racing){
		updateFrame();
		ctx.drawImage(venus,srcX,0,venusWidth,picHeight,venusX,venusY,venusWidth,picHeight);
		}else{
			clearInterval(waitingVenus);
			ctx.clearRect(venusX,venusY,venusWidth,picHeight);
			drawRunningVenus();
		}
	}

	
	waitingVenus =setInterval(draw,150);

}



function drawVictoryJupiter(){



	var jupiterWidths =[];

	var srcX ;
	var picWidth = 961;
	var picHeight = 132;
	var numjupiter = 8;
	//	var moonWidth =picWidth/numMoons;
	//moonWidth = moonWidth|0;
	var currentjupiter = 0;
	jupiterWidths[0]=picWidth/numjupiter-25;
	jupiterWidths[1] = picWidth/numjupiter-25;
	jupiterWidths[2] = picWidth/numjupiter-25;
	jupiterWidths[3] = picWidth/numjupiter-25;
	jupiterWidths[4] = picWidth/numjupiter-17;
	jupiterWidths[5] = picWidth/numjupiter-10;
	jupiterWidths[6] = picWidth/numjupiter -8;
	jupiterWidths[7] = picWidth/numjupiter -25;
	var jupiter= new Image();
	jupiter.src = 'images/victory/jupiter_victory.png';

 	frameCount = 0;
	function updateFrame(){
	
		
	 //Updating the frame index 
	 currentjupiter = ++currentjupiter % numjupiter; 
	 
	 //Calculating the x coordinate for spritesheet 
	 srcX = currentjupiter * jupiterWidths[currentjupiter]; 

				ctx.clearRect(jupiterX+50,jupiterY-25,jupiterWidths[currentjupiter]+25,picHeight);


				}

				function draw(){
					if(frameCount == 0){
						displayVictor();
						frameCount++;
					}else{
					updateFrame();
					ctx.drawImage(jupiter,srcX,0,jupiterWidths[currentjupiter],picHeight,jupiterX+50,jupiterY-25,jupiterWidths[currentjupiter],picHeight);
					}
				}

				victoryJup = setInterval(draw,150);

			}

function drawWaitingJupiter(){
	
	

	var srcX ;
	var picWidth = 386;
	var picHeight = 108;
	var numjupiter = 6;
	var jupiterWidth =picWidth/numjupiter;
	jupiterWidth = jupiterWidth|0;
	var currentjupiter = 0;

	var jupiter = new Image();
	jupiter.src = 'images/waiting/jupiter_waiting.png';


	function updateFrame(){
	 //Updating the frame index 
	 currentjupiter = ++currentjupiter % numjupiter; 
	 
	 //Calculating the x coordinate for spritesheet 
	 srcX = currentjupiter * jupiterWidth; 

	ctx.clearRect(jupiterX,jupiterY,jupiterWidth,picHeight);
	
	
	
	}

	function draw(){
		if(!racing){
		updateFrame();
		ctx.drawImage(jupiter,srcX,0,jupiterWidth,picHeight,jupiterX,jupiterY,jupiterWidth,picHeight);
		}else{
			clearInterval(waitingJup);
			ctx.clearRect(jupiterX,jupiterY,jupiterWidth,picHeight);
			drawRunningJupiter();
		}
	}

	waitingJup = setInterval(draw,150);

}
function drawRunningJupiter(){
	var srcX ;
	var picWidth = 474;
	var picHeight = 112;
	var numjupiter = 6;
	var jupiterWidth =picWidth/numjupiter +1 ;
	jupiterWidth = jupiterWidth|0;
	var currentjupiter = 0;

	var jupiter = new Image();
	jupiter.src = 'images/running/jupiter_running.png';


	function updateFrame(){
	 //Updating the frame index 
	 currentjupiter = ++currentjupiter % numjupiter; 
	 
	 //Calculating the x coordinate for spritesheet 
	 srcX = currentjupiter * jupiterWidth; 

	ctx.clearRect(jupiterX,jupiterY,jupiterWidth,picHeight);
	
	if(jupiterX < winningLength){
	jupiterX +=(Math.random() * 12 ) + 1;
	}else{
		winner = "sailorjupiter";
		stop = true;
		racing = false;
	}
	
	}

	function draw(){
		if(!stop){
		updateFrame();
		ctx.drawImage(jupiter,srcX-5,0,jupiterWidth,picHeight,jupiterX,jupiterY,jupiterWidth,picHeight);
		}else{
			clearInterval(runningJup);
			ctx.clearRect(jupiterX,jupiterY,jupiterWidth,picHeight);
			
			if(winner == "sailorjupiter"){
				drawVictoryJupiter();
			}else{
			drawWaitingJupiter();
		}

		}
	}

	runningJup = setInterval(draw,100);
}

function drawWaitingMars(){

	

	var srcX ;
	var picWidth = 410;
	var picHeight = 104;
	var numMars = 6;
	var marsWidth =picWidth/numMars;
	marsWidth = marsWidth|0;
	var currentMars = 0;

	var mars = new Image();
	mars.src = 'images/waiting/mars_waiting.png';


	function updateFrame(){
	 //Updating the frame index 
	 currentMars = ++currentMars % numMars; 
	 
	 //Calculating the x coordinate for spritesheet 
	 srcX = currentMars * marsWidth; 

	ctx.clearRect(marsX,marsY,marsWidth,picHeight);
	
	
	
	}

	function draw(){
		if(!racing){
		updateFrame();
		ctx.drawImage(mars,srcX,0,marsWidth,picHeight,marsX,marsY,marsWidth,picHeight);
		}else{
			clearInterval(waitingMars);
			ctx.clearRect(marsX,marsY,marsWidth,picHeight);
			drawRunningMars();
		}
	}

	waitingMars = setInterval(draw,150);

}

function drawRunningMars(){


	var srcX ;
	var picWidth = 600;
	var picHeight = 102;
	var numMars = 7;
	var marsWidth =picWidth/numMars +4 ;
	marsWidth = marsWidth|0;
	var currentMars = 0;

	var mars = new Image();
	mars.src = 'images/running/mars_running.png';


	function updateFrame(){
	 //Updating the frame index 
	 currentMars = ++currentMars % numMars; 
	 
	 //Calculating the x coordinate for spritesheet 
	 srcX = currentMars * marsWidth; 

	ctx.clearRect(marsX,marsY,marsWidth,picHeight);
	
	if(marsX < winningLength){
		marsX +=(Math.random() * 12 ) + 1;
	}else{
		winner = "sailormars";
		stop = true;
		racing = false;
	}
	
	}

	function draw(){
		if(!stop){
		updateFrame();
		ctx.drawImage(mars,srcX-12,0,marsWidth,picHeight,marsX,marsY,marsWidth,picHeight);
		}else{
			clearInterval(runningMars);
			ctx.clearRect(marsX,marsY,marsWidth,picHeight);
			if(winner == "sailormars"){
				drawVictoryMars();
			}else{
				drawWaitingMars();
			}
			
		}
	}
	runningMars = setInterval(draw,100);


}

function drawVictoryMars(){
	
	



	var marsWidths =[];

	var srcX ;
	var picWidth = 958;
	var picHeight = 137;
	var numMars = 8;
	//	var moonWidth =picWidth/numMoons;
	//moonWidth = moonWidth|0;
	var currentMars = 0;
	marsWidths[0]=picWidth/numMars-10;
	marsWidths[1] = picWidth/numMars-15;
	marsWidths[2] = picWidth/numMars-13;
	marsWidths[3] = picWidth/numMars-8;
	marsWidths[4] = picWidth/numMars-5;
	marsWidths[5] = picWidth/numMars+32;
	marsWidths[6] = picWidth/numMars -23;
	marsWidths[7] = picWidth/numMars -24;
	var mars= new Image();
	mars.src = 'images/victory/mars_victory.png';

	frameCount = 0;
	function updateFrame(){
	
	 //Updating the frame index 
	 currentMars = ++currentMars % numMars; 
	 
	 //Calculating the x coordinate for spritesheet 
	 srcX = currentMars * marsWidths[currentMars]; 
	

	 	ctx.clearRect(marsX,marsY,marsWidths[4],picHeight);

	}

	function draw(){
		if(frameCount == 0){
				displayVictor();
				frameCount++;
			}else{
		updateFrame();
		ctx.drawImage(mars,srcX-10,0,marsWidths[currentMars],picHeight,marsX,marsY,marsWidths[currentMars],picHeight);
		}
	}

	victoryMars = setInterval(draw,150);

}

function drawRunningMoon(){

	moonX = 0;
	moonY = 0;

	var srcX ;
	var picWidth = 604;
	var picHeight = 108;
	var numMoons = 6;
	var moonWidth =picWidth/numMoons -2;
	moonWidth = moonWidth|0;
	var currentMoon = 0;

	var moon = new Image();
	moon.src = 'images/running/moon_running.png';


	function updateFrame(){
	 //Updating the frame index 
	 currentMoon = ++currentMoon % numMoons; 
	 
	 //Calculating the x coordinate for spritesheet 
	 srcX = currentMoon * moonWidth; 

	ctx.clearRect(moonX,moonY,moonWidth,picHeight);
		
		if(moonX < winningLength){
				moonX +=(Math.random() * 12 ) + 1;
			}else{
				winner = "sailormoon";
				stop = true;
				racing = false;
			}
	
	
	}

	function draw(){
		if(!stop){
		updateFrame();
		ctx.drawImage(moon,srcX,0,moonWidth,picHeight,moonX,moonY,moonWidth,picHeight);
		}else{
			clearInterval(runningMoon);
			ctx.clearRect(moonX,moonY,moonWidth,picHeight);

			if(winner == "sailormoon"){
				drawVictoryMoon();
			}else{
			drawWaitingMoon();
		}

		}
	}

	runningMoon = setInterval(draw,100);

}

function drawWaitingMoon(){

	



	var srcX ;
	var picWidth = 454;
	var picHeight = 106;
	var numMoons = 6;
	var moonWidth =picWidth/numMoons+4;
	moonWidth = moonWidth|0;
	var currentMoon = 0;

	var moon = new Image();
	moon.src = 'images/waiting/moon_waiting.png';


	function updateFrame(){
	 //Updating the frame index 
	 currentMoon = ++currentMoon % numMoons; 
	 
	 //Calculating the x coordinate for spritesheet 
	 srcX = currentMoon * moonWidth; 

	ctx.clearRect(moonX,moonY,moonWidth,picHeight);
	
	
	
	}

	function draw(){
		if(!racing){
		updateFrame();
		ctx.drawImage(moon,srcX,0,moonWidth,picHeight,moonX,moonY,moonWidth,picHeight);
		}else{
			clearInterval(waitingMoon);
			ctx.clearRect(moonX,moonY,moonWidth,picHeight);
			drawRunningMoon();
		}
	}

	waitingMoon = setInterval(draw,150);

}

function drawVictoryMoon(){
	


	var moonWidths =[];

	var srcX ;
	var picWidth = 958;
	var picHeight = 137;
	var numMoons = 8;
	//	var moonWidth =picWidth/numMoons;
	//moonWidth = moonWidth|0;
	var currentMoon = 0;
	moonWidths[0]=picWidth/numMoons +25;
	moonWidths[1] = picWidth/numMoons +25;
	moonWidths[2] = picWidth/numMoons+21;
	moonWidths[3] = picWidth/numMoons+18;
	moonWidths[4] = picWidth/numMoons+16;
	moonWidths[5] = picWidth/numMoons+12;
	moonWidths[6] = picWidth/numMoons+23;
	moonWidths[7] = picWidth/numMoons+3;
	var moon = new Image();
	moon.src = 'images/victory/moon_victory.png';
	var tempX = moonX;
	frameCount = 0;
	function updateFrame(){
		
		moonX = tempX;
	 //Updating the frame index 
	 currentMoon = ++currentMoon % numMoons; 
	 
	 //Calculating the x coordinate for spritesheet 
	 srcX = currentMoon * moonWidths[currentMoon]; 

	 if(currentMoon == 6 || currentMoon == 7 ){
	 	moonX +=15;
	 	ctx.clearRect(moonX,moonY-5,moonWidths[0],picHeight);
	 }else if(currentMoon == 3){
	 	moonX -=3;
	 	ctx.clearRect(moonX,moonY-5,moonWidths[0],picHeight);
	 	
	 	}else if(currentMoon == 2){
	 	moonX -=2;
	 	ctx.clearRect(moonX,moonY-5,moonWidths[0],picHeight);
	 	
	 	}else{

		ctx.clearRect(moonX,moonY-5,moonWidths[0],picHeight);
		}
	 }
	
	
	function draw(){
		if(frameCount == 0){
			displayVictor();
			frameCount++;
			}else{
		updateFrame();
		ctx.drawImage(moon,srcX+5,0,moonWidths[currentMoon],picHeight,moonX,moonY-5,moonWidths[currentMoon],picHeight);
		}
	}

	victoryMoon = setInterval(draw,150);

}


//MOON
	$('#victorymoon2').hide();

	$('#victorymoon1').mouseenter(function(){


		//	$('#moon1').toggleClass('hereIAm');
			$('#victorymoon2').show();
			$('#victorymoon1').hide();
			 	
	});

	$('#victorymoon2').mouseleave(function(){

			//$('#moon2').toggleClass('hereIAm');
			
			$('#victorymoon1').show();
			$('#victorymoon2').hide();
		
	});


//MARS
	$('#victorymars2').hide();

	$('#victorymars1').mouseenter(function(){


		//	$('#moon1').toggleClass('hereIAm');
			$('#victorymars2').show();
			$('#victorymars1').hide();
			 	
	});

	$('#victorymars2').mouseleave(function(){

			//$('#moon2').toggleClass('hereIAm');
			
			$('#victorymars1').show();
			$('#victorymars2').hide();
		
	});

//MERC


	$('#victorymercury2').hide();

	$('#victorymercury1').mouseenter(function(){


		//	$('#moon1').toggleClass('hereIAm');
			$('#victorymercury2').show();
			$('#victorymercury1').hide();
			 	
	});

	$('#victorymercury2').mouseleave(function(){

			//$('#moon2').toggleClass('hereIAm');
			
			$('#victorymercury1').show();
			$('#victorymercury2').hide();
		
	});

//JUPITER
	$('#victoryjupiter2').hide();

	$('#victoryjupiter1').mouseenter(function(){


		//	$('#moon1').toggleClass('hereIAm');
			$('#victoryjupiter2').show();
			$('#victoryjupiter1').hide();
			 	
	});

	$('#victoryjupiter2').mouseleave(function(){

			//$('#moon2').toggleClass('hereIAm');
			
			$('#victoryjupiter1').show();
			$('#victoryjupiter2').hide();
		
	});

//VENUS
	$('#victoryvenus2').hide();

	$('#victoryvenus1').mouseenter(function(){


		//	$('#moon1').toggleClass('hereIAm');
			$('#victoryvenus2').show();
			$('#victoryvenus1').hide();
			 	
	});

	$('#victoryvenus2').mouseleave(function(){

			//$('#moon2').toggleClass('hereIAm');
			
			$('#victoryvenus1').show();
			$('#victoryvenus2').hide();
		
	});








});