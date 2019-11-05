/**
 * Global Variables
 *  */                                                                 
let distanceTraveled = 0
let xSpeed = 0
let ySpeed = 0 
let shipOrientation = 0
let currentSpeed = 0
/** 
 * Main Menu
 * 
 * */                                                                       
document.getElementById('play').addEventListener('click' , reactToPlay)  //play
function reactToPlay(){
    document.getElementById('main-menus').style.display = 'none'
    document.getElementById('map').style.display = 'flex'
}
document.getElementById('rules').addEventListener('click' , reactToRules) //direction
function reactToRules(){
    document.getElementById('main-menus').style.display = 'none'
    document.getElementById('directions').style.display = 'flex'
}
document.getElementById('return').addEventListener('click' , reactToReturn) //return from direction
function reactToReturn(){
    document.getElementById('main-menus').style.display = 'inline'
    document.getElementById('directions').style.display = 'none'
}
document.getElementById('map-ship').addEventListener('click' ,reactToMapShip)
function reactToMapShip(){
    document.getElementById('map').style.display = 'none'
    document.getElementById('input-screen').style.display = 'flex'
}
/**
 *  User Input a Move Menu!
 * */      

 document.getElementById('speed-input').addEventListener('click' , reactToSpeedInput)
 function reactToSpeedInput(){
     document.getElementById('pop-up-speed').style.display = 'inline'
    }
    
    document.getElementById('fast-bttn').addEventListener('click' , reactToFastBttn)
    function reactToFastBttn(){
        document.getElementById('speed-input').innerHTML = 'Fast'
        document.getElementById('speed-input').style.backgroundColor = 'green'
        userInputSpeed = 2
        document.getElementById('pop-up-speed').style.display = 'none'
    }
    
    document.getElementById('slow-bttn').addEventListener('click' , reactToSlowBttn)
    function reactToSlowBttn(){
        document.getElementById('speed-input').innerHTML = 'Slow'
        document.getElementById('speed-input').style.backgroundColor = 'green'
        userInputSpeed = 1
        document.getElementById('pop-up-speed').style.display = 'none'
    }
    
    document.getElementById('coast-bttn').addEventListener('click' , reactToCoastBttn)
    function reactToCoastBttn(){
        document.getElementById('pop-up-speed').style. = 'inline'
        document.getElementById('speed-input').style.backgroundColor = 'green'
        userInputSpeed = 0
        document.getElementById('pop-up-speed').style.display = 'none'

 }











/**
 * Movement and orientation Functions
 * @function movementAndRotation() : This function calculates the ships current speed and direction by taking the users inputs of Angle and Speed and contrasting themm against eachother 
 *  */                                                                      


let userInputSpeed = 2 //Placeholder
let userInputAngle = 45 //Placeholder

function turnStart (){

let distanceTravY = 0  // Placeholder Reassign to input 
let distanceTravX = 0  // and if statements
if (userInputAngle > 360) {
    return
}
else if (userInputAngle > 270){  // ◣ x , -y
    userInputAngle = userInputAngle - 270
    distanceTravX = Math.sin(userInputAngle) * userInputSpeed
    distanceTravY = Math.cos(userInputAngle) * userInputSpeed * -1
}
else if (userInputAngle > 180){  // ◤ -x , -y
    userInputAngle = userInputAngle - 180
    distanceTravX = Math.sin(userInputAngle) * userInputSpeed * -1
    distanceTravY = Math.cos(userInputAngle) * userInputSpeed * -1

}
else if (userInputAngle > 90){  // ◥ -x , y
    userInputAngle = userInputAngle - 90
    distanceTravX = Math.sin(userInputAngle) * userInputSpeed * -1
    distanceTravY = Math.cos(userInputAngle) * userInputSpeed
}                                                  
else if (userInputAngle >= 0){  // ◢ x , y
    distanceTravY = Math.sin(userInputAngle) * userInputSpeed
    distanceTravX = Math.cos(userInputAngle) * userInputSpeed
}

movementAndRotation()
}

function movementAndRotation(){
    xSpeed = distanceTravX + xSpeed
//Accumulates speed along the x axis
    ySpeed = distanceTravY + ySpeed
//Accumulates speed along the y axis
    currentSpeed = Math.sqrt((xSpeed * xSpeed) + (ySpeed * ySpeed))
    distanceTraveled = distanceTraveled + currentSpeed
    //Helps determine the distance for scoring
    shipOrientation = Math.atan(Math.abs(xSpeed) / Math.abs(ySpeed)) * (180 / Math.PI)
if (xSpeed >= 0){ //positive x
    ySpeed >= 0 ? 0 : shipOrientation = shipOrientation + 270 ;
    }
else if (xSpeed < 0){ //negative x
    ySpeed >= 0 ? shipOrientation = shipOrientation + 90 : shipOrientation = shipOrientation + 180;
    }

}

/**
 *  Highscore Stuff
 * 
 * 
 *  */                 

