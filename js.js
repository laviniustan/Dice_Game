var score, roundScore, activePlayer, gamePlaying, dice,dice2;

    score=[0,0];
    roundScore=0;
    activePlayer=0;


    init()




document.querySelector('.btn-roll').addEventListener('click',function(){
   
    if(gamePlaying){
        dice=Math.floor(Math.random()*6)+1;
        dice2=Math.floor(Math.random()*6)+1;
    
        var diceDOM1= document.querySelector('#dice-1');
        var diceDOM2= document.querySelector('#dice-2');
        var sumDOM=dice+dice2;
       
        console.log(sumDOM)
        diceDOM1.style.display='block';
        diceDOM2.style.display='block';
        diceDOM1.src='/img/dice-' + dice + '.png'
        diceDOM2.src='/img/dice-' + dice2 + '.png'
    
      
        if(dice!==1 && dice2!==1 ){
            roundScore+=sumDOM;
            document.querySelector('#current-'+activePlayer).textContent=roundScore
        }else{
            nextPlayer();
        }
        
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gamePlaying){
       
        score[activePlayer] +=roundScore;
        document.querySelector('#score-'+activePlayer).textContent=score[activePlayer];



        var input= document.querySelector('.final-score').value;
   
    if(input){
        var winningScore=input;
     
    }else{
        winningScore=100
    }
 
   
    if(score[activePlayer]>=winningScore){
        document.querySelector('#name-' + activePlayer).textContent='Winner!';
         document.querySelector('#dice-1').style.display = 'none';
         document.querySelector('#dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying=false;
    }else{
        nextPlayer();
    }



    }

    
    

});

function nextPlayer(){
    activePlayer ===0 ? activePlayer = 1 :activePlayer = 0 ;
    roundScore=0;
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');


}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){


    score=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying = true;

    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.add('active');
}
    
