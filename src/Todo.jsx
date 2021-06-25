import React from 'react'

export default function Todo({ data, index, deleteMe }) {
    const deleteTodo = (id, todoId) => {
        const deleteMethod = {
            method: 'DELETE', // Method itself
            headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
            // No need to have body, because we don't send nothing to the server.
        }
        // Make the HTTP Delete call using fetch api
        fetch(`https://60d2c4ae858b410017b2e2e2.mockapi.io/todos/${todoId}`, deleteMethod)
            .then(response => response.json())
            .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
            .catch(err => console.log(err))
        deleteMe(id)
    }
    return (
        <div className="flex w-full justify-between mt-2 border-b border-gray-200 ">
            <div>{index + 1}</div>
            <div>{data.title}</div>
            <div>{data.message}</div>
            <div onClick={() => deleteTodo(index, data.id)} className="cursor-pointer py-2 px-2 bg-red-500 text-white rounded">Delete</div>
        </div>
    )
}
