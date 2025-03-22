import { useState } from 'react';

function ToDoInput({ newToDo }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        newToDo(text);
        setText(""); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='What to do...'
                value={text}
                onChange={(h) => setText(h.target.value)}
            />
            <button className='AddToList'>Lägg till</button>
        </form>
    );    
}

export default ToDoInput;
