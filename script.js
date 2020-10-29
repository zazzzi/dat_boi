window.onload = startBird;
let moveRight = true;



/**
 * Counter for laps
 */
let counter = 0;


/**
 * the left value for the css of the frog
 */
let left = -10;
/**
 * the top value for the css of the frog
 */
let topPos = ''; 
let topRandom = '';

 //get the frog gif
const bird = document.getElementById('birdGif');

 /**
  * startin pos for the frog
  */
bird.style.left = left + 'rem';




/**
 * the functions that makes the bird fly around, starts onload
 */
function startBird() {
    fly();
}
/**
 * interval functions to get the bird moving smoothly 
 */
function fly() {
    setInterval(moveTheBird, 1);
}
/**
 * the movement pattern of the bird
 */

 
function moveTheBird() {
    if (left > 100) {
        moveRight = false;
        bird.classList.remove('flip');
        topPos = topRandom;
        counter++;
        laps();
        
    }
    
    if (left < -18) {
        moveRight = true;
        bird.classList.add('flip');
        topPos = topRandom;
        counter++;
        console.log(counter);
        laps();
    }
    if (moveRight) {
        left += .1;
    } else {
        left -= .1;
    }
    topRandom = Math.floor(Math.random() * 80);
    bird.style.left = left + '%';
    bird.style.top = topPos + '%';
}

function laps(){
    document.getElementById("counterP").innerHTML = counter;
    
}

