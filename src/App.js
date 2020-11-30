import React from 'react';

// info https://pbs.twimg.com/media/EE6EZxyX4AE7_rF?format=jpg&name=small
// Regular function, starts with capital letter
function Greeting() {
  const name = "React"
  return ( // return JSX // Anything between curly braces will be executed as JS 
    <div class="greeting">
      <h1>Hello {name}</h1>
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
