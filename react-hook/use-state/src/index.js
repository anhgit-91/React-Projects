import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Counter from './basic/Counter';
// import ToggleVisibility from './basic/Toggle';
// import InputTracker from './basic/InputTracker';
// import FullName from './basic/MultipleVariables';
// import LoginForm from './basic/FormValidation';
// import DelayedCounter from './basic/DelayedCounter';
// import ColorPicker from './basic/ColorPicker';
// import ClassToggler from './basic/DynamicToggles';
// ******* Advanced *******
//import TodoList from './advanced/TodoList';
import Form from './advanced/Form';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Counter/>
    <ToggleVisibility/>
    <InputTracker/>
    <FullName/>
    <LoginForm/>
    <DelayedCounter/>
    <ColorPicker/>
    <ClassToggler/> */}

    {/*<TodoList />*/}
    <Form/>
  </React.StrictMode>
);

