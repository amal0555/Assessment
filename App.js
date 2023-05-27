import Navbar from './components/Navbar';
import Tables from './components/Tables';
import Blog from './components/Blog'; 
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <br/>
      <br/>
      <Routes>
        <Route path='/' element={<Tables/>}/>
        <Route path='/Blog' element={<Blog/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
