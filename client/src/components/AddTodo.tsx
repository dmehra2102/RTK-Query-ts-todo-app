import React, { useState } from 'react'
import { useAddTodoMutation } from '../redux/slices/todoSlice'

type Props = {}

const AddTodo = (props: Props) => {

    const [todoName, setTodoName] = useState<string | null>(null);

    const [addTodo, data] = useAddTodoMutation();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (todoName) {
            addTodo({ title: todoName });
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Add Todo : <input type="text" required onChange={(e) => { setTodoName(e.target.value) }} /></label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddTodo