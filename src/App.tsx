import React, {useState} from 'react';
import './App.css';
import TodoList, {TasksType} from "./TodoList";


export type FilteredType = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
            {id: 1, title: 'HTML', isDone: true},
            {id: 2, title: 'JS', isDone: true},
            {id: 3, title: 'React', isDone: false}
        ]
    )
    let [filter, setFilter] = useState<FilteredType>('all')

    const ChangeFilter = (value: FilteredType) => {
        setFilter(value)
    }
const FilterTasks = (id:number) => {
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
