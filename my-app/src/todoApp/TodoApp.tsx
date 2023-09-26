import React, { useState } from "react";
import ListItem from "./ListItem";

function TodoApp() {
  // 4) initialize the value of to do to empty by passing an empty string to useState
  // 1) create a state to save todo items that will hold a single todo item
  const [todo, setTodo] = useState("");

  // 8) create a state to hold todo items when the add button is clicked and pass it as an empty array
  const [todoList, setTodoList] = useState([]);

  // 6) create handleChange function which is an arrow function because we have to use an event
  const handleChange = (event: any) => {
    // 7) once we have the particular event we are going to get the value that is entered in the input field  making use of this event
    // once we have that event value we set the value of todo to that event
    setTodo(event.target.value);
    // console.log(todo);
  };

  const handleSubmit = (event: any) => {
    // 10) prevent default refreshing of the page when the add button is clicked
    event.preventDefault();
    //11) create a temporary array to save multiple items into the todoList, we cant set todoList directly because
    let tempList: any = todoList;
    // 12) along with the previous content of the todoList we need to add the newly added item ,
    //the newly added item would be inside todo state
    tempList.push(todo);
    //13) set todolist array value to templist value
    setTodoList(tempList);
    console.log(todoList);
    // 14) to clear input field after a task has been added setTodo to blank
    setTodo("");
  };
  return (
    <div>
      {/* 2) create a form to add our todo items to the array  */}
      {/* 9) save todo to todolist when form is submited , when form is be submitted execute handleSubmit function  */}
      <form onSubmit={handleSubmit}>
        {/* 5) when we type something into input field we want to change the value of to do hence the onChange function 
               which uses the handleChange function  */}
        {/* 3) bind the value of the input to todo state */}
        <input value={todo} onChange={handleChange} type="text"></input>
        <button type="submit">Add</button>
      </form>
      {/* 15) display array items in the html loop through todolist array using map, to map every single item */}
      {todoList.map((item) => (
        // <h3>{item}</h3>
        // 16) import list item comp, pass item as prop to listItem and pass key as the item itself 
        <ListItem key={item} name = {item}></ListItem>
      ))}
    </div>
  );
}

export default TodoApp;
