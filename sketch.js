// Define the synthesizer
let synth = new Tone.PolySynth(Tone.Synth).toDestination();

// Map keys to musical notes
const keyMap = {
    'a': 'C4', 'w': 'C#4', 's': 'D4', 'e': 'D#4', 'd': 'E4', 
    'f': 'F4', 't': 'F#4', 'g': 'G4', 'y': 'G#4', 'h': 'A4', 
    'u': 'A#4', 'j': 'B4', 'k': 'C5'
};

function setup() {
  createCanvas(400, 400);
  drawKeys();
}

function drawKeys() {
  let numberOfKeys = 13; // For one octave
  let keyWidth = width / numberOfKeys;
  for (let i = 0; i < numberOfKeys; i++) {
    let x = i * keyWidth;
    fill(255); // White keys
    if ([1, 3, 6, 8, 10].includes(i)) { // Black keys indexes
      fill(0);
    }
    rect(x, height - 100, keyWidth, 100); // Draw each key
  }
}

function mousePressed() {
  let keyWidth = width / 13; // Total number of keys
  let keyPressedIndex = Math.floor(mouseX / keyWidth);
  let note = getNoteFromIndex(keyPressedIndex);
  if (note) {
    synth.triggerAttack(note);
  }
}

function mouseReleased() {
  synth.releaseAll(); // Release all notes when the mouse is released
}

function getNoteFromIndex(index) {
  // Map index to musical note
  const notes = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 'C5'];
  return notes[index];
}

// Visual feedback and sound trigger on key press
function keyPressed() {
    let note = keyMap[key];
    if (note) {
        synth.triggerAttack(note); // Call a function to draw something when a note is played
    }
}

function keyReleased() {
    let note = keyMap[key];
    if (note) {
        synth.triggerRelease(note);
    }
}

