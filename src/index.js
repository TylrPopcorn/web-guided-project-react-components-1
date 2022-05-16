import React from 'react'
import { render } from 'react-dom'

import Playground from "./components/Playground";

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/

function App(props) {
  return (
    <div className='container'>
      {/** const divElem = document.createElement("div");
       *   divElem.classList.add("container");
       * 
       */}
      <h1>Welcome to React, {props.track}{props.cohort} rockstars!!</h1>
      <p>Instructor: {props.instructor}</p>
      {/** const name = `My name is ${name}` */}
      { props.happy ? <p>I'm soooooo happy!</p> : <p>Monday's are the worst....</p> }
      <Playground cohort='55' />
      {/** Playground(props); */}
    </div>
  )
}

render(
  <App track='Web' instructor='Casey' cohort='55' happy={false} />,
  document.querySelector('#root')
)

/**
 * const props = {
 *   track: "Web",
 *   instructor: "Casey",
 *   cohort: '55'
 * }
 * App(props);
 */