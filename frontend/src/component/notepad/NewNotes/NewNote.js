import React, { useState } from "react";

function NewNote(props) {

    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const changeTitleHandler = event => {
        const value = event.target.value;
        setTitle(value);
    }

    const changeDescHandler = event => {
        const value = event.target.value;
        setDesc(value)
    }

    const addNote = () => {
        const note = {
            title: title,
            body: desc
        };
        props.onAdd(note);

        setTitle('');
        setDesc('');
        setShowForm(false);
    }

    return (
        showForm ? (
            <div className="note">
                <label>Title:</label>
                <input type="text" 
                    value={title} 
                    onChange={changeTitleHandler} />

                <label>Description:</label>
                <input type="text" 
                value={desc}
                onChange={changeDescHandler} />

                <button id="addNoteButton" onClick={() => addNote()}>Add Note</button>
            </div>
        ) : (
            <button id="newNoteButton" onClick={() => setShowForm(true)}>New Note</button>
        )
    );
}

export default NewNote;