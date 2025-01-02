/* eslint-disable no-unused-vars */

import TodoCard from "./TodoCard";

/* eslint-disable react/prop-types */

const TodoList = ({ todos, selectedTab, handleDeleteTodo }) => {


  const filteredTodoList = selectedTab === 'All' ?
    todos :
    selectedTab === 'Completed' ?
      todos.filter(val => val.complete) :
      todos.filter(val => !val.complete);


  return (
    <>
      {filteredTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todo={todo} handleDeleteTodo={handleDeleteTodo} todoIndex={todoIndex}/>
        )
      })}
    </>
  );
};

export default TodoList;