const fs = require("fs");
const { Midi } = require("@tonejs/midi");

// Function to parse a MIDI file and return a Midi object
function parseMidiFile(filepath) {
  const midiData = fs.readFileSync(filepath);
  const midi = new Midi(midiData);
  //writeJsonFile("inventions.json", midi);
  return midi;
}

function chunkArray(array, size) {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    let arr = array.slice(i, i + size);
    chunkedArr.push(arr);
  }
  return chunkedArr;
}

function parseJsonData(midi) {
  const allNotes = midi.tracks[2].notes.map((note) => note.name);
  const chunkedNotes = chunkArray(allNotes, 4);

  return chunkedNotes;
}

// Function to write data to a JSON file
function writeJsonFile(filePath, data) {
  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.log("Error writing file:", err);
    } else {
      console.log("File written successfully");
    }
  });
}

// Main execution
const args = process.argv.slice(2);
const midiFilePath = args[0];

if (!midiFilePath) {
  console.error("Please provide a path to the MIDI file.");
  process.exit(1);
}

// Parse the MIDI file
const midi = parseMidiFile(midiFilePath);

// Extract note names
const inventions = parseJsonData(midi);
//process the data to
let bar = [];
for (let i = 0; i < inventions.length; i++) {
  for (let j = 0; j < inventions[i].length; j++) {
    if (j === 0) {
      bar.push(`<p><span>${inventions[i][j]}</span>`);
    } else if (j > 0 && j < 3) {
      bar.push(`<span>${inventions[i][j]}</span>`);
    } else {
      bar.push(`<span>${inventions[i][j]}</span></p>`);
    }
  }
}
console.log(bar.join(""));

// write the data to a JSON file
