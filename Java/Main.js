/**
 * Global Variables
 *  */                                                                 
let distanceTraveled = 0
let xSpeed = 0
let ySpeed = 0 
let shipOrientation = 0
let currentSpeed = 0
let xPosition = 48.5
let yPosition = 32.5
let playerName = ''
/** 
 * Main Menu
 * 
 * */                                                                       
document.getElementById('play').addEventListener('click' , reactToPlay)  //play
function reactToPlay(){
    document.getElementById('main-menus').style.display = 'none'
    document.getElementById('map').style.display = 'flex'
    document.getElementById('body-el').style.backgroundSize = '300%'
    document.getElementById('body-el').style.backgroundPositionX = `${xPosition}%`
    document.getElementById('body-el').style.backgroundPositionY = `${yPosition}%`
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
        goReady()
    }
    
    document.getElementById('slow-bttn').addEventListener('click' , reactToSlowBttn)
    function reactToSlowBttn(){
        document.getElementById('speed-input').innerHTML = 'Slow'
        document.getElementById('speed-input').style.backgroundColor = 'green'
        userInputSpeed = 1
        document.getElementById('pop-up-speed').style.display = 'none'
        goReady()
    }
    document.getElementById('to-map').addEventListener('click' , reactToReturn)
    function
    
    document.getElementById('coast-bttn').addEventListener('click' , reactToCoastBttn)
    function reactToCoastBttn(){
        document.getElementById('speed-input').innerHTML = 'Coast'
        document.getElementById('speed-input').style.backgroundColor = 'green'
        userInputSpeed = 0
        document.getElementById('pop-up-speed').style.display = 'none'
        goReady()
 }
    document.getElementById('rotation-input').addEventListener('click' , reactToRotationInput)
    function reactToRotationInput(){
        document.getElementById('angle-input').style.display = 'flex'
        document.getElementById('angle-input').addEventListener('keypress' , reactToAngleInput)}
        function reactToAngleInput(e) {
            if (e.key ===  'Enter'){
                document.getElementById('angle-input').style.display = 'none'
                document.getElementById('angle-input').removeEventListener('keypress', reactToAngleInput)
                Number(document.getElementById('angle-input').value) >=360 || Number(document.getElementById('angle-input').value) < 0 ?
                document.getElementById('rotation-input').style.backgroundColor = 'red' : (
                document.getElementById('rotation-input').style.backgroundColor = 'green' ,
                goReady() ,
                document.getElementById('rotation-input').innerHTML = `${document.getElementById('angle-input').value}` ,
                userInputAngle = Number(document.getElementById('angle-input').value) ,
                document.getElementById('pop-up-ship').style.transform = `rotate(${userInputAngle * -1}deg)`
                )
            }
        }

    function goReady() {   //add to all pop up menu events
        document.getElementById('speed-input').style.backgroundColor === 'green' &&
        document.getElementById('rotation-input').style.backgroundColor === 'green' ? (
        document.getElementById('launch').style.backgroundColor = 'Green' ,
        document.getElementById('launch').addEventListener('click' , reactToLaunch)) :
        0;
    }
    function reactToLaunch(){
        document.getElementById('input-screen').style.display = 'none'
        document.getElementById('map').style.display = 'flex'
        document.getElementById('launch').removeEventListener('click' , reactToLaunch)
        document.getElementById('launch').style.backgroundColor = 'red'
        document.getElementById('speed-input').style.backgroundColor = 'white'
        document.getElementById('speed-input').innerHTML = 'Speed'
        document.getElementById('rotation-input').style.backgroundColor = 'white'
        document.getElementById('rotation-input').innerHTML = 'Rotation'
        turnStart()
    }








/**
 * Movement and orientation Functions
 * @function movementAndRotation() : This function calculates the ships current speed and direction by taking the users inputs of Angle and Speed and contrasting themm against eachother 
 *  */                                                                      


let userInputSpeed = 2 //Placeholder
let userInputAngle = Number(document.getElementById('angle-input').value) //Placeholder
let distanceTravX = 0
let distanceTravY = 0

