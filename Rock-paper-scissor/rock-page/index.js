let score =  JSON.parse(localStorage.getItem('score'));
if(!score){
    score = {
        win: 0,
        lose: 0,
        tie: 0
    }
}
updateScoreElement();

function computerTurn(){
    return Math.floor(Math.random()*3);
}


function getElement(i){
    if(i == 0){
        return "img1";
    }
    if (i == 1){
        return 'img2';
    }
    return 'img3';

}
function ourScore(comSelect,ourSelect){
    let b = true;
    let tie = false;
    let comScore = comSelect();
    console.log(comScore, ourSelect);
    if(ourSelect == 0 && comScore != 0){         
        if(comScore == 1){
            score.lose += 1;
            b = false;
        }else{
            score.win++;

        }
    }else if(ourSelect == 1 && comScore != 1){
        if(comScore== 2){
            score.lose++;
            b = false;
        }
        else{
            score.win++;

        }
    }else if(ourSelect == 2 && comScore != 2){
        if(comScore == 0){
            score.lose++;
            b = false;  
        }

        else{
            score.win++;

        }
    }else{
        score.tie++;
        tie = true;
    }


    if(tie){
        document.querySelector('.js-result').innerHTML 
            = 'Tie';
    }else{
        if(b){
            document.querySelector('.js-result').innerHTML 
                = 'you win';
        }else{
            document.querySelector('.js-result').innerHTML 
                = 'you lose';
        }
    }
    document.querySelector('.js-moves-chosen').innerHTML 
        = `You <img src = "${getElement(ourSelect)}.png" class="move-icon">
        <img src = "${getElement(comScore)}.png" class="move-icon"> Computer`;
    localStorage.setItem('score',JSON.stringify(score));
    updateScoreElement();
}

function reset(){
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    updateScoreElement();
}

function updateScoreElement(){
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}