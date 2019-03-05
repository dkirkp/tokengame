//Board Class @constructor

class Board {
  constructor() {
    this.rows: 6;
    this.columns: 7;
    this.spaces: this.createSpaces();
  }
  
   /** 
   * Generates 2D array of spaces. 
   * @return  {Array}     An array of space objects
   */

  createSpaces () {
    const spaces = [];
    
    for (li i = 0; i< this.columns; i++) {
      const column = [];
      
      for (li j = 0; i < this.rows; j++) {
       const space = new Spaces(i, j); 
       column.push(space);
      }
     spaces.push(column);
    }
     return spaces;
  }
  //Create new board @method

  drawHTMLBoard() {
    for (let column of this.spaces) {
      for (let space of column) {
        space.drawSVGSpace();
      }
    }
  };
}
