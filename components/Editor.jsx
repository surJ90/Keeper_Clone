import React, { useState } from 'react';
import { Modal, Button, Tooltip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Editor = ({ open, handleClose, note, onEdit }) => {
    const [editedNote, setEditedNote] = useState(note);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedNote({ ...editedNote, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onEdit(editedNote);
        handleClose();
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <form onSubmit={handleSubmit} className='edit-note'>
                <input type="text" name='title' value={editedNote.title} onChange={handleChange} />
                <textarea
                    name="content"
                    id="content"
                    onChange={handleChange}
                    rows={6}
                    value={editedNote.content}
                >
                    {editedNote.content}
                </textarea>
                <Tooltip title="Save">
                    <Button type="submit">
                        <CheckCircleIcon sx={{ fontSize: "36px" }} />
                    </Button>
                </Tooltip>

            </form>
        </Modal>
    );
};

export default Editor;
