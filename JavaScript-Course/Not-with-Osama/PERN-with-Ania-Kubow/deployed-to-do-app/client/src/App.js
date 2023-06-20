import ListHeader from './components/ListHeader';
import { useEffect } from 'react';// this useEffect is new to me
const App = () => {
  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => getData, [])//[] is an empty dependency to run once
  return (
    <div className="app">
      <ListHeader listName={'🕌 Holiday Tick list'} />{/*listName is new to me*/}
      {/*🔼 a way to invoke functions in React, even this comment is new to me */}
    </div>
  );
};

export default App;

/*

```json
 "dependencies": {
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-async-errors": "^3.1.1",
    "morgan": "~1.9.1",
    "pg": "^8.11.0"
  },"devDependencies": {
    "nodemon": "^2.0.7"
  }
```
*/