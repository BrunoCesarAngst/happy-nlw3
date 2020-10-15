import React from 'react';
import ReactDOM from 'react-dom';
// App é um component que retorna XML
import App from './App';

// ReactDOM.render(element, container[, callback])

// ReactDOM.render() controla o conteúdo do nó contêiner que for passado. 
ReactDOM.render(
  // O StrictMode não renderiza nenhum elemento visível na interface. Ele ativa, no entanto, verificações e avisos adicionais para os seus descendentes que são executadas somente em modo de desenvolvimento; elas não impactam na build de produção.
  // element,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // container
  document.getElementById('root')
);
