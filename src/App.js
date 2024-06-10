import $ from 'jquery';
import { useEffect, useState } from 'react';
import Todo from './Todo.js';
import AddTodo from './AddTodo.js';

const data = [
    { title: 'Mark assignment', status: 'Not done', imageUrl: '/images/cat1.jpg' },
    { title: 'Upload topic 6 video', status: 'Doing' },
    { title: 'Prepare EST paper', status: 'Not done', imageUrl: './images/cat2.jpg' },
    { title: 'Upload topic 1 video', status: 'Done' },
];

export default function App() {
    const [todos, setTodos] = useState([]);

    useEffect(function () {
        // const url = 'https://run.mocky.io/v3/3da524c7-4e36-4f64-af9a-306a7f9363e0?mocky-delay=1000ms';
        const url = 'http://localhost:5000/data';
        $.ajax({
            url: url,
            success: function (data) {
                setTodos(data);
            },
        });
    }, []);

    const components = [];
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        components.push(
            <Todo
                onDelete={function () {
                    alert('Delete ' + todos[i].title);
                    todos.splice(i, 1);
                    setTodos([...todos]);
                }}
                title={todo.title}
                status={todo.status}
                imageUrl={todo.imageUrl}
            />,
        );
    }
    return (
        <div>
            <AddTodo
                onAdd={function (newTodo) {
                    setTodos([{ title: newTodo, status: 'Not done' }, ...todos]);
                }}
            />
            <div>{components}</div>
        </div>
    );
}
