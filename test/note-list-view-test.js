function testNoteListView() {
  var noteList = new BookNote();
  var noteListView = new NoteListView(noteList)

  noteList.add('food: pizza');
  noteList.add('drink: water');

  var result = noteListView.getHTML();
  var expect = '<ul><li><div>food: pizza</div></li><li><div>drink: water</div></li></ul>'
  assert.isTrue(result === expect)
};
testNoteListView()
