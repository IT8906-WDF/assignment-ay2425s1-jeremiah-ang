import { useState } from 'react';

export default function AddTodo(props) {
    const [newTodo, setNewTodo] = useState('');
    return (
        <div>
            <input
                type="text"
                value={newTodo}
                onChange={function (event) {
                    setNewTodo(event.target.value);
                }}
            />
            <button
                onClick={function () {
                    props.onAdd(newTodo);
                }}
            >
                Add!
            </button>
        </div>
    );
}
