const TodoCard = ({todoIndex, todos}) => {

    const todo = todos[todoIndex] ;
  
    
    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-button">
                <button>
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