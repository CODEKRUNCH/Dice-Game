document.addEventListener('DOMContentLoaded',()=>{
    let turn='left';
    let leftdicevalue=0;
    let rightdicevalue=0;
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const playerturn = document.getElementById('playerturn');

    updateTurnIndicator();

    document.querySelector('.img1').addEventListener('click',function(){
        if(turn=='left'){
        handlediceroll('.img1');
        turn = 'right';
        updateTurnIndicator();
    }})
    document.querySelector('.img2').addEventListener('click',function(){
        if(turn=='right')
           { 
        handlediceroll('.img2')
        turn='left';
        updateTurnIndicator();
        setTimeout(() => {
        if(leftdicevalue>rightdicevalue) alert('Player 1 Wins')
        else if(leftdicevalue<rightdicevalue) alert('Player 2 Wins');
        else alert('Its a draw')  
        }, 500);
        }
    });

        
        
    function handlediceroll(imageClass)
 {       const randomnumber=diceroll();
    if(turn=='left') leftdicevalue=randomnumber;
    else rightdicevalue=randomnumber;
        const imageelement=document.querySelector(imageClass);
            imageelement.src=`images/dice${randomnumber}.png`
 }
    function updateTurnIndicator()
    {
        if(turn==='left')
        {
            player1.style.fontWeight='bold';
            player1.style.color='yellow';
            playerturn.innerText='Player 1 Turn';
            player2.style.color = 'aquamarine'; // Reset Player 2
            player2.style.fontWeight = 'normal';
        }
        else
        {
            player2.style.fontWeight='bold';
            player2.style.color='yellow';
            playerturn.innerText='Player 2 Turn'
            player1.style.color = 'aquamarine'; // Reset Player 2
            player1.style.fontWeight = 'normal';
        }
    }            
});
function diceroll()
{
    return Math.floor(Math.random()*6)+1;
}
