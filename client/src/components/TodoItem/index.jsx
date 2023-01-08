

const TodoItem = ({
    number, 
    text, 
    completed, 
    important, 
    _id, 
    handleDelete, 
    handleComplete,
    handleImportant
}) => {

    return ( 
        <div className={`row flex todos-item ${completed ? 'completed' : important ? 'important' : ''}`}>
            <div className="col todos-num">{number}</div>
            <div className="col todos-text">{text}</div>
            <div className="todos-buttons col">
                <i 
                    className="material-icons blue-text"
                    onClick={() => handleComplete(_id)}
                >
                    check
                </i>
                <i 
                    className="material-icons orange-text"
                    onClick={() => handleImportant(_id)}
                >
                    warning
                </i>
                <i 
                    className="material-icons red-text"
                    onClick={() => handleDelete(_id)}

                >
                    delete
                </i>
            </div>
        </div>
     );
}
 
export default TodoItem;