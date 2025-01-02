/* eslint-disable react/prop-types */
const TodoCard = ({todoIndex, todos}) => {

    const todo = todos[todoIndex] ;
  
    
    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-button">
                <button disabled={todo.complete}>
                    <h6>Done</h6>
                </button>
                <button>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    );
};

export default TodoCard;