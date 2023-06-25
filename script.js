let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');
let turn = document.getElementById('turn-indicator');

let flag = 1; // to change between O(flag=0) and X(flag=1)
let x_win = '-',o_win='-';
console.log("X moves first(flag===1)");


// an array to store the values of all the "blocks" to perform checks for the winning combos
let board=['','','',
           '','','',
           '','','']; 

//document.getElementById("b1").getElementsByTagName("h1")[0].textContent
// b1.addEventListener('click',eventHandler);
// function eventHandler(e){
//     console.log(e.target);
//     console.log("Event Listener called");
// }
function chngb1(){
    if(b1.getElementsByTagName("h1")[0].textContent === ''){
        if(flag === 1){
            b1.getElementsByTagName("h1")[0].textContent = 'X';
            flag = 0;
            board[0]='X';
        }
        else{
            b1.getElementsByTagName("h1")[0].textContent = 'O';
            flag = 1;
            board[0]='O';
        }
    }
    checkMatch3();
}
function chngb2(){
    //console.log(`flag before change ${flag}`);
    if(b2.getElementsByTagName("h1")[0].textContent === ''){
        if(flag === 1){
            b2.getElementsByTagName("h1")[0].textContent = 'X';
            flag = 0;
            board[1]='X';
        }
        else{
            b2.getElementsByTagName("h1")[0].textContent = 'O';
            flag = 1;
            board[1]='O';
        }
    }
    checkMatch3();
    //console.log(`flag after change ${flag}`);
}
function chngb3(){
    if(b3.getElementsByTagName("h1")[0].textContent === ''){
        if(flag === 1){
            b3.getElementsByTagName("h1")[0].textContent = 'X';
            flag = 0;
            board[2]='X';
        }
        else{
            b3.getElementsByTagName("h1")[0].textContent = 'O';
            flag = 1;
            board[2]='O';
        }
    }
    checkMatch3();
}
function chngb4(){
    if(b4.getElementsByTagName("h1")[0].textContent === ''){
        if(flag === 1){
            b4.getElementsByTagName("h1")[0].textContent = 'X';
            flag = 0;
            board[3]='X';
        }
        else{
            b4.getElementsByTagName("h1")[0].textContent = 'O';
            flag = 1;
            board[3]='O';
        }
    }
    checkMatch3();
}
function chngb5(){
    if(b5.getElementsByTagName("h1")[0].textContent === ''){
        if(flag === 1){
            b5.getElementsByTagName("h1")[0].textContent = 'X';
            flag = 0;
            board[4]='X';
        }
        else{
            b5.getElementsByTagName("h1")[0].textContent = 'O';
            flag = 1;
            board[4]='O';
        }
    }
    checkMatch3();
}
function chngb6(){
    if(b6.getElementsByTagName("h1")[0].textContent === ''){
        if(flag === 1){
            b6.getElementsByTagName("h1")[0].textContent = 'X';
            flag = 0;
            board[5]='X';
        }
        else{
            b6.getElementsByTagName("h1")[0].textContent = 'O';
            flag = 1;
            board[5]='O';
        }
    }
    checkMatch3();
}
function chngb7(){
    if(b7.getElementsByTagName("h1")[0].textContent === ''){
        if(flag === 1){
            b7.getElementsByTagName("h1")[0].textContent = 'X';
            flag = 0;
            board[6]='X';
        }
        else{
            b7.getElementsByTagName("h1")[0].textContent = 'O';
            flag = 1;
            board[6]='O';
        }
    }
    checkMatch3();
}
function chngb8(){
    if(b8.getElementsByTagName("h1")[0].textContent === ''){
        if(flag === 1){
            b8.getElementsByTagName("h1")[0].textContent = 'X';
            flag = 0;
            board[7]='X';
        }
        else{
            b8.getElementsByTagName("h1")[0].textContent = 'O';
            flag = 1;
            board[7]='O';
        }
    }
    checkMatch3();
}
function chngb9(){
    if(b9.getElementsByTagName("h1")[0].textContent === ''){
        if(flag === 1){
            b9.getElementsByTagName("h1")[0].textContent = 'X';
            flag = 0;
            board[8]='X';
        }
        else{
            b9.getElementsByTagName("h1")[0].textContent = 'O';
            flag = 1;
            board[8]='O';
        }
    }
    checkMatch3();
}

function checkMatch3(){
    if(board[0]===board[1] && board[0]===board[2] && board[0] !== ''){
        showNoti(board[0]);
    }
    else if(board[3]===board[4] && board[3]===board[5] && board[3] !== ''){
        showNoti(board[3]);
    }
    else if(board[6]===board[7] && board[6]===board[8] && board[6] !== ''){
        showNoti(board[6]);
    }
    else if(board[0]===board[3] && board[0]===board[6] && board[0] !== ''){
        showNoti(board[0])
    }
    else if(board[1]===board[4] && board[1]===board[7] && board[1] !== ''){
        showNoti(board[1]);
    }
    else if(board[2]===board[5] && board[2]===board[8] && board[2] !== ''){
        showNoti(board[2]);
    }
    else if(board[0]===board[4] && board[0]===board[8] && board[0] !== ''){
        showNoti(board[0]);
    }
    else if(board[2]===board[4] && board[2]===board[6] && board[2] !== ''){
        showNoti(board[2]);
    }
    else if(board[0] !='' && board[1] != '' 
        && board[2] != '' && board[3] != '' 
        && board[4] != '' && board[5] != '' 
        && board[6] != '' && board[7] != '' 
        && board[8] != '')
        {
         showNoti('t');  
    }
    turn_update();
}
//reset the game
function reset(){
    b1.getElementsByTagName("h1")[0].textContent='';
    b2.getElementsByTagName("h1")[0].textContent='';
    b3.getElementsByTagName("h1")[0].textContent='';
    b4.getElementsByTagName("h1")[0].textContent='';
    b5.getElementsByTagName("h1")[0].textContent='';
    b6.getElementsByTagName("h1")[0].textContent='';
    b7.getElementsByTagName("h1")[0].textContent='';
    b8.getElementsByTagName("h1")[0].textContent='';
    b9.getElementsByTagName("h1")[0].textContent='';
    board=['','','',
           '','','',
           '','',''];
    flag = 1;
    document.getElementById('overlay').style.display = "none";
    turn_update();
}
function turn_update(){
    if(flag === 1){
        turn.textContent = 'X Turn';
    }
    else{
        turn.textContent = 'O Turn';
    }
}
//show the game result notification 
function showNoti(ch){
    if(ch === 't'){
        document.getElementById('winner').textContent = 'O - X';
        document.getElementById('win_msg').textContent = "IT'S A TIE";
    }
    else{
        document.getElementById('winner').textContent = ch;
        document.getElementById('win_msg').textContent = "TAKES THE ROUND"
    }
    document.getElementById("overlay").style.display = "block";
  }
