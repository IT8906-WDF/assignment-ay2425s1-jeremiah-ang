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
        <div onClick={props.onDelete}>
            <h1>{props.title}</h1>
            <p>{emoji}</p>
            <img src={props.imageUrl} />
            <button>Mark as DONE!</button>
        </div>
    );
}
