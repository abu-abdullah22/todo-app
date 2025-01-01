/* eslint-disable no-unused-vars */

import TodoCard from "./TodoCard";

/* eslint-disable react/prop-types */

const TodoList = ({todos}) => {

    const tab = 'All' ;
    return (
        <>
          {todos.map((todo, todoIndex)=>{
            return (
                <TodoCard key={todoIndex} todoIndex={todoIndex} todos={todos}/>
            )
          })}  
        </>
    );
};

export default TodoList;