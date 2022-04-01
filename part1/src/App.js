import './App.css';
import Description from './Description';

const Mensaje = () => {
  return <h1>Hola Mundo desde Componente</h1>
}

const App = () => {
  const mensaje = 'Hola Mundo desde variable'
  return (
    <div className="App">
      { mensaje }
      <br />
      { mensaje + 'desde JSX' }
      <Mensaje />
      <Description message="Estoy trabajando en un curso de REACT" color="red"/>
    </div>
  );
}

export default App;
