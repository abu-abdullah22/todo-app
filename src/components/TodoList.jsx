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
      {filteredTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todo={todo} />
        )
      })}
    </>
  );
};

export default TodoList;