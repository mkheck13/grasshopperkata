// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health.
//  Health can't be less than 0.

// we will use the Math.max() method to get our current health. It works by returning the largest number its given as a input parameter. 
// it will return (health - damage) as its the largest number. until it would drop below 0, then 0 would be the largest number in the input.
function combat(health, damage){
    return Math.max(health - damage, 0);
}


// could also do it with a ternary

function combat(health, damage){
    return health < damage ? 0 : damage - health
}

// an if else statement
// if 0 is greater then (health - damage), anything less then 0. return 0
// else return (health - damage), anything more then zero
function combat(health, damage){
    if(health - damage < 0){
        return 0;
    }else{
        return health - damage;
    }
}