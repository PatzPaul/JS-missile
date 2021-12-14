var timer = null;
var countdownNumber = 10;

var changeState = function (State){
    document.body.className = 'body-State' +State;
    clearInterval =(timer);
    countdownNumber = 10;
    document.getElementById=('Countdown').innerHTML = countdownNumber;


//COUNTDOWN 
    if (State == 4){
timer = setInterval (function(){
    countdownNumber = countdownNumber-1; 
    document.getElementById=('Countdown').innerHTML = countdownNumber;

 if (countdownNumber <=0){
    changeState(5)
}
},500);

}
else if (State == 5){ 
    var success = setTimeout(function(){
var randomNumber= Math.round(Math.random()*10);
        console.log('randomNumber:',randomNumber);
if (randomNumber > 2 ){
    changeState(4);
}else{
    changeState(6);
}
    },2000);
};
}