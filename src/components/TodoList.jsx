/* eslint-disable no-unused-vars */

import TodoCard from "./TodoCard";

/* eslint-disable react/prop-types */

const TodoList = ({ todos }) => {

  const tab = 'All';
  const filteredTodoList = tab === 'All' ?
    todos :
    tab === 'Completed' ?
      todos.filter(val => val.complete) :
      todos.filter(val => !val.complete);


  return (
    <>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} todoIndex={todoIndex} todos={todos} />
        )
      })}
    </>
  );
};

export default TodoList;