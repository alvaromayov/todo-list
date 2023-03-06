import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './components/service/store/slices/tasksSlices';
import { RootState } from './components/service/store/store';

function App() {
const [task, setTask] = useState("")
const tasks = useSelector((state: RootState) => state.tasks.value)
const dispatch = useDispatch()

const handleSubmit = () =>{
    dispatch(addTask(task))
    setTask("")
}
const updateInput = (e:string) => {
  setTask(e);
}
  return (
    <div >
     <input value={task} onChange={(e) => updateInput(e.target.value)}/>
     <button onClick={handleSubmit}>Add</button>

     {tasks.map((task, index) => <h1 key={index}>{task}</h1>)}
    </div>
  );
}

export default App;
