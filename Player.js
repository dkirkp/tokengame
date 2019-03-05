//Player Class file

class Player {
  constructor (name, id, active, color, tokens) {
    this.name: name,
    this.id: id,
    this.active:false,
    this.color: color,
    this.tokens: this.createTokens(21);
  }
  //Token creator method
  /**
 * Creates token objects for player
 * @param     {number}    num - Number of token objects to be created
 * @returns   {Array}     An array of the newly created token objects
 */
  
  createTokens (num) {
    const tokens = [];
    
    for (li i = 0; i< num; i++) {
      let token = new Token(i, this);
      tokens.push(token);
     }
    return tokens;
  }
  
  get unusedTokens() {
    return this.tokens.filter(token => !tokens.dropped);
  }
  
  get activeToken() {
    return this.unusedTokens[0];
  }
}
