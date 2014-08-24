$(document).ready(function(){
     
     /*--- Display information modal box ---*/
    $(".what").click(function(){
        $(".overlay").fadeIn(1000);
    });

    
    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
        $(".overlay").fadeOut(1000);
    });
    
    
    //Set variables
    var guess;
    var answer;
    var range;
    var guessTotal=0;

    
    //Set new answer for new game
    function newGame(){
        setAnswer();
        $('#guessButton, #userGuess').prop('disabled', false);
    };
    
    
    //Create a random number to set as answer
    function setAnswer(){
        answer = Math.floor((Math.random()*100)+1);
        console.log(answer);
    };
    
    setAnswer();
    
    
    //Get user's guess(es) from input field
    var getGuess = function(){
        guess = Number($('#userGuess').val());
        if(guess<=0 || guess>=101 || guess%1!=0){
            guess='N/A';
            $('#feedback').text("Invalid Input");
            alert("Please enter a number between 1 and 100");
        }else if (isNaN(guess)){
            guess='N/A';
            $('#feedback').text("Invalid Input");
            alert("Please enter a number between 1 and 100");
        }
    };
    
    
    //Determine 'range' - distance between random number and guess
    var getRange = function(){
        range = Math.abs(answer-guess);
        console.log(range)
        return Math.abs(range);
    };
    
    
    //Provide user feedback on guess(es)
    function playGame(){
        
        //While loop for incorrect guesses
        var winGame=false;
        while(guess!=answer && Number(guess) ){
            
            //Show user list of guesses
            guessTotal+=1;
            $('#guessList').append('<li>' + guess + '</li>');
            $('#count').text(guessTotal);
            
            //user feedback
            if(range>=1 && range<=5){
                $('#feedback').text("Hotter than 10,000 suns");
                return true;
            }else if(range>=6 && range<=10){
                $('#feedback').text("Blazin' Hot Baby!");
                return true; 
            }else if(range>=11 && range<=15){
                $('#feedback').text("Warm...very, very warm");
                return true; 
            }else if(range>=16 && range<=20){
                $('#feedback').text("Definitely headed in the right direction");
                return true; 
            }else if(range>=21 && range<=30){
                $('#feedback').text("Meh...");
                return true; 
            }else if(range>=31 && range<=40){
                $('#feedback').text("Cold.");
                return true; 
            }else{
                $('#feedback').text("Just wondering if you're actually trying");
                return true; 
            }
          }
        
        //While loop when user wins
        winGame=true;
        while(guess=answer && guess!=0 && guess%1==0){
            guessTotal++;
            $('#guessList').append('<li>' + answer + '</li>');
            $('#count').text(guessTotal);
            $('#feedback').text("Spot on!  You win!");
            alert("Congrats!  Click 'New Game' to play again");
            $('#guessButton, #userGuess').prop('disabled', true);
            return true;
        }
    };
    
    
    //Clear input fields
    function clearInput(){
        $('#userGuess').val('');
        $('#userGuess').attr('placeholder', 'Try Again!');
    };
    
    
    //Initiate functions upon user click
    $('#guessButton').click(function(e){
        e.preventDefault();
        getGuess();
        getRange();
        playGame();
        console.log(guessTotal);
        clearInput();
    });
    
    
    //Reset game
    function reset() {
        $('#feedback').text('Make your Guess!');
        $('#userGuess').attr('placeholder', 'Enter Your Guess');
        $('#count').text('0');
        $('#guessList').empty();
        newGame();
        } 
   
    //Click on 'New Game' for game reset
    $('.new').on('click',function(){
        reset();
    });
    
});
       




