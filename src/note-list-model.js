function BookNote(){
  this.list = [];
}
BookNote.prototype = (function(){
  function add(text){
    this.list.push(text);
  }

  function displayNotes(){
    return this.list;
  }

  return{
    add: add,
    displayNotes: displayNotes
  }
})()


