import React, { useState } from 'react'
import Todos from './components/Todos'
import { type Todo as TodoType } from './types'

const todosMock = [{
  id: 1,
  title: 'Fumar zaza',
  completed: true
},
{
  id: 12,
  title: 'Codear algo',
  completed: false
},
{
  id: 3,
  title: 'Seguir codeando dale nene',
  completed: false
}]

const App: React.FC = () => {
  const [todos, setTodos] = useState(todosMock)

  const handleDelete = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos todos={todos} onToggleComplete={handleCompleted} onDelete={handleDelete}/>
    </div>
  )
}

export default App
