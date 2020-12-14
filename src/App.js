import React, { useState } from 'react'; // import useState from React
import "./index.css"

// Data that comes in from the outside of a component is called "props" (properties)
// This can be passed from a parent to a child through JSX attributes
// Props come into function components as the first argument to the function.

const DATA = [
  { id: 4, title: 'A N H' },
  { id: 5, title: 'E S B A N H' },
  { id: 6, title: 'R J A N H' }
]


function NormalCSS() {
  return (
    <p className="big-text"> 
    T=Yellow Dandelion
    </p>
  )
}

function InlineStyle() {
  return (
    <p
      style={{
	fontSize: 20,
	  color: "#0000ff"
      }}
    >
      A=Joe Armon-Jones, Georgia Anne Muldrow
    </p> 
  )
}

// info https://pbs.twimg.com/media/EE6EZxyX4AE7_rF?format=jpg&name=small

// Regular function, starts with capital letter
function Greeting(props) { // define the component Greeting
  const [count, setCount] = useState(0) // call useState and pass in a default value
  // useState returns the current value and an update function
  const updateCount = () => {
    // call the update function with the new value
    // never set the value directly
    setCount(count + 1)
  }
  // now w use props
  return ( 
    /* 
    Multi
    line
    comment
    // return JSX // Anything between curly braces will be executed as JS 
    // count will update automatically
    // set onclick attribute of button to custom function
    // use curly braces to set onclick attribute to JS value
    */  
    <div class="greeting">
      <h1>Hello {props.name}</h1>
      <p>you clicked {count} times</p>
      <button onClick={updateCount}>click me</button>
    </div>
  )
}

function GreetingApp () {
  return ( /* A JSX comment // return JSX
    // Use Greeting component in another component
    */
  <div>
      <Greeting name="React" /> 
      <div>
        <Greeting name="Akiko" />
      </div>
    </div>
  )  
}

// const App = () => <MyList items={DATA} /> 

function App() {
  return (
    <div> 
      <NormalCSS />
      <InlineStyle></InlineStyle> 
      <GreetingApp name="R" /> 
      <MyList items={DATA} /> 
    </div> 
  )
}

function MyList(props) {
  return (
    <div> 
      {
	props.items.map(item => {
	  return <p key={item.id}>{item.title}</p> 
	})
      }
    < /div > 
  )
}

export default App;
