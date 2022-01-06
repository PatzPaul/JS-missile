var timer = null;
var countdownNumber = 10;



var changeState = function (State){
    document.body.className = 'body-State' +State;
    clearInterval(timer);
    countdownNumber = 10;
    document.getElementById=('Countdown').innerHTML = countdownNumber;

//targets
//COUNTDOWN 
    if (State == 4){
timer = setInterval (function(){
    countdownNumber = countdownNumber-1; 
    document.getElementById=('Countdown').innerHTML = countdownNumber;

 if (countdownNumber <= 0){
    changeState(3)
}
},500);

}
//random execution number
else if (State == 3){ 
    success = setTimeout(function(){
var randomNumber= Math.round(Math.random()*10);
        console.log('randomNumber:',randomNumber);
if (randomNumber <=4 ){
    changeState(5);
}else{
    changeState(6);
}
    },2000);
};


}