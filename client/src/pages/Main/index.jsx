import { useContext, useState } from "react";
import {AuthContext} from '../../context/AuthContext';
import axios from "axios";
import { useEffect } from "react";
import TodoForm from "../../components/TodoForm";
import TodoItem from "../../components/TodoItem";
import { useCallback } from "react";


const Main = () => {
    const {userId, token} = useContext(AuthContext)
    const [todos, setTodos] = useState([]);

    const getTodos = useCallback( async () => {
        try {
            const response = await axios.get('/api/todo/', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            setTodos(response.data.reverse());
        } catch (e) {
            console.log(e.message);
        }
    }, [token])

    useEffect(() => {
        getTodos()
    }, [getTodos])

    const handleSubmit = async (text) => {

        if (!text) {
            return;
        }

        try {
            await axios.post('/api/todo/add', {text, userId}, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            })
            getTodos()
        } catch (e) {
            console.log(e);
        }
    }

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`/api/todo/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            getTodos()
        } catch (e) {
            console.log(e.message);
        }
    }

    return ( 
        <div className="container">
            <div className="main-page">
                <h4>Add TOdo</h4>
                <TodoForm onSubmit={handleSubmit} />

                <h3>Activ Todos`</h3>
                <div className="todos">
                    {todos.length ? (
                        todos.map((todo, idx) => (
                            <TodoItem 
                                key={todo._id} 
                                number={idx+1} 
                                {...todo}
                                handleDelete={deleteTodo}
                            />
                        ))
                    ) : (
                        <h1>You dont have Todos yet.</h1>
                    )}
                </div>
            </div>
        </div>
     );
}
 
export default Main;