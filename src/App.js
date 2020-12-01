import React from 'react';

// Data that comes in from the outside of a component is called "props" (properties)
// This can be passed from a parent to a child through JSX attributes
// Props come into function components as the first argument to the function.


// info https://pbs.twimg.com/media/EE6EZxyX4AE7_rF?format=jpg&name=small
//
// Regular function, starts with capital letter
function Greeting(props) { // define the component Greeting
  //const name = "React"
  // now w use props
  return ( // return JSX // Anything between curly braces will be executed as JS 
    <div class="greeting">
      <h1>Hello {props.name}</h1>
    </div>
  )
}

function GreetingApp () {
  return ( // return JSX
  <div>
      <Greeting name="React" /> // Use Greeting component in another component
      <div>
        <Greeting name="Akiko" />
      </div>
    </div>
  )  
}

const App = () => {
  return ( // return JSX
    <div className="container">
      <h1> greetings </h1> 
      <div>
        <Greeting name="Akiko" />
        <GreetingApp />
      </div>
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
