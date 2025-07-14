import './App.css';
import {useState} from 'react';

function App() {
  const [notes, setNotes] = useState([]); // Initialize notes as an empty array
  const [title, setTitle] = useState(""); // Initialize title as an empty string
  const [editableNote, setEditableNote] = useState(null); // State to track the note being edited
  const [editMode, setEditMode] = useState(false); // State to track if we are in edit mode
  const [isCompleted, setIsCompleted] = useState(false); // State to track if a note is completed

  /*
    notes: [
      id: Date.now(),
      title: "Note Title",
      isCompleted: false
    ]
  */
  const noteCreateHandler = (event) => { // Function to handle note creation
    event.preventDefault(); // Prevent the default form submission behavior
    if(title){
      const newNote = {
        id: Date.now(),
        title: title,
        isCompleted: false
      }

      setNotes([newNote, ...notes]); // Add the new note to the beginning of the notes array
      setTitle(""); // Clear the input field after adding the note
    }else{
      alert("Please enter a valid note title");
    }
  }

  const noteDeleteHandler = (noteId) => { // Function to handle note deletion
    setNotes(notes.filter((note) => note.id !== noteId)); // Filter out the note with the given id
  }

  const noteEditHandler = (noteId)  => { // Function to handle note editing
    const toBeEditedNote = notes.find((note) => note.id === noteId); // Find the note to be edited
    setEditMode(true); // Set edit mode to true
    setEditableNote(toBeEditedNote); // Set the note to be edited
    setTitle(toBeEditedNote.title); // Set the title input to the note's title
  }

  const noteUpdateHandler = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if(title && editableNote) { // Check if title is not empty and editableNote is set
      // Update the note with the new title
      // We create a new array of notes where the note being edited is updated with the new title
      // and all other notes remain unchanged.
      // This is done using the map function which iterates over each note.
      // If the note's id matches the editableNote's id, we update its title.
      // Otherwise, we return the note unchanged.
      const updatedNotes = notes.map((note) => {
        if(note.id === editableNote.id) { // Check if the current note is the one being edited
          return {
            ...note, // Spread the existing note properties
            title: title // Update the title of the note being edited
          }
        }
        return note; // Return the note unchanged if it's not the one being edited
      });
      setNotes(updatedNotes); // Update the notes state with the modified notes array
      setTitle(""); // Clear the input field after updating the note
      setEditMode(false); // Exit edit mode
      setEditableNote(null); // Clear the editable note state
    } else {
      alert("Please enter a valid note title");
    }
  }

  const noteCompleteHandler = (noteId) => { // Function to handle toggling the completion status of a note
    // Toggle the completion status of the note with the given id
    const updatedNotes = notes.map((note) => {
      if(note.id === noteId) {
        return {
          ...note, // Spread the existing note properties
          isCompleted: !note.isCompleted // Toggle the isCompleted status
        }
      }
      return note; // Return the note unchanged if it's not the one being toggled
    });
    setNotes(updatedNotes); // Update the notes state with the modified notes array
  }

  return (
    <div className="App">
      <h1>Welcome to note taking application</h1> <br />

      <form onSubmit={editMode ? noteUpdateHandler : noteCreateHandler}>
        <input onChange={(event) => setTitle(event.target.value)} type="text" name="noteTitle" className="noteTitleField" value={title} placeholder="Enter your note here"/>
        <button type="submit" className='noteSubmitButton'>
          {editMode ? "Update Note" : "Add Note"} {/* Change button text based on edit mode */}
        </button>
      </form>

      <ul>
        {notes.map((note) => (
          <li className='notesTItle'>
            <input 
              type="checkbox" 
              checked={note.isCompleted} 
              onChange={() => noteCompleteHandler(note.id)} // Toggle completion status when checkbox is clicked
              style={{marginRight: '10px'}}
            />
            <span style={{textDecoration: note.isCompleted ? 'line-through' : 'none'}}>
              {note.title}
            </span>
            <button className='editButton' onClick={() => noteEditHandler(note.id)}>edit</button>
            <button onClick={() => noteDeleteHandler(note.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
