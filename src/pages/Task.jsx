import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../store/slices/TaskSlice';
import TaskCard from '../components/TaskCard';
import "../styles/task.css";

const Task = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.tasks
  })
  useEffect(() => {
    const getData = async () => {
      let result = await fetch("https://mcs-intern-backend.onrender.com/api", {
        method: "get",
        headers: {
          'content-type': 'application/json;charset=utf-8'
        }
      })
      result = await result.json();
      dispatch(addTask(result));
    }
    getData();

  }, [])

  const DeleteTask = async (id) => {
    let result = await fetch(`https://mcs-intern-backend.onrender.com/api/${id}`, {
      method: "DELETE",
      headers: {
        'content-type': 'application/json;charset=utf-8'
      }
    })
  }
  return (<>
    <div className='body'>
      {data.map((ele, ind) => {
        return <TaskCard key={ind} index={ind} data={ele} onselect={DeleteTask} />
      })}
    </div>
  </>)
}

export default Task;