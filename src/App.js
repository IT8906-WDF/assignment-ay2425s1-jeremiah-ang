import Todo from './Todo.js';

const data = [
    { title: 'Mark assignment', status: 'Not done' },
    { title: 'Upload topic 6 video', status: 'Doing' },
    { title: 'Prepare EST paper', status: 'Not done' },
    { title: 'Upload topic 1 video', status: 'Done' },
];

export default function App() {
    const components = [];
    for (let i = 0; i < data.length; i++) {
        const todo = data[i];
        components.push(<Todo title={todo.title} status={todo.status} />);
    }

    return <div>{components}</div>;
}
