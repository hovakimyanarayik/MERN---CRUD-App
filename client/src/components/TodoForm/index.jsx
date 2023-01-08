import { useState } from "react";


const TodoForm = ({onSubmit}) => {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(text);
        setText('');
    }

    const handleChange = e => {
        setText(e.target.value);
    }

    return ( 
        <form 
            className='form form-todo'
            onSubmit={handleSubmit}
        >
            <div className="row">
                <div className="input-field col s12">
                    <input 
                        type="text" 
                        id="text"
                        name="input"
                        className="validate"
                        onChange={handleChange}
                        value={text}
                    />
                    <label htmlFor="text">Add Todo</label>
                </div>
            </div>
            <div className="row">
                <button 
                    className="btn waves-effect waves-light blue"
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
     );
}
 
export default TodoForm;