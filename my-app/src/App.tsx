import React, { useState } from "react";
import "./App.css";
// import ConditionalRendering from "./components/ConditionalRendering";
// import UseState from "./components/UseState";
// import ListRendering from "./components/ListRendering";
// import ListRenderingUniqueId from "./components/ListRenderingUniqueId";
// import ListRenderingWithoutId from "./components/ListRenderingWithoutId";
import Form from "./components/Form";
import TodoApp from "./todoApp/TodoApp";
import PropsInFunctionalComponents from "./components/PropsInFunctionalComponents";
import UseStateReusableComponents from "./components/UseStateReusableComponents";
import Fragments from "./components/Fragments";
import FragmentsUsedInTable from "./components/FragmentsUsedInTable";
import MemosParent from "./components/MemosParent";
import Portals from "./components/Portals";
import UseEffectHook from "./components/UseEffectHook";
import Refs from "./components/Refs";
import UseContext from "./components/UseContext";
// import DestructuringProps from "./components/DestructuringProps";
// import ConditionalComponentRendering from "./components/ConditionalComponentRendering";
// import MapList from "./components/MapLIst";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import FunctionClick from "./components/FunctionClick";
// import EventBind from "./components/EventBind";
// import Hello from "./components/Hello";

function App() {
  //4 create states for the instances of the reusable component
  const [firstInput, setFirstInput] = useState("1");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");
  const [forthInput, setForthInput] = useState("");
  return (
    <div className="App">
      <UseContext></UseContext>
      {/* <Refs></Refs> */}
      {/* <UseEffectHook></UseEffectHook> */}
      {/* <Portals></Portals>
      <MemosParent></MemosParent> */}
      {/* <FragmentsUsedInTable></FragmentsUsedInTable> */}
      {/* <Fragments></Fragments> */}
      {/* 6) pass serInputValue and pass the fuction that updates the state in it */}
      {/* 5) pass the prop to the component */}
      {/* 3) reusable component  */}
      {/* <UseStateReusableComponents setinputvalue={setFirstInput} inputType="text"></UseStateReusableComponents>
      <UseStateReusableComponents setinputvalue={setSecondInput} inputType="number"></UseStateReusableComponents>
      <UseStateReusableComponents setinputvalue={setSecondInput} inputType="password"></UseStateReusableComponents>
      <UseStateReusableComponents setinputvalue={setSecondInput} inputType="range"></UseStateReusableComponents> */}
      {/* <div> */}
      {/* 6)  display the inputs in the jsx */}
      {/* <p>first input: {firstInput}</p>
        <p>second input: {secondInput}</p>
        <p>third input: {thirdInput}</p>
        <p>fourth input: {forthInput}</p>
      </div>  */}
      {/* <TodoApp></TodoApp> */}
      {/* <Form></Form> */}
      {/* <ListRenderingUniqueId></ListRenderingUniqueId> */}
      {/* <MapList></MapList> */}
      {/* <ConditionalComponentRendering></ConditionalComponentRendering> */}
      {/* <DestructuringProps name="Rethabile" lastName="Matela" /> */}
      {/* <UseState></UseState> */}
      {/* <ConditionalRendering></ConditionalRendering> */}
      {/* <EventBind></EventBind> */}
      {/* <FunctionClick></FunctionClick>
      <Message></Message> */}
      {/* <PropsInFunctionalComponents name="one">
        <p> this is children props </p>
      </PropsInFunctionalComponents>
      <PropsInFunctionalComponents name="two">
        <p> this is children props 2 </p>
      </PropsInFunctionalComponents>
      <PropsInFunctionalComponents name="three">
        <p> this is children props 3 </p>
      </PropsInFunctionalComponents> */}
      {/* <Hello></Hello> */}
      {/* <Welcome></Welcome>  */}
    </div>
  );
}

export default App;
