import React, { useContext } from "react";
import { TodoListWrapper } from "./TodoListElements";
import Todo from "../Todo/index";
import { TodosContext } from "../../contexts/TodosContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TodoList = () => {
  const { todos, todosList, handleOnDragEnd } = useContext(TodosContext);
  let list = null;

  const renderList = () => {
    if (todosList === "all") {
      list = todos.map((todo, i) => {
        return (
          <Draggable key={todo.id} draggableId={todo.id.toString()} index={i}>
            {(provided) => (
              <li
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <Todo todo={todo} />
              </li>
            )}
          </Draggable>
        );
      });
    }

    if (todosList === "active") {
      // list = todos
      //   .filter((todo) => !todo.isCompleted)
      //   .map((todo, i) => {
      //     return (
      //       <Draggable key={todo.id} draggableId={todo.id.toString()} index={i}>
      //         {(provided) => (
      //           <li
      //             {...provided.draggableProps}
      //             {...provided.dragHandleProps}
      //             ref={provided.innerRef}
      //           >
      //             <Todo todo={todo} />
      //           </li>
      //         )}
      //       </Draggable>
      //     );
      //   });
      list = todos
        .filter((todo) => !todo.isCompleted)
        .map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        });
    }

    if (todosList === "completed") {
      // list = todos
      //   .filter((todo) => todo.isCompleted)
      //   .map((todo, i) => {
      //     return (
      //       <Draggable key={todo.id} draggableId={todo.id.toString()} index={i}>
      //         {(provided) => (
      //           <li
      //             {...provided.draggableProps}
      //             {...provided.dragHandleProps}
      //             ref={provided.innerRef}
      //           >
      //             <Todo todo={todo} />
      //           </li>
      //         )}
      //       </Draggable>
      //     );
      //   });
      list = todos
        .filter((todo) => todo.isCompleted)
        .map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        });
    }
    return list;
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <TodoListWrapper
            style={{ listStyle: "none" }}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {renderList()}
            {provided.placeholder}
          </TodoListWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
