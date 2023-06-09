import React, { useState } from "react";
import { connect } from "react-redux"
import { createTodo } from "./actions";
import './NewTodoForm.css';


const NewTodoForm = ({ todos, onCreatePress }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input
                type="text"
                className="new-todo-input"
                placeholder=" Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button 
                onClick={() => {
                    const isDuplicateText = 
                        todos.some(todo => todo.text === inputValue)
                    if (!isDuplicateText){
                        onCreatePress(inputValue);
                        setInputValue('')
                    }
                }}
                className="new-todo-button">
                Create Todo
            </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    onCreatePress: text => dispatch(createTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);