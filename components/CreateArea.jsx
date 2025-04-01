import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
    const [isClicked, setIsClicked] = useState(false);
    const [newNote, setNewNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNewNote({ ...newNote, [name]: value })
    }

    return (
        <div>
            <form className="create-note">
                {
                    isClicked && <input
                        name="title"
                        placeholder="Title"
                        onChange={handleChange}
                        required
                        value={newNote.title}
                    />
                }
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows={isClicked ? 3 : 1}
                    onChange={handleChange}
                    required
                    value={newNote.content}
                    onClick={() => setIsClicked(true)}
                />
                <Zoom in={isClicked}>
                    <Fab onClick={(e) => {
                        e.preventDefault();
                        props.addNote(newNote);
                        setNewNote({ title: "", content: "" });
                    }}>
                        <AddIcon />
                    </Fab>
                </Zoom>

            </form>
        </div>
    );
}

export default CreateArea;