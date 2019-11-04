//                                                                       Global Variables
let distanceTraveled = 0
let direction = 'NE'   // NW , SW , SE
let shipOrientation = 'E'
let xSpeed = 0
let ySpeed = 0 

//                                                                       Main Menu





//                                                                      User Input for Move




//                                                                      Moving / Key Function


let userInputSpeed = 2 //Placeholder
let userInputAngle = 45 //Placeholder

function reactToInput (){
}
let distanceTravY = 0  // Placeholder Reassign to input 
let distanceTravX = 0  // and if statements
if (userInputAngle > 360) {
    return
}
else if (userInputAngle > 270){  // ◣
    userInputAngle = userInputAngle - 270
    distanceTravX = Math.sin(userInputAngle) * userInputSpeed
    distanceTravY = Math.sign(Math.cos(userInputAngle) * userInputSpeed)
}
else if (userInputAngle > 180){  // ◤
    userInputAngle = userInputAngle - 180
    distanceTravX = Math.sign(Math.sin(userInputAngle) * userInputSpeed)
    distanceTravY = Math.sign(Math.cos(userInputAngle) * userInputSpeed)

}
else if (userInputAngle > 90){  //  ◥
    userInputAngle = userInputAngle - 90
    distanceTravY = Math.sin(userInputAngle) * userInputSpeed
    distanceTravX = Math.cos(userInputAngle) * userInputSpeed
}
else if (userInputAngle >= 0){    //  ◢                                                      
    distanceTravY = Math.sin(userInputAngle) * userInputSpeed
    distanceTravX = Math.cos(userInputAngle) * userInputSpeed
}




//                                                                      Highschore Shtuff