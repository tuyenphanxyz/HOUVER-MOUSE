

    ////////////CUSTOM CUSOR POINTER MOUSE////////////////////////////////////
// create variables
let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.logo-brand, .hover-this, .banner-top-content-text');
 const animateit = function(e) {
      const follow = this.querySelector('.follow');
      const {offsetX: x, offsetY: y} = e,
      {offsetWidth: width, offsetHeight: height} = this,
      move = 25
      xMove = x / width * (move * 2) - move;
      yMove = y / height * (move * 2) - move;
      if (follow) {
    follow.style.transform = `translate(${xMove}px, ${yMove}px)`;
  }
  if (e.type === "mouseleave" && follow) follow.style.transform = "";};
   

   

//add event that means when the windows loaded, start works the function cursor
window.addEventListener('mousemove', cursor);

//create the 'cursor' function - do sticky the 'cursor' div to the mouse moves
function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

//create the the loop that checks when the cursor over the navigation links and do some MAGIC :)
navLinks.forEach(link => {
    link.addEventListener('mousemove', () => {
        mouseCursor.classList.add('link-grow');
        
    });
    link.addEventListener("mousemove", animateit);

    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove('hovered-link');
    });
    link.addEventListener("mouseleave", animateit);

});
 navLinks.forEach(b => b.addEventListener('mousemove',animateit));
navLinks.forEach(b => b.addEventListener('mouseleave',animateit));


    ////////////TEXT ANIMATION////////////////////////////////////

let animation = anime({
  targets: '.letter',
  opacity: 1,
  translateY: 50, 
  rotate: {
    value: 360,
    duration: 2000,
    easing: 'easeInExpo'
  }, 
  scale: anime.stagger([0.7, 1], {from: 'center'}), //scale (from 0.7 to 1) is for size, not opacity; no 'from: left' because [small, large]
  delay: anime.stagger(100, {start: 1000}), //control animation speed
  translateX: [-10, 100] //increase "radius" of letter rotation
});     


