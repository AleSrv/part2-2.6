import { useState } from "react";
import Note from "./components/Note";
import PropTypes from "prop-types";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNoteContent, setNewNoteContent] = useState("");
  const [showAll, setShowAll] = useState(true)

  const handleNoteChange = (event) => {
    setNewNoteContent(event.target.value);
  };

  // Agregar una nueva nota
  const addNote = (event) => {
    event.preventDefault();
    const newNote = {
      id: notes.length + 1,
      content: newNoteContent,
      important: Math.random() < 0.5, // true o false ALEATORIO
    };

    setNotes([...notes, newNote]);
    setNewNoteContent(""); // Limpiar el input después de agregar la nota
  };

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  // const toggleImportance = (id) => {
  //   const newNotes = notes.map((note) =>
  //     note.id === id ? { ...note, important: !note.important } : note
  //   );

  return (
    <div>
      <h2>Notes Important</h2>
      <button
        onClick={() => { setShowAll(!showAll) }}
      >
        Mostrar {showAll ? " solo importantes" : " todas las notas"}
      </button>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNoteContent}
          onChange={handleNoteChange}
          placeholder="Escribe una nota"
        />
        <button type="submit">Guardar</button>
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
