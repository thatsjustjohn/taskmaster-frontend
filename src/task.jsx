import React from 'react';

function Task(props){
  return(
    <li className={`status-${props.data.status}`} key={props.data.id}>
      <h2>{props.data.title}</h2>
      <p>Description: {props.data.description}</p>
      <p id={props.data.id}>Status: {props.data.status} </p>
      {props.data.assignee ? <p>Assigned To: {props.data.assignee}</p> : null}
    </li>
  )
}

export default Task;