import React from 'react';

function Greeting() {
  return (
    <div class="greeting">
      <h1>Hello React</h1>
    </div>
  )
}

function GreetingApp () {
  return ( // return JSX
  <div>
      <Greeting /> 
      <div>
        <Greeting />
      </div>
    </div>
  )  
}

const App = () => {
  return ( // return JSX
    <div className="container">
      <h2>CRUD App with Hooks</h2>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
        </div>
      </div>
    </div>
  )
}

export default App;
