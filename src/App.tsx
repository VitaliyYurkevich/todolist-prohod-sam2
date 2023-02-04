import React, {useState} from 'react';
import './App.css';
import TodoList, {TasksType} from "./TodoList";
import {v1} from "uuid";


export type FilteredType = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
            {id: v1(), title: 'HTML', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'React', isDone: false}
        ]
    )
    let [filter, setFilter] = useState<FilteredType>('all')

    const ChangeFilter = (value: FilteredType) => {
        setFilter(value)
    }
const FilterTasks = (id:string) => {
      let filterT = tasks.filter(t=> t.id !== id)
setTasks(filterT)
}

let FilteredTasks = tasks
    if(filter === 'active') {
        FilteredTasks = tasks.filter(t => t.isDone === false)
    }
    if(filter === 'completed') {
        FilteredTasks = tasks.filter(t => t.isDone === true)
    }


    return (
        <div className="App">
            <TodoList title={'WTF'}
            tasks={FilteredTasks}
                      FilterTasks={FilterTasks}
                      ChangeFilter={ChangeFilter}

            />

        </div>
    );
}

export default App;
