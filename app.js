//Initialize new Game object

const game = new Game();


/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
$('.begin-game').eventListener('click', function() {
  game.startGame();
  this.style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';
});


