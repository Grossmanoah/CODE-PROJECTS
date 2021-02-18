// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys belowAt the beginning of the code, we have variable name assignments for the keys array and the notes array. There is also a function looping through the elements of the keys array and pushing them to the notes array.After the second comment, create a function named keyPlay that changes the background color of the keys when they are pressed down.Be sure to use the .target property in the function because the target is being modified in this case.
const keyPlay = funtion(event) {
  event.target.style.backgroundColor = '#6DF0c2';
})
//Next, create a function named keyReturn that returns the background color of the keys to their default with an empty string '' when the mouse is released on the element. Be sure to use the .target property.
const keyReturn = funtion(event) {
  event.target.style.backgroundColor = '';
}
// Write a named function with event handler properties. Now that you have created two functions that change the color of the key elements, you must assign them as the values of event handler properties. Create a named function and leave the code block blank for now. This function will be used later on to assign events to the keys, so it should take one parameter — you can call it note.
let eventAssignment = funtion(note) {
  //Inside the function, create an event handler that runs the keyPlay as an event handler when a mousedown event fires on any note.
  note.onmousedown = funtion() {
    keyPlay(event);
  }
  //Inside the function, create a second event handler property that runs the keyReturn when a mouseup event fires on any note.
  note.onmouseup = funtion(){
    keyReturn(event);
  }
}

// Write a loop that runs the array elements through the function
notes.forEach(eventAssignment);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onClick = funtion() {
  nextTwo.hidden = false;
  nextOne.hidden = true;

  document.getElementById('letter-note-five').innerHTML = 'D'
  document.getElementById('letter-note-six').innerHTML = 'C'
}

// Write anonymous event handler property and function for the second progress button
nextTwo.onClick = funtion() {
  nextThree.hidden = false;
  nextTwo.hidden = true;

  document.getElementById('letter-note-five').innerHTML = 'Dear';
  document.getElementById('letter-note-six').innerHTML = 'FRI-';

    document.getElementById('letter-note-three').innerHTML = 'G';
    document.getElementById('letter-note-four').innerHTML = 'E';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('letter-note-six').innerHTML = 'B';

  lastLyric.style.display = 'inline-block';
}

// Write anonymous event handler property and function for the third progress button
nextThree.onClick = funtion() {
  startOver.hidden = false;
  nextThree.hideen = true;

  document.getElementById('word-one').innerHTML = 'HAP-'
  document.getElementById('word-two').innerHTML = 'PY'
  document.getElementById('word-three').innerHTML = 'BIRTH'
  document.getElementById('word-four').innerHTML = 'DAY'
  document.getElementById('word-five').innerHTML = 'TO'
  document.getElementById('word-six').innerHTML = 'YOU'

    document.getElementById('letter-note-one').innerHTML = 'F'
  document.getElementById('letter-note-two').innerHTML = 'F'
  document.getElementById('letter-note-three').innerHTML = 'E'
  document.getElementById('letter-note-four').innerHTML = 'C'
  document.getElementById('letter-note-five').innerHTML = 'D'
  document.getElementById('letter-note-six').innerHTML = 'C'
  
  lastLyric.style.display - 'none';
};
// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}