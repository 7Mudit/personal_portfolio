import './App.css';
import { NAVBAR } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
    <NAVBAR/>
    <Banner/>
    <Skills/>
    </div>
  );
}

export default App;
