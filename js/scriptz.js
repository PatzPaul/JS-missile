//variables to help with scaling
const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30
//calling the world data class
const worldElem = document.querySelector('[data-world]')

//adding the scaling variable
setPixelToWorldScale()
//adding a window event to scale when resizing 
window.addEventListener('resize',setPixelToWorldScale)

//function to be called when the world is resized using our initial values
function setPixelToWorldScale(){

 //variable set based on width for short screen and wide for height on resizeparam
  let worldToPixelScale
  //IF WINDOW WIDER THAN WORLD RATIO,,OTHERWISE SCALE BASED ON HEIGHT
  if (window.innerWidth/window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT){
   worldToPixelScale = window.innerWidth/WORLD_WIDTH
  }else{
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT
  }
  worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
  worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`
}
