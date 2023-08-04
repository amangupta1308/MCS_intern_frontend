import React from 'react'
import "../styles/task.css"

const TaskCard = (props) => {
  return (<>
    <div className="card">
      <div className={props.data.status == "ACTIVE" ? "title1" : "title2"}>{props.data.title}</div>
      <div className={props.data.status == "ACTIVE" ? "description1" : "description2"}>{props.data.description}</div>
      <div className={props.data.status == "ACTIVE" ? "statusactive" : "statuscomplete"}>{props.data.status}</div>
      <button className={props.data.status == "ACTIVE" ? "del1" : "del2"} onClick={() => { props.onselect(props.data._id);window.location.reload(true) } }>Delete</button>
      <button className={props.data.status == "ACTIVE" ? "del1" : "del2"}>
        <a style={{ textDecoration: "none" }} href={`/api/${props.data._id}`}>Edit</a></button>
    </div>
  </>)
}

export default TaskCard 