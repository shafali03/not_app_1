function displayList() {

  var list = new BookNote();

  list.add('coke');
  list.add('water')
  assert.isTrue(list.displayNotes()[0] == 'coke')
  assert.isTrue(list.displayNotes()[1] == 'water')
  
}

displayList();

