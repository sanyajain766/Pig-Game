var scores, activePlayer, dice,roundScore,gamePlaying=true;
scores=[0,0];
roundScore=0;
activePlayer=0;
document.getElementById("dice-1").style.display = "none";
document.getElementById("dice-2").style.display = "none";
document.getElementById("score-0").textContent='0';
document.getElementById("score-1").textContent='0';
document.getElementById("current-0").textContent='0';
document.getElementById("current-1").textContent='0';
document.querySelector(".btn-roll").addEventListener("click",function(){
    if(gamePlaying){
    var dice1= Math.floor(Math.random()*6)+1;
    var dice2= Math.floor(Math.random()*6)+1;
    document.getElementById("dice-1").style.display="block";
    document.getElementById("dice-2").style.display="block";
    document.getElementById("dice-1").src="/images/dice-" + dice1+ ".png";
    document.getElementById("dice-2").src="/images/dice-" + dice2+ ".png";
 
   
    if(dice1!==1 && dice2!==1)
    {
        roundScore=roundScore+dice1+dice2;
        
        document.querySelector("#current-"+activePlayer).innerHTML=dice1+dice2;
        document.querySelector(".player-score-"+activePlayer).innerHTML=roundScore;
    }
    else
    {
        nextPlayer();
        
    }
}
});
document.querySelector(".btn-hold").addEventListener("click",function(){
    if(gamePlaying){
    scores[activePlayer]+=roundScore;
    document.querySelector("#score-"+ activePlayer).innerHTML=scores[activePlayer];
    var lastDice=document.querySelector(".final-score").value;
    var winningScore;
    if(lastDice)
    {
         winningScore=lastDice;
    }
    else
    {
        winningScore=100;
    }
    if(scores[activePlayer]>=winningScore)
        {
            document.querySelector("#name-"+activePlayer).textContent="WINNER";
            document.getElementById("dice-1").style.display="none";
            document.getElementById("dice-2").style.display="none";
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying=false;
    
        }
        else{
            nextPlayer();
        }
    }
    });
    function nextPlayer()
    {
        activePlayer===0 ? activePlayer=1: activePlayer=0;
        roundScore=0;
        document.getElementById("current-0").textContent="0";
        document.getElementById("current-0").textContent="0";
         
    }
document.querySelector(".btn-new").addEventListener("click",function()
    {
        gamePlaying=true;
        roundScore=0;
        scores=[0,0];
        activePlayer=0;
        document.querySelector('.player-0-panel').classList.remove('WINNER');
        document.querySelector('.player-1-panel').classList.remove('WINNER');
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
        document.getElementById("dice-1").style.display="none";
        document.getElementById("dice-2").style.display="none";
        document.getElementById("score-0").textContent='0';
        document.getElementById("score-1").textContent='0';
        document.getElementById("current-0").textContent='0';
        document.getElementById("current-1").textContent='0';
        
        
            
    });
