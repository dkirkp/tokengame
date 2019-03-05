//Token Class File

class Token {
  constructor (){
    this.owner: owner,
    this.id: `token`-${index}-${owner.id},
    this.dropped: false
  }
  
  // Create new html container for @this token
  
  drawHTMLToken() {
    const token = document.createElement('div');
    document.getElementById('game-board-underlay').appendChild(token);
    token.setAttribute('id', this.id);
    token.setAttribute('class', 'token');
    token.style.backgroundColor = this.owner.color;
  };
  
  // Get @method to return the HTML token element associated with the Token object
  
  get tokenContainer(){
	return tokenContainer;
}
}
