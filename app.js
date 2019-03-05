//Initialize new Game object

new game();


/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
$('.begin-game').eventListener('click', function() {
  game.startGame();
  this.style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';
});


