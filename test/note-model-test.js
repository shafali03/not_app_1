function displayText() {
  var notebook = new NoteBook("I love javascript");
  assert.isTrue(notebook.displayText() == "I love javascript");
}

displayText();