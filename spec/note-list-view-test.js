function testNoteListView() {
  var noteList = new BookNote();
  var noteListView = new NoteListView(noteList)

  noteList.add('coke');
  noteList.add('water');
  
  assert.isTrue(noteListView.display() === '<ul><li><div>coke</div></li><li><div>water</div></li></ul>') 
  console.log('NoteListView passed')
};
testNoteListView()
