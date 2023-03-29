import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


interface TodoListInerface {
    title : string;
    status : boolean;
    priority : string;
    _id : string;
}

// interface TodoData{
//     data : Array<TodoListInerface>
// }

export const todoSlice = createApi({
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:5500'}),
    reducerPath: "todoApp",
    tagTypes : ["TodoList","AddTodo"],
    endpoints : (builder)=>({
        getTodoList : builder.query<Array<TodoListInerface>, void>({
            query : ()=> "/todos",
            providesTags : ["TodoList"]
        }),

        addTodo : builder.mutation({
            query : (data)=> ({
                url : "/todo/add",
                method : "POST",
                body : data,
                providesTags : ["AddTodo"]
            }),
            invalidatesTags : ["TodoList"],
        })
    }),
});

export const {useGetTodoListQuery,useAddTodoMutation} = todoSlice;