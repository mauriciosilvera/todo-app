import React from 'react'
import { type ListOfTodos, type Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onDelete: (id: number) => void
  onToggleComplete: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

const Todos: React.FC<Props> = ({ todos, onDelete, onToggleComplete }) => {
  return (
    <ul className='todo-list'>
        {todos.map(todo =>
            <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} onDelete={onDelete} onToggleComplete={onToggleComplete} />
            </li>)}
    </ul>
  )
}

export default Todos
