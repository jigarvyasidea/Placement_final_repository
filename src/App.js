import logo from './logo.svg';
import './App.css';
import Tour from './componts/Tour';
import data from './data';
import { useState } from 'react';

const App=()=> {
const [tourse , settours ] = useState(data);



  return (
   <div>
    <h1>Play with Tourist website  </h1>
    <>
    <Tour/>
    </>
   </div>
  );
}

export default App;
