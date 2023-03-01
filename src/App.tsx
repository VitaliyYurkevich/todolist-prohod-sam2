import React, {useState} from 'react';
import './App.css';
import TodoList, {TasksType} from "./TodoList";
import {v1} from "uuid";


export type FilterValuesType = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
            {id: v1(), title: 'HTML', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'React', isDone: false}
        ]
    )
    let [filter, setFilter] = useState<FilterValuesType>('all')

    let addTask = (title: string) => {
        let NewTask = {id: v1(), title: title, isDone: false}
        let NewTasks = [NewTask, ...tasks]
        setTasks(NewTasks)
    }

    const changeStatus = (taskId: string, isDone: boolean) => {
        let task = tasks.find(t => t.id === taskId)
        if(task) {
            task.isDone = isDone
        }

        setTasks([...tasks])
    }
    const ChangeFilter = (value: FilterValuesType) => {
        setFilter(value)
    }
    const removeTask = (id: string) => {
        let filterT = tasks.filter(t => t.id !== id)
        setTasks(filterT)
    }
    console.log('sa')
    let FilteredTasks = tasks
    if (filter === 'active') {
        FilteredTasks = tasks.filter(t => t.isDone === false)
    }
    if (filter === 'completed') {
        FilteredTasks = tasks.filter(t => t.isDone === true)
    }

console.log("sasd")
    return (
        <div className="App">
            <TodoList title={'WTF'}
                      tasks={FilteredTasks}
                      removeTask={removeTask}
                      ChangeFilter={ChangeFilter}
                      addTask={addTask}
                      changeStatus={changeStatus}
                      filter={filter}
            />

        </div>
    );
}

export default App;
