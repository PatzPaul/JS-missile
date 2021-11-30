//this function does stuff

/* 
var str,
element = document.getElementById('cal_preview');
if (element != null) {
    str = element.value;
}
else {
    str = null;
} */
var doStuff = function (){
    var currentClassname = document.getElementById("cool").className;
        if (currentClassname == 'cool'){
            document.getElementById("cool").ClassName = 'cool red';
        } else {
            document.getElementById("cool").ClassName ='cool';
        }
//changing class name
    document.getElementById("cool").className = ("cool red");
}
//this var shows some car stuff
var Car = {
    year:2020,
    type:"suv",
    make:"lexus",
    seats:["seat1","seat2","seat3","seat4","seat5","seat6"],
    ignitionON:false,
    enginelight:false,

    //these methods relate to car stuff 

        turnON : function () {
            this.ignitionON=true;
        },
        checkEngine : function (lighton) {
            alert('Engine Failure'+lighton);
            if (lighton==true)
            this.enginelight = true;

            },
        switchCar: function (isOn) {
                console.log(`Turn Car ${isOn}` )
                ;
                if ( isOn == true){
                     this.ignitionON = true;
                } else { 
                     this.ignitionON = false;

                    }
                }     
    }
    //vashe zdorov'ye or as the english man says cheers 
console.log("hello there friends how are you Soldat!!");

//some popups for different properties 
var Saymyname = function(name){
    alert('my name is :'+name)
}
var checkEngine = function(lighton){
    alert(`Engine Status:${lighton}`)
}