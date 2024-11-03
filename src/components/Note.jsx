// src/components/Note.jsx
import PropTypes from "prop-types";

const Note = ({ note }) => {
    return (
        <li>
            <p>{note.content}</p>
        </li>
    );
};

// Definición de PropTypes para validar las props de Note
Note.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.number,
        content: PropTypes.string,
        important: PropTypes.bool,
    }),
};

export default Note;
