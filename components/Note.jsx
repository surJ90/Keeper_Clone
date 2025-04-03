import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Tooltip } from '@mui/material'
import { useState } from "react";
import Editor from "./Editor";

function Note(props) {
    const [editing, setEditing] = useState(false);

    return (
        <div className="note" onClick={() => setEditing(true)}>
            <h1>{props.title.length <= 20 ? props.title : props.title.substring(0, 20) + "..."}</h1>
            <p>{props.content.substring(0, 300)} ...</p>
            <Tooltip title="Edit">
                <button onClick={() => setEditing(true)}>
                    <EditIcon />
                </button>
            </Tooltip>
            <Tooltip title="Delete">
                <button onClick={() => props.deleteNote(props.id)}>
                    <DeleteIcon />
                </button>
            </Tooltip>
            <Editor
                open={editing}
                handleClose={() => setEditing(false)}
                note={{ title: props.title, content: props.content }}
                onEdit={props.onEdit}
            />
        </div>
    )
}

export default Note;

