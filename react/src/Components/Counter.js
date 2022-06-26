import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/exports';
import { decrementAction, incrementAction, resetAction } from '../services/redux/action/counterAction';

export default function Counter() {

    const count    = useSelector(state => state.counterReducer.count);
    const dispatch = useDispatch();

    const incrementCounter = () => {
        dispatch(incrementAction())
    }
    const decrementCounter = () => {
        dispatch(decrementAction())
    }
    const resetCounter = () => {
        dispatch(resetAction())
    }
    return (
        <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
                <p>Count:{count}</p>
                <button className='btn btn-primary' onClick={incrementCounter}>Increment</button>
                <button className='btn btn-success ms-2' onClick={decrementCounter}>Decrement</button>
                <button className='btn btn-warning ms-2' onClick={resetCounter}>Reset</button>
            </div>
        </div>
    )
}
