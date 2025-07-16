import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [notes, setNotes] = useState([]); // Initialize notes as an empty array
  const [title, setTitle] = useState(""); // Initialize title as an empty string
  const [editableNote, setEditableNote] = useState(null); // State to track the note being edited
  const [editMode, setEditMode] = useState(false); // State to track if we are in edit mode
  const [isCompleted, setIsCompleted] = useState(false); // State to track if a note is completed
  const [loading, setLoading] = useState(true); // State to track loading status
  const [errorMessage, setErrorMessage] = useState(""); // State to track error messages

  /*
    notes: [
      id: Date.now(),
      title: "Note Title",
      isCompleted: false
    ]
  */


  const fetchNotes = () => {
    fetch("http://localhost:3000/notes")
      .then(response => response.json())
      .then(data => {
        setNotes(data); // Set the fetched notes to the notes state
        setTitle(""); // Clear the title input after fetching notes
        setLoading(false); // Set loading to false after fetching notes
        setErrorMessage(""); // Clear any previous error messages
      })
      .catch(error => {
        setErrorMessage(error.message); // Set error message if fetching fails
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchNotes(); // Fetch notes when the component mounts
  }, []);

  const noteCreateHandler = (event) => { // Function to handle note creation
    event.preventDefault(); // Prevent the default form submission behavior
    if (title) {
      const newNote = {
        id: Date.now() + '',
        title: title,
        isCompleted: false
      }

      // setNotes([newNote, ...notes]); // Add the new note to the beginning of the notes array
      // setTitle(""); // Clear the input field after adding the note

      fetch("http://localhost:3000/notes", {
        method: "POST", // Use POST method to create a new note
        headers: {
          "Content-Type": "application/json" // Set content type to JSON
        },
        body: JSON.stringify(newNote) // Convert the new note object to a JSON string
      })
        .then(() => fetchNotes()) // Fetch notes after creating a new one
    } else {
      alert("Please enter a valid note title");
    }
  }

  const noteDeleteHandler = (noteId) => { // Function to handle note deletion
    // setNotes(notes.filter((note) => note.id !== noteId)); // Filter out the note with the given id

    fetch(`http://localhost:3000/notes/${noteId}`, {
      method: "DELETE" // Use DELETE method to remove the note
    })
      .then(() => fetchNotes()) // Fetch notes after deletion
      .catch(error => {
        setErrorMessage(error.message); // Set error message if deletion fails
      })
  }

  const noteEditHandler = (noteId) => { // Function to handle note editing
    const toBeEditedNote = notes.find((note) => note.id === noteId); // Find the note to be edited
    setEditMode(true); // Set edit mode to true
    setEditableNote(toBeEditedNote); // Set the note to be edited
    setTitle(toBeEditedNote.title); // Set the title input to the note's title
  }

  const noteUpdateHandler = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (title && editableNote) { // Check if title is not empty and editableNote is set
      // Update the note with the new title
      // We create a new array of notes where the note being edited is updated with the new title
      // and all other notes remain unchanged.
      // This is done using the map function which iterates over each note.
      // If the note's id matches the editableNote's id, we update its title.
      // Otherwise, we return the note unchanged.
      // const updatedNotes = notes.map((note) => {
      //   if (note.id === editableNote.id) { // Check if the current note is the one being edited
      //     return {
      //       ...note, // Spread the existing note properties
      //       title: title // Update the title of the note being edited
      //     }
      //   }
      //   return note; // Return the note unchanged if it's not the one being edited
      // });
      // setNotes(updatedNotes); // Update the notes state with the modified notes array
      // setTitle(""); // Clear the input field after updating the note
      // setEditMode(false); // Exit edit mode
      // setEditableNote(null); // Clear the editable note state


      const updatedNote = {
        id: editableNote.id, // Keep the same id for the note being updated
        title: title, // Update the title with the new value
        isCompleted: editableNote.isCompleted // Keep the same completion status
      }

      fetch(`http://localhost:3000/notes/${editableNote.id}`, {
        method: "PUT", // Use PUT method to update the existing note
        headers: {
          "Content-Type": "application/json" // Set content type to JSON
        },
        body: JSON.stringify(updatedNote) // Convert the updated note object to a JSON string
      })
        .then(() => {
          fetchNotes(); // Fetch notes after updating
          setTitle(""); // Clear the input field after updating the note
          setEditMode(false); // Exit edit mode
          setEditableNote(null); // Clear the editable note state
        })
        .catch(error => {
          setErrorMessage(error.message); // Set error message if updating fails
        });
    } else {
      alert("Please enter a valid note title");
    }
  }

  const noteCompleteHandler = (noteId) => { // Function to handle toggling the completion status of a note
    // Toggle the completion status of the note with the given id
    // const updatedNotes = notes.map((note) => {
    //   if (note.id === noteId) {
    //     return {
    //       ...note, // Spread the existing note properties
    //       isCompleted: !note.isCompleted // Toggle the isCompleted status
    //     }
    //   }
    //   return note; // Return the note unchanged if it's not the one being toggled
    // });
    // setNotes(updatedNotes); // Update the notes state with the modified notes array

    fetch(`http://localhost:3000/notes/${noteId}`, {
      method: "PATCH", // Use PATCH method to update the completion status
      headers: {
        "Content-Type": "application/json" // Set content type to JSON
      },
      body: JSON.stringify({ 
        // if the note is completed, set isCompleted to false, otherwise set it to true
        isCompleted: !notes.find(note => note.id === noteId).isCompleted
        // This finds the note with the given id and toggles its isCompleted status
       }) // Toggle the isCompleted status
    })
      .then(() => fetchNotes()) // Fetch notes after toggling completion status
      .catch(error => {
        setErrorMessage(error.message); // Set error message if toggling fails
      });
  }

  return (
    <div className="App">
      <h1>Welcome to note taking application</h1> <br />

      <form onSubmit={editMode ? noteUpdateHandler : noteCreateHandler}>
        <input onChange={(event) => setTitle(event.target.value)} type="text" name="noteTitle" className="noteTitleField" value={title} placeholder="Enter your note here" />
        <button type="submit" className='noteSubmitButton'>
          {editMode ? "Update Note" : "Add Note"} {/* Change button text based on edit mode */}
        </button>
      </form>

      <ul>
        {loading && <p>Loading notes...</p>} {/* Show loading message while fetching notes */}
        {notes.map((note) => (
          <li className='notesTItle'>
            <input
              type="checkbox"
              checked={note.isCompleted}
              onChange={() => noteCompleteHandler(note.id)} // Toggle completion status when checkbox is clicked
              style={{ marginRight: '10px' }}
            />
            <span style={{ textDecoration: note.isCompleted ? 'line-through' : 'none' }}>
              {note.title}
            </span>
            <button className='editButton' onClick={() => noteEditHandler(note.id)}>edit</button>
            <button onClick={() => noteDeleteHandler(note.id)}>delete</button>
          </li>
        ))}
        {errorMessage && <p className="error">{errorMessage}</p>} {/* Show error message if any */}
      </ul>
    </div>
  );
}

export default App;
