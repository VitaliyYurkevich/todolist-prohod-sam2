import React from 'react';
import {FilteredType} from "./App";


 export type TodoListType = {
title: string
    tasks: TasksType[]
     FilterTasks: (id:number) => void
     ChangeFilter: (value: FilteredType) => void
}

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}



function TodoList(props: TodoListType) {
    return (
        <div>
        <h3>{props.title}</h3>
    <div>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((t)=>{
                return(
                    <li key={8}><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
                        <button onClick={()=>{props.FilterTasks(t.id)}}>x</button>
                    </li>
                )
            })}

        </ul>
        <div>
            <button onClick={()=>{props.ChangeFilter('all')}}>All</button>
            <button onClick={()=>{props.ChangeFilter('active')}}>Active</button>
            <button onClick={()=>{props.ChangeFilter('completed')}}>Completed</button>
        </div>
    </div>
        </div>
)
}


export default TodoList