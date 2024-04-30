export default function Todo(props) {
    let emoji = '';
    if (props.status === 'Not done') {
        emoji = '❌';
    } else if (props.status === 'Doing') {
        emoji = '🚧';
    } else {
        emoji = '✔️';
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p>{emoji}</p>
        </div>
    );
}
