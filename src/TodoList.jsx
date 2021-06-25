import React from 'react'
import Todo from './Todo'


export default function TodoList({ todos, refreshTodos, pageNum, changePageNum }) {
    const deleteTodo = (index) => {
        todos.splice(index, 1)
        refreshTodos(todos)
    }

    const MyTodoList = todos.map((data, index) => {
        return <Todo deleteMe={deleteTodo} index={index} key={data.id} data={data} />
    })
    return (
        <div>
            {MyTodoList}
            {/*  pagination */}
            <div className="mt-5 flex items-center justify-center w-full">
                <button className="font-semibold py-3 px-4 text-xs bg-gray-200" onClick={() => changePageNum(pageNum - 1)}>previous</button>
                <span className="px-3">{pageNum}</span>
                <button className="font-semibold py-3 px-4 text-xs bg-gray-200" onClick={() => changePageNum(pageNum + 1)}>Next</button>
            </div>
        </div>
    )
}
