// JavaScript function that wraps everything
    $(document).ready(function() {
   
	//global variable 

	var crystalArray =["red-crystal","blue-crystal","green-crystal","yellow-crystal"];
	var randNum;
	var randCrystal;
	var loss = 0;
	var win = 0;
	var ourScore = 0;
	
	//Game Start 
	//Scores
		//target score
   		//generate a random number between 19-120
		function gameStart () {
			randNum = Math.floor(Math.random() * (120 - 19)) + 19;
			$(".targetScore").html(randNum);
			
			ourScore = 0;
			$(".ourScore").text(ourScore);
			
//generate a random number for the crystal
			for (var i = 0; i < crystalArray.length; i++) {
			randCrystal = Math.floor(Math.random() * (1 - 12)) + 12;
			console.log(randCrystal)
			$("#" + crystalArray[i]).attr("value", randCrystal);
			$(".ourScore").html(randCrystal);
			}
		}

    //Your Score
	//Crystal Buttons
    //crytals generate random numbers 

   //stores current score and adds this.value 
	    $(".crystal").on("click", function() {
	    	ourScore += parseInt(this.value);
      	 
      	 $(".ourScore").html(ourScore);
	      
	      //win count
	      if(ourScore === randNum) {
	      	win++;
	      	$(".win").html(win);
	      	alert ("You Win");
	      	gameStart ();

	      } 
	      //loss count
	      else if (ourScore > randNum) {
	      	loss++;
	      	$(".lose").html(loss);
	      	alert ("You Lose");
	      	gameStart ();
	      }
	   		 
	});
 

    gameStart();

});


  