import React, {useState} from 'react';
import ValidForm  from './components/ValidForm.js'
import Card from './components/Card.js'
import logo from './logo.svg';
import './App.css';



function App() {
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <ValidForm users={users} setUsers={setUsers}/>
      <div>
        {users.map((item, index) => {
            return <Card key={index} users={item}/>
        })}
      </div>
    </div>
  );
}

export default App;
