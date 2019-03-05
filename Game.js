//Game Class @constructor

class Game {
  constructor () {
    this.board: new Board();
    this.players: this.createPlayers();
    this.ready: false;
  }
  
  /** 
 * Creates two player objects
 * @return  {Array}    An array of two Player objects.
 */
  
  createPlayers() {
    const players = new Player('Player 1', 1, '#e15258', true),
                    new Player('Player 2', 2,'#e59a13')];
    return players;
    }    
  
  //Gets game ready for players
  
  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.game.ready = true;
  };
  
  get activePlayer() {
    return this.players.find(player => player.active);
    return activePlayer;
  }
  
  /**
  * Branches code, depending on what key player presses
  * @param   {Object}    e - Keydown event object
  */
  
  handleKeydown(e) {
    if (this.ready) {
     if (e.key === "ArrowLeft") {
       //move left
     } else if (e.key === "ArrowRight") {
        //move right
      } else (e.key === "ArrowDown") {
        //play token
    }
  }
}
