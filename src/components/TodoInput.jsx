const TodoInput = () => {
    return (
        <div className="input-container">
            <input type="text" placeholder="Add Task" />
            <button>
            <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    );
};

export default TodoInput;