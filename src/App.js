// Import data
import Gallery from './Gallery'
import Sidebar from './Sidebar'
// Import components
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>craigslist</h1>
      <div className="gallery">
        <Sidebar />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
