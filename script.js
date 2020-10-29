window.onload = startBird;
let moveRight = true;

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
    setInterval(moveTheBird, 2);
}
/**
 * the movement pattern of the bird
 */

 
function moveTheBird() {
    if (left > 100) {
        moveRight = false;
        bird.classList.remove('flip');
        topPos = topRandom;
    }
    
    if (left < -18) {
        moveRight = true;
        bird.classList.add('flip');
        topPos = topRandom;
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

