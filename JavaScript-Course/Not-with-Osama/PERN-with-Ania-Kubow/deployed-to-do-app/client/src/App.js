import ListHeader from './components/ListHeader';
const App = () => {
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