'use strict'
//EVENT LISTENERS 
document.getElementById ('mario-btn').addEventListener ('click', MarioClick);
document.getElementById('link-btn').addEventListener('click', LinkClick);
document.getElementById('attack-btn').addEventListener('click', calcAttack);
document.getElementById('battle-btn').addEventListener('click', btRoyale);

//EVENT FUNCTIONS
function MarioClick() { 
    //Change style of the page to a Mario theme when his button is clicked
    document.getElementById ('mario').src = ('images/mario.png');
    document.getElementById ('Hero').innerHTML = "Mushroom Kingdom";
    document.getElementById('Love').innerHTML = "Princess Peach";
    document.getElementById('nemesis').innerHTML = "King Bowser";
    document.getElementById('page-bg').style.backgroundColor = "red";
    document.getElementById('body-bg').style.backgroundColor = "pink";
}

function LinkClick () {
    document.getElementById ('mario').src = ('images/link.png');
    document.getElementById ('Hero').innerHTML = "Hyrule";
    document.getElementById ('Love').innerHTML = "Princess Zelda";
    document.getElementById('nemesis').innerHTML = "Ganon";
    document.getElementById ('page-bg').style.backgroundColor = "green";
    document.getElementById ('body-bg').style.backgroundColor = "lightgreen";
}

//Calculate values of mario and link 
function calcAttack(){
    //MARIO
    //Read Mario's stats and store them as variables
    let mStr = document.getElementById('m-str').value;
    let lDef = document.getElementById('l-def').value;

    //Calcuate Mario's attack power using the formula
    let mAttack = 2*mStr / lDef + 5;
    mAttack = Math.floor(mAttack);   //Rounds down

    //Display Mario's attack power where the dashes are
    document.getElementById ('m-attack').innerHTML = mAttack;


    //LINK
    let mDef = document.getElementById ('m-def').value;
    let lStr = document.getElementById ('l-str').value;

   
    // Calculate Link's attack power using the forumula
    let lAttack = lStr+15/ mDef;
    lAttack = Math.floor (lAttack);
     //DISPLAY LINK'S attack power where the dashes are 
     document.getElementById ('l-attack').innerHTML=lAttack;
}
    // THE BATTLE ROYALE 
    function btRoyale () {
        
        let word1 = document.getElementById('word1').value;
        let word2 = document.getElementById('word2').value;
        let word3 = document.getElementById('word3').value;
        let btpara = 'Mario lifted his ' + word1 + ' Link then grabbed his ' + word2 + ' they then yelled ' + word3;
        document.getElementById ('paragraph').innerHTML =btpara;
    }

