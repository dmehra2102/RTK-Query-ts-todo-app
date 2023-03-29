import React from 'react'
import { useGetTodoListQuery } from '../redux/slices/todoSlice'

const TodoList = () => {
    const { data: todoList, isLoading, isError, error } = useGetTodoListQuery();

    if (isLoading) {
        return <p>Loading......</p>
    }

    return (
        <>
            <div>
                {(todoList?.length && !isLoading) && todoList.map((todo, index: number) => {
                    return (
                        <div key={todo._id}>
                            <p><span>{index + 1}.</span> {todo.title}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TodoList