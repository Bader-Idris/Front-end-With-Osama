import ListHeader from './components/ListHeader';
import ListItem from './components/ListItem';
import { useEffect, useState } from 'react';//both are 🆕
const App = () => {

  const userEmail = 'ania@test.com'//this is to pass it from Front to server
  // to save json res in here
  const [tasks,setTasks] = useState(null);//func value will be assigned to 1st param,
  // we change it using setTask

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => getData, [])//[] is an empty dependency to run once
  console.log(tasks)
  // sortedTask is a new array
  const sortedTask = tasks?.sort((a, b) => new Date (a.date) - new Date (b.date));// == if(tasks) | a - b is for comparison in React

  return (
    <div className="app">
      <ListHeader listName={'🕌 Holiday Tick list'} />{/*listName is 🆕*/}
      {/*🔼 a way to invoke functions in React, even this comment is 🆕 */}
      {sortedTask?.map((task)=> <ListItem key={task.id} task={task}/>)}
    </div>
  );
};

export default App;