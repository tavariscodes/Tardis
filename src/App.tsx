import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import DivOne from './Divone';
import DivTwo from './Divtwo';
import DivThree from './Divthree';

function App() {
  const tardis = {
    name: 'Time and Relative Dimension in space',
    caps: false
  };
  const [state, setState] = useState(tardis)
  const changeIt = (): void => {
    if (state.caps) {
      setState({
        name: state.name.toLowerCase(),
        caps: false,
      })
    } else {
      setState({
        name: state.name.toUpperCase(),
        caps: true,
      })
    }
  }
  return (
      <div>
        <DivOne tardis={state.name} fn={changeIt}/>
      </div>
     
  );
}

export default App;
