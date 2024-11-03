import { useState } from "react";
import Note from "./components/Note";
import PropTypes from "prop-types";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNoteContent, setNewNoteContent] = useState("");

  // Manejar el cambio en el input
  const handleNoteChange = (event) => {
    setNewNoteContent(event.target.value);
  };

  // Agregar una nueva nota
  const addNote = (event) => {
    event.preventDefault();
    const newNote = {
      id: notes.length + 1, // Generar un id simple
      content: newNoteContent,
      important: false,
    };

    setNotes([...notes, newNote]);
    setNewNoteContent(""); // Limpiar el input después de agregar la nota
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <input
          value={newNoteContent}
          onChange={handleNoteChange}
          placeholder="Write a new note"
        />
        <button type="submit">save</button>
      </form>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>


    </div>
  );
};

// Definición de PropTypes para validar las props
App.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      content: PropTypes.string,
      important: PropTypes.bool,
    })
  ),
};

export default App;
