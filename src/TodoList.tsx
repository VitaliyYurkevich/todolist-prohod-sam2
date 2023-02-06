import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./App";


export type TodoListType = {
    title: string
    tasks: TasksType[]
    removeTask: (id: string) => void
    ChangeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeStatus: (taskId: string, isDone: boolean) => void
}

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}


function TodoList(props: TodoListType) {

    let [newTasksTitle, setNewTasksTitle] = useState('')

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTasksTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.addTask(newTasksTitle)
            setNewTasksTitle('')
        }
    }

    const addTask = () => {
        if(newTasksTitle.trim() === ''){
            return
        }
        props.addTask(newTasksTitle.trim())
        setNewTasksTitle('')
    }

    const onAllClickHandler = () => props.ChangeFilter('all')

    const onCompletedClickHandler = () => props.ChangeFilter('completed')

    const onActiveClickHandler = () => props.ChangeFilter('active')




    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <div>
                    <input value={newTasksTitle}
                           onChange={onNewTitleChangeHandler}
                           onKeyPress={onKeyPressHandler}
                    />
                    <button onClick={addTask}>+</button>
                </div>
                <ul>
                    {props.tasks.map((t) => {
                        const onClickHandler = () => props.removeTask(t.id)
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeStatus(t.id, e.currentTarget.checked)
                        }
                        return (
                            <li key={t.id}>
                                <input type="checkbox"
                                       onChange={onChangeHandler}
                                       checked={t.isDone}

                                />
                                <span>{t.title}</span>
                                <button onClick={onClickHandler}>x
                                </button>
                            </li>
                        )
                    })}

                </ul>
                <div>
                    <button onClick={onAllClickHandler}>All</button>
                    <button onClick={onActiveClickHandler}>Active</button>
                    <button onClick={onCompletedClickHandler}>Completed</button>
                </div>
            </div>
        </div>
    )
}


export default TodoList