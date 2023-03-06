import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./App";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


export type TodoListType = {
    title: string
    tasks: TasksType[]
    removeTask: (id: string) => void
    ChangeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeStatus: (taskId: string, isDone: boolean) => void
    filter: FilterValuesType
}

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}


function TodoList(props: TodoListType) {

    let [newTasksTitle, setNewTasksTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTasksTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            props.addTask(newTasksTitle)
            setNewTasksTitle('')
        }
    }

    const addTask = () => {
        if(newTasksTitle.trim() !== ''){
            props.addTask(newTasksTitle.trim())
            setNewTasksTitle('')
        }else {
            setError('Title is required')
        }

    }

    const onAllClickHandler = () => props.ChangeFilter('all')

    const onCompletedClickHandler = () => props.ChangeFilter('completed')

    const onActiveClickHandler = () => props.ChangeFilter('active')


    console.log('sa')

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <div>
                    <input value={newTasksTitle}
                           onChange={onNewTitleChangeHandler}
                           onKeyPress={onKeyPressHandler}
                           className={error ? 'error' : ''}
                    />
                    <button onClick={addTask}>+</button>
                    {error && <div className={'error-message'}>Field is required</div>}


                </div>
                <ul>
                    {props.tasks.map((t) => {
                        const onClickHandler = () => props.removeTask(t.id)
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeStatus(t.id, e.currentTarget.checked)
                        }
                        return (
                            <li key={t.id} className={t.isDone ? 'is-done' : ''}>
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
                    <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={onAllClickHandler}>All</button>
                    <button className={props.filter === 'active' ? 'active-filter' : ''}onClick={onActiveClickHandler}>Active</button>
                    <button className={props.filter === 'completed' ? 'active-filter' : ''}onClick={onCompletedClickHandler}>Completed</button>
                </div>
            </div>
        </div>
    )
}


export default TodoList