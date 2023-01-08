

const TodoItem = ({number, text, owner, completed, important, _id, handleDelete}) => {

    return ( 
        <div className="row flex todos-item">
            <div className="col todos-num">{number}</div>
            <div className="col todos-text">{text}</div>
            <div className="todos-buttons col">
                <i className="material-icons blue-text">check</i>
                <i className="material-icons orange-text">warning</i>
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