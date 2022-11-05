  import { useEffect, useState } from 'react';
import './App.css';
import Countries from './Components/Countries';


 



  function Counter() {
    const [count , setCount]= useState(0)


   const increment = ()=>{ setCount(count + 1)
   }
   const decrement = ()=>{ setCount(count - 1)}


    return (
     
      <div>
                <p>count:{count} </p>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
   
      </div>
    )
   
  }


function ExternalUsers  (){
  const [users , setUsers]= useState([])
  useEffect(() =>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setUsers(data))

  },[])
    return (
      <div>
<h1>ExternalUsers</h1>
<p>Total Users: {users.length}</p>
{
  users.map(user=><User name={user.name} email={user.email}></User>)
}
      </div>
    )
}

function User(props){
  return(
    <div style={{border: '1px solid red', margin: '5px'}}>
      <h3>{props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

function App() {
  return (
   
    <div  className="App">
      <header  className="App-header">
        <Counter></Counter>
        <ExternalUsers></ExternalUsers>
        <Countries></Countries>
      
       

      </header>
    </div>
  );
}



export default App;
