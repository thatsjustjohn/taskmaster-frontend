import React, {useState, useEffect, Fragment} from 'react';
import Task from './task.jsx';
import './app.css';

function App() {
  const taskmasterBackend = `http://taskmaster-env.r8tifpw9yy.us-west-2.elasticbeanstalk.com/api`;

  const [tasks, setTasks] = useState([]);

  const _getTasks = () => {
    fetch( `${taskmasterBackend}/tasks`, {mode: 'cors', method: 'GET'})
    .then( data => data.json())
    .then( task => setTasks(task))
    .catch( console.error);

    console.log("Tasks:", tasks);
  };

  useEffect(_getTasks, []);

  return (
    <Fragment>
      <header>
        <h1>Task Master</h1>
      </header>
      <main>
        <ul>
          {tasks.map(task => 
          <Task data={task} taskmasterBackend={taskmasterBackend} />
          )}
        </ul>
      </main>

    </Fragment>
  );
}

export default App;
