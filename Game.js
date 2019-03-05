//Game Class @constructor

class Game {
  constructor () {
    this.board: new Board();
    this.players: this.createPlayers();
    this.ready: false;
    this.columnLocation: 0;
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
       /** 
       * Gets left offset of html element.
       * @return  {number}   Left offset of token object's htmlToken.
       */
       moveLeft() {
         if (this.columnLocation > 0) {
         this.htmlToken.style.left = this.offsetLeft - 76;
         this.columnLocation -= 1;
       }
       
      
       }
     
     } else if (e.key === "ArrowRight") {
        /** 
       * Moves html token one column to right.
       * @param   {number}    columns - number of columns in the game board
       */
        moveRight(columns) {
         if (this.columnLocation < columns -1) {
         this.htmlToken.style.left = this.offsetLeft + 76;
         this.columnLocation += 1;
      } else (e.key === "ArrowDown") {
        //play token
    }
  }
}
