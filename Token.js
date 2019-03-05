//Token Class File

class Token {
  constructor (){
    this.owner: owner,
    this.id: `token`-${index}-${owner.id},
    this.dropped: false
  }
  
  // Create new html container for @this token
  
  drawHTMLToken() {
    const tokenContainer = new (`<div></div>`)
    document.getElementById('game-board-underlay').append(tokenContainer).setAttribute('id: this.id').setAttribute('class: token', 'backgroundColor: parent.Node.backgroundColor');
  };
  
  // Get @method to return the HTML token element associated with the Token object
  
  get tokenContainer(){
	return tokenContainer;
}
}
