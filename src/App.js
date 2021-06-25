import TodoList from "./TodoList";
import { useState, useEffect } from 'react'


function App() {

  //Store Todos from server
  const [todos, setTodos] = useState([])

  //Loading Indicator
  const [loading, setloading] = useState(false)

  //Page Number
  const [pageNum, setpageNum] = useState(1)
  const limitpageNum = 10

  //Form Data 
  const [title, settitle] = useState('')
  const [message, setmessage] = useState('')

  const refreshTodos = (todos) => {
    setTodos([...todos])
  }

  const changePageNum = (num) => {
    if (num === 0) {
      return
    }
    setpageNum(num)
  }

  const addTodo = () => {
    const opts = {
      title,
      message
    }
    fetch('https://60d2c4ae858b410017b2e2e2.mockapi.io/todos', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(opts)
    }).then((res) => {
      return res.json()
    }).then(data => {
      console.log("added todo:", data)
      setmessage('')
      settitle('')
      setTodos([data, ...todos])
    })
  }

  useEffect(() => {
    setloading(true)
    fetch(`https://60d2c4ae858b410017b2e2e2.mockapi.io/todos/?page=${pageNum}&limit=${limitpageNum}`).then((res) => {
      return res.json()
    }).then(data => {
      setloading(false)
      setTodos(data)
    })

  }, [pageNum])

  return (
    <div className="container mx-auto bg-gray-100 h-screen p-7">
      {/*  top Box With Input Forms  */}
      <h1 className="text-center text-3xl my-2">Todos web App</h1>
      <section className="pt-5 flex w-full justify-center">
        <input value={title} onChange={(e) => settitle(e.target.value)} className="px-2 focus:outline-none border border-gray-200 py-2" type="text" placeholder="Add To Do" />
        <input value={message} onChange={(e) => setmessage(e.target.value)} className="px-2 focus:outline-none border border-gray-200 py-2 mx-2" type="text" placeholder="Message" />
        <button onClick={() => addTodo()} className="ml-2 bg-blue-500 py-1 px-2 focus:outline-none text-white rounded">Add Todo</button>
      </section>
      {/*  Data Form  */}
      <div className="p-8 mt-3">
        {loading ? 'loading....' : <TodoList pageNum={pageNum} changePageNum={changePageNum} refreshTodos={refreshTodos} todos={todos} />}
      </div>
    </div>
  );
}

export default App;
