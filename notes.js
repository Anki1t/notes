const fs = require('fs');
const { json } = require('stream/consumers');
 
 var fetchNotes = () => {
    try {
        return JASON.parse(fs.readFileSync('notes.txt'));
        

     } catch (err) {
         notes=[];
     }

 }

var addingNote = (title, body) =>  {

    var notes = fetchNotes();


    
         

     var note = {
         title,body
     };

     notes.push(note);

     fs.writeFileSync("notes.txt", JSON.stringify(notes));
 }
  module.exports = {
      addingNote
  }