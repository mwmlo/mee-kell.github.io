// Styling
import './App.css';
// Pages
import Landing from './pages/Landing';
import Overview from './pages/Overview'
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Overview/>
      <Contact/>
    </div>
  );
}

export default App;
