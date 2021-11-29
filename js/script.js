var Car = {
    year:2020,
    type:"suv",
    make:"lexus",
    seats:["seat1","seat2","seat3","seat4","seat5","seat6"],
    ignitionON:false,

        turnON : function () {
            this.ignitionON=true;
        },
        fly : function () {
            alert('Engine Failure');
            },
        switchCar: function(isOn){
                console.log(`Turn Car${isOn}`)
                ;
                if (isOn==true){
                    this.ignitionON = true;
                } else { 
                        this.ignitionON = false;

                    }
                }     
    }
console.log("hello there friends how are you Soldat!!");
var Saymyname = function(name){
    alert('my name is :'+name)
}