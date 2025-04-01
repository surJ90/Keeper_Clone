import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    return (
        <div className="note">
            <h1>{props.title.length <= 20 ? props.title : props.title.substring(0, 20) + "..."}</h1>
            <p>{props.content.substring(0, 300)} ...</p>
            <button onClick={() => props.deleteNote(props.id)}>
                <DeleteIcon />
            </button>
        </div>
    )
}

export default Note;