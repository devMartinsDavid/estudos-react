import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';

function App() {
  const  nome = 'Maria'
  return (
    <div className="App">
      <HelloWorld/>
      <div>
        <SayMyName nome="joão"/>
        <SayMyName nome="matheus"/>
        <SayMyName nome={nome} />
      </div>
    </div>
  );
}

export default App;
