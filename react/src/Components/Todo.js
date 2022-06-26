import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/exports';
import { useEffect } from 'react';
import getAllTodos from '../services/redux/action/todosAction';
import Counter from './Counter';
export default function Todo() {
  const { todos, isLoading, error } = useSelector(state => state.todosReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos())
  }, [])
  return (
    <>
      <Counter></Counter>

      <div className='row justify-content-center'>
        <div className='col-lg-12'>
          {isLoading && <h2>Loading....</h2>}
          {error && <h2>{error}</h2>}
          <div className='row gy-5 mt-5'>
            {
              todos && todos.map((todo) => {
                return (
                  <div className='col-lg-4' key={todo.id}>
                    <div className='card shadow'>
                      <div className='card-header'>
                        <h4>{todo.id}</h4>
                      </div>
                      <div className='card-body'>
                        {todo.title}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    </>
  )
}