function turnStart (){
if (userInputAngle > 360) {
    return
}
else if (userInputAngle >= 270){  // ◣ x , -y
    userInputAngle = userInputAngle - 270
    userInputAngle = userInputAngle * (Math.PI/180)
    distanceTravX = Math.sin(userInputAngle) * userInputSpeed
    distanceTravY = Math.cos(userInputAngle) * userInputSpeed * -1
    movementAndRotation()
}
else if (userInputAngle >= 180){  // ◤ -x , -y
    console.log('hello')
    userInputAngle = userInputAngle - 180
    userInputAngle = userInputAngle * (Math.PI/180)
    distanceTravY = Math.sin(userInputAngle) * userInputSpeed * -1
    distanceTravX = Math.cos(userInputAngle) * userInputSpeed * -1
    movementAndRotation()
}
else if (userInputAngle >= 90){  // ◥ -x , y
    userInputAngle = userInputAngle - 90
    userInputAngle = userInputAngle * (Math.PI/180)
    distanceTravX = Math.sin(userInputAngle) * userInputSpeed * -1
    distanceTravY = Math.cos(userInputAngle) * userInputSpeed
    movementAndRotation()
}                                                  
else if (userInputAngle >= 0){  // ◢ x , y
    userInputAngle = userInputAngle * (Math.PI/180)
    distanceTravY = Math.sin(userInputAngle) * userInputSpeed
    distanceTravX = Math.cos(userInputAngle) * userInputSpeed
    movementAndRotation()
}

}

function movementAndRotation(){
    xSpeed = distanceTravX + xSpeed
    xPosition = xPosition + (xSpeed * 1.5)
    document.getElementById('body-el').style.backgroundPositionX = `${xPosition}%`
//Accumulates speed along the x axis
    ySpeed = distanceTravY + ySpeed
    yPosition = yPosition + (ySpeed * -1)
    document.getElementById('body-el').style.backgroundPositionY = `${yPosition}%`
//Accumulates speed along the y axis
    currentSpeed = Math.sqrt((xSpeed * xSpeed) + (ySpeed * ySpeed))
    distanceTraveled = distanceTraveled + currentSpeed
    //Helps determine the distance for scoring
    if(xPosition < -26 || xPosition > 123 || yPosition > 82 || yPosition < -22){
        youHaveLost()
    }
    if (xSpeed >= -0.001){ //positive x
        ySpeed >= 0.001 ? ((shipOrientation = Math.abs(Math.atan((ySpeed) / (xSpeed)) * (180/Math.PI))) ,       // ◢ x , y
        document.getElementById('map-ship').style.transform = `rotate(${shipOrientation * -1}deg)` ) : 
        ((shipOrientation = Math.abs(Math.atan((xSpeed) / (ySpeed)) * (180/Math.PI)) ,                          // ◣ x , -y
        (shipOrientation = shipOrientation + 270)) ,
        document.getElementById('map-ship').style.transform = `rotate(${shipOrientation * -1}deg)`) ;
    }
    else if (xSpeed < 0.001){ //negative x
        ySpeed >= -0.001 ? ((shipOrientation = Math.abs(Math.atan((xSpeed) / (ySpeed)) * (180/Math.PI))),        // ◥ -x , y
        (shipOrientation = shipOrientation + 90) ,
        document.getElementById('map-ship').style.transform = `rotate(${shipOrientation * -1}deg)`) :           // ◤ -x , -y
        ((shipOrientation = Math.abs(Math.atan((ySpeed) / (xSpeed)) * (180/Math.PI))), 
        (shipOrientation = shipOrientation + 180) , 
        document.getElementById('map-ship').style.transform = `rotate(${shipOrientation * -1}deg)`);
    }
    // Sets the orientation for which direction the ship will be facing after computations
}

function youHaveLost(){
    document.getElementById('perished-screen').style.display = 'grid'
    document.getElementById('map').style.display = 'none'
    document.getElementById('name').innerHTML = 'Name: Inputted Name'
    document.getElementById('distance-traveled').innerHTML = `Distance Traversed: ${distanceTraveled}`
    document.getElementById('ship-orientation').innerHTML = `Ship Orientation: ${shipOrientation}%`
}

/**
 *  Highscore Stuff
 * 
 * 
 *  */                 

