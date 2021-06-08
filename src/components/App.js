import React, { useState } from 'react';
import '../stylesheets/App.scss';

const App = () => {
  const [name, setName] = useState('Elena'); // Correcto ✅
  const [counter, setCounter] = useState(0) // Incorrecto ❌
  
  return (
    <div>
      <p>Mi nombre es: {name}</p></div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <main>Escribe aquí tu HTML...</main>
//     </div>
//   );
// }


export default App;
