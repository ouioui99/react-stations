// DO NOT DELETE

import * as React from 'react'
import React, { useState } from 'react';
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
    const [dogUrl] = useState('ja.reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx');
  return (
    <>
    <header>
    </header>
    <div>
      <h2>Hello, world!</h2>
      
      <img src ={dogUrl}></img>
    </div>
    </>
  )

}
