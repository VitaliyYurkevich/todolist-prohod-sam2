import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./App";


export type TodoListType = {
    title: string
    tasks: TasksType[]
    removeTask: (id: string) => void
    ChangeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}


function TodoList(props: TodoListType) {

    let [newTasksTitle, setNewTasksTitle] = useState('')

    const onNewTitleChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
            setNewTasksTitle(e.currentTarget.value)
        }

const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.addTask(newTasksTitle)
            setNewTasksTitle('')
        }
    }



    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <div>
                    <input value={newTasksTitle} onChange={onNewTitleChangeHandler}
                           onKeyPress={onKeyPressHandler}
                    />
                    <button onClick={() => {
                        props.addTask(newTasksTitle)
                        setNewTasksTitle('')
                    }}>+
                    </button>
                </div>
                <ul>
                    {props.tasks.map((t) => {
                        return (
                            <li key={t.id}><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
                                <button onClick={() => {
                                    props.removeTask(t.id)
                                }}>x
                                </button>
                            </li>
                        )
                    })}

                </ul>
                <div>
                    <button onClick={() => {
                        props.ChangeFilter('all')
                    }}>All
                    </button>
                    <button onClick={() => {
                        props.ChangeFilter('active')
                    }}>Active
                    </button>
                    <button onClick={() => {
                        props.ChangeFilter('completed')
                    }}>Completed
                    </button>
                </div>
            </div>
        </div>
    )
}


export default TodoList