import Header from '../components/Header'
import Footer from '../components/Footer'
import Note from '../components/Note'
import CreateArea from '../components/CreateArea'
import { useState } from 'react'

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    if (newNote.title === "") newNote.title = "Untitled";
    if (newNote.content === "") return;
    setNotes([...notes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevState) => {
      return prevState.filter((item, index) => {
        return index !== id;
      })
    })
  }

  function onEdit(editedNote) {
    setNotes(notes.map((note) => (note.id === editedNote.id ? editedNote : note)))
  }

  return (
    <>
      <Header />
      <CreateArea
        addNote={addNote}
      />
      {notes.map((note, index) => <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        deleteNote={deleteNote}
        onEdit={onEdit}
      />
      )}
      <Footer />
    </>
  )
}

export default App



